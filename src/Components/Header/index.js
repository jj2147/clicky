import React from 'react';
import './index.css';

function Header(props){
    return(
        <div className="header">
            <div>{props.title}</div>
            <div>Score: {props.score}</div>
        </div>
    )
}

export default Header;