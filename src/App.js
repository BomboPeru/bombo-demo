import React, { Component } from 'react';

import PlayerSelector from './components/player_selector';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Please, select your players:</h1>
                <PlayerSelector kind={'centrocampistas'} />
                <PlayerSelector kind={'centrocampistas'} />
            </div>
        );
    }
}

export default App;
