import axios from "axios";

function changeColor(color) {
  axios
    .get(`/theme/changeprimarycolor?primaryColor=%23${color}`)
    .catch((err) => {
      console.log(err);
    });
}

//change color when user select it
let primaryColor = document.getElementById("primary");
let iframe = document.getElementById("themeShow");
primaryColor.addEventListener("input", () => {
  //removing # from color
  const colorArr = primaryColor.value.split("");
  colorArr.shift();
  const color = colorArr.join("");

  //calling function on event
  changeColor(color);
  iframe.contentDocument.location.reload("true");
});
