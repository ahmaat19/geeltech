import Image from 'next/image'

const Services = () => {
  const services = [
    {
      id: 1,
      image: '/images/web_design.png',
      title: 'Web Design',
      description:
        'Powerful web design that will out-perform your strongest competitors.',
    },
    {
      id: 2,
      image: '/images/development.png',
      title: 'Development',
      description:
        ' Custom programming for most complex functions you can think.',
    },
    {
      id: 3,
      image: '/images/ecommerce.png',
      title: 'E-commerce',
      description:
        'We build your online store using a flexible, modular platform that allows you to expand your business.',
    },
    {
      id: 4,
      image: '/images/seo.png',
      title: 'SEO Optimization',
      description:
        'Optimizing our web designs to rank on the first page of google is our specialty.',
    },
    {
      id: 5,
      image: '/images/marketing.png',
      title: 'Marketing',
      description:
        'We use strategic marketing tactics that have been proven to work.',
    },
    {
      id: 6,
      image: '/images/branding.png',
      title: 'Branding',
      description:
        'A solid brand strategy, logo and guidelines help you to get you recognized',
    },
  ]
  return (
    <div id='services' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>Check Our Services</h2>
        <div className='row g-3 pt-3'>
          {services.map((service) => (
            <div
              key={service.id}
              className='col-lg-4 col-md-6 col-sm-12 col-12 '
            >
              <div className='card bg-transparent border-0  d-flex align-items-center'>
                <Image
                  priority
                  width='80'
                  height='80'
                  src={service.image}
                  alt={service.title}
                  className='card-img-top img-fluid  mx-auto service-img p-2 '
                />
                <div className='card-body'>
                  <h5 className='card-title custom-text-primary'>
                    {service.title}{' '}
                  </h5>
                  <p className='card-text'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
