import React from 'react';
import { Select, Icon } from 'antd';
import axios from 'axios';
import blankGif from '../assets/blank.gif';

class PlayerSelector extends React.Component {
    constructor(props) {
        super(props);
        this.kindOfPlayer = props.kind;
        this.onPlayerChange = props.onPlayerChange;

        this.listFetch = this.listFetch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.playersOptions = [];
        this.state = { loading: true, player: null };
    }
    componentDidMount() {
        this.listFetch();
    }
    listFetch() {
        this.setState(prevState => {
            prevState.loading = true;
            return prevState;
        });
        axios.get('http://localhost:9800/api/v1/full').then(resp => {
            const fdata = resp.data;
            for (const team in fdata) {
                const mPlayers = fdata[team][this.kindOfPlayer];
                this.playersOptions = this.playersOptions.concat(mPlayers);
            }
            // console.log(this.playersOptions);
            this.setState(prevState => {
                prevState.loading = false;
                return prevState;
            });
        });
    }
    handleChange(value) {
        this.setState(prevState => {
            return { ...prevState, player: this.playersOptions[value] };
        });
        console.log(`selected ${value}`);
        if (this.onPlayerChange) {
            this.onPlayerChange(this.state.player);
        }
    }
    render() {
        return (
            <div>
                {this.state.loading ? (
                    <Icon type="loading" style={{ marginRight: '8px' }} />
                ) : null}

                <Select
                    style={{ width: 220 }}
                    onChange={this.handleChange}
                    showSearch
                    placeholder="Select your player"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                    {this.playersOptions.map((pl, i) => {
                        return (
                            <Select.Option value={i} key={i}>
                                {pl.team[0].toUpperCase() +
                                    pl.team.substring(1) +
                                    ' - ' +
                                    pl.name}
                            </Select.Option>
                        );
                    })}
                </Select>
                <h2>
                    {this.state.player ? (
                        <div style={{ marginTop: '8px' }}>
                            <img
                                src={blankGif}
                                class={`flag flag-${
                                    this.state.player.nation_code
                                }`}
                                style={{
                                    display: 'inline-block',
                                    marginRight: '10px'
                                }}
                            />
                            <h5 style={{ display: 'inline-block' }}>
                                {this.state.player.nation}
                            </h5>
                        </div>
                    ) : (
                        ''
                    )}
                </h2>
            </div>
        );
    }
}

export default PlayerSelector;
