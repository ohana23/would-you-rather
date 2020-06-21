import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        console.log(this.props);
        
        const { showUnanswered, authedUser } = this.props;
        const author = this.props.author.name;
        const optionOne = this.props.question.optionOne;
        const optionTwo = this.props.question.optionTwo;
        const isQuestionAnswered = 
            optionOne.votes.includes(authedUser) 
            || optionTwo.votes.includes(authedUser);
        const questionHTML = <div>
                {author} asks 
                <br></br>
                Would you rather...
                <br></br>
                {optionOne.text}
                <br></br>
                {optionTwo.text}
                <br></br>
                <br></br>
            </div>
        
        if (isQuestionAnswered) {
            console.log('ANSWERED')
        }

        // if we wanna see unanswered questions
            // show a question if it is not answered
            // show nothing if it is answered
        // if we wanna see answered questions
            // show nothing if it is not answered
            // show nothing if it is answered

        // if showUnanswered
            // !isQuestionAnswered ? <div></div> : <h3>NOTHING</h3>
        // if !showUnanswered
            // isQuestionAnswered ? <div></div> : <h3>NOTHING</h3>

        return (
            <div>
                {/* Show this question if 'unanswered' is toggled and this question is unanswered. */}
                { (showUnanswered && !isQuestionAnswered) 
                    ? questionHTML
                    : <div></div> 
                }
                {/* Show this question if 'answered' is toggled and this question is answered. */}
                { (!showUnanswered && isQuestionAnswered) 
                    ? questionHTML
                    : <div></div> 
                }
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