import React from 'react';

// takes in a user object and returns UserSummary component for LeaederBoard
function UserCard(props) {
    const { name } = props;
    return (
        <div key={name.id} className="user-card">
            <div className="user-img">
                <img src={name.avatar} alt={`${name.name}'s avatar`} />
            </div>
            <div className="user-info">
                <h3 className="user-info-name">{name.name}</h3>
                <p>
                    <span>Answered questions: </span>
                    <span>{name.answered}</span>
                </p>
                <hr />
                <p>
                    <span>Created questions: </span>
                    <span>{name.asked}</span>
                </p>
            </div>
            <div className="user-score">
                <p>Score</p>
                <div className="user-total-points">{name.total}</div>
            </div>
        </div>
    );
};

export default UserCard;
