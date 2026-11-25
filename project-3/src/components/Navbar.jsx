import {
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
  UserRound
} from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/main" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/main"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/main/products"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Products
            </NavLink>

            <NavLink
              to="/main/about"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              About
            </NavLink>

            <NavLink
              to="/main/orders"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Orders
            </NavLink>

          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-5">

            {/* Cart */}
            <NavLink
              to="/main/cart"
              className="relative text-gray-700 hover:text-indigo-600 transition"
            >
              <ShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </NavLink>

            {/* Login */}
            <NavLink
              to="/"
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              <UserRound size={20} />
              Login
            </NavLink>

            {/* Signup */}
            <NavLink
              to="/register"
              className="hidden sm:block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
            >
              Sign Up
            </NavLink>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-gray-700">
              <Menu size={26} />
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
