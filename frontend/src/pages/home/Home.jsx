import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex-col">
      <h1 className='text-5xl font-semibold text-center m-3 text-purple-700'>
        Chit-Chat App
      </h1>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
      <footer className="text-center text-black-400 mt-4 mb-0">
        Made by KIRANKUMAR G ❤️ © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Home