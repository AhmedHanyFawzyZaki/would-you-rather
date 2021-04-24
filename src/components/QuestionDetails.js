import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import NotFound from './NotFound';

function QuestionDetails(props) {
    const questionID = props.match.params.id;
    const { questions } = props;
    if (!questions[questionID]) {
        return <NotFound />;
    }
    const question = questions[questionID];
    const isAnswered = question.optionOne.votes.includes(props.authedUser) || question.optionTwo.votes.includes(props.authedUser);

    return (
        <div>
            {isAnswered ? "Question report" : "question form"}
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }) => ({
    authedUser,
    questions,
});

export default connect(mapStateToProps)(QuestionDetails);
