import React from 'react';
import { useEffect, useState } from 'react';
import playerData from '../../data/player.json';
import Player from '../Player/Player';
import Cart from '../Cart/Cart'
import './Body.css';

const Body = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setData(playerData);
  }, []);

  const addHiredPlayer = (player) => {   
    const newCart = [...cart, player];  
    setCart(newCart);
  };

  return (
      <div>
        <Cart cartInfo={cart}></Cart>
        <div className="player-container">
            {
            data.map( player => <Player key={player.id} addHiredPlayer={addHiredPlayer} playerInfo={player}></Player>)
            }
        </div>
      </div>
  );
};

export default Body;
