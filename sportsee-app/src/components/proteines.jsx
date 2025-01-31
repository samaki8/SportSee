// Proteines.jsx
import PropTypes from 'prop-types';
import React from 'react';
import proteinesIcon from '../assets/icons/protein-icon.svg?react';

function Proteines({ userId, userData }) {
    if (!userId || !userData.keyData) {
        return <div>Chargement proteinCount...<span className="loading loading-spinner loading-md"></span></div>;
    }

    return (
        <div className="bg-[#FBFBFB] w-[258px] h-[124px] rounded-md p-8 flex items-center">
            <div className="bg-[rgba(74,184,255,0.1)] p-4 rounded-md mr-6">
                <proteinesIcon className="w-6 h-6 text-[#4AB8FF]" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold">
                    {userData.keyData.proteinCount}g
                </span>
                <span className="text-sm text-gray-500">
                    Proteines
                </span>
            </div>
        </div>
    );
}

Proteines.propTypes = {
    userId: PropTypes.number.isRequired,
    userData: PropTypes.shape({
        keyData: PropTypes.shape({
            proteinCount: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default Proteines;