import React ,{useState}from 'react'
import '../styles/ietype.css'
const Itype = () => {
   const[typeName,setTypeName]=useState('');

   const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

    
  
    const handleInsertion = () => {
      // Effectuer l'insertion ici, par exemple, en appelant une API
      console.log(`Insertion du type : ${type}`);
      // Réinitialiser le champ après l'insertion
      setTypeName('');
    };

  
    
 

  return (
    <div className='p'>
       <div className='i' >
       <label>Insertion nouveau type:</label>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Sélectionnez une option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      
       <label>Nom:</label>
     
       <input
                type="text"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
                placeholder="Nom du type"
            />

      <button onClick={handleInsertion}>OK</button>
       </div>
    </div>
  )
}

export default Itype