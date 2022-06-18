import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent, CountdownStatus } from 'ngx-countdown';

@Component({
  selector: 'shared-countdown-fraction',
  templateUrl: './countdown-fraction.component.html',
  styleUrls: ['./countdown-fraction.component.scss'],
})
export class CountdownFractionComponent implements OnChanges {

  @Input() public total: number = 0;

  @Output() countdownFinish = new EventEmitter<boolean>();

  public countdownConfig: CountdownConfig;

  public remainingFraction: number = 100;

  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent | undefined;

  constructor() {
    this.countdownConfig = this.getCountdownConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countdownConfig = this.getCountdownConfig();
  }

  start(): void {
    this.countdown?.begin();
  }

  handleEvent($event: CountdownEvent): void {
    const secondsLeft = $event.left / 1000;
    this.remainingFraction = secondsLeft / this.total;
    if ($event.status === CountdownStatus.done) {
      this.countdownFinish.emit(true);
    }
  }

  private getCountdownConfig(): CountdownConfig {
    return {
      leftTime: this.total,
      format: 'mm:ss',
      demand: true,
      notify: 0,
    };
  }
}
