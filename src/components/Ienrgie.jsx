import React , { useState }from 'react'
import '../styles/Ienrgie.css'
const Ienrgie = () => {
    const [energyName, setEnergyName] = useState('');

    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion de l'énergie : ${energyName}`);
        // Réinitialiser le champ après l'insertion
        setEnergyName('');
      };

  return (
    <div className='parent'>
          <div className='ie'>
            <label>Nom de l'énergie:</label>
            <input
                type="text"
                value={energyName}
                onChange={(e) => setEnergyName(e.target.value)}
                placeholder="Nom de l'énergie"
            />

            {/* Bouton pour déclencher l'insertion */}
            <button onClick={handleInsertion}>OK</button>
            </div>
    </div>
  )
}

export default Ienrgie