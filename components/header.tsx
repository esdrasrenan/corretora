"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Shield, X, Zap, TrendingUp, ShieldCheck, Package, Truck, FileText, Users, HeadphonesIcon, Building2 } from "lucide-react"

interface MenuItem {
  title: string
  href: string
  description?: string
  icon?: React.ReactNode
  items?: {
    title: string
    href: string
    description: string
    icon?: React.ReactNode
  }[]
}

const menuItems: MenuItem[] = [
  {
    title: "Serviços",
    href: "#",
    items: [
      {
        title: "Seguro de Cargas",
        href: "#",
        description: "Proteção completa para transportes rodoviários",
        icon: <Package className="h-5 w-5" />
      },
      {
        title: "Seguro de Frota",
        href: "#",
        description: "Cobertura para veículos da sua transportadora",
        icon: <Truck className="h-5 w-5" />
      },
      {
        title: "Responsabilidade Civil",
        href: "#",
        description: "Proteção contra danos a terceiros",
        icon: <ShieldCheck className="h-5 w-5" />
      },
      {
        title: "Consultoria em Seguros",
        href: "#",
        description: "Análise personalizada de riscos",
        icon: <FileText className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Soluções",
    href: "#",
    items: [
      {
        title: "Para Transportadoras",
        href: "#",
        description: "Soluções completas para o transporte rodoviário",
        icon: <Truck className="h-5 w-5" />
      },
      {
        title: "Para Embarcadores",
        href: "#",
        description: "Proteção para quem contrata o transporte",
        icon: <Package className="h-5 w-5" />
      },
      {
        title: "Cotação Online",
        href: "#",
        description: "Sistema digital para cotações rápidas",
        icon: <Zap className="h-5 w-5" />
      },
      {
        title: "Gestão de Sinistros",
        href: "#",
        description: "Acompanhamento completo de ocorrências",
        icon: <TrendingUp className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Empresa",
    href: "#",
    items: [
      {
        title: "Sobre Nós",
        href: "#",
        description: "Nossa história e valores",
        icon: <Building2 className="h-5 w-5" />
      },
      {
        title: "Nossa Equipe",
        href: "#",
        description: "Conheça nossos especialistas",
        icon: <Users className="h-5 w-5" />
      },
      {
        title: "Parceiros",
        href: "#",
        description: "Seguradoras e empresas parceiras",
        icon: <ShieldCheck className="h-5 w-5" />
      },
      {
        title: "Contato",
        href: "#",
        description: "Fale com nossos consultores",
        icon: <HeadphonesIcon className="h-5 w-5" />
      }
    ]
  }
]

export default function Header() {
  const [bannerOpen, setBannerOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <>
      {/* Banner promocional */}
      {bannerOpen && (
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-center text-sm">
              <div className="flex items-center gap-1">
                <span className="text-base leading-none mr-1">🛡</span>
                <span className="font-medium text-center md:text-left">Especialistas em seguros para transportadoras – Mais de 25 anos protegendo cargas e frotas.</span>
                <Link 
                  href="#" 
                  className="hidden md:inline-flex ml-3 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors"
                >
                  Peça sua cotação
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={() => setBannerOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Fechar banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Header principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2.5">
                <span 
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm"
                  style={{backgroundColor: '#000aa7'}}
                >
                  <Shield className="h-5 w-5" />
                </span>
                <span className="text-xl font-heading font-bold">Paulicon Corretora</span>
              </Link>

              {/* Menu de navegação */}
              <nav className="hidden lg:block">
                <ul className="flex items-center h-16">
                  {menuItems.map((item) => (
                    <li
                      key={item.title}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setActiveMenu(item.title)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg relative
                          hover:text-gray-900 hover:-translate-y-0.5 hover:bg-gray-100
                          ${activeMenu === item.title ? 'text-gray-900 -translate-y-0.5 bg-gray-100' : ''}`}
                      >
                        {item.title}
                        {item.items && (
                          <ChevronRight 
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              activeMenu === item.title ? 'rotate-90' : ''
                            }`}
                          />
                        )}
                      </Link>

                      {/* Dropdown menu */}
                      {item.items && activeMenu === item.title && (
                        <div className="absolute left-0 top-full mt-0.5 w-[420px] rounded-xl bg-white p-2 shadow-xl border border-gray-100">
                          <div className="grid grid-cols-1 gap-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="group flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-gray-50 transition-colors"
                              >
                                {subItem.icon && (
                                  <span className="mt-0.5 text-gray-400 group-hover:text-gray-600">
                                    {subItem.icon}
                                  </span>
                                )}
                                <div className="flex-1">
                                  <div className="font-medium text-gray-900 text-sm">
                                    {subItem.title}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                  
                  {/* Links simples */}
                  <li className="relative h-full flex items-center">
                    <Link
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg
                        hover:text-gray-900 hover:-translate-y-0.5 hover:bg-gray-100"
                    >
                      Diferenciais
                    </Link>
                  </li>
                  <li className="relative h-full flex items-center">
                    <Link
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg
                        hover:text-gray-900 hover:-translate-y-0.5 hover:bg-gray-100"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg
                  hover:text-gray-900 hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Área do Cliente
              </Link>
              <button 
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200
                  hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#000aa7',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 10, 167, 0.85)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000aa7'}
              >
                Solicitar Cotação
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}