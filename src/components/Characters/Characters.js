import React from 'react';
import './Characters.css';

const Character = props => (
    <div className="card" onClick={element => props.clickEvent(element.target.src)}>
        <img className="card-img-top card-height" src={props.name} alt="" />
    </div>
);

export default Character;