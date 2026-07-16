import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/usersRoute.js";

dotenv.config();

const app = express();
const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
].filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use(express.json());
app.use("/api", usersRoute);

app.get("/", (req, res) => {
    res.send("Hello, World! backend started");
});

export default app;