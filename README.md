# Portfólio — Arthur Marques Araújo

Página pessoal em Next.js com currículo em PDF.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Como editar

Todo o conteúdo do site fica em **um único arquivo**: [`src/data/perfil.js`](src/data/perfil.js).
Alterar nome, resumo, experiências, projetos, competências ou contato é só mexer ali — nenhum
componente precisa ser tocado.

O conteúdo do **currículo em PDF** fica separado, no topo de
[`scripts/gerar_curriculo.py`](scripts/gerar_curriculo.py). Depois de editar, regenere:

```bash
python scripts/gerar_curriculo.py
```

O PDF é gravado em `public/curriculo-arthur-marques.pdf`, que é o arquivo servido pelo botão
"Currículo em PDF" na home. Requer `reportlab` (`pip install reportlab`).

> Os dois lugares são independentes de propósito: o site pode ter mais detalhes que o PDF,
> que precisa caber em uma página.

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta Next.js sozinha — é só confirmar. Sem variáveis de ambiente.

## Estrutura

```
src/
  data/perfil.js       ← todo o conteúdo do site
  app/
    layout.js          ← metadata e fontes
    page.js            ← ordem das seções
    globals.css        ← paleta e tokens de tema
  components/          ← uma seção por arquivo
scripts/
  gerar_curriculo.py   ← gera o PDF do currículo
public/
  curriculo-arthur-marques.pdf
```

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · ReportLab (PDF)
