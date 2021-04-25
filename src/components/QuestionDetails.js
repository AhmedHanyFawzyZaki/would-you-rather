import React from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import QuestionForm from './QuestionForm';
import QuestionReport from './QuestionReport';

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
            {isAnswered ? <QuestionReport question={question} /> : <QuestionForm question={question} />}
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }) => ({
    authedUser,
    questions,
});

export default connect(mapStateToProps)(QuestionDetails);
