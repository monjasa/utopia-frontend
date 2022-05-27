import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {

  constructor(private router: Router) {
  }

  redirectToSibling(path: string, route: ActivatedRoute): void {
    void this.router.navigate([path], { relativeTo: route.parent });
  }
}
