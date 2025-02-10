/**
 * @file Service API pour SportSee.
 * @module api
 */

//import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../assets/mocks/mockData';
import React from 'react';

/**
 * URL de base de l'API.
 * @constant {string}
 * @default 'http://localhost:3000'
 */
const Base_Url = 'http://localhost:3000';

/**
 * Indique si les données mockées doivent être utilisées.
 * @constant {boolean}
 * @default false
 */
const USE_MOCK = false; // Mettez à false pour utiliser l'API réelle

/**
 * Recherche un utilisateur par ID dans un tableau de données.
 * @function findUserById
 * @param {Array<object>} data - Le tableau de données utilisateur.
 * @param {number} id - L'ID de l'utilisateur à rechercher.
 * @returns {object | undefined} L'objet utilisateur trouvé, ou undefined si non trouvé.
 */
const findUserById = (data, id) => data.find(item => item.id === id || item.userId === id);

/**
 * Récupère les données principales de l'utilisateur à partir de l'API.
 * @async
 * @function fetchUserData
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Une promesse résolvant avec les données de l'utilisateur.
 * @throws {Error} Si la récupération des données échoue.
 */
export const fetchUserData = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                //const userData = findUserById(USER_MAIN_DATA, userId);
                resolve({ data: userData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

/**
 * Récupère l'activité de l'utilisateur (poids et calories) à partir de l'API.
 * @async
 * @function fetchUserActivity
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Une promesse résolvant avec les données d'activité de l'utilisateur.
 * @throws {Error} Si la récupération des données échoue.
 */
export const fetchUserActivity = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                //const activityData = findUserById(USER_ACTIVITY, userId);
                resolve({ data: activityData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/activity`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user activity:', error);
        throw error;
    }
};

/**
 * Récupère les sessions moyennes de l'utilisateur à partir de l'API.
 * @async
 * @function fetchUserAverageSessions
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Une promesse résolvant avec les données des sessions moyennes de l'utilisateur.
 * @throws {Error} Si la récupération des données échoue.
 */
export const fetchUserAverageSessions = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                //const sessionsData = findUserById(USER_AVERAGE_SESSIONS, userId);
                resolve({ data: sessionsData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/average-sessions`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user average sessions:', error);
        throw error;
    }
};

/**
 * Récupère les performances de l'utilisateur (énergie, endurance, etc.) à partir de l'API.
 * @async
 * @function fetchUserPerformance
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Une promesse résolvant avec les données de performance de l'utilisateur.
 * @throws {Error} Si la récupération des données échoue.
 */
export const fetchUserPerformance = async (userId) => {
    if (USE_MOCK) {
        return new Promise((resolve) => {
            setTimeout(() => {
                //const performanceData = findUserById(USER_PERFORMANCE, userId);
                resolve({ data: performanceData });
            }, 500);
        });
    }
    try {
        const response = await fetch(`${Base_Url}/user/${userId}/performance`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user performance:', error);
        throw error;
    }
};
