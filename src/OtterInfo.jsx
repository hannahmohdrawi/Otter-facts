import React from 'react';
import otter from './otter.jpeg'



function OtterInfo(){

    return(
        <div>
            <nav>
                <img src={otter} 
                alt= "happy otter"
                style={{maxWidth:200, width: 300}}
                />
                <h3>Otter Facts</h3>
                <h4>Otter Info - Project 1</h4>


            </nav>

            <main>
                <h1>Funfacts about Otters</h1>
                <ul>
                    <li>An otter is capable of catching prey equal to its own body weight.</li>
                    <li>Otter pups communicate with their mother and siblings using a variety of whistling and murmuring noises.</li>
                    <li>Otters can comfortably swim at about one metre per second.</li>
                    <li>Some otters hold hands while sleeping.</li>
                    <li>Sea otters have some of the thickest fur. </li>
                </ul>


            </main>
        </div>
    )

}

export default OtterInfo;