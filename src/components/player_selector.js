import React from 'react';
import { Select } from 'antd';
import axios from 'axios';

class PlayerSelector extends React.Component {
    constructor(props) {
        super(props);
        this.kindOfPlayer = props.kind;
        this.listFetch = this.listFetch.bind(this);
        this.playersOptions = [];
        this.state = { loading: true, player: {} };


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
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Select style={{ width: 220 }} onChange={this.handleChange}>
                {this.playersOptions.map((pl, i) => {
                    return (
                        <Select.Option
                            value={pl.name.toLowerCase().replace(' ', '_')} 
                            key={i}
                        >
                            {pl.nation} - {pl.name}
                        </Select.Option>
                    )
                })}
            </Select>
        );
    }
}

export default PlayerSelector;
