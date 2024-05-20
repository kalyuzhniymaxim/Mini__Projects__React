import React, { useState, useRef } from "react";

function App() {

    const [numbers, setNumbers] = useState([1,2,3,4]);
    const timerRef = useRef();

    const addNumber = () => {

        setNumbers((prev) => [... prev, prev[prev.length - 1] + 1])

    }
    const start = () => {
        timerRef.current = setInterval(addNumber, 1000)
    };
    const stop = () => {
        clearInterval(timerRef.current)
    }
    return (
        <div>
            <ul >
                {numbers.map((n) =>(
                    <li key={n}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Добавить число</button>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
        </div>
    )
}
export default App