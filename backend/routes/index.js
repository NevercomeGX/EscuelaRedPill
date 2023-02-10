//User Controllers
const express = require("express");

const { createEmails } = require("../controllers/emails/AddNewEmail");
const { deleteEmails } = require("../controllers/emails/DeleteEmail");
const { getAllEmails } = require("../controllers/emails/GetAllEmails");
const { getUserById } = require("../controllers/emails/GetEmailById");
const { updateEmails } = require("../controllers/emails/UpdateEmail");

const router = express.Router();

//Middlewares
const { userExist } = require("../middlewares/userExist");

//Routes Users
router.get("/users", getAllEmails);
router.post("/users", createEmails);
router.get("/users/:id", deleteEmails);
router.patch("/users/:id", userExist, getUserById);
router.delete("/users/:id", updateEmails);

module.exports = router;
