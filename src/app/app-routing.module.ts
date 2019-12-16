import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OutletComponent} from './outlet/outlet.component';
import {SobreComponent} from './sobre/sobre.component';
import {ContatoComponent} from './contato/contato.component';



const routes: Routes = [
  {path: 'outlet', component: OutletComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
