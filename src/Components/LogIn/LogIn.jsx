import React from 'react'
import './LogIn.css'
import { useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import alertActions from "../../Store/Alert/actions";
import { useNavigate } from 'react-router';
import Modal from 'react-modal';

const { open } = alertActions;



export default function SignIn() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    let dispatch = useDispatch();
    let dataForm = useRef()
    const navigate = useNavigate()

    function handleModalOpen() {
        setModalIsOpen(true);
    }
    
    function handleModalClose() {
        setModalIsOpen(false);
    }

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
        }
        console.log(data)

        let url = 'http://localhost:8080/users/signin'
        try {
            let res = await axios.post(url, data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify({
              name: res.data.user.name,
              mail: res.data.user.mail,
              photo: res.data.user.photo,
            }));
            setInterval(() => window.location.href = '/')
            let dataAlert = {
              icon: "success",
              title: "Log In Successful",
              type: "toast"
            };
            dispatch(open(dataAlert));
            dataForm.current.reset();
            handleModalOpen(); // Mostrar el modal
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
                <h4>Log In</h4>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Your email' name='mail' id='mail' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Your password' name='password' id='password' />
                <div className='enviar'>
                    <input type='submit' ></input>
                </div>
            </form>
        </div>
    )
}
