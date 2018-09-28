import React from 'react';

import './dropdown.css'

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
   
    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(categories => {
            this.setState({ categories: categories });
        });
    }

    render() {
        const categories = this.state.categories;
        return(
            <select>
                {categories &&
                    categories.map(category => <option>{category}</option>)
                }
             </select>
                
        )
    }
}