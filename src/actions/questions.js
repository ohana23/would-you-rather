import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addQuestionToUser, saveAnswerToUser } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function saveAnswerToQuestion(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addQuestionToUser(authedUser, question.id))
                dispatch(hideLoading())
            })
    }
}

export function handleAnswerToQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const info = {
            authedUser,
            qid,
            answer
        };

        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveAnswerToQuestion(authedUser, qid, answer))
                dispatch(saveAnswerToUser(authedUser, qid, answer))
            })
    }
}