import PropTypes from 'prop-types';
import React from 'react';

function Radar({ data }) {
    // Ajout d'une vérification des données
    if (!data || !data.data || !data.kind) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }
    console.log('Performance data: ', data)
    return (
        <div>
            <h2>Radar</h2>
            {data.data.map((item, index) => (
                <div key={index}>
                    <p>Type Kind: {data.kind[item.kind]}</p>
                    <p>Value Kind: {item.value}</p>

                </div>
            ))}
        </div>
    );

};

Radar.propTypes = {
    data: PropTypes.shape({
        userID: PropTypes.number,
        kind: PropTypes.objectOf(PropTypes.string).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number.isRequired,
                kind: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Radar