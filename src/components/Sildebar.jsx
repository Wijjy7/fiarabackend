import React from 'react'
import { BiHome , BiBookAlt ,BiMessage, BiSolidReport,BiStats,BiTask,BiAnalyse } from 'react-icons/bi';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Annonce from './Annonce';
import Incategorie from './Incategorie';
const Sildebar = () => {
  return (

    <div className="menu" >
        <div className="logo" >
            <BiBookAlt className='logo-icon' />
            <h2>E-FIARA</h2>
        </div>


        <div className="menu--list">
            <a href="/Home"className="item">
                <BiHome className='icon' />
               {/* <Link to={"/Vente"}></Link> */}
                Home
            </a>
            <a href="/Annonce"className="item">
                <BiTask className='icon' />
                Annonce 
            </a>
            <a href="/carte"className="item">
                <BiMessage className='icon' />
                Message
            </a>
            <a href="#"className="item">
                <BiSolidReport className='icon' />
                
                <Dropdown />

                
            </a>
            <a href="/vente"className="item">
                <BiStats className='icon' />
                Vente
            </a>
            <a href="/parametrage"className="item">
                <BiAnalyse className='icon' />
                Paramatreage
            </a>
           
        </div>
    </div>
    
  )
}



export default Sildebar