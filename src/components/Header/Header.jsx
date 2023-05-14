import React from 'react'
import "./css/Header.css"
import Image from 'next/legacy/image'
import logo from "public/logo.svg"
const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <Image
            alt='logo'
            width={70}
            height={60}
            src={logo}
            objectFit='cover'
            />
        </div>
      <nav className='nav'>
        <ul className='list-nav'>
            <li>STORE</li>
            <li>CARD</li>
            <li>LOGIN</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
