import React from 'react'
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiAnalyse } from 'react-icons/bi';
import '../styles/sidebar.css';
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to={"/Home"}><BiHome className='icon' />
                    Home
                </NavLink>
                <NavLink to={"/Annonce"}><BiTask className='icon' />
                    Annonce
                </NavLink>
                <NavLink to={"#"}> <BiSolidReport className='icon' />
                    <Dropdown />
                </NavLink>
                <NavLink to={"/vente"}> <BiStats className='icon' />
                    Vente
                </NavLink>
                <NavLink to={"/parametrage"}> <BiAnalyse className='icon' />
                    Paramatreage
                </NavLink>
                
                 
            </div>
        </div>

    )
}



export default Sildebar