import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id='services' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Check Our <span className='text-success'>Services</span>{' '}
        </h2>
        <div className='row g-5 pt-3'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0  d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/web_design.png'
                alt='Web Design'
                className='card-img-top img-fluid  mx-auto service-img p-2 '
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Web Design </h5>
                <p className='card-text fw-lighter'>
                  Powerful web design that will out-perform your strongest
                  competitors.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/development.png'
                alt='Development'
                className='card-img-top  mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Development </h5>
                <p className='card-text fw-lighter'>
                  Custom programming for most complex functions you can think.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/ecommerce.png'
                alt='Ecommerce'
                className='card-img-top  mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Ecommerce </h5>
                <p className='card-text fw-lighter'>
                  We build your online store using a flexible, modular platform
                  that allows you to expand…
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/seo.png'
                alt='SEO Optimization'
                className='card-img-top  mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>SEO Optimization </h5>
                <p className='card-text fw-lighter'>
                  Optimizing our web designs to rank on the first page of google
                  is our specialty.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/marketing.png'
                alt='Marketing'
                className='card-img-top  mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Marketing </h5>
                <p className='card-text fw-lighter'>
                  We use strategic marketing tactics that have been proven to
                  work.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 d-flex align-items-center'>
              <Image
                priority
                width='80'
                height='80'
                src='/images/branding.png'
                alt='Branding'
                className='card-img-top  mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Branding </h5>
                <p className='card-text fw-lighter'>
                  A solid brand strategy, logo and guidelines help you to get
                  You recognized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
