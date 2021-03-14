import { Component, OnInit } from '@angular/core';

interface Menu {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu: Menu[] = [
    {
      ruta: '/graficas/barra',
      texto: 'Barras',
    },
    {
      ruta: '/graficas/barra-doble',
      texto: 'Barra-Doble',
    },
    {
      ruta: '/graficas/dona',
      texto: 'Dona',
    },
    {
      ruta: '/graficas/dona-http',
      texto: 'Dona-http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
