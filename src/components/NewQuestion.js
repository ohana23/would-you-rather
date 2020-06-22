import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    };

    handleOptionOneChange = (event) => {
        const optionOneText = event.target.value;

        this.setState(() => ({
            optionOneText
        }));
    }

    handleOptionTwoChange = (event) => {
        const optionTwoText = event.target.value;

        this.setState(() => ({
            optionTwoText
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { optionOneText, optionTwoText } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: ''
        }));
    }

    render() {
        const { optionOneText, optionTwoText } = this.state;

        // todo: redirect to dashboard/dashboardtoggle on submit

        return (
            <div>
                <h2>New Question</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>Would you rather...</h3>
                    <textarea
                        placeholder='Option one'
                        value={optionOneText}
                        onChange={this.handleOptionOneChange}
                        maxLength={100} />
                    <h3>or</h3>
                    <textarea
                        placeholder='Option two'
                        value={optionTwoText}
                        onChange={this.handleOptionTwoChange}
                        maxLength={100} />
                        <br></br>
                    <button
                        type='submit'
                        disabled={optionOneText==='' && optionTwoText===''}>
                            Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewQuestion);