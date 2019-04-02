import React, {useState} from "react"

const App = () => {
    const [numb, setNumb] = useState(0);
    const plus = (a, b) => {
        setNumb(prev => Math.floor(
                          eval(`${prev} ${a} ${b}`)
                        )) // Eval is evil, but still fun ;)
    }
    
    return(
        <div>
            <h1>{numb}</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={() => plus('+', 1)}>+</button>
                <button onClick={() => plus('-', 1)}>-</button>
                <button onClick={() => plus('*', 2)}>x</button>
                <button onClick={() => plus('/', 2)}>/</button>
            </div>
        </div>
    )
}

export default App
