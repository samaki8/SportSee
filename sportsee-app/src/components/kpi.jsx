import PropTypes from 'prop-types';
import React from 'react';

function Kpi({ userId, todayScore }) {
    if (!todayScore) return <div>Chargement Kpi...</div>;

    return (
        <div className="kpi">
            <h2>Score</h2>
            <p>{todayScore * 100}% de votre objectif</p> {/* Correction de la syntaxe */}
        </div>
    );
}

Kpi.propTypes = {
    userId: PropTypes.number.isRequired,
    todayScore: PropTypes.number.isRequired
};

export default Kpi;
