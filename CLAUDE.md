# Projeto Paulicon Corretora - Documentação para Claude

## 📋 Visão Geral
Site institucional da Paulicon Corretora de Seguros, especializada em seguros para transportadoras e cargas há mais de 25 anos.

## 🎨 Identidade Visual

### Cor Principal
- **#000aa7** - Azul royal escuro (cor principal da marca)
- Aplicada em: logos, botões primários, cards de destaque, ícones importantes

### Cores Secundárias
- **Backgrounds claros**: blue-50, amber-50, violet-50, etc (para contraste com ícones)
- **Textos**: gray-700 (corpo), black (títulos), muted-foreground (textos secundários)
- **Hover states**: gray-50 (botões brancos), opacity changes

### Tipografia
- **Títulos (h1-h6)**: Montserrat Bold (700)
  - Letter-spacing: -0.02em
  - Classe utilitária: `.font-heading`
- **Textos**: Open Sans (300-700)
  - Letter-spacing: -0.01em (mais próximo, como nas redes sociais)
  - Classe utilitária: `.font-body`
- Tamanhos: text-6xl (hero), text-4xl (seções), text-2xl (subseções)

## 🏗️ Estrutura do Projeto

### Stack Tecnológico
- **Next.js 15.1.6** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utility-first
- **Radix UI** - Componentes acessíveis (Accordion, Slot)
- **Lucide React** - Ícones

### Estrutura de Pastas
```
/app
  layout.tsx    - Layout principal com metadata
  page.tsx      - Página principal (hero + integração)
  globals.css   - Estilos globais e Tailwind

/components
  /ui           - Componentes reutilizáveis
    accordion.tsx
    button.tsx
    card.tsx
  additional-sections.tsx  - Valores e diferenciais
  continuation-sections.tsx - Equipe, depoimentos, FAQ, serviços, footer

/lib
  utils.ts      - Utilitários (cn para classes)

/public
  placeholder.svg - Imagem placeholder para todas as seções
```

## 📐 Padrões de Layout

### Header
- Sticky top com bg-white
- Logo à esquerda com ícone Shield
- Menu central com 5 items
- Botão CTA à direita (borda com cor principal)

### Seções
1. **Hero Section**
   - Título principal centralizado
   - Descrição da empresa
   - Grid mosaico com 2 cards de métricas + 3 áreas de imagem

2. **Valores (6 cards)**
   - Grid responsivo: 1 col mobile, 2 cols tablet, 3 cols desktop
   - Cards com ícone, título e descrição
   - Backgrounds claros com ícones coloridos

3. **Transformando Proteção**
   - Layout 2 colunas: texto + imagem
   - Lista de benefícios com checkmarks
   - CTA button

4. **Equipe**
   - 2 cards lado a lado (fundadoras)
   - Foto placeholder + nome + cargo + descrição

5. **Depoimentos**
   - Grid de 8 cards (4 colunas no desktop)
   - Avatar + nome + cargo + texto + rating

6. **FAQ**
   - Accordion com 5 perguntas frequentes
   - Layout 2 colunas: texto + accordion

7. **Serviços + CTA**
   - Card gradiente com lista de serviços
   - Mockup de interface do sistema

8. **Footer**
   - 4 colunas com informações de contato
   - Logo + descrição + contatos + serviços + endereço

## 🔧 Comandos Importantes

### Desenvolvimento
```bash
npm run dev     # Servidor de desenvolvimento
npm run build   # Build para produção
npm run start   # Servidor de produção
npm run lint    # Verificar código
```

### Git
```bash
git add .
git commit -m "mensagem"
git push origin main
```

## 📝 Convenções de Código

### Componentes
- Usar function components com TypeScript
- Props tipadas com interfaces
- Componentes reutilizáveis em /components/ui

### Estilização
- Tailwind classes inline
- Para cores customizadas usar style={{ }}
- Usar cn() helper para classes condicionais

### Importações
- Ordem: React/Next → bibliotecas externas → componentes locais → utils

## 🚀 Deploy e Produção

### Requisitos
- Node.js 18+ 
- npm ou yarn
- Variáveis de ambiente (se necessário)

### Build
```bash
npm install --legacy-peer-deps
npm run build
```

## 📞 Informações de Contato (Cliente)

**Paulicon Corretora de Seguros**
- Tel: (11) 4361-7559 | (11) 94725-9307
- Email: atendimento.corretora@paulicon.com.br
- Endereço: Rua Álvaro Alvim, nº 370 - 1º andar - Paulicéia - São Bernardo do Campo - SP

## ⚠️ Observações Importantes

1. **Não usar emojis no código** - apenas em documentação
2. **Sempre usar placeholder.svg** para imagens enquanto não tiver as reais
3. **Manter consistência** na cor #000aa7 em elementos principais
4. **Responsividade** - testar em mobile, tablet e desktop
5. **Acessibilidade** - usar componentes Radix UI quando possível
6. **Performance** - usar Image do Next.js, lazy loading

## 🔄 Próximos Passos Sugeridos

- [ ] Adicionar imagens reais da empresa
- [ ] Implementar formulário de contato funcional
- [ ] Adicionar animações suaves (framer-motion)
- [ ] SEO: meta tags específicas por seção
- [ ] Analytics: Google Analytics ou similar
- [ ] WhatsApp button flutuante
- [ ] Integração com sistema de cotação
- [ ] Página de serviços detalhada
- [ ] Blog/Notícias do setor

## 📚 Referências

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

*Última atualização: Dezembro 2024*