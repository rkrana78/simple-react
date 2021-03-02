import React, { useEffect, useState } from 'react';
import playersData from '../../fakeData/playersData.json'
import Budget from '../Budget/Budget';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import './Players.css';


const Players = () => {
   const [players, setPlayers] = useState([]);
   useEffect(() =>{
       setPlayers(playersData);
   }, [])

   const [budget, setBudget] = useState([]);

   const handleAddPlayer = (player) =>{
       const newBudget = [...budget, player];
       setBudget(newBudget);
   }

    
    return (
        <div className="squad-container">
            <div className="players-container">
            {
                players.map(player => <PlayerInfo handleAddPlayer = {handleAddPlayer} player={player}></PlayerInfo>)
            }
            </div>
            <div className="budget-container">
                <Budget budget={budget}></Budget>
            </div>
        </div>
        
    );
};

export default Players;