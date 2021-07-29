import { Component, Input, OnInit } from '@angular/core';
import { ListaPersona } from '../../interfaces/ListaPersona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  // @Input() sectorReci:string = 'sin sector';
    @Input() zona:string = 'sin zona';
    @Input() sector:string = 'con zona'; // con estos 2 datos haces consulta a la base de datos!



  listPersonas: ListaPersona[]=[
    { codigo:"001",nombre: 'Erick', sueldo:1500,fechaNacimiento: new Date,sector:'norte',zona:'fortin'},
    { codigo:"002",nombre: 'Fernando', sueldo:2500,fechaNacimiento: new Date,sector:'norte',zona:'mapasingue'}
  ]



  constructor() { }

  ngOnInit(): void {

  }

}
