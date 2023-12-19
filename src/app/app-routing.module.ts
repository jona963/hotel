import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanzasComponent } from './componentes/finanzas/finanzas/finanzas.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HistorialPagosComponent } from './componentes/historial-pagos/historial-pagos.component';
import { ComunicadoComponent } from './componentes/comunicados/comunicado/comunicado.component';
import { ComunicaFormComponent } from './componentes/comunicados/comunica-form/comunica-form.component';
import { TareaAdminComponent } from './componentes/tareas/tarea-admin/tarea-admin.component';
import { RegistroAdminComponent } from './componentes/registro-admin/registro-admin.component';
import { TareaUsuarioComponent } from './componentes/tareas/tarea-usuario/tarea-usuario.component';


const routes: Routes = [
  { path: 'tablaTarea', component: TareaUsuarioComponent },
  { path: 'adminReg', component: RegistroAdminComponent },
  { path: 'tareas', component: TareaAdminComponent },
  { path: 'pagos', component: HistorialPagosComponent },
  { path: 'finanzas', component: FinanzasComponent },
  { path: 'main', component: MainComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comunica', component: ComunicadoComponent },
  { path: 'formComunica', component: ComunicaFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
