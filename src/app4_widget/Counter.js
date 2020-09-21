import React, { useState } from "react";
//const useState = React.useState

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onButtonClick = () => {
        console.log("hi")
        setCounter(counter + 1)
    }

    // this onClick, directly use handler function, not using arrow function
    return <div>
        <button type="button" onClick={onButtonClick}>click me</button>
        <h2>Counter={counter}</h2>
    </div>
}

export default Counter