# Galeria de Fotos - MORAX

## Estrutura de Arquivos

Adicione suas fotos nesta pasta seguindo as convenções:

### Nomenclatura Sugerida:

- `performance-1.jpg` - Fotos de performances ao vivo
- `studio-1.jpg` - Fotos de estúdio/produção
- `portrait-1.jpg` - Retratos profissionais
- `event-1.jpg` - Fotos de eventos específicos

### Especificações Recomendadas:

- **Formato:** JPG ou WebP
- **Resolução:** Mínimo 1920x1080px
- **Tamanho:** Máximo 500KB por imagem (otimizar antes)
- **Orientação:** Landscape (horizontal) ou Portrait (vertical)

### Ferramentas de Otimização:

- [TinyPNG](https://tinypng.com/) - Compressão online
- [Squoosh](https://squoosh.app/) - Compressão avançada
- ImageOptim (Mac) ou FileOptimizer (Windows)

### Exemplo de Estrutura:

```
assets/gallery/
├── performance-dedge-1.jpg
├── performance-dedge-2.jpg
├── studio-session-1.jpg
├── portrait-official-1.jpg
├── event-spfw-1.jpg
└── ...
```

## Imagens Placeholder

Temporariamente, o site usa placeholders. Substitua por suas fotos reais.

## Como Adicionar Novas Fotos

1. Adicione a imagem nesta pasta
2. Abra `index.html`
3. Copie um dos blocos de galeria existentes
4. Atualize:
   - `src="assets/gallery/SUA-FOTO.jpg"`
   - `alt="Descrição da foto"`
   - `data-category="performance|studio|event|portrait"`

Pronto! A foto aparecerá automaticamente na galeria.
