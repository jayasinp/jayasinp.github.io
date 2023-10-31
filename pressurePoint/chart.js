window.createChart = function () {
  const ctx = document.getElementById("bpChart").getContext("2d");

  window.bpChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "DIA",
          data: [],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
          tension: 0.4,
        },
        {
          label: "SYS",
          data: [],
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.4,
        },
        {
          label: "PLS",
          data: [],
          borderColor: "rgb(153, 102, 255)",
          borderDash: [5, 5],
          fill: false,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: "category", // Change the type to 'category'
          display: true,
          title: {
            display: true,
            text: "Date & Time",
          },
          grid: {
            display: false,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Reading",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
};
