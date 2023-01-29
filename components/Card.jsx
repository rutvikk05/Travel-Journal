import React from "react";

export default function Card(props) {

    return (
        <div className='card--container'>
        
        <div className="card--individual">

        <img src = {props.item.imageUrl} className="card--image" />    
        </div>
        <div className ="card--stats">
        <div className="card--location"> 
        <img src="./location.svg" className="location--icon" /> 
        <h6> {props.item.location} </h6> 
        <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>         
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <h6 className = "card--date"> {props.item.startDate} - {props.item.endDate} </h6> 
        <p className = "card--description"> {props.item.description} </p>     
        </div>

                
      
     </div>
      
    )
}