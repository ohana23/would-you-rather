import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
    render() {
        const author = this.props.author.name;
        const optionOne = this.props.question.optionOne;
        const optionTwo = this.props.question.optionTwo;
        const id = this.props.question.id;

        return (
            <Link to={`/question/${id}`}>
                {author} asks<br></br>
                Would you rather...<br></br>
                {optionOne.text}<br></br>
                {optionTwo.text}<br></br><br></br>
            </Link>
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