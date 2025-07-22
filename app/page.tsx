import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-300 via-gray-600 to-black">
      {/* Header with Logo - Completely White */}
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo Top Left - Smaller */}
          <div className="flex items-start">
            <Image
              src="/agency-logo.png"
              alt="The Agency Logo"
              width={200}
              height={200}
              className="drop-shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Title Section - White to Gray Transition */}
      <section className="bg-gradient-to-b from-white to-gray-400 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-medium text-black tracking-wide mb-3">
            high-end italian fabrics
          </h1>
          <p className="text-gray-700 text-base tracking-wide">
            een uitgebreide website volgt binnenkort.
          </p>
        </div>
      </section>

      {/* Main Content Grid - Clean Gray/Black/White Cards */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* The Agency Info - Pure White */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg font-medium mb-4 text-black border-b border-gray-200 pb-2 tracking-wide">
              the agency
            </h2>
            <div className="space-y-2 text-sm text-gray-800">
              <p><span className="text-gray-500">naam:</span> <span className="ml-2">ejr beheer b.v.</span></p>
              <p><span className="text-gray-500">kvk:</span> <span className="ml-2">32116177</span></p>
              <p><span className="text-gray-500">btw:</span> <span className="ml-2">nl8169.00.838b01</span></p>
            </div>
          </div>

          {/* Contact Info - Light Gray */}
          <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg font-medium mb-4 text-black border-b border-gray-300 pb-2 tracking-wide">
              contact
            </h2>
            <div className="space-y-2 text-sm text-gray-800">
              <p><span className="text-gray-600">tel:</span> <a href="tel:+31653902879" className="ml-2 hover:text-black transition-colors">+31 653 902 879</a></p>
              <p><span className="text-gray-600">email:</span> <a href="mailto:the@gency.nl" className="ml-2 hover:text-black transition-colors">the@gency.nl</a></p>
              <p><span className="text-gray-600">web:</span> <a href="https://www.the-agency.nl" className="ml-2 hover:text-black transition-colors">www.the-agency.nl</a></p>
            </div>
          </div>

          {/* Adres Info - Medium Gray */}
          <div className="bg-gray-300 border border-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg font-medium mb-4 text-black border-b border-gray-500 pb-2 tracking-wide">
              adres
            </h2>
            <div className="space-y-2 text-sm text-gray-800">
              <p>nijverheidslaan 8c</p>
              <p>1382lh weesp</p>
              <p>the netherlands</p>
            </div>
          </div>

          {/* Banking Info - Dark Gray */}
          <div className="bg-gray-600 border border-gray-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg font-medium mb-4 text-white border-b border-gray-400 pb-2 tracking-wide">
              banking
            </h2>
            <div className="space-y-2 text-sm text-gray-200">
              <p><span className="text-gray-300">bank:</span> <span className="text-white ml-2">rabobank weesp</span></p>
              <p><span className="text-gray-300">iban:</span> <span className="text-white ml-2">nl71rabo0103403590</span></p>
              <p><span className="text-gray-300">bic:</span> <span className="text-white ml-2">rabonl2u</span></p>
            </div>
          </div>

          {/* Contact Form - Black */}
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
            <h2 className="text-lg font-medium mb-4 text-white border-b border-gray-600 pb-2 tracking-wide">
              email ons
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="naam"
                  className="w-full bg-black border border-gray-600 p-3 text-sm text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none rounded transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="w-full bg-black border border-gray-600 p-3 text-sm text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none rounded transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="bericht"
                rows={4}
                className="w-full bg-black border border-gray-600 p-3 text-sm text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none rounded resize-none transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black p-3 text-sm font-medium hover:bg-gray-100 transition-all duration-300 rounded tracking-wide"
              >
                verstuur
              </button>
            </form>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-400 tracking-wide">
            © 2025 ejr beheer b.v. • the agency • high-end italian fabrics
          </p>
        </div>
      </footer>
    </div>
  )
}