import React from 'react';

// takes in a user object and returns UserSummary component for LeaederBoard
function UserCard(props) {
    const { user } = props;
    return (
        <div key={user.id} className="user-card">
            <div className="user-img">
                <img src={user.avatar} alt={`${user.name}'s avatar`} />
            </div>
            <div className="user-info">
                <h3 className="user-info-name">{user.name}</h3>
                <p>
                    <span>Answered questions: </span>
                    <span>{user.answered}</span>
                </p>
                <hr />
                <p>
                    <span>Asked questions: </span>
                    <span>{user.asked}</span>
                </p>
            </div>
            <div className="user-score">
                <p>Score</p>
                <div className="user-total-points">{user.total}</div>
            </div>
        </div>
    );
};

export default UserCard;
