import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import AdditionalSections from "@/components/additional-sections"
import ContinuationSections from "@/components/continuation-sections"

export default function Page() {
  return (
    <>
      <Header />
      
      <main className="min-h-dvh">
        {/* Hero Title */}
        <section className="mx-auto max-w-7xl px-4">
        <div className="flex justify-center mt-16 md:mt-20 lg:mt-24 mb-4">
          <div className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full text-white" 
            style={{
              backgroundColor: '#000aa7'
            }}>
            Parceria com as maiores seguradoras
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-center">
          Proteção que vai além do seguro
        </h1>

        <p className="text-lg text-gray-600 text-center mt-6 max-w-3xl mx-auto font-body">
          Há mais de 25 anos no mercado, a Paulicon Corretora de Seguros é referência nacional na proteção de cargas e na segurança do transporte rodoviário.
        </p>

        {/* Mosaic grid - Mobile optimized */}
        <div className="mt-12 md:mt-16">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Metrics cards side by side on mobile */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="rounded-2xl text-white p-4 flex flex-col justify-between min-h-[140px]" style={{backgroundColor: '#000aa7'}}>
                <div className="text-4xl font-extrabold tracking-tight">+25</div>
                <p className="mt-2 text-lg leading-tight font-light">Anos de experiência no setor</p>
              </div>
              <div className="rounded-2xl text-white p-4 flex flex-col justify-between min-h-[140px]" style={{backgroundColor: '#000aa7'}}>
                <div className="text-3xl font-extrabold tracking-tight">Nacional</div>
                <p className="mt-2 text-lg leading-tight font-light">Cobertura em todo território brasileiro</p>
              </div>
            </div>
            
            {/* Main image on mobile */}
            <div className="relative overflow-hidden rounded-2xl h-[300px]">
              <Image
                src="/principal.png"
                alt="Caminhão em rodovia - transporte seguro"
                width={920}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden lg:grid gap-4 sm:gap-6 lg:grid-cols-12">
            {/* Left metric card */}
            <div className="rounded-2xl text-white p-6 sm:p-8 lg:col-span-4 flex flex-col justify-between" style={{backgroundColor: '#000aa7'}}>
              <div className="text-6xl lg:text-7xl font-extrabold tracking-tight">+25</div>
              <p className="mt-4 text-base lg:text-lg leading-relaxed font-light">Anos de experiência no setor de seguros para transportadoras</p>
            </div>

            {/* Center tall image (row span 2) */}
            <div className="relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2">
              <Image
                src="/principal.png"
                alt="Caminhão em rodovia - transporte seguro"
                width={920}
                height={860}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Right top image */}
            <div className="relative overflow-hidden rounded-2xl lg:col-span-3">
              <Image
                src="/direita.png"
                alt="Equipe Paulicon em atendimento"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom-left team image */}
            <div className="relative overflow-hidden rounded-2xl lg:col-span-4">
              <Image
                src="/esquerda.png"
                alt="Central de monitoramento de cargas"
                width={560}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom-right metric card */}
            <div className="rounded-2xl text-white p-6 sm:p-8 lg:col-span-3 flex flex-col justify-between" style={{backgroundColor: '#000aa7'}}>
              <div className="text-4xl lg:text-5xl font-extrabold tracking-tight">Nacional</div>
              <p className="mt-4 text-base leading-relaxed font-light">Atuação em todo território brasileiro e operações internacionais</p>
            </div>
          </div>
        </div>

        </section>

        {/* Additional sections */}
        <AdditionalSections />
        
        {/* Continuation sections */}
        <ContinuationSections />
      </main>
    </>
  )
}
