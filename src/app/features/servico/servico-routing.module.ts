import { Routes } from '@angular/router';
import { ServicoComponent } from './servico.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServicoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoRoutingModule {}
