import moment from "moment";

const date_input = document.getElementById("date");

var currentDate = moment();

date_input.value = currentDate.format("YYYY-MM-DD");

document.getElementById("download").addEventListener("click", function () {
  let date = date_input.value;
  fetch("/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: date }),
  })
    .then(function (response) {
      return response.blob(); // Dados binários do arquivo
    })
    .then(function (blob) {
      // Cria um URL temporário para o blob
      const url = window.URL.createObjectURL(blob);

      // Cria um elemento <a> para iniciar o download
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);

      // Inicia o download
      a.click();

      // Limpa o URL temporário
      window.URL.revokeObjectURL(url);
    });
});
