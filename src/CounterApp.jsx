import React, { useState } from 'react'
import './App.css'


const CounterApp = () => {
    // Hook
    const [Count, setCount] = useState(0);
    // Decrement Function
    const DecreFunc = () => {
        if (Count >= 1) {
            setCount(Count - 1);
        }
        else {
            alert("You Can't go Below this")
        }
    }
    // Increment Function
    const IncreFunc = () => {
        setCount(Count + 1);
    }
    // Reset Function
    const resetFunc = () => {
        setCount(0)
    }
    // Return
    return (
        <div className="mainDiv text-center">
            <div className="div shadow">
                <div className="bg-dark text-white">
                    <h1 className=" font-weight-bold">{Count}</h1>
                </div>
                <div className="pt-4">
                    <button onClick={DecreFunc} className="buttn p-2 m-2 bg-success">Decrmeant</button>
                    <button onClick={IncreFunc} className="buttn p-2 m-2 bg-primary">Increment</button>
                </div>
                <button onClick={resetFunc} className="buttn p-2 m-2 bg-danger">Reset</button>
            </div>
        </div>
    )
}

export default CounterApp;