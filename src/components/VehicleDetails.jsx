import React from 'react';

const VehicleDetails = ({ name, model, year, description, onValidate, onReject }) => (
  <div className="vehicle-details">
    <h2>{name}</h2>
    <p>Modèle: {model}</p>
    <p>Année: {year}</p>
    <p>Description: {description}</p>
    <div className="button-container">
      <button onClick={onValidate}>Valider</button>
      <button onClick={onReject}>Refuser</button>
    </div>
  </div>
);

export default VehicleDetails;
