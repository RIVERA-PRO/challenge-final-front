import React from 'react'
import CartelPromo from '../../Components/CartelPromo/CartelPromo'
import CartelActividades from '../../Components/CartelActividades/CartelActividades'
import CartelCiudades from '../../Components/CartelCiudades/CartelCiudades'
export default function Carteles() {
    return (
        <div>
            <CartelPromo />
            <CartelActividades />
            <CartelCiudades />
        </div>
    )
}
