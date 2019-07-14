import React from 'react';
import { connect} from 'react-redux';
import './Leaderboard.css';
import AvatarImage from '../components/AvatarImage';

function Leaderboard (props) {

  return (
    <div>

      <h1>Leaderboard</h1>

      {props.usersStats.map(userStats =>
        <article key={userStats.user.id} className="panel">

          <header className="panel__header">

            <div className="panel__heading">
              { userStats.user.name } has
              <span className="leaderboard__highlight"> { userStats.points } </span>
              points.
            </div>

            <AvatarImage avatarURL={userStats.user.avatarURL} className="panel__avatar" />

          </header>

          <div className="leaderboard__summary">
            They have asked
            <span className="leaderboard__highlight"> { userStats.askedQuestionsCount } </span>
            questions and answered
            <span className="leaderboard__highlight"> { userStats.answeredQuestionCount } </span>
            questions.
          </div>

        </article>
      )}

    </div>
  );
}

function mapStateToProps({ users }) {

  // --------------------------------------------------------------------------------
  // For each user, calculate the number of asked and answered questions and
  // calculate the total of the two which is the "points". Sort by "points" desc.
  // --------------------------------------------------------------------------------
  const usersStats = Object.keys(users).map(key => {
    const user = users[key];
    const askedQuestionsCount = user.questions.length;
    const answeredQuestionCount = Object.keys(user.answers).length;

    return {
      user,
      askedQuestionsCount: askedQuestionsCount,
      answeredQuestionCount: answeredQuestionCount,
      points: askedQuestionsCount + answeredQuestionCount
    };

  }).sort((a, b) => b.points - a.points);

  return {
    usersStats
  };
}

export default connect(mapStateToProps)(Leaderboard);
