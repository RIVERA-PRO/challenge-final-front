import React from 'react'
import CartelPromo from '../../Components/CartelPromo/CartelPromo'
import CartelActividades from '../../Components/CartelActividades/CartelActividades'
import CartelCiudades from '../../Components/CartelCiudades/CartelCiudades'
import Destinos6 from "../../Components/Destinos/Destinos6";
import './Carteles.css'
export default function Carteles() {
    return (
        <div>

            <Destinos6 />

            <CartelPromo />
            <CartelActividades />
            <CartelCiudades />
        </div>
    )
}
