import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Competencias from "@/components/Competencias";
import Formacao from "@/components/Formacao";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-10">
        <Hero />
        <Experiencia />
        <Projetos />
        <Competencias />
        <Formacao />
        <Contato />
      </main>
    </>
  );
}
