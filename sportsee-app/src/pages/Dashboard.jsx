/**
 * @file Composant Dashboard.
 * @module Dashboard
 */

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
import Tableau from '../components/tableau';
import Calories from '../components/calories';
import Glucides from '../components/glucides';
import Kpi from '../components/kpi';
import Lipides from '../components/lipides';
import Objectifs from '../components/objectifs';
import Proteines from '../components/proteines';
import Radar from '../components/radar';

/**
 * Composant principal du Dashboard affichant les données de l'utilisateur.
 * @component Dashboard
 * @returns {JSX.Element} Le rendu du Dashboard avec les informations de l'utilisateur.
 */
function Dashboard() {
    /**
     * Récupère l'identifiant de l'utilisateur depuis les paramètres de l'URL.
     * @type {string}
     */
    const { userId } = useParams();
    /**
     * Données de l'utilisateur.
     * @type {object | null}
     * @default null
     */
    const [userData, setUserData] = useState(null);
    /**
     * Activité de l'utilisateur (poids et calories).
     * @type {object | null}
     * @default null
     */
    const [userActivity, setUserActivity] = useState(null);
    /**
     * Performance de l'utilisateur (énergie, endurance, etc.).
     * @type {object | null}
     * @default null
     */
    const [userPerformance, setUserPerformance] = useState(null); // Correction de la typo
    /**
     * Sessions moyennes de l'utilisateur.
     * @type {object | null}
     * @default null
     */
    const [userAverageSessions, setUserAverageSessions] = useState(null); // Correction du nom de variable

    /**
     * useEffect pour récupérer les données de l'utilisateur.
     * Récupère les données si l'ID de l'utilisateur est disponible.
     */
    useEffect(() => {
        /**
         * Fonction asynchrone pour récupérer les données.
         * @async
         */
        const getData = async () => {
            if (!userId) return console.log('No user');

            // Récupération des données utilisateur
            try {
                /**
                 * Données de l'utilisateur.
                 * @type {object}
                 */
                const userData = await fetchUserData(userId);
                setUserData(userData);

                /**
                 * Activité de l'utilisateur.
                 * @type {object}
                 */
                const userActivity = await fetchUserActivity(userId);
                setUserActivity(userActivity);

                /**
                 * Performance de l'utilisateur.
                 * @type {object}
                 */
                const userPerformance = await fetchUserPerformance(userId);
                setUserPerformance(userPerformance); // Correction de la typo

                /**
                 * Sessions moyennes de l'utilisateur.
                 * @type {object}
                 */
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
        <div className="flex">
            <NavLeft />
            <div className="flex-1">
                <NavTop />
                <div className="dashboard px-[109px]">
                    {userData?.data && <Header userId={userId} userData={userData.data} />}
                    <div className="flex gap-8">
                        <div className="flex-1">
                            {userActivity?.data && <Poids data={userActivity.data} />}
                            <div className="flex gap-8 mt-8">
                                {userAverageSessions?.data && <Objectifs data={userAverageSessions.data} />}
                                {userPerformance?.data && <Radar data={userPerformance.data} />}
                                {userData?.data && (
                                    <Kpi
                                        userId={Number(userId)}
                                        todayScore={userData.data.todayScore || userData.data.score}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {userData?.data && <Tableau userId={Number(userId)} userData={userData.data} />}
                            {/*}{userData?.data && <Calories userId={Number(userId)} userData={userData.data} />}
                            {userData?.data && <Proteines userId={Number(userId)} userData={userData.data} />}
                            {userData?.data && <Glucides userId={Number(userId)} userData={userData.data} />}
                            {userData?.data && <Lipides userId={Number(userId)} userData={userData.data} />}
                            </div>*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    /*
        return (
            <div className="flex">
                <NavLeft />
                <div className="flex-1">
                    <NavTop />
                    <div className="dashboard px-[109px] ">
                        {userData?.data && <Header userId={userId} userData={userData.data} />}
                        <div className="flex gap-8 mb-12">
                            {userActivity?.data && <Poids data={userActivity.data} />}
                            <div className="flex flex-col gap-4">
                                {userData?.data && <Calories userId={Number(userId)} userData={userData.data} />}
                                {userData?.data && <Proteines userId={Number(userId)} userData={userData.data} />}
                                {userData?.data && <Glucides userId={Number(userId)} userData={userData.data} />}
                                {userData?.data && <Lipides userId={Number(userId)} userData={userData.data} />}
                            </div>
    
                        </div>
                        <div className="flex gap-8 mb-8">
                            {userAverageSessions?.data && <Objectifs data={userAverageSessions.data} />}
                            {userPerformance?.data && <Radar data={userPerformance.data} />}
                            {userData?.data && (
                                <Kpi
                                    userId={Number(userId)}
                                    todayScore={userData.data.todayScore || userData.data.score}
                                />
                            )}
                        </div>
    
                    </div>
                </div>
            </div>
        );
    */
}

export default Dashboard;
