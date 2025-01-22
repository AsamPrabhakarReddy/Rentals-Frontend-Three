import React from 'react'
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import ContactOne from '../components/ContactOne';
import ContactTwo from '../components/ContactTwo';
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactOne/>
        <ContactTwo/>
        <Footer />
    </div>
  )
}

export default Contact