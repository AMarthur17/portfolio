import { experiencias } from "@/data/perfil";
import Section from "@/components/Section";
import { PlayStoreIcon, ArrowIcon } from "@/components/icons";

export default function Experiencia() {
  return (
    <Section id="experiencia" numero="01" titulo="Experiência">
      <div className="space-y-8">
        {experiencias.map((exp) => (
          <article
            key={exp.empresa}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {exp.cargo}
                </h3>
                <p className="mt-1 text-sm text-foreground">{exp.empresa}</p>
                {exp.vinculo && (
                  <p className="text-sm text-muted">{exp.vinculo}</p>
                )}
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs tracking-wide text-accent">
                  {exp.periodo}
                </p>
                <p className="mt-1 text-xs text-muted">{exp.local}</p>
              </div>
            </div>

            {exp.projeto && (
              <a
                href={exp.projetoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm transition-colors hover:border-accent"
              >
                <PlayStoreIcon width={14} height={14} className="text-accent" />
                <span className="font-medium">{exp.projeto}</span>
                <span className="text-muted">na Google Play</span>
                <ArrowIcon width={13} height={13} className="text-muted" />
              </a>
            )}

            <ul className="mt-5 space-y-3">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
