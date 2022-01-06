import React from 'react'
import Link from 'next/link'
import {
  FaComments,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaPenAlt,
} from 'react-icons/fa'

const About = () => {
  return (
    <div id='contact' className='pt-5'>
      <div className='container my-5 text-center'>
        <div className='row'>
          <div className='col-lg-7 col-md-5 col-sm-12 col-12 mx-auto'>
            <h2 className='fw-bold'>
              Lets Get Started <br /> Your Project
            </h2>
            <p className='pt-3'>
              We will help to achieve your goals and to grow your business
            </p>

            <Link
              href='/#contact'
              className='btn btn-primary px-5 my-3 rounded-pill shadow'
            >
              <a className='btn btn-primary py-3 px-5 my-5 rounded-pill shadow'>
                LET US TALK <FaComments />
              </a>
            </Link>
          </div>
        </div>

        <div className='row gy-5 pt-5'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaMobileAlt className='contact-icon mx-auto custom-text-primary' />
              <div className='card-body'>
                <h5 className='card-title custom-text-primary'>Call Us </h5>
                <p className='card-text'>
                  <a
                    className='text-decoration-none custom-text-primary'
                    href='tel:+252615301507'
                  >
                    +252 61 530 1507
                  </a>
                  <br />
                  <a
                    className='text-decoration-none custom-text-primary'
                    href='tel:+252618237779'
                  >
                    +252 61 823 7779
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaPenAlt className='contact-icon mx-auto custom-text-primary' />
              <div className='card-body'>
                <h5 className='card-title custom-text-primary'>Write Us </h5>
                <p className='card-text'>
                  <a
                    className='text-decoration-none custom-text-primary'
                    href='mailto:info@websom.dev'
                  >
                    info@websom.dev
                  </a>
                  <br />
                  <a
                    className='text-decoration-none custom-text-primary'
                    href='mailto:ahmaat19@gmail.com'
                  >
                    ahmaat19@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaMapMarkedAlt className='contact-icon mx-auto custom-text-primary' />
              <div className='card-body'>
                <h5 className='card-title custom-text-primary'>Visit Us </h5>
                <p className='card-text'>
                  <span>
                    Makka Almukaramh <br /> Mogadishu, Somalia
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
