// Access the form and input elements
const bpForm = document.querySelector("#bpForm");
const diaInput = document.querySelector("#dia");
const sysInput = document.querySelector("#sys");
const plsInput = document.querySelector("#pls");
const dateTimeInput = document.querySelector("#bpDateTime");
const bpTable = document.querySelector("#bpTable");

// Function for form submission
function formSubmitted(event) {
  // Prevent the form from being submitted in the default way
  event.preventDefault();

  // Retrieve form data
  let dia = diaInput.value;
  let sys = sysInput.value;
  let pls = plsInput.value;
  let dateTime = dateTimeInput.value
    ? moment(dateTimeInput.value).format("MM/DD/YYYY")
    : moment().format("MM/DD/YYYY");

  // Update the chart with the new data
  window.bpChart.data.labels.push(dateTime);
  window.bpChart.data.datasets[0].data.push(dia); // DIA
  window.bpChart.data.datasets[1].data.push(sys); // SYS
  window.bpChart.data.datasets[2].data.push(pls); // PLS
  window.bpChart.update();

  // Add the new reading to the table
  let newRow = bpTable.insertRow();
  newRow.innerHTML = `
    <td>${dateTime}</td>
    <td>${sys}</td>
    <td>${dia}</td>
    <td>${pls}</td>
  `;

  // Display the chart and table
  document.getElementById("bpChart").style.display = "block";
  bpTable.style.display = "table";

  // Reset the form
  bpForm.reset();
}

// Add event listener to the form
bpForm.addEventListener("submit", formSubmitted);

// Create the chart
createChart();
