import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import AdditionalSections from "@/components/additional-sections"
import ContinuationSections from "@/components/continuation-sections"

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{backgroundColor: '#000aa7'}}>
              <Shield className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-[17px]">Paulicon Corretora</span>
          </Link>

          <nav className="ml-6 hidden md:block">
            <ul className="flex items-center gap-8 text-sm">
              <li>
                <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto">
            <button className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium transition-all hover:bg-gray-50" style={{borderColor: '#000aa7', color: '#000aa7'}}>
              Solicitar Cotação
              <span className="flex h-5 w-5 items-center justify-center rounded-full text-white" style={{backgroundColor: '#000aa7'}}>
                <ChevronRight className="h-3 w-3" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Title */}
      <section className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-center mt-10 md:mt-14">
          Proteção que vai além do seguro
        </h1>

        <p className="text-lg text-gray-600 text-center mt-4 max-w-3xl mx-auto font-body">
          Há mais de 25 anos no mercado, a Paulicon Corretora de Seguros é referência nacional na proteção de cargas e na segurança do transporte rodoviário.
        </p>

        {/* Mosaic grid */}
        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-6 lg:grid-cols-12">
          {/* Left metric card */}
          <div className="rounded-2xl text-white p-6 sm:p-8 lg:col-span-4" style={{backgroundColor: '#000aa7'}}>
            <div className="text-5xl font-extrabold tracking-tight">+25</div>
            <p className="mt-6 text-sm leading-6">Anos de experiência no setor de seguros para transportadoras</p>
          </div>

          {/* Center tall image (row span 2) */}
          <div className="relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2">
            <Image
              src="/placeholder.svg"
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
              src="/placeholder.svg"
              alt="Equipe Paulicon em atendimento"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom-left team image */}
          <div className="relative overflow-hidden rounded-2xl lg:col-span-4">
            <Image
              src="/placeholder.svg"
              alt="Central de monitoramento de cargas"
              width={560}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom-right metric card */}
          <div className="rounded-2xl text-white p-6 sm:p-8 lg:col-span-3" style={{backgroundColor: '#000aa7'}}>
            <div className="text-4xl font-extrabold tracking-tight">Nacional</div>
            <p className="mt-6 text-sm leading-6">Atuação em todo território brasileiro e operações internacionais</p>
          </div>
        </div>

      </section>

      {/* Additional sections */}
      <AdditionalSections />
      
      {/* Continuation sections */}
      <ContinuationSections />
    </main>
  )
}
