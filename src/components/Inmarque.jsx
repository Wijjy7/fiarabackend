import React,{useState} from 'react'
import '../styles/inmarque.css'
const Inmarque = () => {
    const [nouveauMarque, setNomnouveauMarque] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePath(reader.result);
        };
        reader.readAsDataURL(file);
        setImageName(file.name);
      }
    };

    const handleInsertion = () => {
        // Effectuer l'insertion ici, par exemple, en appelant une API
        console.log(`Insertion du nouveau Modele : ${nouveauModele}`);
      
        setNouveauModele('');
      };

      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <div className='pa'>
   <div className='fi'>
      
        <label>Pays</label>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Sélectionnez un pays</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label>Nom:</label>
            <input
              type="text"
              value={nouveauMarque}
              onChange={(e) => setNomnouveauMarque(e.target.value)}
              placeholder="Nom du marque"
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />

            <button onClick={handleInsertion}>OK</button>
            </div>
    </div>
  )
}

export default Inmarque;