import Image from 'next/image'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col text-center py-3 footer'>
            Copyright {currentYear} &copy; All Rights Reserved
          </div>
        </div>
      </div>

      <div id='watermark'></div>
    </footer>
  )
}

export default Footer
