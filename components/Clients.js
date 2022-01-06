import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div id='clients' className='pt-5'>
      <div className='container mt-3 text-center'>
        <div className='row'>
          <div className='col-lg-8 col-md-9 col-12 mx-auto'>
            <h2 className='fw-bold'> Our Clients </h2>
            <p className='fs-6 '>
              The image is important, but the quality with which it is made,
              even more! This is why our work has made a valuable contribution
              to many realities:
            </p>
          </div>
        </div>

        <div className='row gy-4 mt-4'>
          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a
              href='http://yardimelihospital.so'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='130'
                height='50'
                src='/images/yardimeli.png'
                alt='yardimeli'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a href='http://cerid.so' target='blank' className='nav-link'>
              <Image
                priority
                width='130'
                height='50'
                src='/images/cerid.png'
                alt='cerid'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a
              href='http://farshaxan.media'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='130'
                height='50'
                src='/images/farshaxan.png'
                alt='farshaxan'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a href='http://samtec.so' target='blank' className='nav-link'>
              <Image
                priority
                width='130'
                height='50'
                src='/images/samtec.png'
                alt='samtec'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a
              href='http://valleyseedenterprise.com'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='130'
                height='50'
                style={{ minHeight: '1rem' }}
                src='/images/valleyseedenterprise.png'
                alt='valley seed enterprise'
                className='img-fluid'
              />
            </a>
          </div>
          <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
            <a href='http://wirdo.org' target='blank' className='nav-link'>
              <Image
                priority
                width='130'
                height='50'
                src='/images/wirdo.png'
                alt='wirdo'
                className='img-fluid'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
