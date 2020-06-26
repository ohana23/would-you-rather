import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAnswerToQuestion } from '../actions/questions';

class QuestionPage extends Component {
    constructor(props) {
        super(props);

        this.handleOptionOneSelect = this.handleOptionOneSelect.bind(this);
        this.handleOptionTwoSelect = this.handleOptionTwoSelect.bind(this);
    }

    handleOptionOneSelect() {
        this.props.handleAnswerSelect('optionOne');
    }

    handleOptionTwoSelect() {
        this.props.handleAnswerSelect('optionTwo');
    }

    render() {
        const { 
            question, 
            answer, 
            author, 
            optionOneScore,
            optionTwoScore,
            optionOnePercentage, 
            optionTwoPercentage, 
            votesSum,
            pathNotFound
        } = this.props;

        if (pathNotFound) {
            return (<Redirect to="/404" />)
        }

        return (
            <div className="question-page">
                <div className="question-info">
                    <img src={author.avatarURL} alt='avatar profile'/><br></br><br></br>
                    {author.name}
                </div>

                {answer
                    ?
                    <div className="question-results">
                        <h3>Would you rather...</h3>
                        <div className={answer === 'optionOne' ? 'option-results highlighted' : 'option-results'}>
                            {question.optionOne.text}
                            <h3 className="percentage">{optionOnePercentage}%</h3>
                            <p className="ratio">{optionOneScore} out of {votesSum}</p>
                        </div>

                        <div className={answer === 'optionTwo' ? 'option-results highlighted' : 'option-results'}>
                            {question.optionTwo.text}
                            <h3 className="percentage">{optionTwoPercentage}%</h3>
                            <p className="ratio">{optionTwoScore} out of {votesSum}</p>
                        </div>
                    </div>
                    :
                    <div className="question-options">
                        <h3>Would you rather...</h3>
                        <button onClick={this.handleOptionOneSelect}>
                            {question.optionOne.text}
                        </button>
                        <h3>or</h3>
                        <button onClick={this.handleOptionTwoSelect}>
                            {question.optionTwo.text}
                        </button>
                    </div>
                }

            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
    const { id } = match.params;
    const answers = users[authedUser].answers;
    const question = questions[id];
    let pathNotFound = false;

    if (question) {
        var optionOneScore = question.optionOne.votes.length;
        var optionTwoScore = question.optionTwo.votes.length;
        var votesSum = optionTwoScore + optionOneScore;
    } else {
        pathNotFound = true;
    }

    return {
        question,
        answer: answers.hasOwnProperty(id) ? answers[id] : null,
        author: question ? users[question.author] : null,
        optionOneScore,
        optionTwoScore,
        optionOnePercentage: (100 * (optionOneScore/votesSum)).toFixed(0),
        optionTwoPercentage: (100 * (optionTwoScore/votesSum)).toFixed(0),
        votesSum,
        pathNotFound
    }
}

function mapDispatchToProps(dispatch, { match }) {
    const { id } = match.params;

    return {
        handleAnswerSelect: (answer) => {
            dispatch(handleAnswerToQuestion(id, answer));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);