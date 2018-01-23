import React, { Component } from 'react';

import PlayerSelector from './components/player_selector';
import glamorous from 'glamorous';

import { Row, Col } from 'antd';

const Stadium = glamorous.div({
    backgroundColor: '#25BF89',
    padding: '1.2em',
    textAlign: 'center'
});

const Title = glamorous.h1({
    color: 'white',
    padding: '1.2em'
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title>Please, select your players:</Title>
                <Stadium>
                    <Row type="flex" justify="space-around" align="center">
                        <Col span={5}>
                            <h2>
                                Arquero
                            </h2>
                            <PlayerSelector kind={'porteros'} />
                        </Col>
                        <Col span={5}>
                            <h2>Defensas</h2>
                            <PlayerSelector kind={'defensas'} />
                            <PlayerSelector kind={'defensas'} />
                            <PlayerSelector kind={'defensas'} />
                            <PlayerSelector kind={'defensas'} />
                            <PlayerSelector kind={'defensas'} />
                        </Col>
                        <Col span={5}>
                            <h2>Volantes</h2>
                            <PlayerSelector kind={'centrocampistas'} />
                            <PlayerSelector kind={'centrocampistas'} />
                            <PlayerSelector kind={'centrocampistas'} />
                            <PlayerSelector kind={'centrocampistas'} />
                            <PlayerSelector kind={'centrocampistas'} />
                        </Col>
                        <Col span={5}>
                            <h2>Delanteros</h2>
                            <PlayerSelector kind={'delanteros'} />
                            <PlayerSelector kind={'delanteros'} />
                            <PlayerSelector kind={'delanteros'} />
                            <PlayerSelector kind={'delanteros'} />
                            <PlayerSelector kind={'delanteros'} />
                        </Col>
                    </Row>
                </Stadium>
            </div>
        );
    }
}

export default App;
