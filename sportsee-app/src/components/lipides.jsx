import PropTypes from 'prop-types';
import React from 'react';

function Lipides({ userId, userData }) {
    if (!userId || !userData.keyData) return <div>Chargement lipidCount...<span className="loading loading-spinner loading-md"></span></div>;

    return (
        <div className="Lipides">
            <button className="btn Lipides btn-primary">Lipides</button>
            <p>{userData.keyData.lipidCount} Lipides</p>
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