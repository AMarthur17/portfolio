import { perfil, contato } from "@/data/perfil";
import Section from "@/components/Section";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

const canais = [
  {
    Icon: MailIcon,
    label: contato.email,
    href: `mailto:${contato.email}`,
    nota: "E-mail",
  },
  {
    Icon: PhoneIcon,
    label: contato.telefone,
    href: `tel:${contato.telefoneLink}`,
    nota: "Telefone",
  },
  {
    Icon: GithubIcon,
    label: contato.githubUser,
    href: contato.github,
    nota: "GitHub",
  },
  {
    Icon: LinkedinIcon,
    label: contato.linkedinUser,
    href: contato.linkedin,
    nota: "LinkedIn",
  },
];

export default function Contato() {
  return (
    <Section id="contato" numero="05" titulo="Contato">
      <p className="mb-8 max-w-xl text-base leading-relaxed text-muted">
        Estou aberto a oportunidades em desenvolvimento mobile. Fico feliz em
        conversar — é só chamar por qualquer um destes canais.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {canais.map((c) => (
          <a
            key={c.nota}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent"
          >
            <c.Icon
              width={18}
              height={18}
              className="shrink-0 text-muted transition-colors group-hover:text-accent"
            />
            <span>
              <span className="block font-mono text-[11px] tracking-widest text-muted">
                {c.nota.toUpperCase()}
              </span>
              <span className="block text-sm">{c.label}</span>
            </span>
          </a>
        ))}
      </div>

      <footer className="mt-16 border-t border-line pt-6 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {perfil.nome}. Feito com Next.js e
          Tailwind CSS.
        </p>
      </footer>
    </Section>
  );
}
