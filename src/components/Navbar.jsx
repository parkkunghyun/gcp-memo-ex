import React from 'react'
import addIcon from '../images/add.png';
import home from "../images/home.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div className='flex justify-center items-center gap-16 p-4'>
          <Link to="/">
            <img className='w-16 cursor-pointer hover:scale-105 mr-4' src={home} alt="" />
          </Link>
          
          <Link to="/add">
              <img className='w-16 cursor-pointer hover:scale-105' src={addIcon} alt="" />
          </Link>
          
    </div>
  )
}

export default Navbar