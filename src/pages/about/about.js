import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

function About() {
  return (
    <section className='about section' id='about'>
      <div className='about__container container'>
        <div className='about__content'>
          <h3 className='about__subtitle title'>About me</h3>
          <p className='about__text description'>
            I am <span>Yousef</span>,A self-tought software engineer focusing on
            Front-End web and <span>Love</span> learning new things
          </p>
          <p className='about__text description'>
            Since 2020 - I've spent my time seeking and learning new
            technologies and forms of digital expression. This has led me
            working on some amazing world-class projects, Expanded my skills,
            and that makes me more passionate about <span>Programming</span>.
          </p>
          <div className='btns'>
            <button className='button btn'>
              <Link to='/contact'>Contact Me</Link>
            </button>
          </div>
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
        <div className='about__img'>
          <img src='https://placebear.com/300/300' alt='' />
        </div>
      </div>
    </section>
  )
}

export default About
