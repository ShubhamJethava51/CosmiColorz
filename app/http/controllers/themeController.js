const fs = require("fs");
const sass = require("sass");
const path = require("path");

themeController = () => {
  return {
    index(req, res) {
      res.render("themeCustomization", { name: req.params.themeName });

      //code to compile
      result = async () => {
        let result = await sass.compileAsync(
          path.join(__dirname, "../../../resources/scss/main.scss")
        );
        fs.writeFileSync(
          path.join(__dirname, "../../../public/css/main.css"),
          result.css,
          {
            encoding: "utf-8",
            flag: "w",
          }
        );
      };

      result();
    },
    changePrimaryColor(req, res) {
      //get scss variable from file
      //convert it into array
      const content = fs
        .readFileSync("resources/scss/main.scss", "utf-8")
        .split("\n");

      //loop on array and find color variable and replace it with new one
      content.forEach((contentSingle) => {
        if (contentSingle.includes("$primary")) {
          let indexOfContent = content.indexOf(contentSingle);
          content[indexOfContent] = `$primary: ${req.query.primaryColor}\r`;
          let modifiedContent = content.join("\n");
          console.log(modifiedContent);
        }
      });
    },
  };
};

module.exports = themeController;

//code...
