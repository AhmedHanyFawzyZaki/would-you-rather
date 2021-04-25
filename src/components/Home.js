import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Question from './Question';
import 'react-tabs/style/react-tabs.css';

class Home extends Component {
    render() {
        const { questions, authedUser } = this.props;
        const answeredQuestions = !authedUser ? [] : Object.keys(questions)
            .filter(key =>
                questions[key].optionOne.votes.includes(authedUser) ||
                questions[key].optionTwo.votes.includes(authedUser)
            )
            .map(ansQuest => questions[ansQuest])
            .sort((a, b) => b.timestamp - a.timestamp);
        const unansweredQuestions = !authedUser ? [] : Object.keys(questions)
            .filter(key =>
                !questions[key].optionOne.votes.includes(authedUser) &&
                !questions[key].optionTwo.votes.includes(authedUser)
            )
            .map(quest => questions[quest])
            .sort((a, b) => b.timestamp - a.timestamp);
        return (
            <div className="container">
                <h2 className="container-header">Questions</h2>
                <Tabs>
                    <TabList>
                        <Tab className="tab">Unanswered</Tab>
                        <Tab className="tab">Answered</Tab>
                    </TabList>

                    <TabPanel>
                        {unansweredQuestions.length === 0 ? <p>No Questions to answer, Please add yours!</p> : unansweredQuestions.map(quest => (
                            <Question key={quest.id} questionID={quest.id} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {answeredQuestions.length === 0 ? <p>No Answered Questions, Please try to answer one!</p> : answeredQuestions.map(quest => (
                            <Question key={quest.id} questionID={quest.id} />
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = ({ questions, authedUser }) => ({
    questions,
    authedUser,
});

export default connect(mapStateToProps)(Home);
