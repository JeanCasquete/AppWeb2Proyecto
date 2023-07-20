import { Component} from '@angular/core';
import {Router } from "@angular/router";
import { ControlService } from "../../services/control.service";
import { User } from 'src/app/models/registro.model';
import { UserLogueadoService } from 'src/app/user-logueado.service';


//Para crear componentes comando : ng g c components/nombre-del-Componente
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router:Router,private servicioBackend: ControlService, private usuarioLogin:UserLogueadoService ){
  }
  navigateToPage(page: string){
    this.router.navigate([page]); 
  }

  usuario: User = {
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    contrasena: '',
    genero: '',
    estado: '',
  };
  RegistrarUsuario() {
    this.servicioBackend.registrarUsuario(this.usuario).subscribe(response => {
      console.log('Usuario Registrado exitosamente:', response);
      window.location.reload();
    });
  }

  login() {
    this.servicioBackend.login(this.usuario.correo, this.usuario.contrasena)
      .subscribe(
        (user: User)  => {
          console.log('Inicio de sesión exitoso:', user);
          this.usuarioLogin.setUsuarioLogueado(user);
          this.router.navigateByUrl('/Inicio/CitasMedicas');
        },
        error => {
          console.error('Error en el inicio de sesión:', error);
          // Manejar el error de inicio de sesión
        }
      );
  }


}
