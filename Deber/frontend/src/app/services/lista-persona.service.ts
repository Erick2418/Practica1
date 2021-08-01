import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonaService {


  private MyAppURL='https://localhost:44360/';
  private MyApiURL='api/Persona/';


  constructor(private http: HttpClient ) {}

  getListPersonas():Observable<any> {
    return this.http.get(this.MyAppURL+this.MyApiURL);
  }
  getPersona(id: number):Observable<any>{
    return this.http.get(this.MyAppURL+this.MyApiURL+id);
  }
}
