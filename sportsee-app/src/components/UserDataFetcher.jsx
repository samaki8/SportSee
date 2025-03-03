import React, { useEffect, useState } from 'react';
import { fetchUserData, fetchUserActivity, fetchUserPerformance, fetchUserAverageSessions } from "../services/api";

function UserDataFetcher({ userId, children }) {
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [userAverageSessions, setUserAverageSessions] = useState(null);

    useEffect(() => {
        const getData = async () => {
            if (!userId) return;

            try {
                const userData = await fetchUserData(userId);
                setUserData(userData);

                const userActivity = await fetchUserActivity(userId);
                setUserActivity(userActivity);

                const userPerformance = await fetchUserPerformance(userId);
                setUserPerformance(userPerformance);

                const userAverageSessions = await fetchUserAverageSessions(userId);
                setUserAverageSessions(userAverageSessions);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        getData();
    }, [userId]);

    if (!userData || !userActivity || !userPerformance || !userAverageSessions) {
        return <div className="loading-container"><span className="loading loading-spinner loading-md"></span></div>;
    }

    return children({ userData, userActivity, userPerformance, userAverageSessions });
}

export default UserDataFetcher;
