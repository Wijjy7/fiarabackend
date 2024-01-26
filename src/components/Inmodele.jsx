import React,{useState} from 'react'
import '../styles/ietype.css'

const Inmodele = () => {
    const [nouveauModele, setNouveauModele] = useState('');

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion du nouveau Modele : ${nouveauModele}`);
        // Réinitialiser le champ après l'insertion
        setNouveauModele('');
      };
  return (
    <div className='p'>
        <div className='i' >
        <label>Insertion nouveau type:</label>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Sélectionnez une marque</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label>Nom:</label>
      
      <input
                type="text"
                value={nouveauModele}
                onChange={(e) => setNouveauModele(e.target.value)}
                placeholder="Nom du nouveau modele"
            />
            <button onClick={handleInsertion}>OK</button>
            </div>
    </div>
  )
}

export default Inmodele