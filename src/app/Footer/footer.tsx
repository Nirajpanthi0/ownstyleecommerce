import Link from "next/link"
import { Mail, Phone, Clock, Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Component() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-white font-black text-2xl tracking-tight">S</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent tracking-tight">
                      Own
                    </span>
                    <span className="text-2xl font-light text-gray-800 tracking-wide">Style</span>
                  </div>
                  <div className="relative">
                    <span className="text-pink-700 font-bold text-xs uppercase tracking-[0.2em] relative">
                      own style
                      <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your one-stop destination for personalized and unique style solutions for every occasion and preference.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-6">
            <h3 className="text-black font-semibold text-lg relative">
              Shop
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full"></div>
            </h3>
            <nav className="space-y-4">
              {["For Him", "For Her", "Birthday", "Anniversary"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-pink-700 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Customer Care Column */}
          <div className="space-y-6">
            <h3 className="text-black font-semibold text-lg relative">
              Customer Care
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">We're here to help make every gift special.</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gray-100 group-hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <Link
                      href="mailto:hello@ownstyle.com"
                      className="text-gray-600 hover:text-pink-700 transition-colors duration-200 text-sm"
                    >
                      hello@ownstyle.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gray-100 group-hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <Link
                      href="tel:555-123-4438"
                      className="text-gray-600 hover:text-pink-700 transition-colors duration-200 text-sm"
                    >
                      (555) 123-GIFT
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-6">
            <h3 className="text-black font-semibold text-lg relative">
              Follow Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">Stay connected for gift inspiration and exclusive offers.</p>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-pink-700 font-medium text-sm">@ownstyle</span>
                </div>
                <p className="text-gray-600 text-sm">Join our community of style enthusiasts!</p>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-gray-600 text-sm font-medium">Get exclusive offers</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-pink-700 transition-colors duration-200 text-sm"
                  />
                  <button className="px-4 py-2 bg-pink-700 text-white rounded-lg font-medium hover:bg-pink-800 transition-all duration-200 hover:scale-105 text-sm">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© 2024 OwnStyle. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-pink-700 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-700 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-700 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
