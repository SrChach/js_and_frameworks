import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//  Import del router
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';

// Pipes
import { CalculadoraPipe } from './pipes/calculadora.pipe'

//  Imports de clases hechas por nosotros
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatoComponent } from './zapato/zapato.component';
import { HomeComponent } from './home/home.component'
import { CursoComponent } from './curso/curso.component';
import { PeticionComponent } from './peticion/peticion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListacontactosComponent } from './listacontactos/listacontactos.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { BlancoComponent } from './blanco/blanco.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatoComponent,
    HomeComponent,
    CursoComponent,
    PeticionComponent,
    CalculadoraPipe,
    ContactoComponent,
    ListacontactosComponent,
    ArchivosComponent,
    HijoComponent,
    PadreComponent,
    BlancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
