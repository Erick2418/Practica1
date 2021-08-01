import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaPersona } from 'src/app/interfaces/ListaPersona';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  // nombre:string ='alv';
  // algo:any;

  agregarPersona:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.agregarPersona= this.fb.group({
      codigoPersona:['',Validators.required],
      nombrePersona:['',Validators.required],
      sectorPersona:['',Validators.required],
      zonaPersona:['',Validators.required],
    });
  }
   
  ngOnInit(): void {
    
  }

  // valorcapturado(){
  //   this.algo= document.getElementById('list')?.onselectionchange;
      
  //     console.log(this.algo);
  // }
  agregar(){
    // console.log(this.agregarPersona);
    // const comentario: ListaPersona={
    //   // id?: number,
    //   codigo: this.agregarPersona.get('codigoPersona')?.value,
    //   nombre:  this.agregarPersona.get('nombrePersona')?.value,
    //   sueldo: 123312,
    //   fechaNacimiento: new Date,
    //   sector:  this.agregarPersona.get('sectorPersona')?.value,
    //   zona: this.agregarPersona.get('zonaPersona')?.value,
    // }
    // console.log(comentario);


  }

}
