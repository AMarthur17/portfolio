// Todos os seus dados ficam neste arquivo.
// Para atualizar o site, edite aqui — nenhum componente precisa ser tocado.

export const perfil = {
  nome: "Arthur Marques Araújo",
  titulo: "Desenvolvedor Mobile",
  subtitulo: "React Native · TypeScript · Expo",
  local: "Campina Grande, Paraíba",
  resumo:
    "Estudante de Ciência da Computação na UEPB e desenvolvedor mobile no NUTES, " +
    "onde atuo desde 2023 no aplicativo Mulheres de Peito — uma plataforma de rastreio " +
    "precoce de câncer de mama publicada na Google Play Store. Trabalho com React Native, " +
    "TypeScript e Expo, do protótipo no Figma até a entrega em produção.",
};

export const contato = {
  email: "arthurmarquesaraujo@gmail.com",
  telefone: "(83) 99643-9771",
  telefoneLink: "+5583996439771",
  github: "https://github.com/AMarthur17",
  githubUser: "AMarthur17",
  linkedin: "https://www.linkedin.com/in/arthur-araujo-039011220/",
  linkedinUser: "arthur-araujo-039011220",
};

export const formacao = [
  {
    curso: "Bacharelado em Ciência da Computação",
    instituicao: "Universidade Estadual da Paraíba (UEPB)",
    periodo: "2022.2 — 2027.1 (previsto)",
    detalhes: [
      "Disciplinas: Estruturas de Dados e Algoritmos, Programação Orientada a Objetos, Engenharia de Software, Gerência de Projetos, Desenvolvimento Web, Computação Gráfica, Banco de Dados.",
    ],
  },
];

export const experiencias = [
  {
    empresa: "NUTES — Núcleo de Tecnologias Estratégicas em Saúde",
    vinculo: "Universidade Estadual da Paraíba (UEPB)",
    cargo: "Desenvolvedor Mobile",
    periodo: "2023.2 — 09/2026",
    local: "Campina Grande, PB",
    projeto: "Mulheres de Peito",
    projetoLink: "https://play.google.com/store/apps/details?id=com.anonymous.pm",
    bullets: [
      "Desenvolvimento do aplicativo Mulheres de Peito em React Native, TypeScript e Expo, publicado na Google Play Store.",
      "Plataforma de rastreio precoce de câncer de mama construída pelo NUTES/UEPB em parceria com a ONG Mulheres de Peito, com patrocínio do Serpro pelo Programa Agora — Tecnologia para Mulheres Minorizadas.",
      "Aplicativo voltado a mulheres em situação de vulnerabilidade: cadastro de pacientes, relato de sintomas e questionário de triagem de risco.",
      "Construção de interfaces a partir de protótipos no Figma, com atenção a usabilidade para um público não técnico.",
      "Integração do app com as APIs do backend da plataforma.",
    ],
  },
];

export const projetos = [
  {
    nome: "FinançasVilla",
    tagline: "Gestão financeira para um restaurante",
    descricao:
      "Aplicativo mobile offline desenvolvido para o restaurante Villa da Serra, substituindo o controle em papel. Lançamento diário de faturamento por forma de pagamento, despesas por categoria, folha de funcionários com vales e notificações de pagamento, gráficos por período, backup versionado e exportação em CSV. Coberto por 111 testes automatizados.",
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand", "Jest"],
    repo: "https://github.com/AMarthur17/FinancasVilla",
    destaque: true,
  },
  {
    nome: "RH-Master",
    tagline: "Sistema de gestão de recursos humanos",
    descricao:
      "Aplicação web dividida em frontend e backend para automatizar e otimizar processos de RH, com foco em eficiência e precisão na gestão de colaboradores. Projeto acadêmico da disciplina de Gerência de Projetos.",
    stack: ["JavaScript", "Frontend + Backend"],
    repo: "https://github.com/AMarthur17/RH-Master",
    destaque: true,
  },
  {
    nome: "UberPb",
    tagline: "Repositório de usuários com persistência em JSON",
    descricao:
      "Projeto da disciplina de Engenharia de Software II. Sistema de gestão de usuários (passageiros e motoristas) com CRUD completo, busca por CPF e e-mail, validação de duplicatas e geração automática de IDs. Implementa thread-safety com locks de leitura/escrita e cobertura por testes unitários.",
    stack: ["Java 21", "Maven", "Jackson", "JUnit"],
    repo: "https://github.com/AMarthur17/UberPb-",
    destaque: true,
  },
  {
    nome: "Computação Gráfica",
    tagline: "Algoritmos gráficos implementados do zero",
    descricao:
      "Coleção de implementações em JavaScript e Canvas: curvas de Bézier, algoritmo do ponto médio para circunferências e elipses, seções cônicas, sistemas de coordenadas, transformações 2D e 3D e processamento de imagens.",
    stack: ["JavaScript", "Canvas", "HTML/CSS"],
    repo: "https://github.com/AMarthur17/Computacao-Grafica",
    destaque: true,
  },
];

export const competencias = [
  {
    area: "Mobile",
    itens: [
      "React Native",
      "Expo",
      "Expo Router",
      "SQLite local",
      "Publicação na Google Play Store",
    ],
  },
  {
    area: "Linguagens",
    itens: ["TypeScript", "JavaScript", "Java"],
  },
  {
    area: "Web",
    itens: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    area: "Estado & dados",
    itens: ["Zustand", "SQLite", "Modelagem relacional"],
  },
  {
    area: "Testes",
    itens: ["Jest", "React Native Testing Library", "JUnit"],
  },
  {
    area: "Design & Produto",
    itens: ["Figma", "Prototipação", "Usabilidade"],
  },
  {
    area: "Ferramentas",
    itens: ["Git", "GitHub", "Maven"],
  },
  {
    area: "Conceitos",
    itens: [
      "APIs REST",
      "Programação Orientada a Objetos",
      "Estruturas de Dados",
      "Engenharia de Software",
      "Gerência de Projetos",
    ],
  },
];

export const idiomas = [
  { idioma: "Português", nivel: "Nativo" },
  { idioma: "Inglês", nivel: "Intermediário" },
];
