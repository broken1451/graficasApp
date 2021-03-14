import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.scss'],
})
export class BarrasDobleComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2021', '2022', '2023', '2024', '2025'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
  ];

  public proveedoresData: ChartDataSets[] = [
    {
      data: [150, 200, 300, 400, 500],
      label: 'Carros',
      backgroundColor: 'blue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
