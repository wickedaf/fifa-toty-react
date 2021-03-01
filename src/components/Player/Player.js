import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const {name, image, salary, position, club} = props.playerInfo;
   
    return (
        <div className="player-card">
            <img src={image} alt=""/>
            <h4>Name: {name}</h4>
            <h4>Position: {position}</h4>
            <h4>Club: {club}</h4>
            <h4>Salary: {salary}</h4>
            <Button variant="dark" onClick={() => props.addHiredPlayer(props.playerInfo)}><FontAwesomeIcon icon={faPlus} /> Hire Player</Button>{' '}
        </div>
    );
};

export default Player;