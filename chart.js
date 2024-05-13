  // Replace with your actual employee earnings data
var earningsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Earnings',
    data: [2400, 2500, 2200, 2000, 1800, 2000, 2300, 2500, 2800, 3000, 2900, 2700], // Replace with your data
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1
  }]
};

// Replace with your actual employee distribution data
var distributionData = {
  labels: ['Academic', 'Non-Academic'],
  datasets: [{
    data: [60, 40], // Replace with number of employees in each category
    backgroundColor: ['#e59b51', '#996837'],
    hoverBackgroundColor: ['#d7914c', '#7a532c']
  }]
};

// Line chart for earnings
var ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: earningsData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Pie chart for employee distribution (changed to 'doughnut' for a ring-shaped chart)
var ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
  type: 'doughnut',
  data: distributionData
});
