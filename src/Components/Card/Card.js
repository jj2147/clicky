import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div>
            <img onClick = {() => props.handleClick(props.img)} className="image" src={props.img} />
        </div>    
    )
}

export default Card;