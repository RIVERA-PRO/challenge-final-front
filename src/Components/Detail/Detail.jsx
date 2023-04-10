import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Spiral from "../Spiral/Spiral";
import Carrito from "../Carrito/Carrito";


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Detail() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [carrito, setCarrito] = useState([]);

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        fetch(`http://localhost:8080/destinos/${id}`, headers)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data.destino);
                console.log(data.destino)
            });
    }, [id]);

    const handleAgregarAlCarrito = () => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (productoAEliminar) => {
        const nuevoCarrito = carrito.filter(
            (producto) => producto.id !== productoAEliminar.id
        );
        setCarrito(nuevoCarrito);
    };

    if (!producto) {
        return (
            <div className="espiral-contain">
                <Spiral />
            </div>
        );
    }

    return (
        <div className="contain-detail">
            <h3>Details</h3>
            <div className="detail-contain">
                <div className="img-detail">
                    <img src={producto.cover_photo} alt={producto.title} />
                </div>
                <div className="text-detail">
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <p>Price ${producto.price}</p>
                    <button className="btn-comprar" onClick={handleAgregarAlCarrito}>
                        Buy
                    </button>
                </div>
            </div>

            <div className="container">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={producto.cover_photo} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={producto.pages[0]} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={producto.pages[1]} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
            {/* <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} /> */}
        </div >
    );
}
