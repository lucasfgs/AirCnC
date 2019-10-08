const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/users", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
