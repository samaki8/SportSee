import PropTypes from 'prop-types';
import React from 'react';

function Objectifs({ data }) {
    if (!data || !data.sessions) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }
    console.log(data.sessions)
    return (
        <div>
            <h1> Objectifs</h1>
            {data.sessions.map((session, index) => (
                <div key={index}>
                    <p>Jour: {session.day}</p>
                    <p>Nombre de session: {session.sessionLength}</p>
                </div>
            ))}
        </div>
    )
}

Objectifs.propTypes = {
    data: PropTypes.shape({
        userID: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.number.isRequired,
                sessionLength: PropTypes.number.isRequired
            })
        ).isRequired,
    }).isRequired,
};



export default Objectifs