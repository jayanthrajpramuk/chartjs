var data = [{
	'dataLabel': 'January',
	'dataSet': [
		{
			'datasetlabel': 'TRAJECTORY1',
			'datasetValue': [1],
			'type': 'line'
		}, {
			'datasetlabel': 'TRAJECTORY2',
			'datasetValue': [2],
			'type': 'line'
		}, {
			'datasetlabel': 'RECIEVED',
			'datasetValue': [3],
			'type': 'bar'
		}, {
			'datasetlabel': 'READY_TO_STORE',
			'datasetValue': [4],
			'type': 'bar'
		}, {
			'datasetlabel': 'PROCURED',
			'datasetValue': [5],
			'type': 'bar'
		}, {
			'datasetlabel': 'BORROWED',
			'datasetValue': [6],
			'type': 'bar'
		}, {
			'datasetlabel': 'STORED',
			'datasetValue': [7],
			'type': 'bar'
		}, {
			'datasetlabel': 'SCRAPPED',
			'datasetValue': [8],
			'type': 'bar'
		}, {
			'datasetlabel': 'REQUESTED',
			'datasetValue': [9],
			'type': 'bar'
		}]
},
	{
		'dataLabel': 'Feburary',
		'dataSet': [
			{
				'datasetlabel': 'TRAJECTORY1',
				'datasetValue': [10],
				'type': 'line'
			}, {
				'datasetlabel': 'TRAJECTORY2',
				'datasetValue': [15],
				'type': 'line'
			}, {
				'datasetlabel': 'RECIEVED',
				'datasetValue': [41],
				'type': 'bar'
			}, {
				'datasetlabel': 'READY_TO_STORE',
				'datasetValue': [191],
				'type': 'bar'
			}, {
				'datasetlabel': 'PROCURED',
				'datasetValue': [1213],
				'type': 'bar'
			}, {
				'datasetlabel': 'BORROWED',
				'datasetValue': [19],
				'type': 'bar'
			}, {
				'datasetlabel': 'STORED',
				'datasetValue': [71],
				'type': 'bar'
			}, {
				'datasetlabel': 'SCRAPPED',
				'datasetValue': [221],
				'type': 'bar'
			}, {
				'datasetlabel': 'REQUESTED',
				'datasetValue': [53],
				'type': 'bar'
			}]
	}, {
		'dataLabel': 'March',
		'dataSet': [
			{
				'datasetlabel': 'TRAJECTORY1',
				'datasetValue': [18],
				'type': 'line'
			}, {
				'datasetlabel': 'TRAJECTORY2',
				'datasetValue': [52],
				'type': 'line'
			}, {
				'datasetlabel': 'RECIEVED',
				'datasetValue': [44],
				'type': 'bar'
			}, {
				'datasetlabel': 'READY_TO_STORE',
				'datasetValue': [199],
				'type': 'bar'
			}, {
				'datasetlabel': 'PROCURED',
				'datasetValue': [1231],
				'type': 'bar'
			}, {
				'datasetlabel': 'BORROWED',
				'datasetValue': [92],
				'type': 'bar'
			}, {
				'datasetlabel': 'STORED',
				'datasetValue': [71],
				'type': 'bar'
			}, {
				'datasetlabel': 'SCRAPPED',
				'datasetValue': [222],
				'type': 'bar'
			}, {
				'datasetlabel': 'REQUESTED',
				'datasetValue': [54],
				'type': 'bar'
			}]
	}];

var dataLables = _.pluck(data, 'dataLabel');
//console.log(_.uniq(dataLables));

var statusBar = ['TRAJECTORY1', 'TRAJECTORY2', 'RECIEVED', 'READY_TO_STORE', 'PROCURED', 'BORROWED', 'STORED', 'SCRAPPED', 'REQUESTED'];

_.each(statusBar, function (v) {
var array=[];
var type = '';
console.log(v+"Array = ");
	_.each(dataLables, function (m) {
		var itemVal = getArray(m, v);
		array.push(itemVal.datasetValue[0]);
		type = itemVal.type;
		console.log("Graph Type : "+type);
	//console.log(v + ':' + ':' + m + ':' + itemVal)
	});
	console.log(array);

})

function getArray(a, b) {

	var filterSingleLabel = _.filter(data, function (v, k) {
		return v.dataLabel == a
	});
	var x = filterSingleLabel[0].dataSet;
	// console.log(x)

	var arrayObj = _.filter(x, function (v, k) {
		return v.datasetlabel == b
	})
	return arrayObj[0];
	// console.log(arrayObj);
}


