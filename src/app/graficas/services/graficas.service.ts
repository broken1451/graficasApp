import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

const URL = environment.url;

export interface RedesSociales {
  labels: string[];
  values: number[];
}

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private httpClient: HttpClient) {}

  // getUserRedesSociales() {
  //   return this.httpClient.get(`${URL}/grafica`);
  // }

  getUserRedesSociales(): Observable<RedesSociales> {
    return this.httpClient.get<RedesSociales>(`${URL}/grafica`).pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return {
          labels,
          values,
        };
      })
    );
  }

  getUserRedesSocialesDonaData(): Observable<RedesSociales> {
    return this.getUserRedesSociales();
  }
}
