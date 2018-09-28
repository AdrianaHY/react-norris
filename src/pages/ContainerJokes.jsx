import React from 'react';
import Dropdown from '../components/dropdown/Dropdown';
import Button from '../components/button/Button';
import JokeText from '../components/joke-text/JokeText';

import './container-jokes.css';

export default class ContainerJokes extends React.Component {

    render() {
        return(
            <div>
                <div className="search-container">
                    <Dropdown />
                    <Button />
                </div>
                <JokeText />
            </div>  
        )
    }
}
