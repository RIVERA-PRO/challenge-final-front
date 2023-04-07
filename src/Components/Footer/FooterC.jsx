import React from 'react'
import { Link as Anchor, } from "react-router-dom";
import './footer.css'
import Logo from '../../img/logo.png'
export default function FooterC() {
    return (
        <div className='contain-footer'>

            <div className='world'>To the World</div>
            <div className='Footer-contain'>

                <div className='Footer-links'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Anchor to={`/`} >Odyssey@gmail.com</Anchor>
                    <Anchor to={`/`} >+54 123456789</Anchor>
                    <Anchor to={`/`} > New York</Anchor>
                    <div class="redes-sociales-footer">
                        <Anchor to={`/`}><i class='fa fa-facebook'></i></Anchor>
                        <Anchor to={`/`}><i class='fa fa-instagram'></i></Anchor>
                        <Anchor to={`/`}> <i class='fa fa-linkedin'></i></Anchor>
                        <Anchor to={`/`}><i class='fa fa-twitter'></i></Anchor>
                        <Anchor to={`/`}> <i class='fa fa-whatsapp'></i></Anchor>
                    </div>
                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Packages</Anchor>
                    <Anchor to={`/`} >FAQ's</Anchor>
                    <Anchor to={`/`} >Blog</Anchor>
                    <Anchor to={`/`} >Blog</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Tipes</h4>
                    <Anchor to={`/`} >Tourist activities</Anchor>
                    <Anchor to={`/`} >Tourist packages</Anchor>
                    <Anchor to={`/`} >Travel without limits</Anchor>
                    <Anchor to={`/`} >Fascinating destinations</Anchor>
                    <Anchor to={`/`} >Your next destination</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Devs</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                </div>

            </div>
        </div>
    )
}
