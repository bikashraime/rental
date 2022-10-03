import React from 'react'
import { useEffect } from 'react';
import './snackbar.css'

export default function Snackbar() {
    function myFunction() {
        let x = document.getElementById('snackbar');

        x.className = 'show'

        setTimeout(() => {
            x.className = ' '
        }, 3000)

    }

    useEffect(myFunction, [])

    return (
        <div>
            {/* <button onClick={myFunction}>Show Snackbar</button> */}

            <div id="snackbar">
                <i class="fa-solid fa-person-digging"></i>
                &nbsp;
                Under Construction
            </div>
        </div>
    )
}