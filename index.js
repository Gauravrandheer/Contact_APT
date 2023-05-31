
const mongoose = require("mongoose");
const config = require("./config/config");
const express = require("express");
const app = express();
//middleware
const useRouter = require("./routes/users");
app.use(express.json());

app.use("/", useRouter);

app.use("/", useRouter);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
