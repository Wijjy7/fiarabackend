import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/content.css';
import Annonce from './Annonce';
import Api from './Api';
import Ienrgie from './Ienrgie';
import Icatmarque from './Icatmarque';
import Inev from './Inev';
import Inmarque from './Inmarque';
import Incategorie from './Incategorie';
import Vente from './Vente';
import { Route } from 'react-router-dom';
import Statistiques from './Home';



const Content = ({children}) => {
  return (
    <div className='dashboard'>
    <div className='dashboard--content' >
    <div className="content" >
        <ContentHeader />
        
      
       {children}
    </div>
    </div>
    </div>
  )
  
};

export default Content;