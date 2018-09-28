import React from 'react';
import './joke-text.css';

export default class JokeText extends React.Component {
    render() {
        return(
            <div className="container-jokes">
                <img src="https://dummyimage.com/600x400/000/fff" alt="norris-image"/>
                <p>
                    Now that there is the Tec-9, a crappy spray gun from South Miami.
                    This gun is advertised as the most popular gun in American crime. 
                    Do you believe that shit? It actually says that in the little book 
                    that comes with it: the most popular gun in American crime.
                    Like they're actually proud of that shit.
                </p>
            </div>
        )
    }
}