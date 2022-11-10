const category = require("../../models/category");

function categoryController() {
  return {
    singleCategory(req, res) {
      res.render("singleCategory.ejs");
    },
  };
}

module.exports = categoryController;
