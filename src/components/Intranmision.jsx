import React,{useState} from 'react'
import '../styles/Ienrgie.css'


export const Intranmision = () => {
    const [transmition, setTransmition] = useState('');
    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion nouveau etat du vehicule : ${transmition}`);
        // Réinitialiser le champ après l'insertion
        setTransmition('');
      };


  return (
    <div className='parent'>
    <div className='ie'>
      <label>Insertion nouvelle Transmition</label>
      <input
          type="text"
          value={transmition}
          onChange={(e) => setTransmition(e.target.value)}
          placeholder="Nouvelle transmition"
      />

      {/* Bouton pour déclencher l'insertion */}
      <button onClick={handleInsertion}>OK</button>
      </div>
</div>
  )
}
