# -*- coding: utf-8 -*-
"""
Gera o currículo em PDF.

    python scripts/gerar_curriculo.py

Saída: public/curriculo-arthur-marques.pdf
Para editar o conteúdo, mexa nas constantes lá embaixo (DADOS, FORMACAO, ...).
"""

import os

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

# --------------------------------------------------------------------------- #
# Conteúdo
# --------------------------------------------------------------------------- #

NOME = "ARTHUR MARQUES ARAÚJO"

CONTATO_LINHA_1 = "(83) 99643-9771 &nbsp;·&nbsp; arthurmarquesaraujo@gmail.com &nbsp;·&nbsp; Campina Grande, PB"
CONTATO_LINHA_2 = (
    "GitHub: AMarthur17 &nbsp;·&nbsp; LinkedIn: in/arthur-araujo-039011220 "
    "&nbsp;·&nbsp; Idiomas: Português (nativo), Inglês (intermediário)"
)

RESUMO = (
    "Desenvolvedor mobile com três anos de atuação no NUTES/UEPB, onde desenvolvo o aplicativo "
    "<b>Mulheres de Peito</b> em React Native e TypeScript — uma plataforma de rastreio precoce de "
    "câncer de mama publicada na Google Play Store. Experiência do protótipo no Figma até a entrega "
    "em produção, com foco em usabilidade para um público não técnico."
)

FORMACAO = [
    {
        "titulo": "Bacharelado em Ciência da Computação",
        "cargo": "Universidade Estadual da Paraíba (UEPB)",
        "periodo": "2022.2 – 2027.1 (previsto)",
        "bullets": [
            "Disciplinas: Estruturas de Dados e Algoritmos, Programação Orientada a Objetos, "
            "Engenharia de Software, Gerência de Projetos, Desenvolvimento Web, Computação Gráfica, "
            "Banco de Dados.",
        ],
    },
]

EXPERIENCIA = [
    {
        "titulo": "NUTES — Núcleo de Tecnologias Estratégicas em Saúde (UEPB)",
        "periodo": "2023.2 – 09/2026",
        "cargo": "Desenvolvedor Mobile",
        "bullets": [
            "Desenvolvimento do aplicativo <b>Mulheres de Peito</b> em React Native, TypeScript e Expo, "
            "publicado na Google Play Store.",
            "Plataforma de rastreio precoce de câncer de mama construída pelo NUTES/UEPB em parceria com "
            "a ONG Mulheres de Peito, com patrocínio do Serpro pelo Programa Agora — Tecnologia para "
            "Mulheres Minorizadas.",
            "Aplicativo voltado a mulheres em situação de vulnerabilidade: cadastro de pacientes, relato "
            "de sintomas e questionário de triagem de risco.",
            "Construção de interfaces a partir de protótipos no Figma, com atenção a usabilidade para um "
            "público não técnico.",
            "Integração do aplicativo com as APIs do backend da plataforma.",
        ],
    },
]

PROJETOS = [
    {
        "titulo": "FinançasVilla",
        "subtitulo": "Gestão financeira para restaurante · React Native, Expo, TypeScript, SQLite, Zustand",
        "bullets": [
            "Aplicativo mobile offline desenvolvido para o restaurante Villa da Serra, substituindo o "
            "controle em papel: faturamento diário por forma de pagamento, despesas por categoria e folha "
            "de funcionários com vales e adiantamentos.",
            "Notificações locais agendadas por funcionário, gráficos de faturamento por período, backup "
            "versionado com validação de integridade e exportação de relatórios em CSV.",
            "111 testes automatizados em 12 suítes com Jest, executados contra um banco SQLite real em "
            "memória.",
        ],
    },
    {
        "titulo": "RH-Master",
        "subtitulo": "Sistema de gestão de recursos humanos · JavaScript",
        "bullets": [
            "Aplicação web dividida em frontend e backend para automatizar processos de RH. Projeto da "
            "disciplina de Gerência de Projetos.",
        ],
    },
    {
        "titulo": "UberPb",
        "subtitulo": "Repositório de usuários com persistência local · Java 21, Maven, Jackson, JUnit",
        "bullets": [
            "Sistema de gestão de usuários (passageiros e motoristas) com CRUD completo, busca por CPF e "
            "e-mail, validação de duplicatas e geração automática de IDs.",
            "Implementação de thread-safety com locks de leitura/escrita e cobertura por testes unitários.",
            "Projeto da disciplina de Engenharia de Software II.",
        ],
    },
]

COMPETENCIAS = [
    ("Mobile", "React Native, Expo, Expo Router, SQLite local, publicação na Google Play Store"),
    ("Linguagens", "TypeScript, JavaScript, Java"),
    ("Web", "React, Next.js, HTML, CSS, Tailwind CSS"),
    ("Estado e dados", "Zustand, SQLite, modelagem de banco relacional"),
    ("Testes", "Jest, React Native Testing Library, JUnit"),
    ("Design e Produto", "Figma, prototipação, usabilidade"),
    ("Ferramentas", "Git, GitHub, Maven"),
    (
        "Conceitos",
        "APIs REST, Programação Orientada a Objetos, Estruturas de Dados, "
        "Engenharia de Software, Gerência de Projetos",
    ),
]

# --------------------------------------------------------------------------- #
# Estilos
# --------------------------------------------------------------------------- #

TINTA = colors.HexColor("#111111")
CINZA = colors.HexColor("#444444")
LINHA = colors.HexColor("#999999")

