import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ControlService } from "../../services/control.service";
import { UserLogueadoService } from 'src/app/user-logueado.service';
import { User } from 'src/app/models/registro.model';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  usuarioLogueado: User | null;
  constructor(private router:Router,public servicioBackend: ControlService, private usuarioLogin:UserLogueadoService){
    this.usuarioLogueado =null;
  }
  navigateToPage(page: string){
    this.router.navigate([page]);
  }
  
  ngOnInit(): void {
    this.usuarioLogueado = this.usuarioLogin.getUsuarioLogueado();
  }
  logout() {
    // Lógica de cierre de sesión
    this.servicioBackend.logout();
    this.router.navigateByUrl('/Login');
  }
}
