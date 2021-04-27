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
      clients.filter((client) => client.name.includes(searchWord));
    } catch (error) {
      console.log('Failed to get data from backend');
    }
  };

  useEffect(() => {}, [clients]);

  return (
    <div className='App'>
      <h1>Veterinarian admin - clients</h1>
      <input type='text' value={searchWord.charAt(0).toUpperCase() + searchWord.slice(1)} onChange={(e) => setSearchWord(e.target.value)} />
      <button
        disabled={searchWord.length < 3 ? true : false}
        onClick={() => {
          setClients(null);
          fetchData();
        }}>
        Search
      </button>
      {}
      {clients && clients.map((client, i) => <Client key={i} client={client} searchWord={searchWord} fetchData={fetchData} />)}
    </div>
  );
};

export default App;
