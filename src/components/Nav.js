import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signOut } from '../actions/authedUser';

class Nav extends Component {
    handleSignOut = () => {
        const { dispatch } = this.props;
        dispatch(signOut());
        this.props.history.push({
            pathname: '/login',
            state: { from: '/home' },
        });
    };


    render() {
        const { loggedUser } = this.props;
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
                    </li>

                </ul>
                {this.props.authedUser && (
                    <div>
                        <span className="">Hello, {loggedUser.name} </span>
                        <img className="nav-img" src={loggedUser.avatarURL} alt={`avatar of ${loggedUser.name}`} />
                        
                        <button type="button" className="logout-btn" onClick={this.handleSignOut}>
                            Log Out
                        </button>
                    </div>
                )}

            </nav>
        );
    }
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    loggedUser: users[authedUser]
});

export default withRouter(connect(mapStateToProps)(Nav));
