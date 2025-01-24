//sportsee-app\src\pages\Dashboard.jsx
import "./css/dashboard.css";
//import React from "react;
//import mockUserData from "./assets/data.mockData.js";
import { useParams } from 'react-router-dom';

function Dashboard() {
    const { userId } = useParams();
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