import React from 'react';
import data from './data.jsx';
import Navbar from '../components/Navbar.jsx';
import Card from '../components/Card.jsx';
import './App.css';

export default function App(){
  const card = data.map(item => {
    return(
      <Card 
        key={item.id}
        item = {item}         
          />  
    )
        
  })
  
  
  return(
    <div className='app--container'> 
      <Navbar />           
      {card}
   
    </div> 

  )
}