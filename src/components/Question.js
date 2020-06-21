import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const author = this.props.author.name;
        const optionOne = this.props.question.optionOne;
        const optionTwo = this.props.question.optionTwo;

        return (
            <div>
                {author} asks <br></br>
                Would you rather... <br></br>
                {optionOne.text} <br></br>
                {optionTwo.text} <br></br><br></br>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    return {
        question: questions[id],
        author: users[question.author],
        authedUser
    }
}

export default connect(mapStateToProps)(Question);