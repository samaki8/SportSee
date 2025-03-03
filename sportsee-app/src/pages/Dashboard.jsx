/**
 * @file Composant Dashboard.
 * @module Dashboard
 */
/**
 * Composant principal du Dashboard affichant les données de l'utilisateur.
 * @component
 * @param {Object} props
 * @param {string} props.userId - L'identifiant de l'utilisateur (implicite via useParams)
 * @returns {JSX.Element} Le rendu du Dashboard avec les informations de l'utilisateur.
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData, fetchUserActivity, fetchUserPerformance, fetchUserAverageSessions } from "../services/api";
import Header from '../components/header';
import Poids from '../components/poids';
import NavTop from '../components/navTop';
import NavLeft from '../components/navLeft';
import Tableau from '../components/Tableau';
import Kpi from '../components/kpi';
import Objectifs from '../components/objectifs';
import Radar from '../components/Radar';


function Dashboard() {
    /**
 * @typedef {Object} UserAverageSessions
 * @property {Object} data - Les données de sessions moyennes de l'utilisateur
 */
    const { userId } = useParams();
    /**
 * @type {UserData|null}
 */
    const [userData, setUserData] = useState(null);
    /**
 * @type {UserActivity|null}
 */
    const [userActivity, setUserActivity] = useState(null);
    /**
 * @type {UserPerformance|null}
 */
    const [userPerformance, setUserPerformance] = useState(null);
    /**
 * @type {UserAverageSessions|null}
 */
    const [userAverageSessions, setUserAverageSessions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!userId) {
                setError('No user ID provided');
                setLoading(false);
                return;
            }

            try {
                const [userData, userActivity, userPerformance, userAverageSessions] = await Promise.all([
                    fetchUserData(userId),
                    fetchUserActivity(userId),
                    fetchUserPerformance(userId),
                    fetchUserAverageSessions(userId)
                ]);

                setUserData(userData);
                setUserActivity(userActivity);
                setUserPerformance(userPerformance);
                setUserAverageSessions(userAverageSessions);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return (
            <div className="loading-container">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    if (!userData || !userActivity || !userPerformance || !userAverageSessions) {
        return <div className="error-message">No data available</div>;
    }

    return (
        <div className="flex">
            <NavLeft />
            <div className="flex-1">
                <NavTop />
                <div className="dashboard px-[109px] py-[50px]">
                    <Header userId={userId} userData={userData.data} />
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <Poids data={userActivity.data} />
                            <div className="flex gap-8 mt-8">
                                <Objectifs data={userAverageSessions.data} />
                                <Radar data={userPerformance.data} />
                                <Kpi
                                    userId={Number(userId)}
                                    todayScore={userData.data.todayScore || userData.data.score}
                                />
                            </div>
                        </div>
                        <div className="Tableau flex flex-col gap-7 mb-5">
                            <Tableau userId={Number(userId)} userData={userData.data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

