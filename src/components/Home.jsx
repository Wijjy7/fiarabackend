import React from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import '../styles/stat.css';

function Home() {
  const statistiques = {
    mois: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    nombreUtilisateurs: [150, 180, 200, 220, 250, 280, 300],
    nombreVentes: [20, 25, 30, 22, 28, 35, 40],
    chiffreAffaires: [2000, 2500, 3000, 2200, 2800, 3500, 4000],
    nombreAnnonces: [100, 120, 130, 110, 140, 160, 180],
    statistiquesMarques: {
      MarqueA: [10, 12, 15, 8, 14, 18, 20],
      MarqueB: [8, 10, 12, 7, 11, 15, 18],
      MarqueC: [5, 8, 10, 6, 9, 12, 15],
    },
  };

  return (

    <div className='dashboard--content'>
      
      <div className='charts'>
        {/* BarChart pour le nombre d'utilisateurs et le nombre de ventes */}
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            width={500}
            height={300}
            data={statistiques.mois.map((mois, index) => ({
              mois,
              nombreUtilisateurs: statistiques.nombreUtilisateurs[index],
              nombreVentes: statistiques.nombreVentes[index],
            }))}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='mois' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='nombreUtilisateurs' fill='#721900' name='Nombre utilisateurs' />
            <Bar dataKey='nombreVentes' fill='#3a2bed' name='Nombre de ventes' />
          </BarChart>
        </ResponsiveContainer>

        {/* LineChart pour le chiffre d'affaires */}
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            width={500}
            height={300}
            data={statistiques.mois.map((mois, index) => ({
              mois,
              chiffreAffaires: statistiques.chiffreAffaires[index],
            }))}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='mois' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='chiffreAffaires' stroke='#3a2bed' name='Affaire' affaires />
          </LineChart>
        </ResponsiveContainer>

        {/* LineChart pour le nombre d'annonces */}
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            width={500}
            height={300}
            data={statistiques.mois.map((mois, index) => ({
              mois,
              nombreAnnonces: statistiques.nombreAnnonces[index],
            }))}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='mois' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='nombreAnnonces' stroke='#721900' name='Annonce' annonces />
          </LineChart>
        </ResponsiveContainer>

        {/* LineChart pour les statistiques de vente par marque */}
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            width={500}
            height={300}
            data={statistiques.mois.map((mois, index) => ({
              mois,
              MarqueA: statistiques.statistiquesMarques.MarqueA[index],
              MarqueB: statistiques.statistiquesMarques.MarqueB[index],
              MarqueC: statistiques.statistiquesMarques.MarqueC[index],
            }))}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='mois' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='MarqueA' stroke='#721900' name='Marque A' />
            <Line type='monotone' dataKey='MarqueB' stroke='#3a2bed' name='Marque B' />
            <Line type='monotone' dataKey='MarqueC' stroke='#ffc658' name='Marque C' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Produits</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Clients</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Annonces</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
