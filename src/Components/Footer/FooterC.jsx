import React from 'react'
import { Link as Anchor, } from "react-router-dom";
import './footer.css'
import Logo from '../../img/logo.png'
export default function FooterC() {
    return (
        <div className='contain-footer'>
            <div className='Footer-contain'>

                <div className='Footer-links'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/`} >Home</Anchor>
                </div>

            </div>
        </div>
    )
}
