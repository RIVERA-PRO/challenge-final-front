import React from 'react'
import './faqsForm.css'

export default function FaqsForm() {
  return (
    <div className='formSection'>
            <h4>Send your questions!</h4>
        <form action="">
            <div className='formFaqs'>
            <label htmlFor="">Name</label>
                <input type="text" placeholder='Your name' name='name' id='name' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Your email' name='mail' id='mail' />
            </div>
            <div className='textFaqs'>
                <textarea placeholder='Your Question' />
            </div>
        <div className='enviar'>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
