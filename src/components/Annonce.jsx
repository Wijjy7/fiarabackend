import React, { useState } from 'react';
import '../styles/Annonce.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get } from '../axios_utils'


function Annonce() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const representativeBodyTemplate = (rowData) => {
        return rowData.marque;
    };

    const bodyModel = (rowData) => {
        return rowData.model;
    }

    const bodyCategorie = (rowData) => {
        return rowData.categorie;
    }

    const bodyPrix = (rowData) => {
        return rowData.prix;
    }

    const detail = (rowData) => {

        return (
            <Link className='detail' to={'/Detail_Client/' + rowData.id}>
                {rowData.verified = 'Voir detail'}
            </Link>
        );
    };

    const convertDate = (rowData) => {
        const timestamp = rowData.date;
        const date = new Date(timestamp);
        const formatted = date.toLocaleString();
        return formatted;
    };

    const bodyDate_annonce = (rowData) => {
        const timestamp = rowData.date_annonce;
        const date = new Date(timestamp);
        const formatted = date.toLocaleString();
        return formatted;
    }

    const actionTemplate = (rowData) => {
        return (
            <div>
                {/* Validate Button */}
                <Button
                    label='Valider'
                    icon='pi pi-check'
                    onClick={() => handleValidation(rowData.id_annonce)}
                />
                {/* Refuser Button */}
                <Button
                    label='Refuser'
                    icon='pi pi-times'
                    onClick={() => handleRefusal(rowData.id_annonce)}
                    className='p-button-danger'
                />
            </div>
        );
    };

    const handleValidation = async (id) => {
        const url = `https://voiture-production-247e.up.railway.app/api/annonce/validation/${id}`;
        const token = localStorage.getItem('token');
    
        try {
            const config = {
                method: 'post',
                url: url,
                headers: {
                    'authorization': token
                },
            };
    
            const response = await axios.request(config);
            console.log(response.data);
            navigate("/Home")
        } catch (error) {
            console.error('Error validating announcement:', error);
        }
    };

    const handleRefusal = async (id) => {
        const url = `https://voiture-production-247e.up.railway.app/api/annonce/refus/${id}`;
        const token = localStorage.getItem('token');
        
        try {
            let config = {
                method: 'post',
                url: url,
                headers: {
                    'authorization': token
                },
            };
            
            const response = await axios.request(config);
            console.log(response.data);
            navigate("/Home")
            // Handle the response as needed
        } catch (error) {
            console.error('Error refusing announcement:', error);
            // Handle errors, e.g., show an error message to the user
        }
    };
    

    useEffect(() => {
        setTimeout(() => {
            get('https://voiture-production-247e.up.railway.app/api/annonce_details/annonceNonValide')
                .then(response => {
                    setData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, 1000);
    }, []);



    return (
        <div className='dashboard--content' >

            <div className="input-card">
                <h4 className="annonce-title" style={{}}>Liste des annonces</h4>
                <DataTable className="custom-datatable" value={data}
                    size="small"
                    paginator rows={10}
                    dataKey="id"
                    tableStyle={{ minWidth: '15rem', width: '200px', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                    emptyMessage="Donnees en attentes">
                    <Column className='column' header="Marque" style={{ minWidth: '14rem' }} body={representativeBodyTemplate} />
                    <Column className='column' header="Model" style={{ minWidth: '14rem' }} body={bodyModel} />
                    <Column className='column' header="Categorie" style={{ minWidth: '14rem' }} body={bodyCategorie} />
                    <Column className='column' header="Prix" style={{ minWidth: '14rem' }} body={bodyPrix} />
                    <Column className='column' header="Date" style={{ minWidth: '14rem' }} body={bodyDate_annonce} />
                    <Column header="Actions" body={actionTemplate} />
                </DataTable>
            </div>


        </div>


    )
}

export default Annonce