import { Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  public overviewData: object = {
    "monthlyRevenue": 39880,
    "annualRevenue": 158300,
    "events": 14,
    "tickets": 371,
  };

  public lineChartData: object = [
    {
      "name": "Продаж квитків",
      "series": [
        {
          "name": "березень 2022 р.",
          "value": 21440
        },
        {
          "name": "квітень 2022 р.",
          "value": 44860
        },
        {
          "name": "травень 2022 р.",
          "value": 52120
        },
        {
          "name": "червень 2022 р.",
          "value": 39880
        }
      ]
    },
  ];

  public pieChartData: object = [
    {
      "name": "Продаж квитків",
      "value": 44860 + 52120 + 39880
    }
  ]

  public barChartData: object = [
    {
      "name": "Шинель",
      "value": 115
    },
    {
      "name": "Мюнхгаузен",
      "value": 86
    },
    {
      "name": "Українські вечорниці",
      "value": 72
    },
    {
      "name": "За двома зайцями",
      "value": 55
    },
    {
      "name": "Біла ворона",
      "value": 43
    }
  ]
}
