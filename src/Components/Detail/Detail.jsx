import React from 'react'
import './Detail.css'
import detail from '../../img/Carousel5.jpg'
export default function Detail() {
    return (

        <div className='detail-contain'>

            <div className='img-detail'>
                <img src={detail} alt="" />
            </div>
            <div className='text-detail'>
                <h3>Titulo</h3>
                <p> Live a unique experience with the best views in the world Live a unique experience with the best views in the world Live a unique experience with the best views in the world</p>
                <button className='btn-comprar'>Buy</button>
            </div>
        </div>

    )
}
