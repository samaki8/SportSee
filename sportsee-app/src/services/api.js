const Base_Url = 'http://localhost:3000';

export const fechUserData = async (userId) => {
    try {
        const response = await fetch(`${Base_Url}/user/${userId}`)
        return response.json();
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
        
};
    
export const fetchUserActivity = async (userId) => {
        try {
        const response = await fetch(`${Base_Url}/user/${userId}/activity`)
        return response.json();
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
        
};
export const fetchUserAverageSessions = async (userId) => {
        try {
        const response = await fetch(`${Base_Url}/user/${userId}/average-sessions`)
        return response.json();
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
        
};
export const fetchUserPerformance = async (userId) => {
        try {
        const response = await fetch(`${Base_Url}/user/${userId}/performance`)
        return response.json();
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
        
};