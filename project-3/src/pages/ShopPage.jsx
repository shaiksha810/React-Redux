import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../../components/ProductCard'
import { Search } from 'lucide-react'

const ShopPage = () => {

    const [productsData, setProductsData] = useState([])
    const [category, setCategory] = useState("all")
    const [filterData, setFilterData] = useState("")

    const getProducts = async () => {
        const products = await axios.get("https://fakestoreapi.com/products")
        setProductsData(products.data)
    }


    useEffect(() => {
        getProducts()
    }, [])

    
    let categoryData = productsData.filter((elem) => {         
        if(category === "all") return productsData
        return elem.category === category
    })
    .filter((fil) => {
        if(fil.title === undefined) return productsData
        return fil.title.toLowerCase().includes(filterData)
    })    
    
    
    
    

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Search & Category Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">

                {/* Search Bar */}
                <div className="relative w-full sm:flex-1">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder:text-gray-400"
                        onChange={(e) => setFilterData(e.target.value)}
                    />

                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="w-full sm:w-56">
                    <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer"
                        defaultValue=""
                        onClick={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelry</option>
                    </select>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                 categoryData.map((product) => (<ProductCard key={product.id} product={product}/>))                
                }

            </div>

        </div>
    )
}

export default ShopPage