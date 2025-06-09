import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FiltroConfig {
  mostrarPesquisar?: boolean;
  mostrarIncluir?: boolean;
  mostrarLimpar?: boolean;
  mostrarExportar?: boolean;
  labelPesquisar?: string;
  labelIncluir?: string;
  labelLimpar?: string;
  labelExportar?: string;
}

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FiltrosComponent {
  @Input() config: FiltroConfig = {
    mostrarPesquisar: true,
    mostrarIncluir: true,
    mostrarLimpar: true,
    mostrarExportar: true,
    labelPesquisar: 'Pesquisar',
    labelIncluir: 'Incluir',
    labelLimpar: 'Limpar',
    labelExportar: 'Exportar',
  };

  @Output() pesquisar = new EventEmitter<void>();
  @Output() incluir = new EventEmitter<void>();
  @Output() limpar = new EventEmitter<void>();
  @Output() exportar = new EventEmitter<void>();

  onPesquisar() {
    this.pesquisar.emit();
  }

  onIncluir() {
    this.incluir.emit();
  }

  onLimpar() {
    this.limpar.emit();
  }

  onExportar() {
    this.exportar.emit();
  }
}
