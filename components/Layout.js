import Header from './Header'
import Footer from './Footer'
import Meta from '../components/Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main className='container mt-3'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
