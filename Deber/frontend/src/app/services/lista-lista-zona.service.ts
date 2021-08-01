import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaListaZonaService {

  private MyAppURL='https://localhost:44360/';
  private MyApiURL='api/Zona/';

  constructor(private http: HttpClient ) {}

  getListZona():Observable<any> {
    return this.http.get(this.MyAppURL+this.MyApiURL);
  }
  
}
