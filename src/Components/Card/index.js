import React from 'react';
import './index.css';

function Card(props) {
    return(
            <img onClick = {() => props.handleClick(props.img)} className="image" src={props.img} />
    )
}

export default Card;