import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    let [modal, setModal] = useState(false);
    let [modalCart, setModalCart] = useState(false);
    let [modalUser, setModalUser] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    };
    const handleModalCart = () => {
        setModalCart(!modalCart);
    };
    const handleModalUser = () => {
        setModalUser(!modalUser);
    };


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



    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className='logo'>
                <img src="https://cdn.discordapp.com/attachments/1065394997110784000/1093558067846713415/Avion.png" alt="logo" />
            </div>

            <div className={`nav_items ${isOpen && "open"}`} >
                <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                    x
                </div>
                <div className='logo-nav'>
                    <img src="https://cdn.discordapp.com/attachments/1065394997110784000/1093558067846713415/Avion.png" alt="logo" />

                </div>
                <div className='iconos2'>
                    <img src="./img/favorito.png" alt="logo" onClick={handleModal} />
                    <img src="./img/carrito.png" alt="logo" onClick={handleModalCart} />
                    <img src="./img/user.png" alt="logo" onClick={handleModalUser} />
                </div>

                <div>
                    <div className='enlaces'>
                        <Anchor to={`/`} >Home</Anchor>
                        <Anchor to={`/`} >Market</Anchor>
                        <Anchor to={`/`} >Conslt</Anchor>
                        <Anchor to={`/`} >Conslt</Anchor>
                    </div>

                    <div class="redes-sociales">
                        <Anchor to={`/`}><i class='fa fa-facebook'></i></Anchor>
                        <Anchor to={`/`}><i class='fa fa-instagram'></i></Anchor>
                        <Anchor to={`/`}> <i class='fa fa-linkedin'></i></Anchor>
                        <Anchor to={`/`}><i class='fa fa-twitter'></i></Anchor>
                        <Anchor to={`/`}> <i class='fa fa-whatsapp'></i></Anchor>
                    </div>
                </div>

            </div>

            <div className='iconos'>
                <img src="./img/favorito.png" alt="logo" onClick={handleModal} />
                <img src="./img/carrito.png" alt="logo" onClick={handleModalCart} />
                <img src="./img/user.png" alt="logo" onClick={handleModalUser} />
            </div>

            <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {modal && (
                <div className="modal_content">
                    <div className="modal-nav">
                        <div className="cerrar-modal" onClick={handleModal} >x</div>
                        <h3>Favorite</h3>
                    </div>
                </div>
            )}
            {modalCart && (
                <div className="modal_content">
                    <div className="modal-nav">
                        <div className="cerrar-modal" onClick={handleModalCart} >x</div>
                        <h3>Cart</h3>
                    </div>
                </div>
            )}
            {modalUser && (
                <div className="modal_content">
                    <div className="modal-nav">
                        <div className="cerrar-modal" onClick={handleModalUser} >x</div>
                        <h3>Your Profile</h3>
                    </div>
                </div>
            )}

        </nav>
    )
}
