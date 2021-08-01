import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaListaSectorServiceService {

  private MyAppURL='https://localhost:44360/';
  private MyApiURL='api/Sector/';

  constructor(private http: HttpClient ) {}

  getListSector():Observable<any> {
    return this.http.get(this.MyAppURL+this.MyApiURL);
  }
  
  getSector(id: number):Observable<any>{
    return this.http.get(this.MyAppURL+this.MyApiURL+id);
  }
}
