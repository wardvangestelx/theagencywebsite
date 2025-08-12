'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Consistent across all pages */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-8">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-black font-medium text-xs tracking-wider uppercase">home</Link>
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
                <Link href="/" className="text-black font-medium text-xs tracking-wider uppercase">home</Link>
                <Link href="/over" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">over</Link>
                <Link href="/collecties" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">collecties</Link>
                <Link href="/contact" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-fabrics.jpg')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 relative max-w-3xl mx-auto px-6">
            <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wider uppercase">
              exclusieve stoffen.
            </h1>
            <p className="text-sm mb-16 tracking-wide leading-relaxed">
              voor merken die kiezen voor kwaliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/over"
                className="bg-white text-black px-8 py-3 text-xs font-medium tracking-wider hover:bg-gray-100 transition-all duration-300 uppercase"
              >
                ontdek meer
              </Link>
              <Link 
                href="/contact"
                className="border border-white text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-20">
            meer dan 20 jaar ervaring met het verbinden van italiaanse 
            stoffenfabrikanten met nederlandse kledingmerken.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">kwaliteit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                uitsluitend samenwerking met vooraanstaande italiaanse fabrikanten
              </p>
            </div>

            {/* Exclusivity */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">exclusiviteit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                beperkte collecties voor een selecte groep merken
              </p>
            </div>

            {/* Service */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-medium text-black mb-4 tracking-wider uppercase">service</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                persoonlijke begeleiding en langdurige samenwerkingen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-lg md:text-xl font-medium text-black mb-4 tracking-wider uppercase">
            werken uitsluitend op afspraak
          </h2>
          <p className="text-xs text-gray-600 mb-8 leading-relaxed">
            voor een persoonlijke presentatie van onze collecties
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 uppercase"
          >
            plan een afspraak
          </Link>
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