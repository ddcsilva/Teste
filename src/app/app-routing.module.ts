import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/containers/main-layout/main-layout.component';
import { HomeComponent } from './layout/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'servico',
        loadChildren: () =>
          import('./features/servico/servico-routing.module').then(m => m.ServicoRoutingModule),
        title: 'Serviços',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
