// Bar - Start

// Return with commas in between
var numberWithCommas = function (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var splitRatio = 10;


var dataPack1 = [2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32,2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32];
var dataPack2 = [4, 18, 9, 9, 19, 4, 18, 9, 9, 19, 4, 18, 9, 9, 19, 4, 18, 9, 9, 19, 4, 18, 9, 9, 19, 4, 18, 9, 9, 19,2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32];
var dataPack3 = [3, 7, 16, 8, 10, 3, 7, 16, 8, 10, 3, 7, 16, 8, 10, 3, 7, 16, 8, 10, 3, 7, 16, 8, 10, 3, 7, 16, 8, 10,2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32, 2, 6, 44, 9, 32];
var dates = ["LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646","LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646", "LC15699", "MC7346V1", "MR15678", "MR6758587", "MR54535646"];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var optionObj = {

	type: 'bar',
	data: {
		labels: dates.splice(0,splitRatio),
		datasets: [
			{
				label: 'NOT PLACED',
				data: dataPack1.splice(0,splitRatio),
				backgroundColor: "#7acc58",
				hoverBackgroundColor:"#aeab46",
				hoverBorderWidth: 2,
				hoverBorderColor: '#2E2C2A'
			},
			{
				label: 'PLACED',
				data: dataPack2.splice(0,splitRatio),
				backgroundColor: "#4cbfbf",
				hoverBackgroundColor: "#3498db",
				hoverBorderWidth: 2,
				hoverBorderColor: '#2E2C2A'
			},
			{
				label: 'RECIEVED',
				data: dataPack3.splice(0,splitRatio),
				backgroundColor: "#ff6483",
				hoverBackgroundColor: "#ff8566",
				hoverBorderWidth: 2,
				hoverBorderColor: '#2E2C2A'
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
		responsive: true,
		maintainAspectRatio: false,
		animation: {

			onComplete: function (animation) {
				var sourceCanvas = myLiveChart.chart.canvas;
				var copyWidth = myLiveChart.scales['y-axis-0'].width - 10;
				var copyHeight = myLiveChart.scales['y-axis-0'].height + myLiveChart.scales['y-axis-0'].top + 10;
				var targetCtx = document.getElementById("mybarChartAxis").getContext("2d");
				targetCtx.canvas.width = copyWidth;
				targetCtx.canvas.height = copyHeight;
				targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
			}
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
				ticks: {
					min: 0,
					autoSkip: false
				}
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
					min: 0,
					autoSkip: false,
					stepSize:5
				},
			}],
		}, // scales
		legend: {
			display: true,
			position: 'bottom',
			onClick: function (evt, item) {
				alert('legend onClick: event:' + evt + 'item :' + item.text);
			}
		},
		onClick: function (evt, legendItem, x) {

			var activePoint = bar_chart.getElementAtEvent(evt)[0];

			if (activePoint) {
				var data = activePoint._chart.data;
				var datasetIndex = activePoint._datasetIndex;
				var label = data.datasets[datasetIndex].label;
				var value = data.datasets[datasetIndex].data[activePoint._index];
				var to = data.labels[activePoint._index];
				alert("Bar clicked. E is " + evt + " legendItem " + legendItem + "Main is +" + label + "Value is :" + value + "TO is : " + to);
			}

		}
	} // options
};

var bar_ctx = document.getElementById('mybarChart');

var bar_chart = new Chart(bar_ctx, optionObj);

// Bar - end

var myLiveChart = new Chart(bar_ctx, optionObj);

setTimeout(function () {
//	myLiveChart.data.datasets[0].data.push(Math.random() * 100);
	myLiveChart.data.datasets[0].data.push(10);
	myLiveChart.data.datasets[1].data.push(20);
	myLiveChart.data.datasets[2].data.push(30);
	var x = myLiveChart.data.labels//.push("End");
	// adding at the begining of the array
	x.push("New TO")

		myLiveChart.data.datasets[0].data.push(40);
		myLiveChart.data.datasets[1].data.push(60);
		myLiveChart.data.datasets[2].data.push(80);
		var x = myLiveChart.data.labels//.push("End");
		// adding at the begining of the array
		x.push("Batman");

		var length = dataPack1.length;
	for(var i = splitRatio ;i<=length-1; i++) {
		myLiveChart.data.datasets[0].data.push(dataPack1[i]);
		myLiveChart.data.datasets[1].data.push(dataPack2[i]);
		myLiveChart.data.datasets[2].data.push(dataPack3[i]);
		myLiveChart.data.labels.push(dates[i]);
		var newwidth = $('.chartAreaWrapper2').width() + 60;
		var newheight = $('.chartAreaWrapper2').height() + 20;
			$('.chartAreaWrapper2').width(newwidth);
		$('.chartAreaWrapper2').height(newheight);
		//$('.chartAreaWrapper').animate({scrollLeft: newwidth}); // time consuming
	}
	$('.chartAreaWrapper').animate({scrollLeft: 0});


	/*var newwidth = $('.chartAreaWrapper2').width() + 60;
	$('.chartAreaWrapper2').width(newwidth);*/
	// moving scroll at the end
	//$('.chartAreaWrapper').animate({scrollLeft: newwidth});

	// keeping scroll posotion at the begining.
	//$('.chartAreaWrapper').animate({scrollLeft: newwidth});
}, 0);
