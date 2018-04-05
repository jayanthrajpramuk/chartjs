
// PIE - Start
var ctx = document.getElementById("pieChart").getContext('2d');

var optionObject = {
	title: {
	display: true,
	text: "Gloria - Chart : Part Status Chart",
	position: 'top'
	},
	legend: {
		display: true,
		position: 'right',
		onClick: function (evt, item) {
			alert('legend onClick: event:' + evt+'item :'+ item);
		},
		labels: {
			generateLabels: function (chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function (label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc && arc.custom || {};
						var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
						var arcOpts = chart.options.elements.arc;
						var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
						var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
						var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

// We get the value of the current label
						var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

						return {
							// Instead of `text: label,`
							// We add the value to the string
							text: label + " : " + value,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
							index: i
						};
					});
				} else {
					return [];
				}
			}
		}
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
    }/*,
	pieceLabel: {
      render: 'value',
      precision: 0,
      showZero: true,
      fontSize: 12,
      fontColor: '#fff',
      fontStyle: 'normal',
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      arc: true,
      position: 'default',
      overlap: true,
      showActualPercentages: true
    }*/

};

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
    data: dataObject,
	animation: {
         duration: 2000,
         onProgress: function(animation) {
             $progress.attr({
                 value: animation.animationObject.currentStep / animation.animationObject.numSteps,
             });
         },
         onComplete: function(animation) {
             alert('onAnimationComplete')
         }
     }
});
// PIE - end

