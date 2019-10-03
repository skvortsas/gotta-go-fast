import React, { Component } from 'react';
import '../styles/App.css';
import MenList from '../containers/men-list';
import Game from '../containers/game';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Gotta go fast</h1>
                <h2>Choose a skin:</h2>
                <MenList />
                <hr />
                <h2>Now play)</h2>
                <Game />
            </div>
        );
    }
}

export default App;