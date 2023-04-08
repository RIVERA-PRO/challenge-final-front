import React, { useState, useEffect } from "react";
import './destinos.css'
import '../Carousel/carousel.css'
import Spiral from "../Spiral/Spiral"
import { Link as Anchor, } from "react-router-dom";


function Destinos() {
    const [destinos, setDestinos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/destinos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.destino)
                setDestinos(data.destino)
                console.log(data.destino._id)
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="espiral-contain">
            <Spiral />
        </div>;
    } else {
        const filteredDestinos = destinos.filter(destino => destino.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return (
            <div className="contain-destinos">
                <div className="inputsearch">
                    <input type="text" placeholder="Search...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="destinos-contain">
                    {filteredDestinos.length > 0 ? (
                        filteredDestinos.map((destino) => (
                            <div className="card-destinos">
                                <div key={destino.id}>
                                    <img src={destino.cover_photo} alt={destino.title} />
                                    <div className="card-text">
                                        <h2>{destino.title}</h2>
                                        {/* <p> {JSON.stringify(destino.category_id)}</p> */}
                                        {destino.category_id.name && (
                                            <p className="card-categori">{destino.category_id.name}</p>
                                        )}

                                        <div className='price-link'>
                                            <Anchor className='btn-detail' to={`/details/${destino._id}`}>Details</Anchor>
                                            <p className="card-price">$100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="results-no-found">No results found</p>
                    )}
                </div>
            </div>
        );
    }
}

export default Destinos;
