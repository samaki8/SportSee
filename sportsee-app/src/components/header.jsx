// components/Header.jsx
import { useState, useEffect } from 'react';
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

export default Header;
