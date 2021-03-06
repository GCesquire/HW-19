import React from 'react';
import './Container.css';
import Characters from '../Characters';

const Container = props => (
    <div
        className={
            props ? 'container d-flex flex-wrap justify-content-center' : 'container d-flex flex-wrap justify-content-center'
        }
    >
    {props.Characters.map((x, y) => <Characters name={x} key={y} clickEvent={props.clickEvent} />)}
    </div>
);

export default Container;