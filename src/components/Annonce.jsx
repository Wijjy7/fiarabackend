import React, { useState }  from 'react';
import '../styles/Annonce.css'



const Annonce = () => {
    const [data,setData] =useState([
        {date:'2024-01-13',utilisateur:'Wijjy John',marque:'Audi'},
    ]);

    const [validation, setValidation] = useState('');

    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion de l'énergie : $validation}`);
        // Réinitialiser le champ après l'insertion
        setValidation('');
      };
   
  return (
    <div className='dashboard--content' >  

        <div>Annonce</div>
        
            <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Utilisateur</th>
                                    <th>Marque</th>
                                    <th>Etat</th>


                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index) =>(
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.utilisateur}</td>
                                        <td>{item.marque}</td>
                                        <td><button onClick={handleInsertion}>validation    </button></td>

                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
             </div>
            

    </div>
    

  )
}

export default Annonce