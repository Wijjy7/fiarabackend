import React,{useState} from 'react'
import '../styles/carte.css'
const CarteVoiture = () => {
  const [data,setData] =useState([
    {marque:'Audi',Gamme:'Luxe',type:'SUV',Place:'5',Annee:'2022',kilometrique:'50000',Prix:'2500000',Transmition:'Automatique',Energie:'Essence',Cylindre:'V8',puissance:'250cv',motricite:'4'},
]);

const [validation, setValidation] = useState('');
const [refuser, setrefuser] = useState('');



const handleInsertion = () => {
   
    console.log(`Insertion de l'énergie : $validation && $refuser }`);
    
    setValidation('');
    setrefuser('');
  };
  return (
    <div className='carte1' >
          <div className='car'>
            {data.map((item) =>(
              <><p key={index}></p>
              <p>marque :{item.marque}</p>
              <p>Gamme :{item.Gamme}</p>
              <p>type :{item.type}</p>
              <p>Place :{item.Place}</p>
              <p>Annee :{item.Annee}</p>
              <p>kilometrique :{item.kilometrique}</p>
              <p>Prix :{item.Prix}</p>
              <p>Transmition :{item.Transmition}</p>
              <p>Automatique :{item.Automatique}</p>
              <p>Energie :{item.Energie}</p>
              <p>Cylindre :{item.Cylindre}</p>
              <p>puissance :{item.puissance}</p>
              <p>motricite :{item.motricite}</p>
              
              <button onClick={handleInsertion}>validation    </button>
              </>
            ))}
                *
          </div>

    </div>
  )
}

export default CarteVoiture