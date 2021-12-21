import React from 'react'
import './projects.css'

function Projects() {
  return (
    <section className='projects'>
      <div className='projects__container container grid'>
        <div className='project'>
          <div className='project__content'>
            <div className='project__text'>
              <h4 className='project__title subtitle'>Recipe Maker</h4>
              <p className='project__details'>
                A website provide a wide range of recipes categorized by
                difficulty and time, Just put the ingrediemts that you have and
                he will suggest different recipes you can choose from.
              </p>
            </div>
            <div className='project__tags'>
              <span>#React</span>
              <span>#Redux</span>
              <span>#Firebase</span>
              <span>#Bootstrap</span>
            </div>
            <div className='project__btns'>
              <a
                href='https://github.com/AmanySirajAl-Din/Wasfity-RecipeMaker'
                target='_blank'
                className='project__github-btn social-link'
                title='Github'
              >
                <i class='bx bxl-github'></i>
              </a>
              {/* <a
                href='/#'
                target='_blank'
                className='project__preview-btn social-link'
                title='Preview'
              >
                <i class='bx bx-exit'></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project__content'>
            <div className='project__text'>
              <h4 className='project__title subtitle'>AXW Movies</h4>
              <p className='project__details'>
                A website provide a wide range of movies categorized by release
                date, IMDB rating, and movie type. Also provide watching online
                and download.
              </p>
            </div>
            <div className='project__tags'>
              <span>#React</span>
              <span>#Redux</span>
              <span>#Movies Api</span>
              <span>#Native CSS</span>
            </div>
            <div className='project__btns'>
              <a
                href='https://github.com/yousefomar724/movies'
                target='_blank'
                className='project__github-btn social-link'
                title='Github'
              >
                <i class='bx bxl-github'></i>
              </a>
              {/* <a
                href='/#'
                target='_blank'
                className='project__preview-btn social-link'
                title='Preview'
              >
                <i class='bx bx-exit'></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
