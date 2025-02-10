import PropTypes from 'prop-types';
import React from 'react';

import CaloriesIcon from '../assets/icons/calories-icon.svg?react';
import ProteinesIcon from '../assets/icons/protein-icon.svg?react';
import GlucidesIcon from '../assets/icons/carbs-icon.svg?react';
import LipidesIcon from '../assets/icons/fat-icon.svg?react';

// Composant générique pour afficher les données
function InfoBox({ userId, userData, icon: Icon, color, label, dataKey, unit }) {
    if (!userId || !userData.keyData) {
        return <div>Chargement {label}...<span className="loading loading-spinner loading-md"></span></div>;
    }

    return (
        <div className="bg-[#FBFBFB] w-[258px] h-[124px] rounded-md p-8 flex items-center">
            <div className={`bg-[rgba(${color},0.1)] p-4 rounded-md mr-6`}>
                <Icon className={`w-6 h-6 text-[${color}]`} />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold">
                    {userData.keyData[dataKey]}{unit}
                </span>
                <span className="text-sm text-gray-500">
                    {label}
                </span>
            </div>
        </div>
    );
}

InfoBox.propTypes = {
    userId: PropTypes.number.isRequired,
    userData: PropTypes.shape({
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            proteinCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number,
        }).isRequired
    }).isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
};

function Tableau({ userId, userData }) {
    const infoData = [
        { icon: CaloriesIcon, color: '255,0,0', label: 'Calories', dataKey: 'calorieCount', unit: 'kCal' },
        { icon: ProteinesIcon, color: '74,184,255', label: 'Proteines', dataKey: 'proteinCount', unit: 'g' },
        { icon: GlucidesIcon, color: '249,206,35', label: 'Glucides', dataKey: 'carbohydrateCount', unit: 'g' },
        { icon: LipidesIcon, color: '253,81,129', label: 'Lipides', dataKey: 'lipidCount', unit: 'g' },
    ];

    return (
        <div style={{ display: 'flex-direction: column' }}>
            {infoData.map((item, index) => (
                <InfoBox key={index} userId={userId} userData={userData} {...item} />
            ))}
        </div>
    );
}

Tableau.propTypes = {
    userId: PropTypes.number.isRequired,
    userData: PropTypes.shape({
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number.isRequired,
            proteinCount: PropTypes.number.isRequired,
            carbohydrateCount: PropTypes.number.isRequired,
            lipidCount: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default Tableau;
