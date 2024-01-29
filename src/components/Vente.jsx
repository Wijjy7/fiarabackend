import React, { useState }  from 'react';
import '../styles/Annonce.css'



const Vente = () => {
    const [data,setData] =useState([
        {date:'2024-01-13',Vendeur:'Wijjy',Acheteur:'John',Voiture:'bien',Prix:'15500'},
    ]);
   
  return (
    <div className='dashboard--content'>  
   
            <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Vendeur</th>
                                    <th>Acheteur</th>
                                    <th>Voiture</th>
                                    <th>Prix d'achat</th>


                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index) =>(
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.Vendeur}</td>
                                        <td>{item.Acheteur}</td>
                                        <td>{item.Voiture}</td>
                                        <td>{item.Prix}</td>

                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
             </div>
            

    </div>
    

  )
}

export default Vente