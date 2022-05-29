import { Router } from "express";
import {
  renderTasks,
  createTasks,
  renderTasksEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controllers";

const router = Router();
router.get("/", renderTasks);
router.post("/tasks/add", createTasks);
router.get("/tasks/:id/toggleDone", taskToggleDone);
router.get("/tasks/:id/edit", renderTasksEdit);
router.post("/tasks/:id/edit", editTask);
router.get("/tasks/:id/delete", deleteTask);


export default router;
