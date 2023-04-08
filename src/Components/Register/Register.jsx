import React from 'react'
import './Register.css'
import { useRef } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import alertActions from "../../Store/Alert/actions";
const { open } = alertActions;
export default function Register() {

    let dispatch = useDispatch();
    let dataForm = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current.elements).forEach(e => {
            if (e.nodeName === 'INPUT' && e.name) {
                formInputs.push(e)
            }
        })
        formInputs.pop()
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            [formInputs[2].name]: formInputs[2].value,
            [formInputs[3].name]: formInputs[3].value,
        }
        console.log(data)

        let url = 'http://localhost:8080/users/signup'
        try {
            await axios.post(url, data)
            let dataAlert = {
                icon: "success",
                title: "Register Successful",
                type: "toast"
            };
            dispatch(open(dataAlert));
            console.log(data)
            dataForm.current.reset()
        } catch (error) {
            console.error(error);
            let errorMessage = '';
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage = error.response.data.message;
                } else {
                    errorMessage = error.response.data.message.join(' ');
                }
            } else {
                errorMessage = 'Se produjo un error al procesar la solicitud.';
            }
            console.log(errorMessage);

            let dataAlert = {
                icon: 'error',
                title: 'Error',
                text: errorMessage,
                type: 'toast',
            };
            dispatch(open(dataAlert));
        }
    }



    return (
        <div className='form-register-contain'>
            <form action="" className='form-register' onSubmit={handleSubmit} ref={dataForm}>
                <h4>Register</h4>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your name' name='name' id='name' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Your email' name='mail' id='mail' />
                <label htmlFor="">Photo</label>
                <input type="text" placeholder='Your photo' name='photo' id='photo' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Your password' name='password' id='password' />
                <div className='enviar'>
                    <input type='submit'></input>
                </div>

                <div className='sin-cuenta'>
                    <p><span>Log in</span></p>
                </div>
            </form>
        </div>
    )
}
