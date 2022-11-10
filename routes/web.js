const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const categoryController = require("../app/http/controllers/categoryController");
const adminCategoryController = require("../app/http/controllers/admin/categories/categoryController");

function initRoutes(app) {
  app.get("/", homeController().index);

  app.get("/singleCategory", categoryController().singleCategory);
}

module.exports = initRoutes;
