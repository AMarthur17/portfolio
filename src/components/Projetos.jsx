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
          const href = p.link || p.repo;
          const Card = href ? "a" : "div";
          const props = href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Card
              key={p.nome}
              {...props}
              className={[
                "group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent",
                // Com print, o card ocupa a linha inteira e o quadro fica ao
                // lado do texto — print de celular é alto, precisa de altura.
                // Abaixo de sm não há largura para os dois: volta a empilhar,
                // com o quadro centralizado em vez de faixa cortada.
                p.imagem ? "gap-5 sm:col-span-2 sm:flex-row" : "",
              ].join(" ")}
            >
              {p.imagem && (
                <div className="relative aspect-[9/19] w-32 shrink-0 self-center overflow-hidden rounded-xl border border-line bg-surface-2 sm:w-36 sm:self-start">
                  <Image
                    src={p.imagem}
                    alt={`Tela do aplicativo ${p.nome}`}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className="flex min-w-0 flex-1 flex-col">
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
