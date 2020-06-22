import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
    render() {
        const { showUnanswered, authed, unansweredIds, answeredIds } = this.props;

        return (
            <div>
                <h3>{authed.name}</h3>
                {showUnanswered
                    ? <ul>
                        {unansweredIds.map((id) => (
                            <li key={id}>
                                <Question
                                    id={id}
                                />
                            </li>
                        ))}
                    </ul>
                    : <ul>
                        {answeredIds.map((id) => (
                            <li key={id}>
                                <Question
                                    id={id}
                                />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    const authed = users[authedUser];
    const answeredIds = Object.keys(authed.answers)
        .sort((a,b) => (questions[b].timestamp - questions[a].timestamp));
    const unansweredIds = Object.keys(questions).filter(qid => !answeredIds.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
        
    return { answeredIds, unansweredIds, authed }
}

export default connect(mapStateToProps)(Dashboard);