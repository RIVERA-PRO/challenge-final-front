import React from 'react'
import './Register.css'


export default function Register() {
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
                    <p>Already have an account? <span>Log in</span></p>
                </div>
            </form>

        </div>
    )
}
