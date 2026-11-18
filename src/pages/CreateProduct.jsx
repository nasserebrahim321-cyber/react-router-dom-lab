import '../App.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

const CreateProduct = () => {
    const [formData, setFormData] = useState(
        {
            title: "",
            description: "",
            category: "",
            price: 0,
            quantity: 0,
        })

    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`, formData)
        navigate('/products')
    }

    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title : </label>
                <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
                <br />
                <label htmlFor="description">Description : </label>
                <input type="text" name='description' id='description' value={formData.description} onChange={handleChange} />
                <br />
                <label htmlFor="category">Category : </label>
                <input type="text" name='category' id='category' value={formData.category} onChange={handleChange} />
                <br />
                <label htmlFor="price">Price : </label>
                <input type="number" name='price' id='price' value={formData.price} onChange={handleChange} />
                <br />
                <label htmlFor="quantity">Quantity : </label>
                <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} />

                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct
