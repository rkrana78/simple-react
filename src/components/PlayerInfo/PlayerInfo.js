import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './PlayerInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const PlayerInfo = (props) => {
    const {img, name, position, club_name, salary} = props.player;
    return (
        <div className="playerInfo-container">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p><small>{position}</small></p>
            <h4>{club_name}</h4>
            <p>${salary}</p>
            <button className="main-button btn btn-info text-center pb-4" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus}/> Add Player</button>
        </div>
    );
};

export default PlayerInfo;