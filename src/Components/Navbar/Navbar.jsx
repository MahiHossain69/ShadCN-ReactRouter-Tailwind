import React from 'react'
import Logo from "../../assets/logo.png"
import { Badge } from ".././ui/badge"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   

<nav className=" border-gray-200 bg-[#1C1E53]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-8" alt="Flowbite Logo" />
       
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5 text-[#fff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#1C1E53]  md:flex-row md:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0   md:dark:bg-gray-900 md:items-center dark:border-gray-700">
        <Link to="/">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white md:hover:text-blue-700" >Home</a>
        </li>
        </Link>
       <Link to="/about">
       <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</a>
        </li>
       </Link>
        <Link to="/feature">
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">Features</a>
        </li>
        </Link>
        <Link to="/pricing">
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        </Link>
        <Link to="/faq">
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
        </li>
        </Link>
       <Link to="/blog">
       <li>
          <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
        </li>
       </Link>
        <Link to="/contact">
        <Badge variant="my" >Contact us</Badge>
        </Link>

      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
