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



//forecast graph

var chart = document.getElementById("NewChart").getContext("2d"),
  gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "2:00",
  ],
  datasets: [
    {
      label: "Custom Label Name",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [3, 5, 6, 7, 8, 9, 1, 12, 12, 19, 21],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(chart, {
  type: "line",
  data: data,
  options: options,
});



//coChart



var coChart = document.getElementById("coChart").getContext("2d"),
  gradient = coChart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var coData = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "co",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [23, 15, 46, 87, 18, 19, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(coChart, {
  type: "line",
  data: coData,
  options: options,
});


//nh3


var nh3 = document.getElementById("nh3Chart").getContext("2d"),
  gradient = nh3.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var nh3Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "nh3",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [43, 35, 96, 77, 48, 59, 71],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(nh3, {
  type: "line",
  data: nh3Data,
  options: options,
});


//noChart

var noChart = document.getElementById("noChart").getContext("2d"),
  gradient = noChart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var noData = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "no",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [13, 54, 46, 87, 48, 39, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(noChart, {
  type: "line",
  data: noData,
  options: options,
});


//no2Chart

var no2Chart = document.getElementById("no2Chart").getContext("2d"),
  gradient = no2Chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var no2Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "no2",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [93, 95, 86, 77, 28, 49, 51],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(no2Chart, {
  type: "line",
  data: no2Data,
  options: options,
});


//o3Chart


var o3Chart = document.getElementById("o3Chart").getContext("2d"),
  gradient = o3Chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var o3Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "o3",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [23, 52, 46, 27, 48, 94, 21],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(o3Chart, {
  type: "line",
  data: o3Data,
  options: options,
});

//pm2_5Chart


var pm2_5Chart = document.getElementById("pm2_5Chart").getContext("2d"),
  gradient = pm2_5Chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var pm2_5Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "pm2_5",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [33, 35, 46, 57, 78, 98, 91],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(pm2_5Chart, {
  type: "line",
  data: pm2_5Data,
  options: options,
});


//pm10Chart


var pm10Chart = document.getElementById("pm10Chart").getContext("2d"),
  gradient = pm10Chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var pm10Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "pm10",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [23, 85, 56, 77, 68, 79, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(pm10Chart, {
  type: "line",
  data: pm10Data,
  options: options,
});


//so2Chart


var so2Chart = document.getElementById("so2Chart").getContext("2d"),
  gradient = so2Chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(72,72,72, 0.4)");
gradient.addColorStop(0.5, "rgba(72,72,72, 0.2)");
gradient.addColorStop(1, "rgba(72,72,72, 0.1)");

var so2Data = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
  ],
  datasets: [
    {
      label: "so2",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(109,110,103)",
      data: [83, 58, 76, 87, 78, 89, 71],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 5520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "#424242",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(so2Chart, {
  type: "line",
  data: so2Data,
  options: options,
});