st_nome = ParagraphStyle(
    "nome",
    fontName="Helvetica-Bold",
    fontSize=17,
    leading=20,
    textColor=TINTA,
    spaceAfter=5,
)

st_contato = ParagraphStyle(
    "contato",
    fontName="Helvetica",
    fontSize=8.6,
    leading=12,
    textColor=CINZA,
)

st_resumo = ParagraphStyle(
    "resumo",
    fontName="Helvetica",
    fontSize=8.9,
    leading=12.4,
    textColor=TINTA,
    alignment=TA_JUSTIFY,
)

st_secao = ParagraphStyle(
    "secao",
    fontName="Helvetica-Bold",
    fontSize=9.6,
    leading=11,
    textColor=TINTA,
)

st_titulo = ParagraphStyle(
    "titulo",
    fontName="Helvetica-Bold",
    fontSize=9.4,
    leading=12,
    textColor=TINTA,
)

st_periodo = ParagraphStyle(
    "periodo",
    fontName="Helvetica",
    fontSize=8.6,
    leading=12,
    textColor=CINZA,
    alignment=2,  # direita
)

st_cargo = ParagraphStyle(
    "cargo",
    fontName="Helvetica-Oblique",
    fontSize=8.9,
    leading=11.5,
    textColor=CINZA,
)

st_bullet = ParagraphStyle(
    "bullet",
    fontName="Helvetica",
    fontSize=8.7,
    leading=12,
    textColor=TINTA,
    leftIndent=9,
    bulletIndent=0,
    alignment=TA_JUSTIFY,
    spaceAfter=1.4,
)

st_comp_area = ParagraphStyle(
    "comp_area",
    fontName="Helvetica-Bold",
    fontSize=8.7,
    leading=12,
    textColor=TINTA,
)

st_comp_itens = ParagraphStyle(
    "comp_itens",
    fontName="Helvetica",
    fontSize=8.7,
    leading=12,
    textColor=TINTA,
)

LARGURA_UTIL = A4[0] - 3.2 * cm


# --------------------------------------------------------------------------- #
# Blocos
# --------------------------------------------------------------------------- #


def secao(titulo):
    """Cabeçalho de seção com régua embaixo."""
    return [
        Spacer(1, 9),
        Paragraph(titulo, st_secao),
        Spacer(1, 2.5),
        HRFlowable(width="100%", thickness=0.6, color=LINHA, spaceAfter=5),
    ]


def linha_titulo(titulo, periodo):
    """Título à esquerda, período à direita, na mesma linha."""
    tabela = Table(
        [[Paragraph(titulo, st_titulo), Paragraph(periodo, st_periodo)]],
        colWidths=[LARGURA_UTIL * 0.72, LARGURA_UTIL * 0.28],
    )
    tabela.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return tabela


def bullets(itens):
    return [Paragraph(t, st_bullet, bulletText="·") for t in itens]


def bloco_entrada(entrada):
    """Uma entrada de formação/experiência, mantida junta na mesma página."""
    partes = [linha_titulo(entrada["titulo"], entrada.get("periodo", ""))]
    if entrada.get("cargo"):
        partes += [Spacer(1, 1), Paragraph(entrada["cargo"], st_cargo)]
    partes.append(Spacer(1, 3))
    partes += bullets(entrada["bullets"])
    partes.append(Spacer(1, 6))
    return KeepTogether(partes)


def bloco_projeto(projeto):
    partes = [
        Paragraph(projeto["titulo"], st_titulo),
        Spacer(1, 1),
        Paragraph(projeto["subtitulo"], st_cargo),
        Spacer(1, 3),
    ]
    partes += bullets(projeto["bullets"])
    partes.append(Spacer(1, 6))
    return KeepTogether(partes)


def tabela_competencias():
    linhas = [
        [Paragraph(area, st_comp_area), Paragraph(itens, st_comp_itens)]
        for area, itens in COMPETENCIAS
    ]
    tabela = Table(linhas, colWidths=[3.3 * cm, LARGURA_UTIL - 3.3 * cm])
    tabela.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        )
    )
    return tabela


# --------------------------------------------------------------------------- #
# Montagem
# --------------------------------------------------------------------------- #


def construir(caminho):
    doc = BaseDocTemplate(
        caminho,
        pagesize=A4,
        leftMargin=1.6 * cm,
        rightMargin=1.6 * cm,
        topMargin=1.4 * cm,
        bottomMargin=1.3 * cm,
        title=f"Currículo — {NOME.title()}",
        author=NOME.title(),
        subject="Currículo",
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame])])

    story = [
        Paragraph(NOME, st_nome),
        Paragraph(CONTATO_LINHA_1, st_contato),
        Paragraph(CONTATO_LINHA_2, st_contato),
        Spacer(1, 7),
        HRFlowable(width="100%", thickness=1.1, color=TINTA, spaceAfter=7),
        Paragraph(RESUMO, st_resumo),
    ]

    story += secao("FORMAÇÃO")
    story += [bloco_entrada(f) for f in FORMACAO]

    story += secao("EXPERIÊNCIA")
    story += [bloco_entrada(e) for e in EXPERIENCIA]

    story += secao("PROJETOS")
    story += [bloco_projeto(p) for p in PROJETOS]

    story += secao("COMPETÊNCIAS")
    story.append(tabela_competencias())

    doc.build(story)


if __name__ == "__main__":
    raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    destino = os.path.join(raiz, "public", "curriculo-arthur-marques.pdf")
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    construir(destino)
    print(f"PDF gerado em: {destino}")
