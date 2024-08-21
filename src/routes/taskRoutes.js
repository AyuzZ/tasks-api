const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const validateTask = require("../middleware/validateTask");
const checkExistence = require("../middleware/checkExistence");

//API Endpoints
//GET Method
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.get("/search/:keyword", taskController.getTaskByKeywords);
router.get("/priority/:priority", taskController.getTaskByPriority);
router.get("/status/:status", taskController.getTaskByStatus);
//POST Method
router.post("/", validateTask, taskController.createTask);
//PUT and PATCH Method
router.put("/:id", checkExistence, validateTask, taskController.updateTask);
router.patch("/:id", checkExistence, validateTask, taskController.patchTask);
//DELETE Method
router.delete("/:id", checkExistence, taskController.deleteTask);

module.exports = router;
