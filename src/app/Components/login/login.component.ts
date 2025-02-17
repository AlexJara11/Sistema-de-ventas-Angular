import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../Interfaces/login';
import { UsuarioService } from '../../Services/usuario.service';
import { UtilidadService } from '../../Reutilizable/utilidad.service';
import { SharedModule } from '../../Reutilizable/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formularioLogin: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService,
    private _utilidadService: UtilidadService
  ){
    this.formularioLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  iniciarSesion(){
    this.mostrarLoading = true;
    const request: Login ={
      correo: this.formularioLogin.value.email,
      clave: this.formularioLogin.value.password
    }
    this._usuarioService.iniciarSesion(request).subscribe({
      next: (data) => {
        if(data.status){
          this._utilidadService.guardarSesionUsuario(data.value);
          this.router.navigate(["pages"]);
        }else
          this._utilidadService.mostrarAlerta("No se encontraron coincidencias", "Opps!");
      },
      complete : () => {
        this.mostrarLoading = false;
      },
      error : () =>{
        this._utilidadService.mostrarAlerta("Hubo un error", "Opps!");
      }
    })
  }

}
