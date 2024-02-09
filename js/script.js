let semi = document.getElementById("semi");
let inputNumber = document.getElementById("inputNumber");

let date1 = "2024-02-04 12:00:00";
let date2 = date1.slice(11, 16);

console.log(date2);

// var value = root.getPropertyValue('--sun');
// var root = document.documentElement;
var root = document.documentElement;
function abc() {
  console.log(12);
  let GetValue1 = inputNumber.value;
  root.style.setProperty("--sun", GetValue1);
  // alert(GetValue1);
  // semi.style.transform = `rotate( calc( 1deg * ( -45 + ${GetValue1} * 1.8 ) ) )`;
}

//panel opening
const SettingPanel = document.getElementById("SettingPanel");
const mainPanel = document.getElementById("main");

function openSetting() {
  SettingPanel.style.transform = "translateX(0px)";
  mainPanel.style.display = "none";
  SettingPanel.style.display = "block";
}
function closeSetting() {
  SettingPanel.style.transform = "translateX(100%)";
  mainPanel.style.display = "flex";
  SettingPanel.style.display = "none";
}
// open in setting menu function
// let theme = document.getElementById("theme");
// let font = document.getElementById("font");
// let color = document.getElementById("color");
// let back = document.getElementById("back");

// let themeSection = document.getElementById("themeSection");
// let fontSection = document.getElementById("fontSection");
// let colorSection = document.getElementById("colorSection");
// let backSection = document.getElementById("backSection");

// theme.onclick = function () {
//   theme.style.color = "var(--main-color)";
//   font.style.color = "#afafaf";
//   color.style.color = "#afafaf";
//   back.style.color = "#afafaf";
//   themeSection.style.display = "flex";
//   fontSection.style.display = "none";
//   colorSection.style.display = "none";
//   backSection.style.display = "none";
// };
// font.onclick = function () {
//   font.style.color = "var(--main-color)";
//   theme.style.color = "#afafaf";
//   color.style.color = "#afafaf";
//   back.style.color = "#afafaf";
//   fontSection.style.display = "flex";
//   themeSection.style.display = "none";
//   colorSection.style.display = "none";
//   backSection.style.display = "none";
// };



const colorData = [{
  id: "dark1",
  main: "darj1",
  secondaryMain: "#83C0C1",
  background: "#222831",
  SecondaryBack: "#393E46",
}, {
  id: "dark2",
  main: "#dark2",
  secondaryMain: "#",
  background: "#dark2back",
  SecondaryBack: "#",
}
]

let colors = document.getElementsByName('colorRadios');
function ChThemeC() {
  for (c = 0; c < colors.length; c++) {
      if (colors[c].checked) {
          var ch123 = colors[c].value
          const stringValue = String(ch123);
          console.log(colorData[stringValue].main)
          console.log(colorData[stringValue].background)
          console.log(stringValue)
      }
  }
}
let inlineTheme = document.getElementById("themeSection");
let inlineFont = document.getElementById("fontSection");
let openTheme = document.getElementById("themeOpen");
let openFont = document.getElementById("fontOpen");
let ThemeSection = document.getElementById("themeSection");
let closeCh = document.querySelectorAll("#closeCh");
let inline = document.querySelectorAll(".inSection");
let openColor = document.getElementById("colorOpen");
let colorSection = document.getElementById("colorSection");
for (i = 0; i < closeCh.length; i++) {
  closeCh[i].addEventListener("click", function () {
      for (i = 0; i < inline.length; i++) {
          inline[i].classList.remove("change");
      }
      console.log("jane")
  });
}
openTheme.onclick = function () {
  inlineTheme.classList.add("change");
}
openFont.onclick = function () {
  inlineFont.classList.add("change");
}
openColor.onclick = function () {
  colorSection.classList.add("change");
}



let load1 = document.getElementById("load2");
function loadOut(){
  load1.style.display = "none";
}
//change theme function
let darkTheme = document.getElementById("darkTheme");
let lightTheme = document.getElementById("lightTheme");
let glassyTheme = document.getElementById("glassyTheme");
let bgImg = document.getElementById("bgImg");
function ChTheme() {
  let ThemeRadios = document.getElementsByName('ThemeRadios');
  for (i = 0; i < ThemeRadios.length; i++) {
    if (ThemeRadios[i].checked) {
      console.log(ThemeRadios[i].value);
      document.body.classList.remove("Light-Theme", "Dark-Theme", "Glassy-Theme");
      document.body.classList.toggle(ThemeRadios[i].value);
      load1.style.display = "flex";
      setTimeout(loadOut, 3000);
    }
  }
};

const colors1 = {
main : "#6fc0fa",
secondaryMain : "#fff",
}
function chn() {
  var radios = document.getElementsByName('radios');
console.log(colors1.main)
  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      document.body.style.fontFamily = radios[i].value;
      load1.style.display = "flex";
      setTimeout(loadOut, 3000);
    }
  }
};
