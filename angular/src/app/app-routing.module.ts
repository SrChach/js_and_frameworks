import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//	Importar componentes
import { ZapatoComponent } from './zapato/zapato.component'
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { CursoComponent } from './curso/curso.component'
import { HomeComponent } from './home/home.component'

//	Array de configuracion de las rutas
const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'zapatos', component: ZapatoComponent},
	{ path: 'videojuegos', component: VideojuegoComponent},
	{ path: 'cursos', component: CursoComponent},
	{ path: '**', component: HomeComponent }
];

//	Exportar el modulo del router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const appRoutingProviders: any[] = []