import React from "react";

let renderCount = 0;

export default function IsFive({value}) {
    console.warn(`isFive render: ${++renderCount}`)

    const getResult = () => {
        let i = 0;
        while (i < 600000) i++
        return value == 5 ? 'это 5' : 'это не 5'
    }
        return (
            <h3>{getResult()}</h3>
        )
}