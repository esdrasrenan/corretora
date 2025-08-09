import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BadgeCheck, ShieldCheck, Handshake, Users, HeartHandshake } from "lucide-react"

function ValueCard({
  icon,
  title,
  desc,
  bg = "bg-amber-50",
}: {
  icon: React.ReactNode
  title: string
  desc: string
  bg?: string
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}>{icon}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-6">{desc}</p>
    </div>
  )
}

export default function AdditionalSections() {
  return (
    <>
      {/* Values overview + 6 cards */}
      <section className="mx-auto max-w-7xl px-4 mt-12 md:mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Soluções inteligentes em seguros
          </h2>
          <p className="text-muted-foreground leading-7">
            Nossa missão é oferecer soluções personalizadas que protejam o patrimônio e as pessoas, com atendimento próximo, rápido e especializado.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            icon={<BadgeCheck className="h-4 w-4 text-amber-700" />}
            title="Inovação"
            desc="Utilizamos tecnologia e conhecimento de mercado para oferecer apólices ágeis e sob medida."
            bg="bg-amber-50"
          />
          <ValueCard
            icon={<ShieldCheck className="h-4 w-4" style={{color: '#000aa7'}} />}
            title="Integridade e confiança"
            desc="Atendemos com transparência, responsabilidade e foco no que realmente importa: proteger você."
            bg="bg-blue-50"
          />
          <ValueCard
            icon={<Handshake className="h-4 w-4 text-violet-700" />}
            title="Foco no cliente"
            desc="Cada apólice é pensada para as necessidades específicas de cada transportadora."
            bg="bg-violet-50"
          />
          <ValueCard
            icon={<CheckCircle2 className="h-4 w-4" style={{color: '#000aa7'}} />}
            title="Atendimento especializado"
            desc="Expertise no setor de transporte com soluções modulares para redução de custos e riscos."
            bg="bg-blue-50"
          />
          <ValueCard
            icon={<Users className="h-4 w-4 text-pink-700" />}
            title="Trabalho em equipe"
            desc="Nossa equipe atua em conjunto com clientes e seguradoras para resultados mais seguros e econômicos."
            bg="bg-pink-50"
          />
          <ValueCard
            icon={<HeartHandshake className="h-4 w-4 text-lime-700" />}
            title="Compromisso com a excelência"
            desc="Buscamos sempre superar expectativas, revisando processos e ampliando benefícios."
            bg="bg-lime-50"
          />
        </div>
      </section>

      {/* Transforming customer engagement section */}
      <section className="mx-auto max-w-7xl px-4 mt-14 md:mt-20">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Transformando proteção em resultados
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Combinamos expertise no setor de transporte e conhecimento técnico para garantir tranquilidade e eficiência para transportadores, empresas e pessoas.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <span className="text-sm leading-6">Análise completa de riscos para minimizar prejuízos.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <span className="text-sm leading-6">Contratos claros, sem surpresas ou letras miúdas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <span className="text-sm leading-6">Coberturas flexíveis para cada operação.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <span className="text-sm leading-6">Parceria com as principais seguradoras do país.</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button className="rounded-full text-white" size="sm" style={{backgroundColor: '#000aa7'}}>
                Solicitar cotação agora
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg"
              alt="Team collaborating around a laptop."
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
