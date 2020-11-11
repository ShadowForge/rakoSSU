import Deck from "./Deck";
import Discard from "./Discard";

export default function Choices({pop, setPop, setU, u}) {
    return (
        <div className="center">
            <Deck pop={pop} setPop={setPop}/>
            <Discard setU={setU} u={u}/>
        </div>
    )
}