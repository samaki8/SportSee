import PropTypes from 'prop-types';
import React from 'react';

function Glucides({ userId, userData }) {
    if (!userId || !userData.keyData) return <div>Chargement carbohydrateCount...<span className="loading loading-spinner loading-md"></span></div>;

    return (
        <div className="Glucides">
            <p>{userData.keyData.carbohydrateCount} Glucides</p>
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