import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
    render() {

        const { showUnanswered } = this.props;

        return (
            <div>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question
                                id={id}
                                showUnanswered={showUnanswered}
                            />
                        </li>))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
}

export default connect(mapStateToProps)(Dashboard);