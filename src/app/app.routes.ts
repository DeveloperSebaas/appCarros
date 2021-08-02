import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CocheComponent } from './coche/coche.component';
import { CochesComponent } from './coches/coches.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  {path: 'coche/:id', component: CocheComponent },
  {path: 'coches', component: CochesComponent },
  {path: 'home', component: HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}, //Ruta no reconocida de redirección al home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
