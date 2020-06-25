import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {

    handleOptionOneSelect() {
        console.log("option one");
    }

    handleOptionTwoSelect() {
        console.log("option two");
    }

    render() {
         const { question } = this.props;

        return (
            <div>
                <h3>Would you rather...</h3><br></br>

                <button onClick={this.handleOptionOneSelect}>
                    {question.optionOne.text}
                </button><br></br>

                <p>or</p>

                <button onClick={this.handleOptionTwoSelect}>
                    {question.optionTwo.text}
                </button><br></br>
            </div>
        );
    }
}

function mapStateToProps({ questions }, { match }) {
    const { id } = match.params;
    const question = questions[id];

    return {
        question,
    }
}

export default connect(mapStateToProps)(QuestionPage);