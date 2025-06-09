import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoComponent } from './servico.component';
import { ServicoGridComponent } from './components/servico-grid/servico-grid.component';
import { FiltrosComponent } from '../../shared/filtros/filtros.component';

@NgModule({
  declarations: [ServicoComponent, ServicoGridComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FiltrosComponent],
  exports: [ServicoComponent],
})
export class ServicoModule {}
