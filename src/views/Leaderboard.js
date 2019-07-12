import React from 'react';
import { connect} from 'react-redux';

function Leaderboard (props) {

  return (
    <div>
      <h1>Leaderboard</h1>

      {props.usersStats.map(userStats =>
        <div key={userStats.user.id}>
          { userStats.user.name } has { userStats.points } points.
          They asked { userStats.askedQuestionsCount } questions and answered { userStats.answeredQuestionCount } questions
        </div>
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
    }

  }).sort((a, b) => b.points - a.points);

  return {
    usersStats
  };
}

export default connect(mapStateToProps)(Leaderboard);
