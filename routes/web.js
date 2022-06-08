const homeController = require("../app/http/controllers/homeController");
const themeController = require("../app/http/controllers/themeController");

initRoutes = (app) => {
  //home
  app.get("/", homeController().index);

  //customize
  app.get("/:themeName/customize", themeController().index);
  app.get("/theme/changeprimarycolor", themeController().changePrimaryColor);
};

module.exports = initRoutes;
