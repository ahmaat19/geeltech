import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <header id='home' className=''>
      <div className='row g-5 pb-5'>
        <div className='col-sm-12 col-12  col-md-6'>
          <div className='pt-5 container'>
            <h1 className='fw-bold font-smaller  pb-5  my-3'>
              <span className='text-success '> Geel Tech </span>
              Offer Modern Solutions For Growing Your Business.
            </h1>

            <Link
              href='#about'
              className='btn btn-success py-3 px-5 rounded-pill shadow'
            >
              <a
                href='#about'
                className='btn btn-success py-3 px-5 rounded-pill shadow'
              >
                GET STARTED <FaArrowAltCircleRight />
              </a>
            </Link>
          </div>
        </div>
        <div className='col-sm-12 col-12  col-md-6'>
          <Image
            priority
            width='500'
            height='450'
            src='/images/online_connection.svg'
            alt='work together'
            className='img-fluid'
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
