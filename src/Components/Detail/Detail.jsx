import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Spiral from "../Spiral/Spiral";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlane, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import alertActions from "../../Store/Alert/actions";
import { useDispatch } from "react-redux";

const { open } = alertActions;


export default function Detail() {
    let dispatch = useDispatch();
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

    const handleSubmit = (index, cover_photo, title, stock, price) => {
        const newPackage = { price, stock, title, cover_photo };
        setCarrito(carrito.concat(newPackage));
        localStorage.setItem('carrito', JSON.stringify(carrito.concat(newPackage)));
        let dataAlert = {
            icon: "success",
            title: "Added product",
            type: "toast"
        };
        dispatch(open(dataAlert));
    };

    useEffect(() => {
        const cart = localStorage.getItem('carrito');
        if (cart) {
            setCarrito(JSON.parse(cart));
        }
    }, []);





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
                    <div className="favoritos">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <p>{producto.packages[0].time[0].finish_date}</p>
                    <p>Price ${producto.price}</p>
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
                    {producto.packages.map((product, index) => {
                        return (

                            <SwiperSlide>
                                <div className="card-packages" >
                                    <div className="packages-text">
                                        <FontAwesomeIcon icon={faPlane} className="icono" />
                                        <div className="entrada-salida">
                                            <p>Entrance - {product.hotel[0].check_in}</p>
                                            <p>Exit - {product.hotel[0].check_out}</p>
                                        </div>
                                        <div className="desde-hasta">
                                            <p>From - {product.time?.start_date}</p>
                                            <p>Until - {product.time?.finish_date}</p>
                                        </div>
                                        <p className="stock">Stock: {product.stock}</p>
                                        <div className="precio-btn">
                                            <button onClick={() => handleSubmit(index, producto.cover_photo, producto.title, product.stock, product.price)} className="btn-comprar">
                                                <FontAwesomeIcon icon={faShoppingCart} />
                                                {`(${carrito.length})`}
                                            </button>

                                            <p>Price ${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })}



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

        </div >
    );
}
