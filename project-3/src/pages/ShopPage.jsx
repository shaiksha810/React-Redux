
import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const ShopPage = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],

        queryFn: async () => {
            const res = await axios.get(
                "https://dummyjson.com/products"
            )

            return res.data
        }
    })

    console.log(data);
    

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <p>Error: {error.message}</p>

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

        //     {data.products.map((product) => (

        //         <div
        //             key={product.id}
        //             className="border rounded-xl p-4 shadow-sm"
        //         >
        //             <img
        //                 src={product.thumbnail}
        //                 alt={product.title}
        //                 className="w-full h-48 object-contain"
        //             />

        //             <h2 className="font-semibold mt-3">
        //                 {product.title}
        //             </h2>

        //             <p className="text-gray-600">
        //                 ${product.price}
        //             </p>

        //             <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-3">
        //                 Add to Cart
        //             </button>

        //         </div>

        //     ))}

        // </div>

        <h1>shop</h1>
    )
}

export default ShopPage
