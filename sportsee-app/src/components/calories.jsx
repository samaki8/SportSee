import PropTypes from 'prop-types';
import React from 'react';

function Calories(userId, userData) {
  if (!userId || !userData.keyData) return <div>Chargement calorieCount...</div>;

  return (
    <div className="Calories">
      <p>{userData.KeyData.calorieCount}kCal Calories</p>
    </div>
  );
}



Calories.propTypes = {
  userId: PropTypes.number.isRequired,
  userData: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired
    }).isRequired
  }).isRequired

};

/*
Calories.propTypes = {
  userId: PropTypes.number.isRequired,
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
  }).isRequired
};
*/

export default Calories;