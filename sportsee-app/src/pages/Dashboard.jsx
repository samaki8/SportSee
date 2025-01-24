import "./css/dashboard.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchUserActivity, fetchUserPerformance, fetchUserAverageSessions } from "../services/api";
import { fetchUserData } from "../assets/data/mockData";
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

    return (
        <div className="dashboard">
            <NavTop />
            <NavLeft />
            {userData && <Header userId={userId} userData={userData} />}
            {userActivity && <Poids data={userActivity} />}
            <div>
                {userAverageSessions && <Objectifs data={userAverageSessions} />}
                {userPerformance && <Radar data={userPerformance} />}
                <Kpi />
            </div>
            <div>
                <Calories />
                <Proteines />
                <Glucides />
                <Lipides />
            </div>

            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
