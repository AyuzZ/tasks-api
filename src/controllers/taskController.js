const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../data/tasks.json");
let file = require(filePath);

const saveToDb = () => {
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
};

exports.getAllTasks = (req, res) => {
  res.status(200).json(file.tasks);
};

exports.getTaskById = (req, res) => {
  const task = file.tasks.find((t) => t.id == req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found. Check the ID." });
  }
};

exports.getTaskByKeywords = (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const tasks = file.tasks.filter((t) => t.name.toLowerCase().includes(keyword));
  if (tasks.length > 0) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({ message: "No tasks found with the given keyword. Try a different keyword." });
  }
};

exports.getTaskByPriority = (req, res) => {
  const priority = req.params.priority.toLowerCase();
  const tasks = file.tasks.filter((t) => t.priority.toLowerCase() === priority);
  if (tasks.length > 0) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({ message: "No tasks found with the given priority. Try a different priority." });
  }
};

exports.getTaskByStatus = (req, res) => {
  const status = req.params.status.toLowerCase();
  const tasks = file.tasks.filter((t) => t.status.toLowerCase() === status);
  if (tasks.length > 0) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({ message: "No tasks found with the given status. Try a different status." });
  }
};

exports.createTask = (req, res) => {
  const { name, description, status, priority = "low" } = req.body;
 
  const newTask = {
    id: file.tasks.length + 1,
    name, 
    description, 
    status,
    priority,
  }
  
  file.tasks.push(newTask);
  saveToDb();
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description, status, priority = "low" } = req.body;

  const task = file.tasks.find(t => t.id == id);
  
  //tasks existence is already checked
  task.name = name;
  task.description = description;
  task.status = status;
  task.priority = priority;

  saveToDb();
  res.status(200).json(task);
  
};

exports.patchTask = (req, res) => {
  const { id } = req.params;
  const { name, description, status = "pending", priority = "low" } = req.body;

  const task = file.tasks.find(t => t.id == id);
  
  //tasks existence is already checked
  task.name = name;
  task.description = description;
  task.status = status;
  task.priority = priority;

  saveToDb();
  res.status(200).json(task);
};

exports.deleteTask = (req, res) => {
  file.tasks = file.tasks.filter((t) => t.id != req.params.id);
  saveToDb();
  res.status(204).end();
};
