import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { HomeComponent } from './home/home.component';
import { VagasComponent } from './vagas/vagas.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "faleconosco", component: FaleconoscoComponent},
  {path: "vagas", component: VagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
