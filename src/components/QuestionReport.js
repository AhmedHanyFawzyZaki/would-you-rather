import React from 'react';
import { connect } from 'react-redux';

function QuestionInfo(props) {
    const { question, authedUser, users } = props;
    const author = users[question.author];
    let currentUserAnswer = null;

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercent =
        optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoPercent =
        optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

    if (question.optionOne.votes.includes(authedUser)) {
        currentUserAnswer = 'optionOne';
    } else if (question.optionTwo.votes.includes(authedUser)) {
        currentUserAnswer = 'optionTwo';
    }

    const formattedOptions = [
        {
            name: 'optionOne',
            value: question.optionOne.text,
            totalVotes,
            optionVotes: optionOneVotes,
            percent: optionOnePercent,
            currentUserAnswer,
        },
        {
            name: 'optionTwo',
            value: question.optionTwo.text,
            totalVotes,
            optionVotes: optionTwoVotes,
            percent: optionTwoPercent,
            currentUserAnswer,
        },
    ];

    return (
        <div className="question-card table-div">
            <div className="card-header">
                <h4>Asked by {author.name}</h4>
            </div>
            <div className="card-details report-details">
                <div className="user-img report-user-img">
                    <img src={author.avatarURL} alt={`avatar of ${author.name}`} />
                </div>
                <div className="question-details custom-style-report">
                    <h4>Results:</h4>

                    {formattedOptions.map(option => {
                        const ansClass = currentUserAnswer === option.name ? "my-answer" : ""
                        return <div key={option.name} className={`reportOption ${ansClass}`} >
                            <p>Would You Rather </p>
                            <p>{option.value}</p>
                            <div className="progress-bar">
                                <div className="inner-bar" style={{ width: `${option.percent}%` }}>{option.percent}%</div>
                            </div>
                            <p className="center">
                                {option.optionVotes} out of {option.totalVotes} votes
                            </p>
                            {ansClass === "my-answer" ? <span className="my-vote">Your Vote</span> : ""}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users,
});

export default connect(mapStateToProps)(QuestionInfo);
