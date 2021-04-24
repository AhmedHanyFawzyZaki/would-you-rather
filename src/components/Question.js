import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



function Question(props) {
    const { questions, questionID } = props;
    const author = props.users[questions[questionID].author];
    const question = questions[questionID];

    return (
        <div className="question-card">
            <div className="card-header">
                <h3 className="author-name">{author.name} asks</h3>
            </div>

            <div className="card-details">
                <div className="user-img">
                    <img className="" src={author.avatarURL} alt={`${author.name}'s avatar`} />
                </div>
                <div className="question-details">
                    <h4 className="">Would you rather</h4>
                    <p className="">
                        <span>...{question.optionOne.text}...</span>
                    </p>
                    <Link to={`/questions/${question.id}`} type="button" className="poll">
                        View Poll
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ users, questions }) => ({
    users,
    questions,
});

export default connect(mapStateToProps)(Question);
