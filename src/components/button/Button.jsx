import React from 'react';
import './button.css'

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    componentDidMount(category) {
        fetch('https://api.chucknorris.io/jokes/random?category={category}')
        .then(response => response.json())
        .then(jokes => {
            this.setState({ jokes: jokes });
        });
    }

    handleClick() {
       alert("state");
    }

    render() {
        console.log(this.state)
        return(
            <button onClick={this.handleClick}>Search</button>
        )
    }
}