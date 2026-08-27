import { competencias } from "@/data/perfil";
import Section from "@/components/Section";

export default function Competencias() {
  return (
    <Section id="competencias" numero="03" titulo="Competências">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {competencias.map((c) => (
          <div key={c.area}>
            <dt className="font-mono text-xs tracking-widest text-accent">
              {c.area.toUpperCase()}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {c.itens.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
