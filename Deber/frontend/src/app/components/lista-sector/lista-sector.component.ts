import { Component, OnInit } from '@angular/core';
import { ListaPersona } from '../../interfaces/ListaPersona';

@Component({
  selector: 'app-lista-sector',
  templateUrl: './lista-sector.component.html',
  styleUrls: ['./lista-sector.component.css']
})
export class ListaSectorComponent implements OnInit {

 
  // sector:string= 'Sector Usuario';
  // zona:string= 'Zona Usuario';
  zonaSelect: string = "Zona1";
  sectorSelect: string = "Sector1";
  

  listPersonas: ListaPersona[]=[
    { codigo:"001",nombre: 'Erick', sueldo:1500,fechaNacimiento: new Date,sector:'norte',zona:'fortin'},
    { codigo:"003",nombre: 'Joel', sueldo:4500,fechaNacimiento: new Date,sector:'norte',zona:'perimetral'},
    { codigo:"004",nombre: 'Limon', sueldo:2500,fechaNacimiento: new Date,sector:'norte',zona:'mapasingue'},
    { codigo:"004",nombre: 'Limon', sueldo:2500,fechaNacimiento: new Date,sector:'sur',zona:'pradera'},
    { codigo:"004",nombre: 'Limon', sueldo:2500,fechaNacimiento: new Date,sector:'barcelona',zona:'amarillo'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  cambiarNombre(sector: string,zona: string){
    // console.log(sector+"-"+zona);
    this.zonaSelect=zona;
    this.sectorSelect=sector;

  }


}
