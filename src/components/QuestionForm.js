import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/questions';

class QuestionForm extends Component {
    state = {
        choice: null,
    };

    handleChange = e => {
        this.setState({ choice: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { dispatch } = this.props;
        const qid = this.props.question.id;
        const answer = this.state.choice;

        if (answer !== null) {
            dispatch(handleAnswerQuestion(answer, qid)).then(
                () => {
                    this.props.history.push(`/questions/${qid}`)
                }
            );
        } else {
            alert("Please choose an answer, then submit!");
        }
    };

    render() {
        const { users, question } = this.props;
        const questionAuthor = users[question.author];
        return (

            <div className="question-card table-div">
                <div className="card-header">
                    <h3 className="author-name">{questionAuthor.name} asks</h3>
                </div>

                <div className="card-details form-height">
                    <div className="user-img">
                        <img className="" src={questionAuthor.avatarURL} alt={`${questionAuthor.name}'s avatar`} />
                    </div>
                    <div className="question-details custom-style-report">
                        <h4 className="">Would you rather</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="optionOne"
                                        checked={this.state.choice === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="optionTwo"
                                        checked={this.state.choice === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <input type="submit" className="btn" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ users }, { question }) => ({
    users,
    question
});


export default withRouter(connect(mapStateToProps)(QuestionForm));
