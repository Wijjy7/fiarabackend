import React,{useState} from 'react'

import '../styles/icatmarque.css';

const Icatmarque = () => {
    const [catMarque, setCatMarque] = useState('');
     
    const handleInsertion = () => {
      // Effectuer l'insertion ici, par exemple, en appelant une API
      console.log(`Nom type: ${catMarque}`);
      // Réinitialiser le champ après l'insertion
      setCatMarque('');
    };


  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  
  return (
    <div className='parent1'>
              <div className='ie1'>
         <label>Nom:</label>
      <input
                type="text"
                value={catMarque}
                onChange={(e) => setCatMarque(e.target.value)}
                placeholder="Nom"
            />
             <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkedItems.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>

      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkedItems.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>

      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkedItems.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>

      <p>Options sélectionnées : {Object.keys(checkedItems).filter(key => checkedItems[key]).join(', ')}</p>
           
      <button onClick={handleInsertion}>OK</button>
      </div>
      </div>
    
  )
}

export default Icatmarque