import PropTypes from 'prop-types';
import React from 'react';

import CaloriesIcon from '../assets/icons/calories-icon.svg?react';
import ProteinesIcon from '../assets/icons/protein-icon.svg?react';
import GlucidesIcon from '../assets/icons/carbs-icon.svg?react';
import LipidesIcon from '../assets/icons/fat-icon.svg?react';

/**
 * Composant InfoBox affichant une boîte d'information avec une icône, une valeur et un label.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur.
 * @param {object} props.userData - Les données de l'utilisateur.
 * @param {object} props.userData.keyData - Les données clés de l'utilisateur (calories, protéines, glucides, lipides).
 * @param {elementType} props.icon - Le composant icône à afficher.
 * @param {string} props.color - La couleur de l'icône et du fond.
 * @param {string} props.label - Le label à afficher.
 * @param {string} props.dataKey - La clé des données à afficher depuis userData.keyData.
 * @param {string} props.unit - L'unité de la valeur à afficher.
 *
 * @returns {JSX.Element} Le composant InfoBox.
 */
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

/**
 * Composant Tableau affichant un tableau de boîtes d'information (InfoBox) avec les calories, protéines, glucides et lipides.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur.
 * @param {object} props.userData - Les données de l'utilisateur.
 * @param {object} props.userData.keyData - Les données clés de l'utilisateur (calories, protéines, glucides, lipides).
 * @param {number} props.userData.keyData.calorieCount - Le nombre de calories.
 * @param {number} props.userData.keyData.proteinCount - Le nombre de protéines.
 * @param {number} props.userData.keyData.carbohydrateCount - Le nombre de glucides.
 * @param {number} props.userData.keyData.lipidCount - Le nombre de lipides.
 *
 * @returns {JSX.Element} Le composant Tableau.
 */
function Tableau({ userId, userData }) {
    const infoData = [
        { icon: CaloriesIcon, color: '255,0,0', label: 'Calories', dataKey: 'calorieCount', unit: 'kCal' },
        { icon: ProteinesIcon, color: '74,184,255', label: 'Proteines', dataKey: 'proteinCount', unit: 'g' },
        { icon: GlucidesIcon, color: '249,206,35', label: 'Glucides', dataKey: 'carbohydrateCount', unit: 'g' },
        { icon: LipidesIcon, color: '253,81,129', label: 'Lipides', dataKey: 'lipidCount', unit: 'g' },
    ];

    return (
        <div classame="icons" style={{ display: 'flex-direction: column' }}>
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

