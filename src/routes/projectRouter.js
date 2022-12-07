const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/ProjectController")
const verifyAuth = require("../middlewares/verifyAuth")
router.use(verifyAuth)

router.get("/projects",ProjectController.index)
router.patch("/project/:id/done", ProjectController.done)
router.get("/project/register", ProjectController.showRegister)
router.post("/project", ProjectController.register)
router.get("/project/:id/edit", ProjectController.showUpdate)
router.put("/project/:id", ProjectController.update)
router.delete("/projects/:id", ProjectController.delete)
router.get("/project/:id", ProjectController.showProject)

router.get("/projects/search", ProjectController.search);


module.exports = router;
