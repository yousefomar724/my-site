import React, { useState, useRef } from 'react'
import './contact.css'

function Contact() {
  const FORM_ENDPOINT =
    'https://public.herotofu.com/v1/779eaab0-55c8-11ec-85ac-d56a41b9ab46'
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef()

  const handleSubmit = (e) => {
    setIsSubmitted(true)
    formRef.current.reset()
  }
  return (
    <section className='contact section'>
      <div className='contact__container container'>
        <div className='contact__content'>
          <h2 className='contact__title title'>Contact Me</h2>
          <p className='contact__description description'>
            I'd love to hear from you
          </p>
          <p className='contact__description description'>
            Drop me an email and I will get back to you, or find me on social
            media.
          </p>
          <div className='social'>
            <a
              href={'https://github.com/yousefomar724'}
              target='_blank'
              rel='noreferrer'
              className='home__social-link social-link'
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href={'https://www.linkedin.com/in/yousefomarmohamed/'}
              target='_blank'
              rel='noreferrer'
              className='home__social-link social-link'
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href={'https://codepen.io/yousefomar724'}
              target='_blank'
              rel='noreferrer'
              className='home__social-link social-link'
            >
              <i className='bx bxl-codepen'></i>
            </a>
          </div>
        </div>
        <form
          className='contact__form'
          action={FORM_ENDPOINT}
          onSubmit={(e) => handleSubmit(e)}
          method='POST'
          target='_blank'
          ref={formRef}
        >
          <label htmlFor='name' className='contact__label'>
            Name
            <input
              type='text'
              id='name'
              name='name'
              className='contact__input'
              required
            />
          </label>
          <label htmlFor='email' className='contact__label'>
            Email
            <input
              type='email'
              id='email'
              name='email'
              className='contact__input'
              required
            />
          </label>
          <label htmlFor='message' className='contact__label'>
            Message
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='7'
              required
            ></textarea>
          </label>
          {isSubmitted ? (
            <h4 className='contact__button button'>Thank You.</h4>
          ) : (
            <button className='contact__button button'>Send Message</button>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
