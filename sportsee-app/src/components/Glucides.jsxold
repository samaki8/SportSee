// Glucides.jsx
import PropTypes from 'prop-types';
import React from 'react';
import GlucidesIcon from '../assets/icons/carbs-icon.svg?react';

function Glucides({ userId, userData }) {
    if (!userId || !userData.keyData) {
        return <div>Chargement carbohydrateCount...<span className="loading loading-spinner loading-md"></span></div>;
    }

    return (
        <div className="bg-[#FBFBFB] w-[258px] h-[124px] rounded-md p-8 flex items-center">
            <div className="bg-[rgba(249,206,35,0.1)] p-4 rounded-md mr-6">
                <GlucidesIcon className="w-6 h-6 text-[#F9CE23]" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold">
                    {userData.keyData.carbohydrateCount}g
                </span>
                <span className="text-sm text-gray-500">
                    Glucides
                </span>
            </div>
        </div>
    );
}

Glucides.propTypes = {
    userId: PropTypes.number.isRequired,
    userData: PropTypes.shape({
        keyData: PropTypes.shape({
            carbohydrateCount: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default Glucides;