import React from "react"
import { GameContext } from "./Game";
import MyPopUp from "./MyPopUp";

export default function Deck({ setPop, pop }) {
    const game = React.useContext(GameContext);

    const handleClick = () => {
        if (game.TurnStep === 0) {
            setPop(true);
            game.getTopCard(game.deck);
            game.nextTurnStep();
        } else {
            alert("You already made your choice.");
        }
    }



    return (
        <>
            <h1 style={{
                position: "relative",
                zIndex: 1
            }}>Deck:</h1>
            <div onClick={handleClick} className="card" >
                <h1>?</h1>
            </div>
            <MyPopUp pop={pop} setPop={setPop} />

        </>
    );
}