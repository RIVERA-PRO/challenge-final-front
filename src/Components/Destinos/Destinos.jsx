import React, { useState, useEffect } from "react";
import './destinos.css'
import Spiral from "../Spiral/Spiral"

function Destinos() {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/destinos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setDestinos(data)
            });
    }, []);

    if (typeof destinos !== 'undefined' && Array.isArray(destinos)) {
        return (
            <div className="destinos-contain">
                {destinos.map((destino) => (
                    <div key={destino.id}>
                        <h2>{destino.title}</h2>
                        <img src={destino.cover_photo} alt={destino.title} />
                        <p>{destino.description}</p>
                        <p>Category: {destino.category_id}</p>
                        <p>Seller: {destino.seller_id}</p>
                        <p>Price: ${destino.detail[0].price}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return <div className="destinos-contain">
            <Spiral />
        </div>
    }
}

export default Destinos;
