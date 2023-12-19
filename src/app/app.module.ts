import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegationComponent } from './navegation/navegation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FinanzasComponent } from './componentes/finanzas/finanzas/finanzas.component';
import { EgresosComponent } from './componentes/finanzas/egresos/egresos.component';
import { IngresosComponent } from './componentes/finanzas/ingresos/ingresos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Auth, getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddItemComponent } from './componentes/finanzas/add-item/add-item.component';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './componentes/register/register.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { HistorialPagosComponent } from './componentes/historial-pagos/historial-pagos.component';
import { ComunicadoComponent } from './componentes/comunicados/comunicado/comunicado.component';
import { ComunicaFormComponent } from './componentes/comunicados/comunica-form/comunica-form.component';
import { TareaFormComponent } from './componentes/tareas/tarea-form/tarea-form.component';
import { TareaAdminComponent } from './componentes/tareas/tarea-admin/tarea-admin.component';
import { TareaUsuarioComponent } from './componentes/tareas/tarea-usuario/tarea-usuario.component';
import { RegistroAdminComponent } from './componentes/registro-admin/registro-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    DashboardComponent,
    FinanzasComponent,
    EgresosComponent,
    IngresosComponent,
    AddItemComponent,
    RegisterComponent,
    MainComponent,
    LoginComponent,
    HistorialPagosComponent,
    ComunicadoComponent,
    ComunicaFormComponent,
    TareaFormComponent,
    TareaAdminComponent,
    TareaUsuarioComponent,
    RegistroAdminComponent,
  ],
  imports: [
    
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireModule,
    AngularFirestoreModule,
    HttpClientModule,
    

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
