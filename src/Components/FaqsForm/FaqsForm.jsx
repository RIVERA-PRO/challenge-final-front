import React from 'react'
import './faqsForm.css'
import image from '../../img/Carousel6.jpg'
export default function FaqsForm() {
    return (
        <div className='formSection'>
            <div className='img-form'>
                <img src={image} alt="" />
            </div>
            <div className='form-faq'>
                <h3>Send your query</h3>
                <form action="" className='form-faqs'>

                    <label htmlFor="">Name</label>
                    <input className='inputt' type="text" placeholder='Your name' name='name' id='name' />
                    <label htmlFor="">Email</label>
                    <input className='inputt' type="email" placeholder='Your email' name='mail' id='mail' />
                    <textarea placeholder='Your Question' />

                    <div className='enviar'>
                        <input type='submit'></input>
                    </div>
                </form>
            </div>


        </div>
    )
}
