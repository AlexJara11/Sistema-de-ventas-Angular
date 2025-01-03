import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsettings } from '../Settings/appsettings';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlApi = appsettings.apiUrl + 'Categoria/';
  constructor(private http:HttpClient) { }
  lista():Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }
}
