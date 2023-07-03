let options = {
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: { color: "#7380ec" },
    },
    x: {
      ticks: { color: "#7380ec" },
    },
  },
};

let rpm_chart_ctx = plotRPMData({ id: null, rpm: null });
document
  .getElementById("ButtonFetchRpm")
  .addEventListener("click", function () {
    fetch("/get-data")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        rpm_chart_ctx.data.datasets[0].data = data.rpm;
        rpm_chart_ctx.data.labels = data.id;
        rpm_chart_ctx.update();
      });
  });

let lambda_chart_ctx = plotLambdaData({ id: null, lambda: null });
document
  .getElementById("ButtonFetchLambda")
  .addEventListener("click", function () {
    fetch("/get-data")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        lambda_chart_ctx.data.datasets[0].data = data.lambda;
        lambda_chart_ctx.data.labels = data.id;
        lambda_chart_ctx.update();
      });
  });

function plotRPMData(data) {
  const ctx = document.getElementById("RpmChart");

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: data.id,
      datasets: [
        {
          label: "Rotações por minuto (RPM)",
          data: data.rpm,
          borderWidth: 1,
          borderColor: ["#7380ec"],
          backgroundColor: ["#8489c833"],
          fill: true,
          tension: 0.5,
          pointRadius: 5,
        },
      ],
    },
    options: options,
  });
}

function plotLambdaData(data) {
  const ctx = document.getElementById("LambdaChart");

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: data.id,
      datasets: [
        {
          label: "Mistura ar/combustível",
          data: data.lambda,
          borderWidth: 1,
          borderColor: ["#7380ec"],
          backgroundColor: ["#8489c833"],
          fill: true,
          tension: 0.5,
          pointRadius: 5,
        },
      ],
    },
    options: options,
  });
}
