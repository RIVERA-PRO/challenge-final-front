import React from 'react'
import './Blog.css'
import Carrusel2 from '../Carrusel2/Carrusel2'
import BlogDestinos from '../BlogDestinos/BlogDestinos'
import CardAventura from '../CardAventura/CardAventura'
import CardOferta from '../CardOferta/CardOferta'
export default function Blog() {
    return (
        <div className='blog-contain'>
            <div className='carrusel-odertas'>
                <Carrusel2 />
                <CardOferta />
            </div>
            <BlogDestinos />
            <CardAventura />

        </div>
    )
}
