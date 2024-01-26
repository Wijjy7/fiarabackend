import React,{useState} from 'react'
import '../styles/incategorie.css'
const Incategorie = () => {
    const [nouvellecategorie, setNouvellecategorie] = useState('');
        const handleInsertion = () => {
      // Effectuer l'insertion ici, par exemple, en appelant une API
      console.log(`Nom type: ${nouvellecategorie}`);
      // Réinitialiser le champ après l'insertion
      setNouvellecategorie('');
    };



  return (
    <div className='pat'>
      <div  className='fit'>

        <label>Nom:</label>
            <input
              type="text"
              value={nouvellecategorie}
              onChange={(e) => setNouvellecategorie(e.target.value)}
              placeholder="Nom de la categorie"
          />
           

        <button onClick={handleInsertion}>OK</button>
      
    </div>
    </div>
  )
}

export default Incategorie