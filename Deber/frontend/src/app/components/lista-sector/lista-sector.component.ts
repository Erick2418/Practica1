import { Component, OnInit } from '@angular/core';
import { ListaSector } from 'src/app/interfaces/ListaSector';
import { ListaZona } from 'src/app/interfaces/ListaZona';
import { ListaListaSectorServiceService } from 'src/app/services/lista-lista-sector-service.service';
import { ListaListaZonaService } from 'src/app/services/lista-lista-zona.service';
import { ListaPersonaService } from 'src/app/services/lista-persona.service';
import { ListaPersona } from '../../interfaces/ListaPersona';

@Component({
  selector: 'app-lista-sector',
  templateUrl: './lista-sector.component.html',
  styleUrls: ['./lista-sector.component.css']
})
export class ListaSectorComponent implements OnInit {

  // sector:string= 'Sector Usuario';
  // zona:string= 'Zona Usuario';
  fecha_edad:number=0;
  zonaSelect: number = 0;
  sectorSelect: number = 0;
  
  sectorNombre:string="";

  listZonas: ListaZona[]=[];
  listPersonas: ListaPersona[]=[];
  listSector: ListaSector[]=[];
  

  constructor( private _personaService: ListaPersonaService,private _zonaService: ListaListaZonaService,private _sectorService: ListaListaSectorServiceService) { }

  ngOnInit(): void {
    this.getZonas();
    this.getSectores();
    this.getPersonas();
  }
  getPersonas(){
    this._personaService.getListPersonas().subscribe(
      data =>{
        this.listPersonas=data;
        const FiltroEdad =  this.listPersonas.filter(persona =>{ 
          this.ageCalculator(persona.fec_nacimiento);
          return this.fecha_edad<65? true: false;
        });
        this.listPersonas=FiltroEdad;
      },error=>{console.log(error)});
            
  }

  cambiarNombre(sector: number,zona: number){
    
    this.zonaSelect=zona;
    this.sectorSelect=sector;

  }


   getZonas(){
    this._zonaService.getListZona().subscribe(
      data =>{
        this.listZonas=data;
        
      },error=>{console.log(error)});
   
  }
  
  getSectores(){
    this._sectorService.getListSector().subscribe(
      data =>{
        this.listSector=data;
       
       
      },error=>{console.log(error)});
  }

  ageCalculator(age:Date){
    if(age){
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.fecha_edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
}
