import React from 'react'
import About from '../About1/About'
import About2 from '../About2/About2'
import Banner from '../Banner/Banner'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Elemantor_Container from '../Elementor_Container/Elemantor_Container'
// import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
import Product from '../Product/Product'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Product/>
      <About/>
      <About2/>
      <Blog/>
      <Elemantor_Container/>
      <Contact/>
    </div>
  )
}

