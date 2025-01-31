//sportsee-app/src/pages/Dashboard.jsx
//import "./styles/dashboard.css";
import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchUserData, fetchUserActivity, fetchUserPerformance, fetchUserAverageSessions } from "../services/api";
//import { fetchUserData } from "../assets/mocks/mockData";
import Header from '../components/header';
import Poids from '../components/poids';
import NavTop from '../components/navTop';
import NavLeft from '../components/navLeft';
import Calories from '../components/calories';
import Glucides from '../components/glucides';
import Kpi from '../components/kpi';
import Lipides from '../components/lipides';
import Objectifs from '../components/objectifs';
import Proteines from '../components/proteines';
import Radar from '../components/radar';


function Dashboard() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null); // Correction de la typo
    const [userAverageSessions, setUserAverageSessions] = useState(null); // Correction du nom de variable

    useEffect(() => {
        const getData = async () => {
            if (!userId) return console.log('No user');

            // Récupération des données utilisateur
            try {
                const userData = await fetchUserData(userId);
                setUserData(userData);

                const userActivity = await fetchUserActivity(userId);
                setUserActivity(userActivity);

                const userPerformance = await fetchUserPerformance(userId);
                setUserPerformance(userPerformance); // Correction de la typo

                const userAverageSessions = await fetchUserAverageSessions(userId);
                setUserAverageSessions(userAverageSessions);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        getData(); // Appel de la fonction
    }, [userId]); // Fermeture correcte du useEffect

    if (!userData || !userActivity || !userPerformance || !userAverageSessions) {
        return (
            <div className="loading-container">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }


    return (
        <div className="dashboard">
            <NavTop />
            <NavLeft />
            <h1>TEST</h1>
            {userData?.data && <Header userId={userId} userData={userData.data} />}
            {/*{userData && <Header userId={userId} userData={userData} />} */}
            {userActivity?.data && <Poids data={userActivity.data} />}
            {/*{userActivity && <Poids data={userActivity} />} */}
            <div>
                {userAverageSessions?.data && <Objectifs data={userAverageSessions.data} />}
                {userPerformance?.data && <Radar data={userPerformance.data} />}
                {userData?.data && (
                    <Kpi
                        userId={Number(userId)}
                        todayScore={userData.data.todayScore || userData.data.score}
                    />
                )}

            </div>
            <div>
                {/*userData?.data && <Calories userId={Number(userId)} userData={userData.data} />*/}
                {userData?.data && (
                    <Calories
                        userId={Number(userId)}
                        userData={userData.data}
                    />
                )}


                {userData?.data && (
                    <Proteines
                        userId={Number(userId)}
                        userData={userData.data}
                    />
                )}
                {userData?.data && (
                    <Glucides
                        userId={Number(userId)}
                        userData={userData.data}
                    />
                )}
                {userData?.data && (
                    <Lipides
                        userId={Number(userId)}
                        userData={userData.data}
                    />
                )}
            </div>

            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
