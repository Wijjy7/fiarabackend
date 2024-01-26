import React from 'react'
import VehicleDetails from './VehicleDetails';
import '../styles/Api.css'
function Api() {
    const vehicleData = {
        name: 'Nom du véhicule',
        model: 'Modèle XYZ',
        year: '2024',
        description: 'Description détaillée du véhicule.',
      };
    
      const handleValidate = () => {
        alert('Véhicule validé!');
        // Ajoutez ici la logique pour traiter la validation
      };
    
      const handleReject = () => {
        alert('Véhicule refusé!');
        // Ajoutez ici la logique pour traiter le refus
      };
    

    return (
        <div className="Api">
            <header className="Api-header">
                    <h1>Mise en page du véhicule</h1>
                </header>
                <main>
                    <VehicleDetails
                    {...vehicleData}
                    onValidate={handleValidate}
                    onReject={handleReject}
                    />
                </main>
        </div>
    )
}

export default Api