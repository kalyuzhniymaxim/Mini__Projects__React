import React, { useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <h5>Счётчик 1</h5>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>нажми </button>
                <Count id = {1} value = {count1}/>
            </div>

            <h5> Счётчик 2</h5>
            <div>
                <button onClick={() => setCount2(count2 + 1)}>нажми</button>
                <Count id = {2} value = {count2}/>
                <IsFive value = {count2}/>
            </div>
        </div>
    )
}
export default App