import Image from 'next/image'

const Clients = () => {
  const clients = [
    {
      name: 'Yardimeli',
      logo: '/images/clients/yardimeli.png',
      url: 'https://yardimelihospital.so/',
    },
    {
      name: 'CeRID',
      logo: '/images/clients/cerid.png',
      url: 'https://www.cerid.so/',
    },
    {
      name: 'Farshaxan Media',
      logo: '/images/clients/farshaxan.png',
      url: 'https://farshaxan.media/',
    },
    {
      name: 'SaMTEC',
      logo: '/images/clients/samtec.png',
      url: 'https://samtec.so/',
    },
    {
      name: 'Valleyseed Enterprise',
      logo: '/images/clients/valleyseed.png',
      url: 'https://valleyseedenterprise.com/',
    },
    {
      name: 'Wirdo',
      logo: '/images/clients/wirdo.png',
      url: 'https://wirdo.org/',
    },
    {
      name: 'Ligo Medical',
      logo: '/images/clients/ligo.png',
      url: 'https://ligomedical.com/',
    },
    {
      name: 'Mamos Business',
      logo: '/images/clients/mamos.png',
      url: 'https://mamosbusiness.com/',
    },
    {
      name: 'SADO',
      logo: '/images/clients/sado.png',
      url: 'https://sadosomalia.org/',
    },
  ]

  return (
    <div className='pt-5'>
      <h2 className='fw-bold text-center mt-3'>Our Clients </h2>
      <p className='lead pb-3'>
        The image is important, but the quality with which it is made, even
        more! This is why our work has made a valuable contribution to many
        realities:
      </p>

      <div
        id='carouselExampleControls'
        className='carousel slide animate__bounceIn'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row gy-3'>
              {clients &&
                clients.slice(0, 5).map((client, index) => (
                  <div
                    key={index}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width='100%'
                      height='100%'
                      src={client.logo}
                      alt={client.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row gy-3'>
              {clients &&
                clients.slice(5, 9).map((client, index) => (
                  <div
                    key={index}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width={'100%'}
                      height={'100%'}
                      src={client.logo}
                      alt={client.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div
        id='carouselExampleControls'
        className='carousel slide animate__bounceIn'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row gy-3 mt-5'>
              {clients &&
                clients.slice(5, 9).map((client, index) => (
                  <div
                    key={index}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width='100%'
                      height='100%'
                      src={client.logo}
                      alt={client.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row gy-3'>
              {clients &&
                clients.slice(0, 5).map((client, index) => (
                  <div
                    key={index}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width={'100%'}
                      height={'100%'}
                      src={client.logo}
                      alt={client.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Clients
