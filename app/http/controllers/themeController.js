const fs = require("fs");
const sass = require("sass");
const path = require("path");

themeController = () => {
  return {
    index(req, res) {
      res.render("themeCustomization", { name: req.params.themeName });
    },
    changePrimaryColor(req, res) {
      //get scss variable from file
      //convert it into array
      let content = fs
        .readFileSync(
          `public/themes/${req.params.theme}/bootstrap.scss`,
          "utf-8"
        )
        .split("\n");

      let itemNo = 0;
      //loop on array and find color variable and replace it with new one
      content.forEach((contentSingle, index) => {
        //see for primary color in file and change it
        if (contentSingle.includes("$primary")) {
          let indexOfContent = content.indexOf(contentSingle);
          content[indexOfContent] = `$primary: ${req.query.primaryColor};\r`;
          let modifiedContent = content.join("\n");
          fs.writeFileSync(
            `public/themes/${req.params.theme}/bootstrap.scss`,
            modifiedContent
          );
        } else if (contentSingle.includes("$secondary")) {
          //same as above for secondary color
          let indexOfContent = content.indexOf(contentSingle);
          content[indexOfContent] = `$light: ${req.query.secondaryColor};\r`;
          let modifiedContent = content.join("\n");
          console.log(modifiedContent);
          fs.writeFileSync(
            `public/themes/${req.params.theme}/bootstrap.scss`,
            modifiedContent
          );
        }
        if (index + 1 === content.length) {
          //after doing modification to file it compiles it and saves it  in css

          //code to compile
          result = async () => {
            let result = await sass.compileAsync(
              path.join(
                __dirname,
                `../../../public/themes/${req.params.theme}/bootstrap.scss`
              )
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
        }
      });
    },
  };
};

module.exports = themeController;

//code...
