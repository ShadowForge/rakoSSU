import React from 'react';
import { GameContext } from "./Game";

export default function MyPopUp({ pop, setPop }) {

    const game = React.useContext(GameContext);
    const handleKeep = () => {
        if (game.TurnStep === 1) {
            game.nextTurnStep();
        } else {
            alert("Click on a card in your hand to replace.")
        }
    }

    const handleDiscard = () => {
        if (game.TurnStep === 1) {
            game.addCardToDiscard(game.drawnCard);
            game.nextTurnStep();
            game.nextTurnStep();
            setPop(false);
        } else {
            alert("You already chose keep. You need to choose a card from your hand.")
        }
    }
    return (
        <>
            <div className="popUp" style={{ visibility: pop ? "visible" : "hidden" }}>
                <p>Click on keep or discard. Then select one of your cards.</p>
                <h3>Drawn Card:</h3>
                <div style={{position: "absolute", left:"35%", top:"30%"}} className={"card"}>
                    <h1>{game.drawnCard}</h1>
                </div>
                <button style={{position: "absolute", left:"20%", bottom:"5%"}} onClick={handleKeep}>Keep</button>
                <button style={{position: "absolute", right:"20%", bottom:"5%"}} onClick={handleDiscard}>Discard</button>
            </div>
        </>
    )
}