import React, { Component } from 'react';

class LeaderboardEntry extends Component {
    render() {
        return (
            <div>{this.props.id}</div>
        );
    }
}

export default LeaderboardEntry;