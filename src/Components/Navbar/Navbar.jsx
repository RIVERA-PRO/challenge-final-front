import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link as Anchor, } from "react-router-dom";
import Logo from '../../img/logo2.png'
import Logo2 from '../../img/logoverde.png'

import Register from '../Register/Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {


    let [scrolled, setScrolled] = useState(false);
    let [modal, setModal] = useState(false);  //Se define Modal para 'favoritos'
    let [modalCart, setModalCart] = useState(false); //Se define Modal para 'carrito'
    let [modalUser, setModalUser] = useState(false); //Se define Modal para 'user'
    let [isOpen, setIsOpen] = useState(false)  //Se define Modal para 'Navbar'

    const handleModal = () => {
        setModal(!modal);
    }; //Funcion renderiza Modal 'favoritos'

    const handleModalCart = () => {
        setModalCart(!modalCart);
    }; //Funcion renderiza Modal 'Carrito'

    const handleModalUser = () => {
        setModalUser(!modalUser);
    }; //Funcion renderiza Modal 'user'


    // Cambio de estado en el Navbar cuando se scrollea 
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    // --------------------------------------------- //

    return (

        <header>

            <nav className={scrolled ? "navbar scrolled " : "navbar"}>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='logo2'>
                    <img src={Logo2} alt="logo" />
                </div>

                <div className={`nav_items  ${isOpen && "open"}`} >
                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='logo2-nav'>
                        <img src={Logo2} alt="logo" />
                    </div>

                    <div className='iconos2'>
                        <FontAwesomeIcon icon={faHeart} onClick={handleModal} />
                        <FontAwesomeIcon icon={faShoppingCart} onClick={handleModalCart} />
                        <FontAwesomeIcon icon={faUser} onClick={handleModalUser} />
                    </div>

                    <div>

                        <div className='enlaces'>
                            <Anchor to={`/`} >Home</Anchor>
                            <Anchor to={`/destinos`} >Destinations</Anchor>
                            <Anchor to={`/`} >FAQ's</Anchor>
                            <Anchor to={`/details`} >Details</Anchor>
                        </div>

                        <div class="redes-sociales">
                            <Anchor to={`/`}><i class='fa fa-facebook'></i></Anchor>
                            <Anchor to={`/`}><i class='fa fa-instagram'></i></Anchor>
                            <Anchor to={`/`}> <i class='fa fa-linkedin'></i></Anchor>
                            <Anchor to={`/`}> <i class='fa fa-whatsapp'></i></Anchor>
                        </div>
                    </div>

                </div>


                <div className='icons-nav'>
                    <FontAwesomeIcon icon={faHeart} onClick={handleModal} />
                    <FontAwesomeIcon icon={faShoppingCart} onClick={handleModalCart} />
                    <FontAwesomeIcon icon={faUser} onClick={handleModalUser} />
                </div>

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {modal && (
                    <div className="modal_content ">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModal}>x</div>
                            <h3>Favourite</h3>
                        </div>
                    </div>
                )}
                {modalCart && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalCart}>x</div>
                            <h3>Cart</h3>
                        </div>
                    </div>
                )}
                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalUser}>x</div>
                            <h3>Your Profile</h3>
                            {/* <Register /> */}
                            <LogIn />
                        </div>
                    </div>
                )}

            </nav>

        </header >

    )
}
