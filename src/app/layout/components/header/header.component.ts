import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule],
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
