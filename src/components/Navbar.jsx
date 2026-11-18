import React from 'react'
import { Link } from "react-router"

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Homepage</Link>
            <Link to='/products'>Products-List</Link>
            <Link to='/new-Product'>Create-new-Product</Link>
        </div>
    )
}

export default Navbar
