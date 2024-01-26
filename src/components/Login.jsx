import React,{useState} from 'react';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform authentication logic here (e.g., API call)
  
      // For demonstration purposes, log the credentials to console
      console.log('Username:', username);
      console.log('Password:', password);
  
      // Reset the form
      setUsername('');
      setPassword('');
      navigate("/Home");
      // window.location.href = "/Home"
    };
  return (

<div className='log' > 

      <div className='log2'>
      {/* <br />
    <br />
    <br />
    <br />
    <br /> */}

        <h2>Login</h2>
      <form onSubmit={handleSubmit} action='/Home'> 
        <div>
         
          <input
            placeholder='UserName'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
         
          <input
          placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
    
  )
}
export default Login;
