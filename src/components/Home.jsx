import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ()=>{
    const navigate = useNavigate()
    const go = () => navigate('/about')
    return (
        <div>
            <h1>Home</h1>
            <button onClick={go}>Go to about</button>
        </div>
    )
}

export default Home