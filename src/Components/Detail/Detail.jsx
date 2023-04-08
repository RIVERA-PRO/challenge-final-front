import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Detail.css'
import Spiral from "../Spiral/Spiral"

export default function Detail() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/destinos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data.destino);
            });
    }, [id]);

    if (!producto) {
        return (
            <div className="espiral-contain">
                <Spiral />
            </div>
        );
    }

    return (
        <div className="detail-contain">
            <div className="img-detail">
                <img src={producto.cover_photo} alt={producto.title} />
            </div>
            <div className="text-detail">
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <p>{producto.price}</p>
                <button className="btn-comprar">Buy</button>
            </div>
        </div>
    );
}
