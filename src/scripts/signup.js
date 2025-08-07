async function signUpUser(email, password) {
    try {
        const response = await fetch('http:localhost/8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
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