import React from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <header id='home' className=''>
      <div className='row'>
        <div className='col-lg-8 col-md-9 col-12 mx-auto pb-5'>
          <div className='text-center'>
            <Image
              priority
              width='200'
              height='55'
              src='/logo.png'
              alt='websom'
              className='img-fluid mx-auto text-center'
            />
          </div>
          <div className='text-center my-4'>
            <h1 className='fw-bold display-5'>Build Your Empire</h1>
            <p className='fw-light fs-5'>
              We Offer Modern Solutions For Growing Your Business
            </p>
          </div>
          <div className='text-center mt-5'>
            <Link href='#about' className='btn btn-success rounded-pill shadow'>
              <a className='btn btn-primary py-3 px-5 rounded-pill shadow-lg'>
                GET STARTED <FaArrowAltCircleDown className='mb-1' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
