import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },
  { path: 'Inicio', component: InicioComponent },
  { path: 'pedidos', component: PedidoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'acercade', component: AcercadeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }