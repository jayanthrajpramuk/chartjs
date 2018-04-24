window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

var chartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		type: 'line',
		label: 'Trajectory',
		borderColor: window.chartColors.yellow,
		borderWidth: 3,
		fill: false,
		data: [
			1, 5, 2, 8, 3, 9, 1
		]
	},
		{
			type: 'line',
			label: 'Trajectory2',
			borderColor: window.chartColors.red,
			borderWidth: 3,
			fill: false,
			data: [
				4, 6, 2, 5, 7, 9, 1
			]
		},
		{
			type: 'bar',
			label: 'Total',
			backgroundColor: window.chartColors.blue,
			data: [
				7, 6, 5, 4, 3, 2, 1
			],
			borderColor: 'white',
			borderWidth: 2
		},
		{
			type: 'bar',
			label: 'PP Placed',
			backgroundColor: window.chartColors.purple,
			data: [
				1, 2, 3, 4, 5, 6, 7
			]
		},
		{
			type: 'bar',
			label: 'Order Placed',
			backgroundColor: window.chartColors.red,
			data: [
				2, 4, 6, 8, 10, 12, 14
			],
			borderColor: 'white',
			borderWidth: 2
		},
		{
			type: 'bar',
			label: 'Parts Recieved',
			backgroundColor: window.chartColors.green,
			data: [
				1, 3, 5, 7, 9, 11, 14
			],
			borderColor: 'white',
			borderWidth: 2
		},]

};

var ctx = document.getElementById('comboChart').getContext('2d');
var myMixedChart = new Chart(ctx, {
	type: 'bar',
	data: chartData,
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Follow up recieve forecast for XXXX'
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		plugins: {
			datalabels: {
				backgroundColor: function (context) {
					return context.dataset.backgroundColor;
				},
				borderRadius: 6,
				color: 'black',
				font: {
					weight: 'bold'
				},
				formatter: Math.round
			}
		},
		scales: {
			yAxes: [{
				stacked: false
			}]
		},
		legend: {
			display: true,
			position: 'bottom',
			onClick: function (evt, item, x) {
				alert('legend onClick: event:' + evt + 'item :' + item.text);
			}
		},
		onClick: function (evt, legendItem) {
			var activePoint = myMixedChart.getElementAtEvent(evt)[0];
			if (activePoint) {
				var data = activePoint._chart.data;
				var datasetIndex = activePoint._datasetIndex;
				var label = data.datasets[datasetIndex].label;
				var value = data.datasets[datasetIndex].data[activePoint._index];
				var to = data.labels[activePoint._index];
				alert("Bar clicked. E is " + evt + " legendItem " + legendItem + "Main is +" + label + "Value is :" + value + "TO is : " + to);
			}

		}
	}
});



