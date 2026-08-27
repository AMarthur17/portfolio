import { perfil, contato } from "@/data/perfil";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  ArrowIcon,
} from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="glow pt-16 pb-4 sm:pt-24">
      <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-accent">
        <PinIcon width={13} height={13} />
        {perfil.local.toUpperCase()}
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {perfil.nome}
      </h1>

      <p className="mt-4 text-xl text-foreground sm:text-2xl">
        {perfil.titulo}
        <span className="mx-2 text-line">/</span>
        <span className="text-muted">{perfil.subtitulo}</span>
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {perfil.resumo}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${contato.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#0b0b0f] transition-opacity hover:opacity-90"
        >
          <MailIcon width={15} height={15} />
          Entrar em contato
        </a>
        <a
          href={contato.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
        >
          <GithubIcon width={15} height={15} />
          GitHub
        </a>
        <a
          href={contato.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
        >
          <LinkedinIcon width={15} height={15} />
          LinkedIn
        </a>
        <a
          href="/curriculo-arthur-marques.pdf"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          Currículo em PDF
          <ArrowIcon width={14} height={14} />
        </a>
      </div>
    </section>
  );
}
