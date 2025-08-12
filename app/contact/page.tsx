'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
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
              <Link href="/over/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">over</Link>
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
              <Link href="/collecties/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">collecties</Link>
              <Link href="/contact/" className="text-black font-medium text-xs tracking-wider uppercase">contact</Link>
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
                <Link href="/over/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">over</Link>
                <Link href="/collecties/" className="text-gray-500 hover:text-black transition-colors text-xs tracking-wider uppercase">collecties</Link>
                <Link href="/contact/" className="text-black font-medium text-xs tracking-wider uppercase">contact</Link>
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
              contact
            </h1>
            <div className="w-16 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              wij werken uitsluitend op afspraak en richten ons op samenwerkingen met merken. 
              voor vragen of afspraken kunt u direct contact opnemen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-lg md:text-xl font-medium text-black mb-6 tracking-wider uppercase">
                stuur een bericht
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                      naam*
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                      bedrijf
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                      email*
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                      telefoon
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                    onderwerp
                  </label>
                  <select className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300">
                    <option value="">selecteer onderwerp</option>
                    <option value="collectie-informatie">collectie informatie</option>
                    <option value="afspraak-plannen">afspraak plannen</option>
                    <option value="samenwerking">mogelijke samenwerking</option>
                    <option value="algemeen">algemene vraag</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wider uppercase">
                    bericht*
                  </label>
                  <textarea
                    rows={5}
                    placeholder="beschrijf uw vraag of project..."
                    className="w-full border border-gray-300 p-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="bg-black text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 uppercase">
                    verstuur bericht
                  </button>
                  <a
                    href="mailto:the@gency.nl?subject=Contact via website"
                    className="border border-black text-black px-8 py-3 text-xs font-medium tracking-wider hover:bg-black hover:text-white transition-all duration-300 text-center uppercase"
                  >
                    direct email
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-lg md:text-xl font-medium text-black mb-6 tracking-wider uppercase">
                contactgegevens
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-xs font-medium text-black mb-3 tracking-wider uppercase">adres</h3>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p>ejr beheer b.v.</p>
                    <p>nijverheidslaan 8c</p>
                    <p>1382LH weesp</p>
                    <p>the netherlands</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-xs font-medium text-black mb-3 tracking-wider uppercase">bereikbaarheid</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">tel:</span> 
                      <a href="tel:+31653902879" className="ml-1 hover:text-black transition-colors">
                        +31 653 902 879
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">email:</span> 
                      <a href="mailto:the@gency.nl" className="ml-1 hover:text-black transition-colors">
                        the@gency.nl
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">website:</span> 
                      <a href="https://www.the-agency.nl" className="ml-1 hover:text-black transition-colors">
                        www.the-agency.nl
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <h3 className="text-xs font-medium text-black mb-3 tracking-wider uppercase">bedrijfsgegevens</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">kvk:</span> 32116177</p>
                    <p><span className="font-medium">btw:</span> nl8169.00.838b01</p>
                  </div>
                </div>

                {/* Banking */}
                <div>
                  <h3 className="text-xs font-medium text-black mb-3 tracking-wider uppercase">bankgegevens</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">bank:</span> RABOBANK WEESP</p>
                    <p><span className="font-medium">iban:</span> NL71RABO0103403590</p>
                    <p><span className="font-medium">bic:</span> RABONL2U</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="text-xs font-medium text-black mb-3 tracking-wider uppercase">werktijden</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>maandag - vrijdag: 09:00 - 17:00</p>
                    <p>weekend: op afspraak</p>
                    <p className="text-xs italic mt-2">
                      bezoeken uitsluitend op afspraak
                    </p>
                  </div>
                </div>
              </div>
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