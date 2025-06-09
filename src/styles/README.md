# Estrutura de Estilos

Organização modular dos estilos SCSS da aplicação.

## Arquivos

### `main.scss`
Arquivo principal que orquestra todos os outros imports na ordem correta.

### `_reset.scss`
- Reset CSS básico
- Normalização de elementos HTML
- Box-sizing, margens, padding

### `_base.scss`
- Estilos fundamentais da aplicação
- Typography (fonte do body)
- Cores de fundo
- Estilos básicos para links e botões

### `_utilities.scss`
- Classes utilitárias reutilizáveis
- `.page-container`, `.page-card`, `.page-title`
- Classes que podem ser usadas em qualquer componente

### `_components.scss`
- Componentes específicos reutilizáveis
- `.features-grid`, `.feature-item`
- Componentes que têm estrutura própria

## Como usar

Para adicionar novos estilos:

1. **Reset/Normalização** → `_reset.scss`
2. **Estilos base globais** → `_base.scss`
3. **Classes utilitárias** → `_utilities.scss`
4. **Componentes reutilizáveis** → `_components.scss`

O `main.scss` importa tudo na ordem correta automaticamente.
