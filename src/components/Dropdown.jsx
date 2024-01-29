import React, {useState, useEffect, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../assets/style.css';


const Dropdown = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          Insertion
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem  path={"/categorie"} text = {"Categorie "}/>
            <DropdownItem path={"/couleur"} text = {"Couleur"}/>
            <DropdownItem path={"/transmition"} text = {"Transmition"}/>
            <DropdownItem path={"/marque"} text = {"Marque"}/>
            <DropdownItem path={"/modele"} text = {"Modele"}/>
            <DropdownItem path={"/equipement"} text = {"Equipement"}/>
            <DropdownItem path={"/pays"} text = {"Pays"}/>
            <DropdownItem path={"/energie"} text = {"N Energie"}/>
            <DropdownItem path={"/etatvehicule"} text = {"Nouveau Etat de Vehivule "}/>

            
          </ul>
        </div>
      </div>
  );
};
function DropdownItem(props){
    return(
      <Link to={props.path} className='dropdownItem'>
        <li className='dropdownItem'>
          {props.text}
        </li>
      </Link>
    );
   
  }
export default Dropdown;