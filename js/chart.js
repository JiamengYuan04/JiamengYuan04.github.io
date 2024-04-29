
window.onload = function() {
    // Utility function to generate random bubbles
    const generateRandomBubbles = (count) => {
        return Array.from({ length: count }, () => {
            return {
                x: Math.random() * 50, 
                y: Math.random() * 50, 
                r: Math.random() * 20
            };
        });
    };

    // Utility function to generate floating bar data
    const generateRandomBarData = (count) => {
        return Array.from({ length: count }, (v, i) => {
            const min = Math.random() * 10;
            const max = min + Math.random() * 20;
            return {x: i + 1, y: [min, max]};
        });
    };

    // Bubble Chart Initialization
    const bubbleChartCtx = document.getElementById('bubbleChart').getContext('2d');
    const bubbleChartData = {
        datasets: [
            {
                label: 'Bubble Dataset',
                data: generateRandomBubbles(5),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)'
            }
        ]
    };
    const bubbleChartOptions = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };
    const bubbleChart = new Chart(bubbleChartCtx, {
        type: 'bubble',
        data: bubbleChartData,
        options: bubbleChartOptions
    });

    // Floating Bar Chart Initialization
    const floatingBarChartCtx = document.getElementById('floatingBarChart').getContext('2d');
    const floatingBarChartData = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
        datasets: [
            {
                label: 'Dataset 1',
                data: generateRandomBarData(4),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
    const floatingBarChartOptions = {
        responsive: true,
        scales: {
            x: {
                type: 'category',
                labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
            },
            y: {
                beginAtZero: true
            }
        }
    };
    const floatingBarChart = new Chart(floatingBarChartCtx, {
        type: 'bar',
        data: floatingBarChartData,
        options: floatingBarChartOptions
    });
};
