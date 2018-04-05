var ctx = document.getElementById("myChart").getContext('2d');
// var ctx2 = document.getElementById("myChart2").getContext('2d');
var optionObject = {
    legend: {

    },
    onClick : function(e, legendItem) {
        var activePoints = myChart.getElementsAtEvent(e);
        if (activePoints[0]) {
            var chartData = activePoints[0]['_chart'].config.data;
            var idx = activePoints[0]['_index'];

            var label = chartData.labels[idx];
            var value = chartData.datasets[0].data[idx];

            var url = "http://example.com/?label=" + label + "&value=" + value;
            console.log(url);
            alert(url);
        }
    }

};
// PIE - START
var dataObject = {
    labels: ["Stored", "Ready To Store", "Ordered", "Placed", "In Transit"],
    datasets: [{
        backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f"

        ],
        data: [12, 19, 3, 17, 28]
    }]
};

var myChart = new Chart(ctx, {
    type: 'pie',
    options: optionObject,
    data: dataObject
});
// PIE - END

//LINE - START
var dataObjectBar = {
    labels: ["Stored", "Ready To Store", "Ordered", "Placed", "In Transit"],
    datasets: [{
        backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f"

        ],
        data: [12, 19, 3, 17, 28]
    }]
};

/*var myChart = new Chart(ctx2, {
    type: 'line',
    options: optionObject,
    data: dataObjectBar
});*/
//LINE - END

//ANNOTATION - START
var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};
var randomColor = function(opacity) {
    return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
};

var scatterChartData = {
    datasets: [{
        label: "My First dataset",
        data: [{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }]
    }, {
        label: "My Second dataset",
        data: [{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }]
    }]
};

scatterChartData.datasets.forEach(function(dataset) {
    dataset.borderColor = randomColor(0.4);
    dataset.backgroundColor = randomColor(0.1);
    dataset.pointBorderColor = randomColor(0.7);
    dataset.pointBackgroundColor = randomColor(0.5);
    dataset.pointBorderWidth = 1;
});

// var ctx = document.getElementById("algorithm").getContext("2d");

/*window.myScatter = Chart.Scatter(ctx, {
    data: scatterChartData,
    options: {
        title: {
            display: true,
            text: 'Chart.js Scatter Chart'
        },
        scales: {
            xAxes: [{
                position: 'top',
                gridLines: {
                    zeroLineColor: "rgba(0,255,0,1)"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'x axis'
                },
                ticks: {
                    maxRotation: 0,
                    reverse: true
                }
            }],
            yAxes: [{
                position: 'right',
                gridLines: {
                    zeroLineColor: "rgba(0,255,0,1)"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'y axis'
                },
                ticks: {
                    reverse: true
                }
            }]
        },
        annotation: {
            drawTime: "afterDraw",
            annotations: [{
                type: 'box',
                xScaleID: 'x-axis-1',
                yScaleID: 'y-axis-1',
                xMin: -20,
                xMax: 20,
                yMin: -20,
                yMax: 20,
                backgroundColor: 'rgba(101, 33, 171, 0.5)',
                borderColor: 'rgb(101, 33, 171)',
                borderWidth: 1
            }]
        }
    }
});*/

//ANNOTATION - END