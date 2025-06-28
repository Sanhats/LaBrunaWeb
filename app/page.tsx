"use client"

import { useState } from "react"
import { Menu, Settings, ShoppingCart, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Marcas", href: "#marcas" },
    { name: "Contacto", href: "#contacto" },
    { name: "Nuevo Ecommerce", href: "#ecommerce" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-red-600 p-2 rounded-sm">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-zinc-900 font-bold text-sm">AL</span>
                </div>
              </div>
              <span className="ml-3 text-white font-bold text-xl">by La Bruna</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-zinc-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-zinc-300 hover:text-red-500 px-3 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white mt-4 bg-transparent"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-zinc-900 relative overflow-hidden min-h-screen">
        {/* Background image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-800/85 to-zinc-900/90"></div>

        {/* Placeholder for local físico background image */}
        <div className="absolute inset-0 bg-zinc-800">
          <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
            <div className="text-center text-zinc-500">
              <div className="w-32 h-32 bg-zinc-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-sm">Imagen del Local</span>
              </div>
              <p className="text-sm">[Aquí va la imagen de fondo del local físico]</p>
            </div>
          </div>
        </div>

        {/* Industrial decorative elements */}
        <div className="absolute top-20 left-10 opacity-20 z-10">
          <div className="w-32 h-32 border-4 border-zinc-600 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-zinc-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-40 right-20 opacity-15 z-10">
          <div className="w-24 h-2 bg-red-600 transform rotate-45"></div>
          <div className="w-24 h-2 bg-zinc-600 transform -rotate-45 -mt-2"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <div className="border-2 border-zinc-700 p-8 bg-zinc-800/80 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-4 bg-zinc-600 w-3/4"></div>
                  <div className="h-4 bg-zinc-600 w-full"></div>
                  <div className="h-4 bg-zinc-600 w-5/6"></div>
                  <div className="h-4 bg-red-600 w-1/2 mt-8"></div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  [Texto del botón principal]
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                >
                  [Texto del botón secundario]
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-700">
                  <div className="w-12 h-12 bg-red-600 rounded-full mb-4 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-3 bg-zinc-600 w-full mb-2"></div>
                  <div className="h-3 bg-zinc-600 w-3/4"></div>
                </div>
                <div className="bg-zinc-800/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-700">
                  <div className="w-12 h-12 bg-zinc-600 rounded-full mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-3 bg-zinc-600 w-full mb-2"></div>
                  <div className="h-3 bg-zinc-600 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-8">NOSOTROS</h2>
              <div className="space-y-4 mb-8">
                <div className="h-1 bg-zinc-900 w-full"></div>
                <div className="h-1 bg-zinc-900 w-5/6"></div>
                <div className="h-1 bg-zinc-900 w-4/5"></div>
                <div className="h-1 bg-red-600 w-1/3 mt-6"></div>
              </div>
              <div className="space-y-4 text-zinc-600">
                <div className="h-4 bg-zinc-300 w-full"></div>
                <div className="h-4 bg-zinc-300 w-11/12"></div>
                <div className="h-4 bg-zinc-300 w-5/6"></div>
                <div className="h-4 bg-zinc-300 w-3/4"></div>
              </div>
            </div>
            <div className="bg-zinc-300 h-80 border-2 border-zinc-400 flex items-center justify-center">
              <span className="text-zinc-600 text-lg">[Espacio para contenido visual]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Section */}
      <section id="marcas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-8">MARCAS</h2>
            <div className="space-y-4 mb-8 max-w-2xl mx-auto">
              <div className="h-1 bg-zinc-900 w-full"></div>
              <div className="h-1 bg-zinc-900 w-4/5 mx-auto"></div>
              <div className="h-1 bg-red-600 w-1/2 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-3 text-zinc-600 mb-8">
                <div className="h-4 bg-zinc-300 w-full"></div>
                <div className="h-4 bg-zinc-300 w-5/6 mx-auto"></div>
                <div className="h-4 bg-zinc-300 w-4/5 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Grid de 22 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 mb-12">
            {Array.from({ length: 22 }, (_, index) => (
              <div
                key={index + 1}
                className="bg-zinc-100 h-20 border border-zinc-300 flex items-center justify-center hover:bg-zinc-200 hover:border-red-600 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-zinc-500 text-xs group-hover:text-red-600 transition-colors">
                  [Logo {index + 1}]
                </span>
              </div>
            ))}
          </div>

          {/* Sección decorativa industrial */}
          <div className="relative mt-16">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-32 h-32 bg-zinc-800 transform rotate-45 opacity-10 absolute"></div>
                <div className="bg-zinc-200 w-40 h-24 border-2 border-zinc-400 flex items-center justify-center relative z-10">
                  <Mail className="w-10 h-10 text-zinc-600" />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 border-4 border-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-10 h-10 text-red-600" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-zinc-300 w-full"></div>
                  <div className="h-3 bg-zinc-300 w-3/4 mx-auto"></div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute top-0 right-0">
                  <div className="w-16 h-16 bg-zinc-300 transform rotate-12 opacity-20"></div>
                </div>
                <div className="bg-red-600 w-40 h-24 border-2 border-red-700 flex items-center justify-center relative z-10">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuevo Ecommerce Section */}
      <section id="ecommerce" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">NUEVO ECOMMERCE</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-8">
              <div className="h-4 bg-zinc-600 w-full mx-auto"></div>
              <div className="h-4 bg-zinc-600 w-4/5 mx-auto"></div>
              <div className="h-4 bg-red-600 w-1/2 mx-auto"></div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <ShoppingCart className="w-5 h-5 mr-2" />
              [Texto del botón ecommerce]
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">CONTACTO</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-zinc-300 hover:border-red-600 transition-colors">
              <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Teléfono</h3>
              <div className="h-4 bg-zinc-300 w-3/4 mx-auto"></div>
            </div>

            <div className="text-center p-6 bg-white border border-zinc-300 hover:border-red-600 transition-colors">
              <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Email</h3>
              <div className="h-4 bg-zinc-300 w-4/5 mx-auto"></div>
            </div>

            <div className="text-center p-6 bg-white border border-zinc-300 hover:border-red-600 transition-colors">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Ubicación</h3>
              <div className="h-4 bg-zinc-300 w-full mx-auto mb-2"></div>
              <div className="h-4 bg-zinc-300 w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-red-600 p-2 rounded-sm">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-zinc-900 font-bold text-sm">AL</span>
                  </div>
                </div>
                <span className="ml-3 text-white font-bold text-xl">by La Bruna</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-zinc-600 w-full"></div>
                <div className="h-3 bg-zinc-600 w-4/5"></div>
                <div className="h-3 bg-zinc-600 w-3/4"></div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-zinc-400 hover:text-red-500 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Información</h4>
              <div className="space-y-3">
                <div className="h-3 bg-zinc-600 w-full"></div>
                <div className="h-3 bg-zinc-600 w-5/6"></div>
                <div className="h-3 bg-zinc-600 w-4/5"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p className="text-zinc-400">© 2024 AL by La Bruna. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
