import React, { useState, useEffect } from 'react'
import '../styles/ietype.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inmodele (){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom_model: '',
  });
  const [error, setError] = useState(null);
  const [brands, setBrands] = useState([]); // State to store the fetched brands
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://voiture-production-247e.up.railway.app/api/marque-models/voir');
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const url = 'https://voiture-production-247e.up.railway.app/api/marque-models/insert';
    const token = localStorage.getItem('token');

    try {
      const data = new FormData();
      data.append('nom_model', formData.nom_model);
      // Add the selected brand to the FormData
      data.append('id_marque', selectedOption);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': token
        },
        data: data
      }

      const response = await axios.request(config);

      if (response.data.error) {
        console.error('Erreur lors de la requête:', response.data.error);
        setError(response.data.error);
        setLoading(false);
      } else {
        console.log('Insert successful:', response.data);
        navigate("/Home");
        setFormData({
          nom_model: '',
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à railway:', error);
    }
  }

  return (
    <div className='p'>
      <div className='i' >
        <form onSubmit={handleSubmit} method='post'>
          <label>Insertion nouveau model:</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="" disabled>Sélectionnez une marque</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          <label>Nouveau model :</label>
          <input
            onChange={handleChange}
            name="nom_model"
            type="text"
            className="form__field"
            placeholder="Model"
            required=""
            value={formData.nom_model}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="submit button" type='submit'>Enregistrer</button>
        </form>
      </div>
    </div>
  )
}

export default Inmodele