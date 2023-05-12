import React from 'react'
import Footer from './footer/footer';
import Header from './header/header';
type LayoutType ={
    children: React.ReactNode;
}
const Layout = ({children}:LayoutType) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>

  )
}

export default Layout