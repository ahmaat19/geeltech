import { useEffect } from 'react'
import Head from 'next/head'

import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'

import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
        <title>Geel Tech | Software Development Company </title>
        <meta
          name='description'
          content=' Geel Tech | Software Development Company'
        />
        <meta
          name='keywords'
          content='software development, web development, web design, seo optimization, marketing branding, ecommerce, geel tech'
        />
        <meta
          name='description'
          content='We are the one of the most effective Web Development Company'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main className='my-5 py-5 container'>
        <Hero />
        <About />
        <Clients />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
