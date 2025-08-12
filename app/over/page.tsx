'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Over() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Consistent across all pages */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-8">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">home</Link>
              <Link href="/over" className="text-black font-medium text-xs tracking-wider uppercase">over</Link>
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/agency-logo.png"
                alt="The Agency Logo"
                width={100}
                height={100}
              />
            </Link>

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/collecties" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">collecties</Link>
              <Link href="/contact" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">contact</Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">home</Link>
                <Link href="/over" className="text-black font-medium text-xs tracking-wider uppercase">over</Link>
                <Link href="/collecties" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">collecties</Link>
                <Link href="/contact" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wider uppercase">
              over the agency
            </h1>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="lg:order-first">
              <div className="relative">
                <div 
                  className="h-80 w-full rounded-lg shadow-lg bg-cover bg-center bg-no-repeat bg-gray-200"
                  style={{
                    backgroundImage: `url('/portrait.jpg')`
                  }}
                >
                  <div className="absolute bottom-4 left-4 text-white text-xs opacity-50">
                    [portrait.jpg]
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-lg md:text-xl font-medium text-black tracking-wider uppercase">
                meer dan 20 jaar ervaring
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  the agency vertegenwoordigt een select aantal vooraanstaande 
                  italiaanse stoffenfabrikanten in nederland.
                </p>
                
                <p>
                  met meer dan 20 jaar ervaring in de branche verbinden wij 
                  hoogwaardige producenten met ontwerpers, ateliers en merken 
                  die de hoogste standaard nastreven.
                </p>
                
                <p>
                  onze focus ligt op kwaliteit, exclusiviteit en langdurige 
                  samenwerkingen. wij geloven in persoonlijke service en 
                  begrijpen dat elk project uniek is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-lg md:text-xl font-medium text-black mb-6 tracking-wider uppercase">
              onze waarden
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">vakmanschap</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                wij werken uitsluitend met italiaanse partners die bekendstaan 
                om hun eeuwenoude traditie van vakmanschap en innovatie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">exclusiviteit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                beperkte selectie voor een beperkte kring van merken 
                die waardering hebben voor uitzonderlijke kwaliteit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">betrouwbaarheid</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                langdurige relaties gebaseerd op vertrouwen, 
                consistente kwaliteit en professionele service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-gray-300 rounded-lg p-8 bg-gray-50">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-black mb-4 tracking-wider uppercase">
                interesse in samenwerking?
              </h2>
              
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                neem contact op voor een persoonlijk gesprek
              </p>
              
              <Link 
                href="/contact"
                className="bg-black text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 uppercase"
              >
                contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/agency-logo.png"
                alt="The Agency Logo"
                width={32}
                height={32}
                className="mr-3 filter brightness-0 invert"
              />
              <span className="text-white text-sm font-medium tracking-wider uppercase">the agency</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <div className="mb-2 md:mb-0">
                <p className="text-gray-400 text-xs tracking-wide">
                  © 2025 ejr beheer b.v.
                </p>
              </div>
              <div className="mb-2 md:mb-0">
                <p className="text-gray-400 text-xs tracking-wide">
                  kvk: 32116177 • btw: nl8169.00.838b01
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs tracking-wide">
                  nijverheidslaan 8c, 1382LH weesp
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}