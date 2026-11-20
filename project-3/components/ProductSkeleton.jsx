
const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">

      {/* Product Image Skeleton */}
      <div className="h-56 bg-gray-200"></div>

      <div className="p-4 space-y-4">

        {/* Category */}
        <div className="h-3 w-24 bg-gray-200 rounded"></div>

        {/* Product Title */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Button */}
        <div className="h-10 w-full bg-gray-200 rounded-lg"></div>

      </div>
    </div>
  )
}

export default ProductSkeleton
