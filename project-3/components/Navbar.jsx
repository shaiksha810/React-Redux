
import { NavLink } from 'react-router'
import { ShoppingBag, Menu, LogOut } from 'lucide-react'

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser")
    }

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/main" className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <ShoppingBag size={22} />
            </div>

            <span className="text-xl font-bold text-gray-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/main"
              className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 font-semibold" } end
              >
              Home
            </NavLink>

            <NavLink 
              to="/main/shop" 
              className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 font-semibold" }
              >
              Shop
            </NavLink>

            <NavLink
              to="/main/about"
              className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 font-semibold" } end
              >
              About
            </NavLink>

          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">

            <NavLink
              to="/main/cart"
              className="p-2.5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
            >
              <ShoppingBag size={21} />
            </NavLink>

            <button
              type="button"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition"
              onClick={() => handleLogout()}
            >
              <LogOut size={17} />
              Logout
            </button>

          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            aria-label="Menu"
          >
            <Menu size={25} />
          </button>

        </div>

        {/* Mobile Navigation UI */}
        <div className="md:hidden border-t border-gray-100 py-4 space-y-3">

          <NavLink to="/main" className="block px-4 py-2 text-indigo-600 font-medium rounded-lg bg-indigo-50">
            Home
          </NavLink>

          <NavLink to="/shop" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">
            Shop
          </NavLink>

          <NavLink to="/about" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">
            About
          </NavLink>

          <NavLink to="/cart" className="flex items-center gap-2 px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">
            <ShoppingBag size={18} />
            Cart
          </NavLink>

          <button
            type="button"
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg"
            onClick={() => handleLogout()}
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
