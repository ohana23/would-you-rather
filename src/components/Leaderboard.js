import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardEntry from './LeaderboardEntry';

class Leaderboard extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <LeaderboardEntry 
                                id={user.id} 
                                name={user.name}
                                avatarURL={user.avatarURL}
                                questionsAnswered={Object.keys(user.answers).length}
                                questionsCreated={user.questions.length}
                            />
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    const scoreSum = (user) => Object.keys(user.answers).length + user.questions.length;
    const usersBestToWorst = Object.values(users)
        .sort((a,b) => scoreSum(b) - scoreSum(a));

    return { 
        users: usersBestToWorst 
    };
}

export default connect(mapStateToProps)(Leaderboard);