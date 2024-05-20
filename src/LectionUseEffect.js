
import React, { useEffect, useState } from "react";

function User() {
    const [name, setName] = useState('Max');
    const [age, setAge ] = useState('2');

    useEffect(() => {
        document.title = `Hello ${name}`
        console.log('useEffect')
    },[name])

    function changeName(event) {
        setName(event.target.value)
    }
    function changeAge(event) {
        setAge(event.target.value)
    }
    
    return (
    <div>
        <h3>Имя : {name}</h3>
        <input type="text" value={name} onChange={changeName} />
        <h3>Возвраст : {age}</h3>
        <input type="text" value={age} onChange={changeAge} />
    </div>
)
}

export default function App() {
return (
    <>
        <User />
    </>
)
}