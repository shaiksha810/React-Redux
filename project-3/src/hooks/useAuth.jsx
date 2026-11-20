import React, { useEffect, useState } from 'react'
import data from "../config/api"

const useAuth = () => {

    const [productsData, setProductsData] = useState([])
    const [category, setCategory] = useState("all")

    const [filterData, setFilterData] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = async () => {

    try {
            const products = await data.get("/products")
            setProductsData(products)
            setIsLoading(false)

        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getProducts()
    }, [])


    let categoryData = productsData.filter((elem) => {
        if (category === "all") return productsData
        return elem.category === category
    })
    .filter((fil) => {
        if (fil.title === undefined) return productsData
        return fil.title.toLowerCase().includes(filterData)
    })

    return {
    categoryData,
    isLoading,
    setCategory,
    setFilterData
    }
}

export default useAuth