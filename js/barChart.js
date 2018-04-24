
// Bar - Start

// Return with commas in between
  var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

var dataPack1 = [2,6,44,9,32];
var dataPack2 = [4,18,9,9,19];
var dataPack3 = [3,7,16,8,10];
var dates = ["LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646"];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';


var bar_ctx = document.getElementById('barChart');
var bar_chart = new Chart(bar_ctx, {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [
				{
					label: 'NOT PLACED',
					data: dataPack1,
					backgroundColor: "rgba(55, 160, 225, 0.7)",
					hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
				},
				{
					label: 'PLACED',
					data: dataPack2,
					backgroundColor: "rgba(225, 58, 55, 0.7)",
					hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
				},
				{
					label: 'RECIEVED',
					data: dataPack3,
					backgroundColor: "rgba(25, 58, 55, 0.7)",
					hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
				},
			]
		},
		options: {
			title: {
				display: true,
				text: "Project P8820: Change request Order status for VI-1093",
				position: 'top'
			},
			plugins: {
				datalabels: {
					color: 'white',
					display: function (context) {
						return context.dataset.data[context.dataIndex] > 0;
					},
					borderRadius: 6,
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
			animation: {
				duration: 10,
			},
			tooltips: {
				mode: 'label',
				callbacks: {
					label: function (tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
					}
				}
			},
			scales: {
				xAxes: [{
					stacked: true,
					gridLines: {display: true},
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Part Number'
					},
					stacked: true,
					ticks: {
						callback: function (value) {
							return numberWithCommas(value);
						},
					},
				}],
			}, // scales
			legend: {
				display: true,
				position: 'bottom',
				onClick: function (evt, item) {
					alert('legend onClick: event:' + evt+'item :'+ item.text);
				}
			},
			onClick : function(evt, legendItem) {

				var activePoint = bar_chart.getElementAtEvent(evt)[0];
   var data = activePoint._chart.data;
   var datasetIndex = activePoint._datasetIndex;
   var label = data.datasets[datasetIndex].label;
   var value = data.datasets[datasetIndex].data[activePoint._index];
   var to = data.labels[activePoint._index];
				alert("Bar clicked. E is "+evt+" legendItem "+legendItem+"Main is +"+label+"Value is :"+value+"TO is : "+to);
			}
		} // options
	}
);

// Bar - end

