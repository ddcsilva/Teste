import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() manipularMenu = new EventEmitter<void>();

  readonly titulo = signal<string>('Sistema Teste');

  atualizarTitulo(titulo: string): void {
    this.titulo.set(titulo);
  }

  aoClicarMenu(): void {
    this.manipularMenu.emit();
  }
}
