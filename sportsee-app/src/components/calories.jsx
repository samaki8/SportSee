import PropTypes from 'prop-types';
import React from 'react';
import caloriesIcon from '../assets/icons/calories-icon.svg?react';

function Calories({ userId, userData }) {
  if (!userId || !userData.keyData) {
    return <div>Chargement calorieCount...<span className="loading loading-spinner loading-md"></span></div>;
  }

  return (
    <div className="bg-[#FBFBFB] w-[258px] h-[124px] rounded-md p-8 flex items-center">
      <div className="bg-[rgba(255,0,0,0.1)] p-4 rounded-md mr-6">
        <caloriesIcon className="w-6 h-6 text-red-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">
          {userData.keyData.calorieCount}kCal
        </span>
        <span className="text-sm text-gray-500">
          Calories
        </span>
      </div>
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
