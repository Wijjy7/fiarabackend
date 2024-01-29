import React, { useState } from 'react';
import '../styles/incategorie.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Incategorie() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom_categorie: '',
  });
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    handleChange(e, formData, setFormData);
    console.log(formData.values);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const url = 'https://voiture-production-247e.up.railway.app/api/categorie/insert';
    const token =localStorage.getItem('token');
    try {
      const data = new FormData();
      data.append('nom_categorie', formData.nom_categorie);
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
        // Check if there's an error in the response
        console.error('Erreur lors de la requête:', response.data.error);
        setError(response.data.error);
        setLoading(false);
      } else {
        console.log('Insert successful:', response.data);
        navigate("/Home")
        setFormData({
          nom_categorie: '',
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à railway:', error);
    }
  }


  return (
    <div className='pat'>
      <div className='fit'>
        <form onSubmit={handleSubmit} method='post'>
          <label>Nom categorie :</label>
          <input
            onChange={handleChange}
            name="nom_categorie"
            type="text"
            className="form__field"
            placeholder="Categorie"
            required=""
            value={formData.nom_categorie}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="submit button" type='submit'>Enregistrer</button>
        </form>
      </div>
    </div>

  )
}

export default Incategorie