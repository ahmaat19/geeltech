import Link from 'next/link'
import { FaHome, FaLink, FaMicrophoneAlt } from 'react-icons/fa'

const Widget = () => {
  return (
    <>
      <div className='card border-0 shadow-sm'>
        <div className='card-body'>
          <h6 className='card-title'>
            <Link href='/'>
              <a>Websom </a>
            </Link>{' '}
            is one of the most effective Web Design & Development Companies in
            Somalia
          </h6>
          <p className='card-text'>
            We help the most admired brands in building digital solutions that
            deliver amazing customer experiences
          </p>
        </div>
      </div>
      <ul className='px-0 mt-2'>
        <li className='list-items' style={{ listStyle: 'none' }}>
          <Link href='/blog'>
            <a className='custom-text-primary'>
              <div className='card border-0 bg-transparent'>
                <div className='card-body p-2'>
                  <FaHome className='mb-1' /> Home
                </div>
              </div>
            </a>
          </Link>
        </li>

        <li className='list-items' style={{ listStyle: 'none' }}>
          <Link href='/blog'>
            <a className='custom-text-primary'>
              <div className='card border-0 bg-transparent'>
                <div className='card-body p-2'>
                  <FaMicrophoneAlt className='mb-1' /> Podcast
                </div>
              </div>
            </a>
          </Link>
        </li>

        <li className='list-items' style={{ listStyle: 'none' }}>
          <Link href='/blog'>
            <a className='custom-text-primary'>
              <div className='card border-0 bg-transparent'>
                <div className='card-body p-2'>
                  <FaLink className='mb-1' /> Contact
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Widget
