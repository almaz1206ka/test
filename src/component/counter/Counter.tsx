import React from "react";
import { move } from ".";


export const Counter = () => {


    return (
        <div>
            <p>{move.down}</p>
            <p>{move.up}</p>
            <p>{move.right}</p>
            <p>{move.left}</p>
        </div>
    )
}