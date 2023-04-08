import React from 'react'
import './LogIn.css'
import { Link as Anchor } from 'react-router-dom'


export default function SignIn({ renderRegister }) {

    return (
        <div className='form-register-contain'>


            <form action="" className='form-register'>
                <h4>Log In</h4>
                <label htmlFor="">Email</label>
                <input type="mail" placeholder='Your email' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Your password' />
                <div className='enviar'>
                    <input type='submit' ></input>
                </div>

                <div className='sin-cuenta'>
                    <p>Don't have an account yet? <Anchor className='register' onClick={renderRegister} >Register</Anchor></p>
                </div>
            </form>

        </div>
    )
}