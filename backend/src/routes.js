const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = Router();
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");

routes.post("/users", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

module.exports = routes;
