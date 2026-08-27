import { perfil } from "@/data/perfil";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const iniciais = perfil.nome
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((n) => n[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-accent"
        >
          {iniciais}
        </a>
        {/* Em telas estreitas os cinco links não cabem: mostramos só o
            contato, que é a ação que importa para quem avalia. */}
        <ul className="hidden items-center gap-1 text-sm sm:flex sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-2 py-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground sm:px-3"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-foreground sm:hidden"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
