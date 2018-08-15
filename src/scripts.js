var donationsChartElement = document.getElementById("donationsChart").getContext('2d');

var donationsChart = new Chart(donationsChartElement, {
    type: 'doughnut',
    data: {
        labels: ["Software Development", "Operations", "Marketing", "Funding (projects)", "Advisors", "Legal", "Community"],
        datasets: [{
            label: "Donations Allocation",
            backgroundColor: ['#FFAA00', '#D0D0A2', '#808000', '#403318', '#201A0C', '#856B27', '#BD9635'],
            borderColor: '#ffffff',
            data: [40, 8, 14, 10, 2, 6, 20],
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: 'right',
            labels: {
                padding: 8,
                fontSize: 14,
                boxWidth: 24,
                fontColor: 'white',
                fontStyle: 'normal',
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        },
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                }
            }
        },
    }
});