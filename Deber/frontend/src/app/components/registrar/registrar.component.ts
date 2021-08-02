import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaPersona } from 'src/app/interfaces/ListaPersona';
import { ListaSector } from 'src/app/interfaces/ListaSector';
import { ListaZona } from 'src/app/interfaces/ListaZona';
import { ListaListaSectorServiceService } from 'src/app/services/lista-lista-sector-service.service';
import { ListaListaZonaService } from 'src/app/services/lista-lista-zona.service';
import { ListaPersonaService } from 'src/app/services/lista-persona.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  // nombre:string ='alv';
  // algo:any;

  agregarPersona:FormGroup;
  
  accion="Agregar";
  id=0;
  persona:ListaPersona | undefined;

  
  listZonas: ListaZona[]=[];
  listSector: ListaSector[]=[];
  listZonasFiltradas: ListaZona[]=[];
  

  constructor(private fb:FormBuilder,
    private _sectorService: ListaListaSectorServiceService,
    private _zonaService: ListaListaZonaService,
    private _personaService: ListaPersonaService,
    private router: Router,
    private aRouter: ActivatedRoute,
    ) { 
    this.agregarPersona= this.fb.group({
      nombrePersona:['',Validators.required],
      sectorPersona:['',Validators.required],
      sueldoPersona:['',Validators.required],
      zonaPersona:['',Validators.required],
    });

    this.id= +this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getSectores();
    this.getZonas();
    this.getEditar();
  }
  
  getEditar(){
    if(this.id!=0){

      this.accion="Editar";

      this._personaService.getPersona(this.id).subscribe(data=>{
     
        this.persona=data;
        this.agregarPersona.patchValue({
          nombrePersona: data.nom_persona,
          sueldoPersona: data.sueldo,
          fec_nacimiento:data.fec_nacimiento,
          sectorPersona: data.id_sector,
          zonaPersona:data.id_zona,
        })
      },error=>{console.log(error)});
    }
  }
  clear() {
    this.agregarPersona.patchValue({
      nombrePersona: "",
      sueldoPersona: 0,
      sectorPersona: "--",
      zonaPersona:"--",
    })

  }



  
  getSectores(){
    this._sectorService.getListSector().subscribe(
      data =>{
        this.listSector=data;
       
      
      },error=>{Swal.fire({
        title: 'Error al traer los Sectores',
        icon: 'error',
        text:error,
        confirmButtonText: 'Aceptar'
      })});
  }
  
  getZonas(){
    this._zonaService.getListZona().subscribe(
      data =>{
        this.listZonas=data;
        
      },error=>{
        Swal.fire({
        title: 'Error al Traer las Zonas',
        icon: 'error',
        text:error,
        confirmButtonText: 'Aceptar'
      })
    });
   
  }
  getZonasFiltraadas(){
    this.listZonasFiltradas=this.listZonas.filter( zona=> this.agregarPersona.get('sectorPersona')?.value==zona.id_sector); 
      
        return this.listZonasFiltradas;
  }
  
  

  
  agregarEditarComentario(){
    
    if(this.persona==undefined){
      //CREAMOS UNA PERSONA
        console.log(this.agregarPersona.get('bday')?.value);
        const Persona: ListaPersona={
          nom_persona:  this.agregarPersona.get('nombrePersona')?.value,
          sueldo:   this.agregarPersona.get('sueldoPersona')?.value+"",
          fec_nacimiento:  new Date,
          id_sector:  this.agregarPersona.get('sectorPersona')?.value,
          id_zona: this.agregarPersona.get('zonaPersona')?.value,
        }
        console.log(Persona);   
        this._personaService.savePersona(Persona).subscribe(
          data =>{
            Swal.fire({
              title: 'Registrado con exito',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })
          this.router.navigate(['/']);
            
        },error=>{
          Swal.fire({
            title: 'Error al Registrar',
            icon: 'error',
            text:error,
            confirmButtonText: 'Aceptar'
          })
        });
    }else{
        //EDITAMOS A UNA PERSONA
        const Persona: ListaPersona={
          id_persona: this.persona.id_persona,
          nom_persona:  this.agregarPersona.get('nombrePersona')?.value,
          sueldo:   this.agregarPersona.get('sueldoPersona')?.value+"",
          fec_nacimiento:  this.persona.fec_nacimiento,
          id_sector:  this.agregarPersona.get('sectorPersona')?.value,
          id_zona: this.agregarPersona.get('zonaPersona')?.value,
        }

          this._personaService.updatePersona(this.id,Persona).subscribe(
            data=>{

              Swal.fire({
                title: 'Actualizado con exito',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
              this.router.navigate(['/']);



            },error=>{
              Swal.fire({
                title: 'Error al Registrar',
                icon: 'error',
                text:error,
                confirmButtonText: 'Aceptar'
              })
            });
        


    }






  
  }
  
}
