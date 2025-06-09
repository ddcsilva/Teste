import { Component } from '@angular/core';
import { FiltroConfig } from '../../shared/filtros/filtros.component';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent {
  // Configuração do filtro - exemplo customizando para não mostrar o botão Exportar
  filtroConfig: FiltroConfig = {
    mostrarPesquisar: true,
    mostrarIncluir: true,
    mostrarLimpar: true,
    mostrarExportar: false, // Esta tela não terá exportar
    labelPesquisar: 'Buscar Serviços',
    labelIncluir: 'Novo Serviço',
  };

  // Objeto para armazenar os valores dos filtros
  filtros = {
    nome: '',
    categoria: '',
    status: '',
  };

  // Métodos para tratar os eventos dos botões
  onPesquisar() {
    console.log('Pesquisando com filtros:', this.filtros);
    // Aqui você implementaria a lógica de pesquisa
  }

  onIncluir() {
    console.log('Incluindo novo serviço');
    // Aqui você implementaria a navegação para tela de cadastro
  }

  onLimpar() {
    console.log('Limpando filtros');
    this.filtros = {
      nome: '',
      categoria: '',
      status: '',
    };
  }

  onExportar() {
    console.log('Exportando dados');
    // Este método não será chamado neste exemplo pois o botão não aparece
  }
}
