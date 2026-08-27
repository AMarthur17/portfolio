export default function Section({ id, titulo, numero, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-widest text-accent">
          {numero}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {titulo}
        </h2>
        <span className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
