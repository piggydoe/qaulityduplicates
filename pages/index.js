import Head from 'next/head'

import Image from 'next/image'
import Navbar from './components/Navbar'
import Four from './components/4'
import Dunk from './components/Dunk'

export default function Home() {
  return (
    <div className="App h-screen">
      <Head>
        <title>Quality Duplicates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="w-full main-content h-[900px]">
        <div className=' backdrop-blur-[15px] h-full'>
        <div className="h-full items-center flex justify-center">
          <div className="flex flex-col">
            <h1 className='text-white font-bold text-[36pt] underline'>Premium Designer Quality</h1>
            <h1 className='text-center text-white font-semibold text-[18pt]'>At a fraction of the cost!</h1>
            <a href="#shoes" className='p-[8px] border-solid border-white border-2 w-[25%] m-auto my-4 text-white rounded-3xl text-center'>Browse Shoes</a>
          </div>
        </div>
        </div>
      </div>

      <p id="shoes" className='flex items-center text-center leading-[70px] justify-center font-bold text-[36pt]'>Products</p>

      <div  className="shoes">
        <Four/>
        <Dunk/>
      </div>
    </div>
  )
}
