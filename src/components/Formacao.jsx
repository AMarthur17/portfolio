import { formacao, idiomas } from "@/data/perfil";
import Section from "@/components/Section";

export default function Formacao() {
  return (
    <Section id="formacao" numero="04" titulo="Formação">
      <div className="space-y-6">
        {formacao.map((f) => (
          <article
            key={f.curso}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div>
                <h3 className="text-lg font-semibold">{f.curso}</h3>
                <p className="mt-1 text-sm text-muted">{f.instituicao}</p>
              </div>
              <p className="font-mono text-xs tracking-wide text-accent">
                {f.periodo}
              </p>
            </div>
            {f.detalhes?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {f.detalhes.map((d, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted">
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="font-mono text-xs tracking-widest text-accent">
            IDIOMAS
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
            {idiomas.map((i) => (
              <li key={i.idioma} className="text-sm">
                <span className="text-foreground">{i.idioma}</span>
                <span className="ml-2 text-muted">{i.nivel}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
