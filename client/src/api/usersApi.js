
const register = async (userData) => {
    try {
        const response = await fetch(`http://localhost:3000/api/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: userData }),
        });

        const data = await response.json();
        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export default { register };