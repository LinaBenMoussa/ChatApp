import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { createUser, deleteUser, editUser, getAllUsers, getUserById, getUsersForSideBar } from "../controllers/user.controller.js";
const router=express.Router();
router.get("/",protectRoute,getUsersForSideBar);
router.get('/all', getAllUsers);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.post("/", createUser);
router.get("/:id", getUserById);


export default router;