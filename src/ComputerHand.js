import React from 'react'
import { GameContext } from './Game';

export default function Computerhand() {

    const game = React.useContext(GameContext);
 
    return (
        <div className="computer" id="computerHand">
        {game.computer.map((card, index) => 
            <div key={"c"+index} style={{backgroundColor: game.oldCompHand[index] !== game.computer[index] ? "red" : "cornsilk"}} className="card">
                <h1>{card}</h1>
            </div>
        )}
        </div>
    )
}