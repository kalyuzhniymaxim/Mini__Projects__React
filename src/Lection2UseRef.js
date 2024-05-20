import React, { useEffect, useRef, useState } from "react";
import './index.css';

function App() {
    let ulElem;
    const [number, setNumber] = useState([1,2,3,4,5])
    const ulRef = useRef()
    // console.log(ulRef)

    const addNumber = () => {
    const lastNumber = number[number.length -1];
    setNumber([...number, lastNumber +1])
}
const handleScroll = () => {
    console.log('Работает скролл')
}

useEffect(() => {
    ulRef.current.addEventListener('scroll' ,handleScroll)
    
},[])

const removeScroll = () => {
ulRef.current.removeEventListener('scroll', handleScroll)
}
const addScroll = () => {
    ulRef.current.addEventListener('scroll', handleScroll)
    }

return (
    <div>
        <ul ref={ulRef}>
            {number.map((n) => (
                <li key={n}>{n}</li>
            ))}
        </ul>
        <button onClick={addNumber}>Добавить число</button>
        <button onClick={addScroll}>работает скролл</button>
        <button onClick={removeScroll}> не следить за скроллом</button>
    </div>
)
}
export default App
