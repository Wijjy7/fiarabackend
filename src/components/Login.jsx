import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
    const apiUrl = 'https://voiture-production-247e.up.railway.app/api/log/signin';

    try {
      // const data = axios.toFormData(formData);
      const data = new FormData();
      data.append('email', formData.email); // Assuming email is the email
      data.append('password', formData.password);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data
      };
      const response = await axios.request(config);

      if (response.data.error) {
        // Check if there's an error in the response
        console.error('Erreur lors de la requête:', response.data.error);
        setError(response.data.error);
        setLoading(false);
      } else {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        navigate("/Home")
        setFormData({
          email: '',
          password: '',
        });

      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à railway:', error);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          className='input'
          placeholder="admin"
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          className='input'
          placeholder="admin"
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="submit button" type='submit'>Se connecter</button>
      </form>
    </div>
  );
};
export default Login;
