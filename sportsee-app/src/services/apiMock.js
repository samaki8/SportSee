import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../assets/mocks/mockData';

const findUserById = (data, id) => data.find(item => item.id === id || item.userId === id);

export const getUserData = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = findUserById(USER_MAIN_DATA, userId);
      resolve({ data: userData });
    }, 500);
  });
};

export const getUserActivity = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activityData = findUserById(USER_ACTIVITY, userId);
      resolve({ data: activityData });
    }, 500);
  });
};

export const getUserAverageSessions = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sessionsData = findUserById(USER_AVERAGE_SESSIONS, userId);
      resolve({ data: sessionsData });
    }, 500);
  });
};

export const getUserPerformance = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData = findUserById(USER_PERFORMANCE, userId);
      resolve({ data: performanceData });
    }, 500);
  });
};
