// sportsee-app/src/components/Header.jsx
import PropTypes from 'prop-types';

const Header = ({ userId, userData }) => (
    <header>
        <h1>Bienvenue, {userData.userInfos.firstName}</h1>
        <p>ID Utilisateur: {userId}</p>
    </header>
);

Header.propTypes = {
    userId: PropTypes.string.isRequired,
    userData: PropTypes.shape({
        userInfos: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string,
            age: PropTypes.number
        }).isRequired,
        todayScore: PropTypes.number,
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            proteinCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number
        })
    }).isRequired,
};

export default Header;


/*import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from './assets/data/mockdata';

function Header() {
    const [userData, setUserData] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserData(userId);
                setUserData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        getUserData();
    }, []);

    return (
        <div className="header">
            <h1>Bonjour {userData?.userInfos?.firstName}</h1>
        </div>
    );
}

export default Header;*/
