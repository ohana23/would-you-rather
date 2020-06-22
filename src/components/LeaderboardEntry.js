import React, { Component } from 'react';

class LeaderboardEntry extends Component {
    render() {
        const { id, name, avatarURL, questionsAnswered, questionsCreated } = this.props;
        const scoreSum = questionsAnswered + questionsCreated;

        return (
            <div>
                <img src={avatarURL} alt='avatar profile'/><br></br>
                Score: {scoreSum}<br></br><br></br>
                @{id}<br></br>
                {name}<br></br>
                Questions: {questionsCreated}<br></br>
                Answers: {questionsAnswered}<br></br><br></br>
            </div>
        );
    }
}

export default LeaderboardEntry;