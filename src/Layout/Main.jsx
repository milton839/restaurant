import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/Footer/Footer'
import Navigation from '../pages/shared/Navigation/Navigation'

const Main = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main