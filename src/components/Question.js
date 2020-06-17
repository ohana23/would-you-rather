import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        console.log(this.props);
        const askedBy = this.props.question.author;
        const optionOne = this.props.question.optionOne.text;
        const optionTwo = this.props.question.optionTwo.text;
        return (
            <div>
                @{askedBy} asks
                <br></br>
                Would you rather...
                <br></br>
                {optionOne}
                <br></br>
                {optionTwo}
                <br></br><br></br>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, { id }) {

    return {
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(Question);