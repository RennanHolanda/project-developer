const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/ProjectController")
const verifyAuth = require("../middlewares/verifyAuth")

router.get("/projects", verifyAuth,ProjectController.index)
router.patch("/projects/:id/done", ProjectController.done)
router.get("/project", ProjectController.showProject)
router.get("/project/register", ProjectController.showRegister)
router.post("/project", ProjectController.register)
router.get("/project/:id", ProjectController.showDetails)
router.get("/project/:id/edit", ProjectController.showUpdate)
router.put("/project/:id", ProjectController.update)
router.delete("/projects/:id", ProjectController.destroy)


module.exports = router;
