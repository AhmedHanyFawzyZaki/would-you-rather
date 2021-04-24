import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;


        if (optionOne.length === 0 || optionTwo.length === 0) {
            alert('Please fill in (option 1, option 2)');
        } else {
            dispatch(handleAddQuestion(optionOne, optionTwo)).then(
                () => {
                    this.setState({
                        optionOne: '',
                        optionTwo: ''
                    })
                    this.props.history.push('/home') //redirect home after saving
                }
            );
        }
    };

    render() {
        return (
            <div className="container">
                <p>Complete the question</p>
                <h2 className="">Would you rather...</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="">
                        <input
                            type="text-area"
                            name="optionOne"
                            placeholder="Enter Option One Text Here"
                            value={this.state.optionOne}
                            onChange={this.handleChange}
                            maxLength="150"
                        />
                        {this.state.optionOne.length > 100 && (
                            <p className="text-red">{150 - this.state.optionOne.length}</p>
                        )}
                    </div>
                    <span>or..</span>
                    <div className="">
                        <input
                            type="text-area"
                            name="optionTwo"
                            placeholder="Enter Option Two Text Here"
                            value={this.state.optionTwo}
                            onChange={this.handleChange}
                            maxLength="150"
                        />
                        {this.state.optionTwo.length > 100 && (
                            <p className="text-red">{150 - this.state.optionTwo.length}</p>
                        )}
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});

export default withRouter(connect(mapStateToProps)(NewQuestion));
