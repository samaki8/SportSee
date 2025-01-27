//sportsee-app\src\services\api.jsx
//import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../assets/mocks/mockData.js';
import React from 'react';

const Base_Url = 'http://localhost:3000';
const USE_MOCK = false; // Mettez à false pour utiliser l'API réelle

const findUserById = (data, id) => data.find(item => item.id === id || item.userId === id);

export const fetchUserData = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = findUserById(USER_MAIN_DATA, userId);
                resolve({ data: userData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetchUserActivity = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const activityData = findUserById(USER_ACTIVITY, userId);
                resolve({ data: activityData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/activity`);
        return response.json();
    } catch (error) {
        console.error('Error fetching user activity:', error);
        throw error;
    }
};

export const fetchUserAverageSessions = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const sessionsData = findUserById(USER_AVERAGE_SESSIONS, userId);
                resolve({ data: sessionsData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/average-sessions`);
        return response.json();
    } catch (error) {
        console.error('Error fetching user average sessions:', error);
        throw error;
    }
};

export const fetchUserPerformance = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const performanceData = findUserById(USER_PERFORMANCE, userId);
                resolve({ data: performanceData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/performance`);
        return response.json();
    } catch (error) {
        console.error('Error fetching user performance:', error);
        throw error;
    }
};
