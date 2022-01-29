import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div id='clients' className='pt-5'>
      <div className='container mt-3 text-center'>
        <div className='row'>
          <div className='col-lg-8 col-md-9 col-12'>
            <h2 className='fw-bold'> Our Clients </h2>
            <p className='fs-6 '>
              The image is important, but the quality with which it is made,
              even more! This is why our work has made a valuable contribution
              to many realities:
            </p>
          </div>
        </div>

        <div className='row g-0 mt-4'>
          <div className='col-lg-2 col-md-3 col-6'>
            <a
              href='http://yardimelihospital.so'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/yardimeli.png'
                alt='yardimeli'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <a href='http://cerid.so' target='blank' className='nav-link'>
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/cerid.png'
                alt='cerid'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <a
              href='http://farshaxan.media'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/farshaxan.png'
                alt='farshaxan'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <a href='http://samtec.so' target='blank' className='nav-link'>
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/samtec.png'
                alt='samtec'
                className='img-fluid'
              />
            </a>
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <a
              href='http://valleyseedenterprise.com'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/valleyseed.png'
                alt='valley seed enterprise'
                className='img-fluid'
              />
            </a>
          </div>
          <div className='col-lg-2 col-md-3 col-6'>
            <a href='http://wirdo.org' target='blank' className='nav-link'>
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/wirdo.png'
                alt='wirdo organization'
                className='img-fluid'
              />
            </a>
          </div>
          <div className='col-lg-2 col-md-3 col-6'>
            <a
              href='http://ligomedical.com'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/ligomedical.png'
                alt='ligo medical'
                className='img-fluid'
              />
            </a>
          </div>
          <div className='col-lg-2 col-md-3 col-6'>
            <a
              href='http://mamosbusiness.com'
              target='blank'
              className='nav-link'
            >
              <Image
                priority
                width='100'
                height='100'
                src='/images/clients/mamosbusiness.png'
                alt='mamos business cargo'
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
