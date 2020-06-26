import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
    render() {
        const { name, avatarURL } = this.props.author;
        const { optionOne, optionTwo, id } = this.props.question;

        return (
                <Link className="question-link" to={`/questions/${id}`}>
                    <div className="user-details">
                        <img src={avatarURL} alt='avatar profile'/><br></br><br></br>
                        {name}
                    </div>

                    <div className="answer-options">
                        <h3>Would you rather...</h3>
                        <div className="option">{optionOne.text}</div>
                        <h3>or</h3>
                        <div className="option">{optionTwo.text}</div>
                    </div>

                    <div className="space">
                    </div>
                </Link>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    
    return {
        question,
        author: users[question.author],
        authedUser
    }
}

export default connect(mapStateToProps)(Question);