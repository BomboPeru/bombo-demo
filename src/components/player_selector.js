import React from 'react';
import { Select } from 'antd';
import axios from 'axios';

class PlayerSelector extends React.Component {
    constructor(props) {
        super(props);
        this.kindOfPlayer = props.kind;
        this.listFetch = this.listFetch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.playersOptions = [];
        this.state = { loading: true, player: null };


    }
    componentDidMount() {
      this.listFetch();

    }
    listFetch() {
        this.setState(() => {
            return { loading: true };
        });
        axios.get('http://localhost:9800/api/v1/full').then(resp => {
            const fdata = resp.data;
            for (const team in fdata) {
                const mPlayers = fdata[team][this.kindOfPlayer];
                this.playersOptions = this.playersOptions.concat(mPlayers);
            }
            console.log(this.playersOptions);
            this.setState(() => {
                return { loading: false };
            });
        });
    }
    handleChange(value) {
        this.setState((prevState) => {
            return {...prevState, player: this.playersOptions[value]}
        });
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div>
                <Select
                    style={{ width: 220 }}
                    onChange={this.handleChange}
                    showSearch
                >
                    {this.playersOptions.map((pl, i) => {
                        return (
                            <Select.Option
                                value={i}
                                key={i}
                            >
                                {pl.nation} - {pl.name}
                            </Select.Option>
                        )
                    })}
                </Select>
                <h2>{this.state.player?this.state.player.team.toString():''}</h2>
            </div>
        );
    }
}

export default PlayerSelector;
