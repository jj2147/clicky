import React from 'react';
import './index.css';

function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
            <h1>Score: {props.score}</h1>
        </div>
    )
}

export default Header;