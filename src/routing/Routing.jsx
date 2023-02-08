import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { NavMenu } from '../components/layout/NavMenu'
import { SideBar } from '../components/layout/SideBar'
import { Create } from '../components/pages/Create'
import { Home } from '../components/pages/Home'
import { Posts } from '../components/pages/Posts'

export const Routing = () => {
    return (
        <BrowserRouter>
        <Header/>
        <NavMenu/>
            {/* DEFINING LAYOUT */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='/create' element={<Create/>}/>
                </Routes>
            </section>

            <SideBar/>
            <Footer/>
        </BrowserRouter>
    )
}