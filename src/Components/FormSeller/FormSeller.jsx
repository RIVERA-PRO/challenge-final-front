import React from 'react'
import './formSeller.css'
import { useRef } from 'react'
import axios from 'axios'

export default function FormSeller() {
    const name = useRef()
    const last_name = useRef()
    const city = useRef()
    const country = useRef()
    const date = useRef()
    const photo = useRef()


    async function handleSubmit(e) {
        e.preventDefault()
        let data = {
            "name": name.current.value,
            "last_name": last_name.current.value,
            "city": city.current.value,
            "country": country.current.value,
            "date": date.current.value,
            "photo": photo.current.value
        }
        console.log(data)
        let url = 'http://localhost:8080/sellers'
        let token = localStorage.getItem('token')
        let headers = { 'Authorization': `Bearer ${token}` }
        try {
            await axios.post(url, data, { headers: headers })
            console.log('Seller creado')
        }
        catch (err) {
            console.log(err)
        }

        // e.target.reset()
    }

    return (
        <div className='formSeller'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Name</label>
                    <input type="text" placeholder='enter your Name' ref={name} />
                </div>
                <div>
                    <label >Last Name</label>
                    <input type="text" placeholder='enter your Last Name' ref={last_name} />
                </div>
                <div>
                    <label >City</label>
                    <input type="text" placeholder='enter your City' ref={city} />
                </div>
                <div>
                    <label >Country</label>
                    <input type="text" placeholder='enter your country' ref={country} />
                </div>
                <div>
                    <label >Date</label>
                    <input type="date" ref={date} />
                </div>
                <div>
                    <label >Photo</label>
                    <input type="text" placeholder='Enter a photo through a url' ref={photo} />
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}
