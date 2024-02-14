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
  });
}
openTheme.onclick = function () {
  inlineTheme.classList.add("change");
};
openFont.onclick = function () {
  inlineFont.classList.add("change");
};
openColor.onclick = function () {
  colorSection.classList.add("change");
};


let load1 = document.getElementById("load2");
function loadOut() {
  load1.style.display = "none";
}



//change theme function
let darkTheme = document.getElementById("darkTheme");
let lightTheme = document.getElementById("lightTheme");
let bgImg = document.getElementById("bgImg");
function ChTheme() {
  let ThemeRadios = document.getElementsByName("ThemeRadios");
  for (i = 0; i < ThemeRadios.length; i++) {
    if (ThemeRadios[i].checked) {
      console.log(ThemeRadios[i].value);
      document.body.classList.remove(
        "Light-Theme",
        "Dark-Theme",
        "Glassy-Theme"
      );
      document.body.classList.toggle(ThemeRadios[i].value);
      load1.style.display = "flex";
      setTimeout(loadOut, 3000);
    }
  }
}

function chn() {
  var radios = document.getElementsByName("radios");
  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      document.body.style.fontFamily = radios[i].value;
      const fontCh = radios[i].value;
      load1.style.display = "flex";
      setTimeout(loadOut, 3000);
    }
  }
}

const colorData = [
  {
    id: 0,
    main: "#83C0C1",
    fontColor: "#83C0C1",
    background: "#222831",
    SecondaryBack: "#393E46",
  },
  {
    id: 1,
    main: "#bce8ff",
    background: "#348aff",
    fontColor: "#2a0369",
    SecondaryBack: "#83C0C1",
  },
  {
    id: 2,
    main: "#3ada92",
    background: "#18505e",
    fontColor: "#d45685",
    SecondaryBack: "#181c2d",
  },
  {
    id: 3,
    main: "#9ac9a8",
    background: "#fbfafa",
    fontColor: "#08084a",
    SecondaryBack: "#355f32",
  },
  {
    id: 4,
    main: "#f3b564",
    background: "#f2e9d8",
    fontColor: "#0d0818",
    SecondaryBack: "#5a3f43",
  },
  {
    id: 5,
    main: "#b2f35f",
    background: "#1b2627",
    fontColor: "#b2f35f",
    SecondaryBack: "#202c2d",
  },
  {
    id: 6,
    main: "#bda0e2",
    background: "#1b2627",
    fontColor: "#bda0e2",
    SecondaryBack: "#202c2d",
  },
  {
    id: 7,
    main: "#bda0e2",
    background: "#fff",
    fontColor: "#bda0e2",
    SecondaryBack: "#efefef",
  },
];

let choice = document.getElementById("choice");
let colorUiOp = "";
for (item of colorData) {
  colorUiOp += `
  <input type="radio" id="colorRadio${item.id}" name="colorRadios" value="${item.id}" checked>
    <label for="colorRadio${item.id}">
      <div class="platter">
        <div class="platter1" style = "background:${item.main}"></div>
        <div class="platter2" style = "background:${item.background}"></div>
        <div class="platter3" style = "background:${item.fontColor}"></div>
        <div class="platter4" style = "background:${item.SecondaryBack}"></div>
      </div>
    </label>
  `;
}
choice.innerHTML = colorUiOp;

let glassyTheme = document.getElementsByClassName("glassyTheme");
let colors = document.getElementsByName("colorRadios");
function ChThemeC() {
  for (c = 0; c < colors.length; c++) {
    if (colors[c].checked) {
      var ch123 = colors[c].value;
      const stringValue = String(ch123);
      getGraph(stringValue);
      document.body.classList.remove(
        "Light-Theme",
        "Dark-Theme",
        "Glassy-Theme"
      );
      document.body.classList.toggle("Glassy-Theme");
      root.style.setProperty("--main-color", colorData[stringValue].main);
      root.style.setProperty("--background", colorData[stringValue].background);
      root.style.setProperty(
        "--secondary-back",
        colorData[stringValue].SecondaryBack
      );
      root.style.setProperty("--font-color", colorData[stringValue].fontColor);
      load1.style.display = "flex";
      setTimeout(loadOut, 3000);
    }
  }
}


