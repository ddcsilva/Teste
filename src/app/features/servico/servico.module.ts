import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoGridComponent } from './components/servico-grid/servico-grid.component';

@NgModule({
  declarations: [ServicoComponent, ServicoGridComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ServicoComponent],
})
export class ServicoModule {}
