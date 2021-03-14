import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss'],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100,500]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: ['#B320EB', '#F6B816', '#1364D4', '#16F676', ' #D63C1C'],
    },
  ];

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    this.getUserRedesSociales();
  }

  getUserRedesSociales() {
    // this.graficaService.getUserRedesSociales().subscribe((data) => {
    //   console.log({data})
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartLabels= labels
    //   this.doughnutChartData.push(values);
    //   console.log({labels, values})
    // });

    this.graficaService.getUserRedesSociales().subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        // this.doughnutChartData = [values];
        this.doughnutChartData.push(values);
      });
  }
}
