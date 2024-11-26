import React, { useState } from 'react';
import './Login.css';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerMode, setRegisterMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      const loggedUser = data.data.find((user) => user.email === email);

      if (loggedUser) {
        const expectedPassword = `${loggedUser.first_name}${loggedUser.last_name}`;
        if (password === expectedPassword) {
          setUser(loggedUser);
          localStorage.setItem('user', JSON.stringify(loggedUser));
          alert(`Welcome, ${loggedUser.first_name} ${loggedUser.last_name}!`);
        } else {
          alert('Invalid password!');
        }
      } else {
        alert('Invalid email or user not found!');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email) {
      alert('Please fill out all fields!');
      return;
    }

    // Menggabungkan firstName dan lastName untuk password
    const generatedPassword = `${firstName}${lastName}`;
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password: generatedPassword }),
      });

      if (response.ok) {
        alert(`Registration successful! Your password is: ${generatedPassword}`);
        setRegisterMode(false);
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const renderProfile = () => {
    return (
      <div className="login">
        <h2>{registerMode ? 'Register' : 'Login'}</h2>
        {registerMode && (
          <>
            <input
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!registerMode && (
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <button onClick={registerMode ? handleRegister : handleLogin}>
          {registerMode ? 'Register' : 'Login'}
        </button>
        <p>
          {registerMode
            ? 'Already have an account? '
            : 'Don’t Have an Account? '}
          <button
            onClick={() => setRegisterMode(!registerMode)}
            style={{
              background: 'none',
              border: 'none',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {registerMode ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    );
  };

  return renderProfile();
}

export default Login;
