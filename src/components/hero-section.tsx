import UltimaNotaCard from "./ultima-nota-card";

export default function HeroSection() {
  return (
    <section className="relative w-full h-75 md:h-112.5 bg-cover bg-center flex items-center justify-center text-center overflow-hidden top-10 flex-col gap-6 border-b-2"
     >
      <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
        Torneio Início de Ginástica Ritmica 2026 - FMG
      </h1>
      <UltimaNotaCard />
    </section>
  )
}