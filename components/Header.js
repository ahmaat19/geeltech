import Link from 'next/link'
import { FaBlog, FaEnvelope } from 'react-icons/fa'
// import Image from 'next/image'

const Header = () => {
  const guestLinks = (
    <>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        {/* <li className='nav-item '>
          <Link
            className='nav-link  active '
            aria-current='page'
            href='/#about'
          >
            <a className='nav-link  active ' aria-current='page'>
              About
            </a>
          </Link>
        </li>
        <li className='nav-item '>
          <Link
            className='nav-link  active '
            aria-current='page'
            href='/#services'
          >
            <a className='nav-link  active ' aria-current='page'>
              Services
            </a>
          </Link>
        </li>
        <li className='nav-item '>
          <Link
            className='nav-link  active '
            aria-current='page'
            href='/#contact'
          >
            <a className='nav-link  active ' aria-current='page'>
              Contact Us
            </a>
          </Link>
        </li> */}

        <li className='nav-item '>
          <Link className='nav-link  active ' aria-current='page' href='/blog'>
            <a className='nav-link  active ' aria-current='page'>
              <FaBlog className='mb-1' /> Blog
            </a>
          </Link>
        </li>

        {/* <li className='nav-item'>
          <a
            className='nav-link btn btn-primary btn-sm rounded-pill shadow-lg py-1 mt-1 border border-secondary'
            aria-current='page'
            href='mailto:info@websom.dev'
          >
            <FaEnvelope className='icon-color mb-1' /> info@websom.dev
          </a>
        </li> */}
      </ul>
    </>
  )

  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark custom-bg-primary sticky-top'>
        <div className='container'>
          {/* <Link className='navbar-brand' href='/'>
            <a>
              <Image
                priority
                width='40'
                height='40'
                src='/favicon.png'
                className='img-fluid brand-logos'
                alt='logo'
              />
            </a>
          </Link> */}
          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}
          {/* <div className='collapse navbar-collapse' id='navbarSupportedContent'> */}
          <ul className='navbar-nav sr-auto mb-2 mb-lg-0'></ul>
          {guestLinks}
          {/* </div> */}
        </div>
      </nav>
    </>
  )
}

export default Header
