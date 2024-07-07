import router from "./router/router.js";
import express from "express";
import { connectDb } from "./DB/connectDb.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

connectDb();

app.use("/api/student", router);

app.use((err, req, res, next) => {
    let statusCode = res.statusCode || 400;
    let message = err.message || "התרחשה תקלה בשרת";
    res.status(statusCode).send(message);
})


app.listen(4000, function () { console.log("app is listening on port 5000") });






