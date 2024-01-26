import React,{useState} from 'react'
import '../styles/Ienrgie.css'
const Inev = () => {

    const [nouveauEtat, setNouveau] = useState('');

    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion nouveau etat du vehicule : ${nouveauEtat}`);
        // Réinitialiser le champ après l'insertion
        setNouveau('');
      };

  return (
    <div className='parent'>
    <div className='ie'>
      <label>Insertion nouvelle Etat du vehicule</label>
      <input
          type="text"
          value={nouveauEtat}
          onChange={(e) => setNouveau(e.target.value)}
          placeholder="Nouvelle etat du vehicule"
      />

      {/* Bouton pour déclencher l'insertion */}
      <button onClick={handleInsertion}>OK</button>
      </div>
</div>
  )
}

export default Inev