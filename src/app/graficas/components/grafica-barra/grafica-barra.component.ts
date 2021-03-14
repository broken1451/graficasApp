import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss']
})
export class GraficaBarraComponent implements OnInit {
  @Input() barChartOptions!: ChartOptions;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartType!: ChartType;
  @Input() barChartLegend!: boolean;
  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartDataSets[] = [ ];

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal == true) {
      this.barChartType = 'horizontalBar'
    } else {
      this.barChartType = 'bar'
    }
  }

}
