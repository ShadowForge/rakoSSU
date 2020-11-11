import React from 'react'
import { GameContext } from "./Game";

export default function WinScreen({handleReset}) {
    const game = React.useContext(GameContext);

    return (
        <div id={"WinScreen"} style={{visibility: "hidden", width: "300px", height: "300px", backgroundColor:"tan", position: "absolute", zIndex:2, top: "30%", left:"40%", border: "1px solid black", borderRadius:"25px"}}>
            <h1>{game.winner}</h1>
            <h1>Wins!!!</h1>
            <button onClick={handleReset}>Play again?</button>
        </div>
    )
}