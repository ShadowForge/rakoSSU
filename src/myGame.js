import { GameContext } from "./Game";
import PlayerHand from "./PlayerHand";
import React from 'react';
import ComputerHand from "./ComputerHand"
import Choices from "./Choices";
import WinScreen from "./WinScreen";

export default function MyGame() {
    const game = React.useContext(GameContext);
    const [u, setU] = React.useState(0);
    const [pop, setPop] = React.useState(false);
    const [instruction, setInstruction] = React.useState(false);
    const [started, setStarted] = React.useState(false);


    const handleClick = () => {
        game.startGame();
        setStarted(true);
        setU(u + 1);
    }

    const handleReset = () => {
        game.reset();
        document.getElementById("WinScreen").style.visibility = "hidden";
        setU(u + 1);
        setPop(false);
        setStarted(false);
        handleClick();
    }

    const handleInstructions = () => {
        setInstruction(!instruction);
    }

    const getPlayerStep = () => {
        switch (game.TurnStep) {
            case 0:
                return (
                    <h4>Choose Deck or Discard</h4>
                );
            case 1:
                return (
                    <h4>Choose Keep or Discard</h4>
                );
            case 2:
                return (
                    <h4>Choose card from hand</h4>
                );
            default:
                return (
                    <h4>Computer turn</h4>
                );
        }
    }

    return (
        <>
            <WinScreen handleReset={handleReset} />

            {started && <div id={"menu"}>
                <button onClick={handleInstructions}>Instructions</button>
                <button onClick={started ? handleReset : handleClick}>{started ? "Reset" : "Start"}</button>
            </div>
            }
            {started && <>
                <div className="playerStep">
                    <h2>Player Instruction:</h2>
                    {getPlayerStep()}
                </div>
                <div className={"compMove"}>
                    <h3>Computer's move:</h3>
                    <h4>{game.computerMove}</h4>
                </div>
                <ComputerHand />
                <Choices pop={pop} setPop={setPop} u={u} setU={setU} />
                <PlayerHand setU={setU} u={u} pop={pop} setPop={setPop} />
            </>}
            {!started && <h1 style={{postion: "absolute", top:"30%", fontSize:"5em"}}>Rack-O</h1>}
            {!started && <button style={{ position: "absolute", top: "40%" }} onClick={handleClick}>Start</button>}
            {!started && <button style={{ position: "absolute", top: "50%" }} onClick={handleInstructions}>Instructions</button>}

            <div className={"InstructionBox"} style={{ visibility: instruction ? "visible" : "hidden" }}>
                <h2>Instructions</h2>
                <p>
                    A Racko deck is composed of 60 cards, each numbered 1 to 60. The objective is to be the first player to arrange all of the cards in your rack from lowest to highest.
                    </p>
                <p>
                    To start the game, shuffle the deck and both the user and the computer gets dealt 10 cards.
                    As a player receives each card, he places it in the next available slot in his rack, without rearranging any of them.
                    The goal of each hand is to create a sequence of numbers in ascending order, starting at slot 1.
                </p>
                <p>
                    The top card of the deck is turned over to start the discard pile.
                    A player takes a turn by taking the top card from either the discard or the deck pile, then discarding one from his rack and inserting the new card in its place.
                    The top card in the discard pile is always "visible". And, therefore, the first choice the player has to make is whether to pick the top discard or not.
                    Only if the player chooses to not pick the top discard, do they get to look at the top card in the deck. If the player draws a card from the deck, he may immediately discard it;
                    if he takes the top discard, though, he must put it into his rack.
                </p>
                <p>
                    The first player to get his 10 cards in ascending order calls ”Rack-O!” and wins the hand.
                    <br />
                    Note: Red card on the computer's hand is the last changed card.</p>
                <button onClick={handleInstructions}>Close</button>
            </div>
        </>
    )
}