const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get("/getdata", async (req, res) => {
    console.log("sajdk")
  try {
    const Users = await User.find().select("-__v");
    console.log(Users);
    res.json({
      message: "Retrieve successfully",
      Users,
    });
  } catch (error) {
    console.log("Error during read data", error);
    res.json({
      message: error,
    });
  }
});

router.post("/adddata", (req, res) => {
  try {
    const { name, panid, number } = req.body;
    const newUser = new User({ name, panid, number });
    newUser.save();
    res.json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    console.error("Error occurred while adding data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding data",
    });
  }
});

router.delete("/deletdata", async(req, res) => {
  try {
    const {_id} = req.body;
    const delteUSer = await User.findByIdAndDelete(_id)

    if(!delteUSer){
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error occurred while adding data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding data",
    });
  }
});

module.exports = router;
