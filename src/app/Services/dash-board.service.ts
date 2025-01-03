import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsettings } from '../Settings/appsettings';
import { ResponseApi } from '../Interfaces/response-api';
@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  private urlApi = appsettings.apiUrl + 'DashBoard/';
  constructor(private http:HttpClient) { }
  resumen():Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Resumen`)
  }
}
