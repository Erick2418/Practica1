import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ListaPersonaService } from 'src/app/services/lista-persona.service';
import Swal from 'sweetalert2';
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
 


  constructor(private _personaService: ListaPersonaService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getPersonas();
   
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
  deletePersona(id: any){
    console.log(id);
    this._personaService.deletePersona(id).subscribe(
      data =>{
        Swal.fire({
          title: 'Eliminado con exito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        this.getPersonas();
        
               
      },error=>{console.log(error)});

  }
  
  
}
