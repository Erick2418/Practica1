import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ListaPersonaService } from 'src/app/services/lista-persona.service';
import { ListaPersona } from '../../interfaces/ListaPersona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  // @Input() sectorReci:string = 'sin sector';
    @Input() zona:number = 0;
    @Input() sector:number = 0; // con estos 2 datos haces consulta a la base de datos!

    

  listPersonas: ListaPersona[]=[]
 


  constructor(private _personaService: ListaPersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getPersonas();
    console.log(changes);
  }
  getPersonas(){
    this._personaService.getListPersonas().subscribe(
      data =>{
        this.listPersonas=data;
        const FiltroEdad =  this.listPersonas.filter(persona =>{ 
          return (this.zona==persona.id_zona && this.sector==persona.id_sector)? true:false;
        });
        this.listPersonas=FiltroEdad;
      },error=>{console.log(error)});

  }

  
  
}
