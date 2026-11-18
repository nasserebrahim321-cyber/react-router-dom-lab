import '../App.css'
import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"

const ProductsDetails = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()
    console.log(productId)

    async function getProduct() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <>
                <h1>PRODUCT DETAILS</h1>
                {product ?
                    <>
                        <p>Title : {product.title}</p>
                        <p>Description : {product.description}</p>
                        <p>Category : {product.category}</p>
                        <p>Price : {product.price}</p>
                        <p>Quantity : {product.quantity}</p>
                    </>
                    : null}
            </>
        </div>

    )
}

export default ProductsDetails;