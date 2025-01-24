// sportsee-app/src/components/Poids.jsx
import PropTypes from 'prop-types';

const Poids = ({ data }) => (
    <div>
        <h2>Activité Quotidienne</h2>
        {data.sessions.map((session, index) => (
            <div key={index}>
                <p>Jour: {session.day}</p>
                <p>Kilogrammes: {session.kilogram}</p>
                <p>Calories: {session.calories}</p>
            </div>
        ))}
    </div>
);

Poids.propTypes = {
    data: PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.string.isRequired,
                kilogram: PropTypes.number.isRequired,
                calories: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Poids;
