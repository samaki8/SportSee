
// Lipides.jsx
import PropTypes from 'prop-types';
import React from 'react';
import LipidesIcon from '../assets/icons/fat-icon.svg?react';

function Lipides({ userId, userData }) {
    if (!userId || !userData.keyData) {
        return <div>Chargement lipidCount...<span className="loading loading-spinner loading-md"></span></div>;
    }

    return (
        <div className="bg-[#FBFBFB] w-[258px] h-[124px] rounded-md p-8 flex items-center">
            <div className="bg-[rgba(253,81,129,0.1)] p-4 rounded-md mr-6">
                <LipidesIcon className="w-6 h-6 text-[#FD5181]" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold">
                    {userData.keyData.lipidCount}g
                </span>
                <span className="text-sm text-gray-500">
                    Lipides
                </span>
            </div>
        </div>
    );
}


Lipides.propTypes = {
    userId: PropTypes.number.isRequired,
    userData: PropTypes.shape({
        keyData: PropTypes.shape({
            lipidCount: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default Lipides;