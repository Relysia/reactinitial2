import React, { useState, useEffect } from 'react';
import './App.css';
import Client from './components/Client.js';

const App = () => {
  const [clients, setClients] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`api/clients?search=${searchWord}`);
      const result = await response.json();
      setClients(result);
    } catch (error) {
      console.log('Failed to get data from backend');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(clients);

  return (
    <div className='App'>
      <h1>Veterinarian admin - clients</h1>
      <input type='text' value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      <button>Search</button>
      {clients && clients.map((client) => <Client client={client} />)}
    </div>
  );
};

export default App;
