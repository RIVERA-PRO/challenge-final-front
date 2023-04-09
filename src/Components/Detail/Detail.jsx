import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Spiral from "../Spiral/Spiral";
import Carrito from "../Carrito/Carrito";

export default function Detail() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/destinos/${id}`)
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
                    <p>{producto.price}</p>

                    <button className="btn-comprar" onClick={handleAgregarAlCarrito}>
                        Buy
                    </button>
                </div>
            </div>
            <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
    );
}
