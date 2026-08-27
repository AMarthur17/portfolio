import { projetos } from "@/data/perfil";
import Section from "@/components/Section";
import { GithubIcon, ArrowIcon } from "@/components/icons";

export default function Projetos() {
  return (
    <Section id="projetos" numero="02" titulo="Projetos">
      <div className="grid gap-4 sm:grid-cols-2">
        {projetos.map((p) => (
          <a
            key={p.nome}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{p.nome}</h3>
                <p className="mt-0.5 text-sm text-accent">{p.tagline}</p>
              </div>
              <ArrowIcon
                width={15}
                height={15}
                className="shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {p.descricao}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
              <GithubIcon width={13} height={13} />
              Ver repositório
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
