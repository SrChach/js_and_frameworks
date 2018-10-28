import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatoComponent } from './zapato/zapato.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'angular'}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
