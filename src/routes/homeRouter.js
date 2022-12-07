const express = require("express");
const router = express.Router();
const HomeControlller = require("../controllers/HomeController");

router.get('/', HomeControlller.index);
router.get("/login", HomeControlller.login);
router.post('/login', HomeControlller.loginProcess);


router.get("/home/add_user", HomeControlller.showRegister);
router.post("/home/add_user", HomeControlller.store);
router.get("/home/:id/edit_user", HomeControlller.showEdit);
router.put("/home/:id/edit_user", HomeControlller.update);
router.get("/home/show/:id/users", HomeControlller.showUser);


module.exports = router;
