import React, { Component } from 'react';

class LeaderboardEntry extends Component {
    render() {
        const { id, name, avatarURL, questionsAnswered, questionsCreated } = this.props;
        const scoreSum = questionsAnswered + questionsCreated;

        return (
            <div className="leaderboard-entry">
                <div className="user-details">
                    <img src={avatarURL} alt='avatar profile'/>
                    <div className="leaderboard-name">
                        {name}
                    </div>
                    <div className="leaderboard-id">
                        @{id}
                    </div>
                </div>

                <div className="score">
                    <div className="leaderboard-score">
                        Score: {scoreSum}
                    </div>
                </div>

                <div className="score-details">
                    <div className="questions-created">
                        Questions: {questionsCreated}
                    </div>
                    <div className="questions-answered">
                        Answers: {questionsAnswered}
                    </div>
                </div>
            </div>
        );
    }
}

export default LeaderboardEntry;