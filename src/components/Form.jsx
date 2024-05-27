import React, { useState } from "react";


export const Form=({colorsSquares, setColorsSquares})=>{
    const[valorInput, setValorInput]= useState("")
    const agregarCuadro= (event)=>{
        event.preventDefault()
        const newSquare= [...colorsSquares, valorInput]
        setColorsSquares(newSquare)
        console.log(colorsSquares)
    }

    return(
        <form onSubmit={agregarCuadro} >
            <label>
                Color
            </label>
            <input placeholder="p.e: lavender"  autoComplete="off" type="text" id="color" name="color" onChange={(e)=>{setValorInput(e.target.value)}}/>
            <button id="btn" >Add</button>
        </form>
    )
}