var ctx = document.getElementById("myChart").getContext("2d");

        var chart = {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {

                    onComplete: function(animation) {
                        var sourceCanvas = myLiveChart.chart.canvas;
                        var copyWidth = myLiveChart.scales['y-axis-0'].width - 10;
                        var copyHeight = myLiveChart.scales['y-axis-0'].height + myLiveChart.scales['y-axis-0'].top + 10;
                        var targetCtx = document.getElementById("myChartAxis").getContext("2d");
                        targetCtx.canvas.width = copyWidth;
                targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
                    }
                }
      },
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [650, 590, 8, 81, 5, 550, 40,650, 590, 8, 81, 5, 550, 40,650, 590, 8, 81, 5, 550, 40650, 590, 8, 81, 5, 550, 40,650, 590, 8, 81, 5, 550, 40650, 590, 8, 81, 5, 550, 40650, 590, 8, 81, 5, 550, 40,650, 590, 8, 81, 5, 550, 40650, 590, 8, 81, 5, 550, 40,650, 590, 8, 81, 5, 550, 40]
                }
            ]
        }};

   var myLiveChart = new Chart(ctx, chart);

 setTimeout(function () {
  myLiveChart.data.datasets[0].data.push(Math.random() * 100);
	myLiveChart.data.labels.push("Test");
  var newwidth = $('.chartAreaWrapper2').width() +60;
  $('.chartAreaWrapper2').width(newwidth);
   $('.chartAreaWrapper').animate({scrollLeft:newwidth});

    }, 5000);
