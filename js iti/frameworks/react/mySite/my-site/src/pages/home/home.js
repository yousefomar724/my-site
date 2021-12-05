import React from 'react'
import './home.css'

function Home() {
  return (
    <main className='main'>
      {/* ==================== HOME  */}
      <section className='home' id='home'>
        <div className='home__container container grid'>
          <div className='home__data'>
            <p className='home__description description'>Hi, I am</p>
            <h1 className='home__title title'>YOUSEF OMAR</h1>
            <h3 className='home__subbtitle subtitle'>Front end Developer</h3>
            <div className='home__btns btns'>
              <button
                download='resume.pdf'
                href='resume path'
                className='button home__button  btn'
              >
                Download CV
              </button>
            </div>
            <div className='home__social social'>
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
        </div>
      </section>
    </main>
  )
}

export default Home
