//sportsee-app\src\pages\Dashboard.jsx
import "./css/dashboard.css";
//import React from "react;
//import mockUserData from "./assets/data.mockData.js";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { fechUserData, fetchUserActivity, fetchUserPerformance, fetchUserAverageSessions } from "../services/api";

function Dashboard() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userPerformance, serUserPerformance] = useState(null);
    const [UserAverageSessions, setUserAverageSessions] = useState(null);

    useEffect(() => {
        getData = () => {
            return
        }, [userId]);

    return (
        <div className="dashboard">
            <nav-t />
            <nav-l />
            <header userId={userId} />
            <poids />
            <div>
                <objectifs />
                <radar />
                <kpi />
            </div>
            <div>
                <calories />
                <proteines />
                <glucides />
                <lipides />
            </div>





            <h1>Dashboard</h1>
        </div>
    )
}
export default Dashboard