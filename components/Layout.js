import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container mt-3'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
