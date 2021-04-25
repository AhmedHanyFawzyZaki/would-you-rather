import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router';

class Login extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { value } = this.state;

        this.props.dispatch(setAuthedUser(value));

        const from =
            this.props.location !== undefined && this.props.location.state !== undefined
                ? this.props.location.state.from
                : '/home';
        this.props.history.push(`${from}`); //redirect to home after login
    };

    render() {
        const { users } = this.props;
        const names = Object.keys(users);

        return (
            <div className="container">
                <h2 className="header">Welcome to the Would You Rather App!</h2>
                <p className="text">Please sign in to continue</p>
                <form onSubmit={this.handleSubmit}>
                    <select
                        className="input"
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}
                        placeholder="Please select user to login"
                    >
                        <option value="">Please select user</option>
                        {names.map(name => (
                            <option key={users[name].id} value={users[name].id}>
                                {users[name].name}
                            </option>
                        ))}
                    </select>
                    <input
                        className="btn"
                        type="submit"
                        value="Log In"
                        disabled={this.state.value === ""}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    users,
});

export default withRouter(connect(mapStateToProps)(Login));
