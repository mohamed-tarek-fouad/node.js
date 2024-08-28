const express = require("express");
const env = require("dotenv");
env.config();
const userRouter = require("./routes/user.route");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/api/user", userRouter);
app.listen(port, () => console.log(`server started on port: http://localhost:${port}`));
