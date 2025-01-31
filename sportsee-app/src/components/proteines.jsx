import PropTypes from 'prop-types';
import React from 'react';

function Proteines({ userId, userData }) {
    if (!userId || !userData.keyData) return <div>Chargement proteinCount...<span className="loading loading-spinner loading-md"></span></div>;

    return (
        <div className="Proteines">
            <p>{userData.keyData.proteinCount} proteines</p>
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