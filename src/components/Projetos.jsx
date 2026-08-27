import Image from "next/image";
import { projetos } from "@/data/perfil";
import Section from "@/components/Section";
import { GithubIcon, ArrowIcon } from "@/components/icons";

export default function Projetos() {
  return (
    <Section id="projetos" numero="02" titulo="Projetos">
      <div className="grid gap-4 sm:grid-cols-2">
        {projetos.map((p) => {
          // Projetos sem link público viram um card estático em vez de <a>.
          const Card = p.link || p.repo ? "a" : "div";
          const props =
            p.link || p.repo
              ? {
                  href: p.link || p.repo,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
          return (
          <Card
            key={p.nome}
            {...props}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent"
          >
            {/* Miniatura opcional. object-cover ancorado no topo: preenche a
                faixa tanto com print de celular (alto) quanto de web (largo),
                mostrando a parte de cima da tela, que é a reconhecível. */}
            {p.imagem && (
              <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-line bg-surface-2">
                <Image
                  src={p.imagem}
                  alt={`Tela do projeto ${p.nome}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
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
              {p.repo ? (
                <>
                  <GithubIcon width={13} height={13} />
                  Ver repositório
                </>
              ) : (
                p.nota
              )}
            </p>
            </div>
          </Card>
          );
        })}
      </div>
    </Section>
  );
}
