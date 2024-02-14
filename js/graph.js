//forecast graph
const getGraph = (stringValue) => {
var chart = document.getElementById("NewChart").getContext("2d"),
  gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

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
      label: "Temperature",
      backgroundColor: gradient,
      titleFontColor: colorData[stringValue].background,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [3, 5, 6, 7, 8, 9, 1, 12, 12, 19, 21],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+50,
    titleFontColor: colorData[stringValue].background,
    caretSize: 5,
    cornerRadius: 12,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var coData = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "co",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [23, 15, 46, 87, 18, 19, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var nh3Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "nh3",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [43, 35, 96, 77, 48, 59, 71],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var noData = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "no",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [13, 54, 46, 87, 48, 39, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var no2Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "no2",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [93, 95, 86, 77, 28, 49, 51],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var o3Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "o3",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [23, 52, 46, 27, 48, 94, 21],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var pm2_5Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "pm2_5",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [33, 35, 46, 57, 78, 98, 91],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var pm10Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "pm10",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [23, 85, 56, 77, 68, 79, 11],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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

gradient.addColorStop(0, colorData[stringValue].main+90);
gradient.addColorStop(0.5, colorData[stringValue].main+40);
gradient.addColorStop(1, colorData[stringValue].main+10);

var so2Data = {
  labels: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
  datasets: [
    {
      label: "so2",
      backgroundColor: gradient,
      pointBackgroundColor: colorData[stringValue].main,
      borderWidth: 1,
      borderColor: colorData[stringValue].main,
      data: [83, 58, 76, 87, 78, 89, 71],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: colorData[stringValue].main+20,
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
    backgroundColor: colorData[stringValue].main,
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: colorData[stringValue].main+30,
    titleFontColor: colorData[stringValue].main+90,
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
}