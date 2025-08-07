async function loginUser(email, password) {
    try {
        const response = await fetch('https://your-api-url.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        // Usually includes a token or user info
        return data;

    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
export default loginUser;