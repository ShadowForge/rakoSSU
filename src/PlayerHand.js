import React from 'react'
import { GameContext } from './Game';

export default function PlayerHand({setU, u, pop, setPop}) {

    const game = React.useContext(GameContext);
    const handleClick = (card, index) => {
        if (game.TurnStep === 2) {
            game.findAndReplace(game.drawnCard, card, game.human, index);
            game.nextTurnStep();
            setU(u+1);
            setPop(false);
        } else if (game.TurnStep === 1){
            alert("Click keep or Discard.")
        } else if (game.TurnStep === 0) {
            alert("Click on the Deck or Discard piles.")
        }
    }

    return (
        <div className="player" id="playerHand">
            {game.human.map((card, index) =>

                <div key={"p"+index} onClick={() => handleClick(card, index)} className="card">
                    <h1>{card}</h1>
                </div>
            )}
        </div>
    )
}
