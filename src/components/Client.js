import React from 'react';
import Pet from './Pet.js';

function Client({ client, fetchData }) {
  return (
    <div>
      <h2>{client.name}</h2>
      {client.pets.map((pet, i) => (
        <Pet pet={pet} key={i} client={client} fetchData={fetchData} />
      ))}
    </div>
  );
}

export default Client;
