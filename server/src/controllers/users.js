import {syncUser} from "../services/userService.js";

const handleUserSync = async (req, res) => {
    try {
        const { user } = req.body;
        const data = await syncUser(user);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error syncing user:", error);
        res.status(500).json({ error: "Failed to sync user" });
    }
};

export { handleUserSync };