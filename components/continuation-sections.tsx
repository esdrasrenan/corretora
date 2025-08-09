import Image from "next/image"
import { Shield, Star, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Marília Hafermann G. Pereira",
    role: "Fundadora e Corretora Especialista",
    img: "/placeholder.svg",
    description: "Formada e especializada pela FUNENSEG há mais de 25 anos, com registro SUSEP desde 1997. Especialista em seguro de cargas.",
  },
  {
    name: "Sandra Duran",
    role: "Psicóloga e Especialista em Seguros",
    img: "/placeholder.svg",
    description: "Mais de 30 anos de experiência no mercado de seguros, especialista em soluções de proteção para empresas e transportadoras.",
  },
]

type Testimonial = {
  name: string
  role: string
  text: string
  avatar: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    role: "Transportadora Rodoviária",
    text: "A Paulicon trouxe segurança e tranquilidade para nossa operação. Atendimento rápido e soluções claras.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Empresa de Logística",
    text: "Com a Paulicon, conseguimos reduzir custos e ter mais previsibilidade nas operações.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Transportador Autônomo",
    text: "Excelente atendimento e cobertura completa. Sempre disponíveis quando precisamos.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Gerente de Frotas",
    text: "Parceria de confiança há mais de 10 anos. Profissionalismo e expertise incomparáveis.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Carlos Ferreira",
    role: "Diretor de Operações",
    text: "A análise de riscos da Paulicon nos ajudou a economizar e melhorar nossa segurança.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Lucia Mendes",
    role: "Transportadora Internacional",
    text: "Suporte excepcional para operações internacionais. Sempre uma solução adequada.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Empresa de Cargas",
    text: "Contratos transparentes e atendimento personalizado. Recomendo fortemente.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Patricia Souza",
    role: "Gestora de Riscos",
    text: "A expertise da Paulicon em seguros de carga é incomparável no mercado.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
]

const faqs = [
  {
    q: "Quais tipos de seguro vocês oferecem?",
    a: "Carga nacional e internacional, frota, vida, saúde, riscos ambientais e responsabilidade civil.",
  },
  {
    q: "Atendem apenas transportadoras?",
    a: "Nosso foco é o transporte rodoviário de cargas, mas também oferecemos soluções para empresas e pessoas físicas.",
  },
  {
    q: "Como funciona a contratação?",
    a: "Fazemos uma análise do risco, apresentamos opções de cobertura e cuidamos de todo o processo junto à seguradora.",
  },
  {
    q: "Qual o diferencial da Paulicon?",
    a: "Mais de 25 anos de experiência, atendimento especializado e integração com outros serviços do Grupo Paulicon.",
  },
  {
    q: "Como solicitar uma cotação?",
    a: "Entre em contato pelo telefone (11) 4361-7559 ou WhatsApp (11) 94725-9307 para uma análise personalizada.",
  },
]

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`} />
      ))}
    </div>
  )
}

export default function ContinuationSections() {
  return (
    <>
      {/* Team strip */}
      <section className="mx-auto mt-14 md:mt-20 max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Quem cuida da sua segurança</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {team.map((t) => (
            <Card key={t.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={t.img || "/placeholder.svg"}
                    alt={`${t.name} portrait`}
                    width={480}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="font-semibold text-lg">{t.name}</div>
                  <div className="text-sm text-blue-900 font-medium mt-1">{t.role}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="mx-auto mt-16 md:mt-20 max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Depoimentos de nossos clientes</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={`${t.name} avatar`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.text}</p>
                <div className="mt-3">
                  <Stars n={t.rating ?? 5} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-16 md:mt-20 max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Perguntas frequentes</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços, coberturas e processo de contratação.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-3">
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-6">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Services + CTA */}
      <section className="mx-auto mt-16 md:mt-20 max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">O que oferecemos</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Services CTA */}
          <div className="rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-r from-blue-900 to-blue-700">
            <h3 className="text-2xl md:text-3xl font-semibold">Proteção completa para seu negócio</h3>
            <p className="mt-3 text-white/90">Soluções personalizadas em seguros para transportadoras e empresas.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                Carga Nacional e Internacional
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                Seguros de Frota e Respons. Civil
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                Armazéns e Riscos Ambientais
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                Vida e Saúde para colaboradores
              </li>
            </ul>
            <Button size="sm" className="mt-6 rounded-full bg-white text-blue-900 hover:bg-white/90">
              Solicitar cotação
            </Button>
          </div>

          {/* Product mockup card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-white">
                <div className="flex items-center justify-between px-5 py-3 border-b">
                  <div className="font-medium">Chat Result</div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-400" />
                  </div>
                </div>
                <div className="grid md:grid-cols-[200px_1fr]">
                  <aside className="hidden md:block border-r px-4 py-5">
                    <div className="text-xs font-medium text-muted-foreground">Serviços</div>
                    <div className="mt-3 space-y-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-3.5 w-36 rounded bg-neutral-100" />
                      ))}
                    </div>
                  </aside>
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-white">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="rounded-xl bg-neutral-50 p-4">
                          <p className="text-sm leading-6">
                            Análise completa de riscos e coberturas personalizadas para sua operação.
                          </p>
                          <div className="mt-3 h-16 rounded-lg bg-gradient-to-r from-violet-200 via-fuchsia-200 to-pink-200" />
                        </div>
                        <div className="mt-3 ml-auto w-3/4 rounded-xl bg-blue-50 p-3">
                          <p className="text-sm">Cotação enviada com as melhores opções do mercado.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 md:mt-20 border-t">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-white">
                  <Shield className="h-4 w-4" />
                </span>
                <span>Paulicon Corretora</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Há mais de 25 anos protegendo o patrimônio de transportadoras e empresas.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-medium">Entre em contato:</p>
                <p className="text-muted-foreground">(11) 4361-7559 | (11) 94725-9307</p>
                <p className="text-muted-foreground">atendimento.corretora@paulicon.com.br</p>
              </div>
            </div>
            <div>
              <div className="font-medium">Serviços</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Seguro de Carga</li>
                <li>Seguro de Frota</li>
                <li>Responsabilidade Civil</li>
                <li>Vida e Saúde</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Endereço</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Rua Álvaro Alvim, nº 370<br />
                1º andar - Paulicéia<br />
                São Bernardo do Campo - SP
              </p>
            </div>
          </div>
        </div>
        <div className="border-t py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Paulicon Corretora de Seguros. Todos os direitos reservados.
        </div>
      </footer>
    </>
  )
}
