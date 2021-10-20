import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div id='clients' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Our <span className='text-success'>Clients</span> <br />
          <span className='fw-lighter fs-6 '> We have developed for</span>
          <div className='row gy-4 mt-4'>
            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <a
                href='http://yardimelihospital.so'
                target='blank'
                className='nav-link'
              >
                <Image
                  priority
                  width='200'
                  height='80'
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
                  width='200'
                  height='80'
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
                  width='200'
                  height='80'
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
                  width='200'
                  height='80'
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
                  width='200'
                  height='80'
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
                  width='200'
                  height='80'
                  src='/images/wirdo.png'
                  alt='wirdo'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Clients
