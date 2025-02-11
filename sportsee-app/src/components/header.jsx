// sportsee-app/src/components/Header.jsx
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Header component that displays a greeting message and congratulates the user for achieving their goals.
 *
 * @param {Object} props - The component props
 * @param {string} props.userId - The ID of the user
 * @param {Object} props.userData - The data of the user
 * @param {Object} props.userData.userInfos - Information about the user
 * @param {string} props.userData.userInfos.firstName - The first name of the user
 * @returns {JSX.Element|null} The rendered header component, or null if user data is not available
 */
function Header({ userId, userData }) {
    if (!userData || !userData.userInfos) return null;

    return (
        <header className="py-[68px]">
            <h1 className="text-5xl bold mb-[41px]">
                Bonjour <span className="text-[#E60000]">{userData.userInfos.firstName}</span>
            </h1>
            <p className="text-lg">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </header>
    );
}

Header.propTypes = {
    userId: PropTypes.string.isRequired,
    userData: PropTypes.shape({
        userInfos: PropTypes.shape({
            firstName: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
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



/*
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
*/