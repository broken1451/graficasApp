import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss'],
})
export class DonaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others'
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100,500]];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: ['#B320EB', '#F6B816', '#1364D4', '#16F676', ' #D63C1C'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
