import React, { useState } from 'react';

function Pet({ pet, fetchData }) {
  const [loading, setLoading] = useState(false);

  const postPetStatus = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('api/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: pet.name, isVaccinated: !pet.isVaccinated }),
    })
      .then((response) => response.json())
      .then(() => setLoading(false));

    fetchData();
  };

  return (
    <div>
      <h3>
        {pet.name} - Vaccinated:{' '}
        <button
          onClick={(e) => {
            postPetStatus(e);
          }}>
          {!loading ? pet.isVaccinated.toString() : '...'}
        </button>
      </h3>
    </div>
  );
}

export default Pet;
