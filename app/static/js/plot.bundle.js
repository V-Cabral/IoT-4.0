/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../app/src/js/dashboard/plot.js":
/*!***************************************!*\
  !*** ../app/src/js/dashboard/plot.js ***!
  \***************************************/
/***/ (() => {

eval("let options = {\r\n  responsive: false,\r\n  maintainAspectRatio: true,\r\n  plugins: {\r\n    legend: {\r\n      display: false,\r\n    },\r\n  },\r\n  scales: {\r\n    y: {\r\n      ticks: { color: \"#7380ec\" },\r\n    },\r\n    x: {\r\n      ticks: { color: \"#7380ec\" },\r\n    },\r\n  },\r\n};\r\n\r\nlet rpm_chart_ctx = plotRPMData({ id: null, rpm: null });\r\ndocument\r\n  .getElementById(\"ButtonFetchRpm\")\r\n  .addEventListener(\"click\", function () {\r\n    fetch(\"/get-data\")\r\n      .then(function (response) {\r\n        return response.json();\r\n      })\r\n      .then(function (data) {\r\n        console.log(data);\r\n        rpm_chart_ctx.data.datasets[0].data = data.rpm;\r\n        rpm_chart_ctx.data.labels = data.id;\r\n        rpm_chart_ctx.update();\r\n      });\r\n  });\r\n\r\nlet lambda_chart_ctx = plotLambdaData({ id: null, lambda: null });\r\ndocument\r\n  .getElementById(\"ButtonFetchLambda\")\r\n  .addEventListener(\"click\", function () {\r\n    fetch(\"/get-data\")\r\n      .then(function (response) {\r\n        return response.json();\r\n      })\r\n      .then(function (data) {\r\n        console.log(data);\r\n        lambda_chart_ctx.data.datasets[0].data = data.lambda;\r\n        lambda_chart_ctx.data.labels = data.id;\r\n        lambda_chart_ctx.update();\r\n      });\r\n  });\r\n\r\nfunction plotRPMData(data) {\r\n  const ctx = document.getElementById(\"RpmChart\");\r\n\r\n  return new Chart(ctx, {\r\n    type: \"line\",\r\n    data: {\r\n      labels: data.id,\r\n      datasets: [\r\n        {\r\n          label: \"Rotações por minuto (RPM)\",\r\n          data: data.rpm,\r\n          borderWidth: 1,\r\n          borderColor: [\"#7380ec\"],\r\n          backgroundColor: [\"#8489c833\"],\r\n          fill: true,\r\n          tension: 0.5,\r\n          pointRadius: 5,\r\n        },\r\n      ],\r\n    },\r\n    options: options,\r\n  });\r\n}\r\n\r\nfunction plotLambdaData(data) {\r\n  const ctx = document.getElementById(\"LambdaChart\");\r\n\r\n  return new Chart(ctx, {\r\n    type: \"line\",\r\n    data: {\r\n      labels: data.id,\r\n      datasets: [\r\n        {\r\n          label: \"Mistura ar/combustível\",\r\n          data: data.lambda,\r\n          borderWidth: 1,\r\n          borderColor: [\"#7380ec\"],\r\n          backgroundColor: [\"#8489c833\"],\r\n          fill: true,\r\n          tension: 0.5,\r\n          pointRadius: 5,\r\n        },\r\n      ],\r\n    },\r\n    options: options,\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://config/../app/src/js/dashboard/plot.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../app/src/js/dashboard/plot.js"]();
/******/ 	
/******/ })()
;