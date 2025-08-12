'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Collecties() {
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
              <Link href="/over" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">over</Link>
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
              <Link href="/collecties" className="text-black font-medium text-xs tracking-wider uppercase">collecties</Link>
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
                <Link href="/over" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">over</Link>
                <Link href="/collecties" className="text-black font-medium text-xs tracking-wider uppercase">collecties</Link>
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
              italiaanse stoffen
            </h1>
            <div className="w-16 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              wij werken uitsluitend met italiaanse partners die bekendstaan om hun vakmanschap, 
              innovatie en tijdloze stijl.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Eurojersey Sensitive Fabrics */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg h-80 w-full flex items-center justify-center">
                  <Image
                    src="/sensitivelogo.png"
                    alt="Eurojersey Sensitive Fabrics"
                    width={600}
                    height={400}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-6">
                  <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">eurojersey</span>
                  <h2 className="text-lg md:text-xl font-medium text-black mt-2 tracking-wider uppercase">
                    sensitive® fabrics
                  </h2>
                </div>
                
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong>sensitive® classic</strong> - de eerste en originele sensitive® stof. 
                    de perfecte mix van microvezel met 25% lycra® garens garandeert 
                    de beste esthetische en functionele eigenschappen.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">technische specificaties</h4>
                    <ul className="space-y-1 text-xs">
                      <li><span className="font-medium">samenstelling:</span> 75% microvezel pa / 25% ea (lycra®)</li>
                      <li><span className="font-medium">gewicht:</span> 164 g/m²</li>
                      <li><span className="font-medium">breedte:</span> 140 cm</li>
                      <li><span className="font-medium">kleuren:</span> beschikbaar in 80 kleuren</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">toepassingen</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">underwear</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">swimwear</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">sportswear</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">ready-to-wear</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Olimpias Cotton */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">olimpias</span>
                  <h2 className="text-lg md:text-xl font-medium text-black mt-2 tracking-wider uppercase">
                    premium katoen
                  </h2>
                </div>
                
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    olimpias staat bekend om hun uitzonderlijke katoen collecties. 
                    van organische kwaliteiten tot innovatieve blends, 
                    perfect voor high-end mode en luxe ready-to-wear.
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">specialiteiten</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        organische katoen certificeringen
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        pima en supima katoen variëteiten
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        innovatieve katoen-stretch blends
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        duurzame productie methoden
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">toepassingen</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">shirts</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">casual wear</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">denim</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">luxury basics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <Image
                  src="/olimpias.webp"
                  alt="Olimpias Premium Katoen"
                  width={600}
                  height={400}
                  className="h-80 w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Limonta Outerwear */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div>
                <Image
                  src="/Limonta.jpg"
                  alt="Limonta Technical Outerwear"
                  width={600}
                  height={400}
                  className="h-80 w-full rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div>
                <div className="mb-6">
                  <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">limonta</span>
                  <h2 className="text-lg md:text-xl font-medium text-black mt-2 tracking-wider uppercase">
                    technical outerwear
                  </h2>
                </div>
                
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    limonta is synoniem met innovatieve technische stoffen voor outerwear. 
                    hun cutting-edge materialen combineren performance met elegante esthetiek, 
                    perfect voor luxury outerwear en technical fashion.
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">technische eigenschappen</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        waterafstotende en ademende eigenschappen
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        wind- en weerbestendige materialen
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        isolerende en thermische regulatie
                      </li>
                      <li className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 mr-2 rounded-full"></span>
                        lichtgewicht yet durable constructies
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-black mb-2 tracking-wider uppercase">toepassingen</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">luxury jackets</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">technical coats</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">performance wear</span>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">urban outerwear</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Partners Teaser */}
          <div className="text-center mb-16">
            <h2 className="text-lg md:text-xl font-medium text-black mb-4 tracking-wider uppercase">
              en veel meer partners
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              wij werken samen met een zorgvuldig geselecteerde groep van 
              vooraanstaande italiaanse fabric houses, elk gespecialiseerd 
              in hun eigen vakgebied.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-gray-300 rounded-lg p-8 bg-gray-50">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-black mb-4 tracking-wider uppercase">
                interesse in onze collectie?
              </h2>
              
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                plan een afspraak voor een persoonlijke presentatie
              </p>
              
              <Link 
                href="/contact"
                className="bg-black text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 uppercase"
              >
                plan afspraak
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