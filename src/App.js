import React, { Component } from 'react';

import PlayerSelector from './components/player_selector';
import glamorous from 'glamorous';
import { StyleSheet, css } from 'aphrodite';

import { Row, Col, Button } from 'antd';

const Stadium = glamorous.div({
    backgroundColor: '#25BF89',
    padding: '1.2em',
    textAlign: 'center',
    minHeight: '300px'
});
const StadiumAction = glamorous.div({
    backgroundColor: '#25BFB9',
    padding: '1.2em',
    textAlign: 'center',
    border: 0
});

const Title = glamorous.h1({
    color: 'white',
    padding: '1.2em'
});

const marginBtn = StyleSheet.create({
    left: {
        marginLeft: '5px'
    },
    right: {
        marginRight: '5px'
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.addPLayer = this.addPlayer.bind(this);
        this.subPlayer = this.subPlayer.bind(this);

        this.maxTotalPlayers = 11;

        this.bounds = {
            porteros: [1, 1],
            defensas: [3, 5],
            centrocampistas: [3, 5],
            delanteros: [3, 5]
        };

        this.state = {
            totalPlayers: 0,
            porteros: [],
            defensas: [],
            centrocampistas: [],
            delanteros: []
        };
    }

    addPlayer(type, i) {
        console.log(i);
        if (
            this.state[type].length < this.bounds[type][1] &&
            this.state.totalPlayers < this.maxTotalPlayers
        ) {
            this.setState(prevState => {
                prevState.totalPlayers = prevState.totalPlayers + 1;
                prevState[type].push(<PlayerSelector kind={type} key={i} />);
                return prevState;
            });
        }
    }

    subPlayer(type) {
        if (this.state[type].length > this.bounds[type][0]) {
            this.setState(prevState => {
                prevState.totalPlayers = prevState.totalPlayers - 1;
                prevState[type].pop();
                return prevState;
            });
        }
    }

    render() {
        return (
            <div>
                <Title>Please, select your players:</Title>
                <Stadium>
                    <Row type="flex" justify="space-around" align="center">
                        <Col span={5}>
                            <h2>Arquero</h2>
                            {this.state.porteros.map((sel, i) => {
                                return sel;
                            })}
                        </Col>
                        <Col span={5}>
                            <h2>Defensas</h2>
                            {this.state.defensas.map((sel, i) => {
                                return sel;
                            })}
                        </Col>
                        <Col span={5}>
                            <h2>Centrocampistas</h2>
                            {this.state.centrocampistas.map((sel, i) => {
                                return sel;
                            })}
                        </Col>
                        <Col span={5}>
                            <h2>Delanteros</h2>
                            {this.state.delanteros.map((sel, i) => {
                                return sel;
                            })}
                        </Col>
                    </Row>
                </Stadium>
                <StadiumAction>
                    <Row type="flex" justify="space-around" align="center">
                        <Col span={5}>
                            <Button
                                icon="plus"
                                className={css(marginBtn.right)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.addPlayer(
                                        'porteros',
                                        this.state.totalPlayers
                                    );
                                }}>
                                Add Player
                            </Button>
                            <Button
                                icon="minus"
                                className={css(marginBtn.left)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.subPlayer('porteros');
                                }}>
                                Sub player
                            </Button>
                        </Col>
                        <Col span={5}>
                            <Button
                                icon="plus"
                                className={css(marginBtn.right)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.addPlayer(
                                        'defensas',
                                        this.state.totalPlayers
                                    );
                                }}>
                                Add Player
                            </Button>
                            <Button
                                icon="minus"
                                className={css(marginBtn.left)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.subPlayer('defensas');
                                }}>
                                Sub player
                            </Button>
                        </Col>
                        <Col span={5}>
                            <Button
                                icon="plus"
                                className={css(marginBtn.right)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.addPlayer(
                                        'centrocampistas',
                                        this.state.totalPlayers
                                    );
                                }}>
                                Add Player
                            </Button>
                            <Button
                                icon="minus"
                                className={css(marginBtn.left)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.subPlayer('centrocampistas');
                                }}>
                                Sub player
                            </Button>
                        </Col>
                        <Col span={5}>
                            <Button
                                icon="plus"
                                className={css(marginBtn.right)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.addPlayer(
                                        'delanteros',
                                        this.state.totalPlayers
                                    );
                                }}>
                                Add Player
                            </Button>
                            <Button
                                icon="minus"
                                className={css(marginBtn.left)}
                                onClick={e => {
                                    e.preventDefault();
                                    this.subPlayer('delanteros');
                                }}>
                                Sub player
                            </Button>
                        </Col>
                    </Row>
                </StadiumAction>
            </div>
        );
    }
}

export default App;
