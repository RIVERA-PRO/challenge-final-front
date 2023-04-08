import React from 'react'
import './Register.css'
import { Link as Anchor } from 'react-router-dom'

export default function Register({renderLogIn}) {
    return (
        <div className='form-register-contain'>


            <form action="" className='form-register'>
                <h4>Register</h4>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your name' />
                <label htmlFor="">Emal</label>
                <input type="mail" placeholder='Your email' />
                <label htmlFor="">Photo</label>
                <input type="text" placeholder='Your photo' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Your password' />
                <div className='enviar'>
                    <input type='submit' ></input>
                </div>

                <div className='sin-cuenta'>
                    <p>Already have an account? <Anchor className='login' onClick={renderLogIn}>Log in</Anchor></p>
                </div>
            </form>

        </div>
    )
}
