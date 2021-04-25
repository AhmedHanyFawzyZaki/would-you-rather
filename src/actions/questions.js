import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}
function addQuestionAnswer(questionAnswer) {
    return {
        type: ADD_QUESTION_ANSWER,
        questionAnswer,
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(answer, qid) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        const questionAnswer = { authedUser, qid, answer };
        return saveQuestionAnswer(questionAnswer)
            .then(() => dispatch(addQuestionAnswer(questionAnswer)))
            .then(() => dispatch(hideLoading()))
    }
}