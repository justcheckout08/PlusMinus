import React, { useState } from "react"

function PlusMinus() {

    const [count, setNumber] = useState(0);

    function plusHandler(){
        setNumber(count + 1);
    }
    function minusHandler(){    
        setNumber(count - 1);  
    }

    return (
    <div>
        <h2>{count}</h2>
        <button onClick={minusHandler}>decrement</button>
        <button onClick={plusHandler}>increment</button>
    </div>
    );
}

export default PlusMinus;