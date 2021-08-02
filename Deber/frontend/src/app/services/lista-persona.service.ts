import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPersona } from '../interfaces/ListaPersona';

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
  deletePersona(id: number):Observable<any>{
    return this.http.delete(this.MyAppURL+this.MyApiURL+id);
  }
  

  savePersona( persona: ListaPersona):Observable<any>{
    return this.http.post(this.MyAppURL+this.MyApiURL,persona);
  }
  updatePersona(id: number,persona: ListaPersona):Observable<any>{
    return this.http.put(this.MyAppURL+this.MyApiURL+id,persona);
  }
  


}
