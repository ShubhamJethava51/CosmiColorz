import axios from "axios";

function changeColor(primaryColor, secondaryColor, theme) {
  axios
    .get(
      `/${theme}/changeprimarycolor?primaryColor=%23${primaryColor}&secondaryColor=%23${secondaryColor}`
    )
    .catch((err) => {
      console.log(err);
    });
}

//change color when user select it
let primaryColor = document.getElementById("primary");
let secondaryColor = document.getElementById("secondary");
let iframe = document.getElementById("themeShow");
let apply = document.getElementById("applyButton");
apply.addEventListener("click", () => {
  // current url path
  let urlAddress = window.location.pathname.split("/");
  //removing # from color
  let primaryColorArr = primaryColor.value.split("");
  primaryColorArr.shift();
  let finalPrimaryColor = primaryColorArr.join("");

  let secondaryColorArr = secondaryColor.value.split("");
  secondaryColorArr.shift();
  let finalSecondaryColor = secondaryColorArr.join("");

  //calling function on event
  changeColor(finalPrimaryColor, finalSecondaryColor, urlAddress[1]);
  iframe.contentDocument.location.reload("true");
});
