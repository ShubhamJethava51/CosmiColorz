const fs = require("fs");
const path = require("path");
homeController = () => {
  return {
    index(req, res) {
      const themeFolders = fs.readdirSync(
        path.join(__dirname, "../../../public/themes")
      );
      res.render("home.ejs", { themeFolders });
    },
  };
};

module.exports = homeController;
