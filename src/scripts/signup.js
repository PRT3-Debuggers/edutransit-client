async function signUpUser(userData) {
    try {
        const response = await fetch("http://localhost:8080/api/users/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) // Send all fields at once
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Signup failed');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}

export default signUpUser;