const { Router } = require("express");
const router = Router();

const taskscontroller = require("../controllers/tasks.controller");

router.get('/tasks', taskscontroller.getTasks);
router.get('/tasks/:id', taskscontroller.getTask);
router.post('/tasks', taskscontroller.createTask);
router.put('/tasks/:id', taskscontroller.updateTask);
router.delete('/tasks/:id', taskscontroller.deleteTask);

module.exports = router;