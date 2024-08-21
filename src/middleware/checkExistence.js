const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../data/tasks.json");
let file = require(filePath);

const checkExistence = (req, res, next) => {
    
    const task = file.tasks.find((t) => t.id == req.params.id);
  
    if (!task) {
        return res.status(404).json({ message: 'Task not found. Check ID.' });
    }
  
    next(); // If validation passes, proceed to the next middleware or route handler
  };
  
module.exports = checkExistence;
