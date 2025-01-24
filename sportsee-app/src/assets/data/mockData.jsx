export const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};