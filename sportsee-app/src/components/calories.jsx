import PropTypes from 'prop-types';
import React from 'react';

function Calories({ userId, userData }) {
  if (!userId || !userData.keyData) return <div>Chargement calorieCount...<span className="loading loading-spinner loading-md"></span></div>;

  return (
    <div className="Calories">
      <p>{userData.keyData.calorieCount} kCal Calories</p>
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

export default Calories;

/*
Calories.propTypes = {
  userId: PropTypes.number.isRequired,
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
  }).isRequired
};
*/
