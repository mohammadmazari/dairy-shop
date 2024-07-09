import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/footer'
import Lottie from 'react-lottie-player'
import animait from '../animation/404.json'
import MenuHeader from '../components/content/MenuHeader'
import { Link } from 'react-router-dom'
function Page404() {
  return (
    <div className='mt-4 px-2 md:px-0'>
        <Header/>
        <MenuHeader/>
        <div className='mt-20 w-full  rounded-xl  flex flex-col justify-center items-center gap-10'>
            <Lottie loop play animationData={animait}  className='w-[200px] md:w-[400px]'/>
            <Link to="/">
               <button className='bg-[#0c283f] text-white p-4 rounded-xl m-auto text-sm'> بازگشت به صحفه اصلی</button>
            </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Page404
