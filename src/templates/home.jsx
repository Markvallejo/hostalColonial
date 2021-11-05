import React from 'react'
import BannerHome from '../components/banner_home/banner'
import Header from '../components/header/header'
import Menu from '../components/menu_home/menu'
import Services from '../components/services/services'
import Footer from '../components/footer/footer'

const Home = () =>{
    return(
        <>
            <Header />
            <Menu />
            <BannerHome />
            <Services />
            <Footer />
        </>
    )
}

export default Home