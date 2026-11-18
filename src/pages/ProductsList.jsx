import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"

const ProductsList = () => {
    const [products, setProduct] = useState([])

    const getAllProducts = async () => {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        setProduct(response.data)
        console.log(products)
    }

    useEffect(() => { getAllProducts() }, [])

    return (
        <div>
            <h1>ALL PRODUCT</h1>
            {products.map((p) => {
                return (
                    <div key={p._id}>
                        <p>
                            title : {p.title} ,
                            description: {p.description} ,
                            category: {p.category} ,
                            price: {p.price} ,
                            quantity: {p.quantity} ,
                            <Link to={`/products/${p._id}`} >see details here</Link>
                            <br></br>
                            ---------------------------------
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsList
