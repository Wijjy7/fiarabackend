import React , { useState }from 'react';
import '../styles/Ienrgie.css'

const Parametrage = () => {

    const [Prixminimale, setMini] = useState('');
    const [Prixmax, setMax] = useState('');
    const [Prcon, setPcons] = useState('');




    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion prix minimal : ${Prixminimale}`);
        console.log(`Insertion prix maximal : ${Prixmax}`);
        console.log(`Insertion % de la consomation : ${Prixmax}`);

        
        // Réinitialiser le champ après l'insertion
        setMini('');
        setMax('');
        setPcons('');
      };


    
  return (
    <div className='dashboard--content'>
        <div>
        <label>Parametrage de  la consomation:</label>
            <input
                type="text"
                value={Prixminimale}
                onChange={(e) => setMini(e.target.value)}
                placeholder="prix minimal"
            />
             <input
                type="text"
                value={Prixmax}
                onChange={(e) => setMax(e.target.value)}
                placeholder="prix maximal"
            />
              <input
                type="text"
                value={Prcon}
                onChange={(e) => setPcons(e.target.value)}
                placeholder="% de la consomation"
            />
             <button onClick={handleInsertion}>Valider</button>
        </div>

    </div>
  )
}

export default Parametrage