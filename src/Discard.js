import { GameContext } from "./Game";
import React from 'react'


export default function Discard({u, setU}) {
    const game = React.useContext(GameContext);

    const handleClick = () => {
        if (game.turnStep === 0) {
            game.getTopCard(game.discard);
            game.nextTurnStep();
            game.nextTurnStep();
            setU(u + 1)
        } else {
            alert("You already made your choice.");
        }
    }
    return (
        <>
            <h1 style={{
                paddingLeft: "50px",
                position: "relative",
                zIndex: 1
            }}>Discard:</h1>
            <div onClick={() => handleClick()} className="card">
                <h1>{game.discardTop}</h1>
            </div>
        </>
    );
}