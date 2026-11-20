
import React from 'react'

const ProductCard = ({ product }) => {

  const { image, title, description, price, category, rating } = product

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="h-64 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
        />

      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">

        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-14">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <div className="flex items-center gap-1 text-yellow-500">
            <span>★</span>
            <span className="font-semibold text-gray-800">
              {rating?.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({rating?.count} reviews)
          </span>

        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">

          <div>
            <p className="text-xs text-gray-400">Price</p>

            <h3 className="text-2xl font-bold text-gray-900">
              ${price}
            </h3>
          </div>

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition duration-200 cursor-pointer"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard
