import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
    render() {
        const { name, avatarURL } = this.props.author;
        const { optionOne, optionTwo, id } = this.props.question;

        return (
            <Link to={`/questions/${id}`}>
                <img src={avatarURL} alt='avatar profile'/><br></br>
                {name} asks<br></br>
                Would you rather...<br></br>
                {optionOne.text}<br></br>
                {optionTwo.text}<br></br><br></br>
            </Link>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    console.log(id)
    return {
        question,
        author: users[question.author],
        authedUser
    }
}

export default connect(mapStateToProps)(Question);