import { useEffect } from 'react'
import Head from 'next/head'

import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'

import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Clients from '../components/Clients'

export default function Home() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = process.env.TAWKTOKEY
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Web Design and Development Solutions In Somalia | websom</title>
        <meta
          name='title'
          content='Web Design and Development Solutions In Somalia | websom'
        />
      </Head>
      <div className='my-5 py-5'>
        <Hero />
        <About />
        <Clients />
        <Services />
        <Process />
        <Contact />
      </div>
    </>
  )
}
