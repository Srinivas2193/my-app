import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    
<footer class="p-4 mt-12 bg-slate-600 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">iTravel™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
            {/* <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a> */}
            <Link to='/about'> <button  class="mr-4 hover:underline md:mr-6">About</button></Link>
        </li>
        <li>
           <Link to='/policy'> <button  class="mr-4 hover:underline md:mr-6">Privacy Policy</button></Link>
        </li>
        {/* <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li> */}
        <li>
            {/* <a href="#" class="hover:underline">Contact</a> */}
            <Link to='/contact' class="mr-4 hover:underline md:mr-6">Contact</Link>
        </li>
    </ul>
</footer>

  )
}

export default Footer