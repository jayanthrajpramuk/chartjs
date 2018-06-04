var data = [{
	'dataLabel': 'LC15699',
	'dataSet': [
		{
			'datasetlabel': 'NOT_PLACED',
			'datasetValue': [1],
			'type': 'bar'
		}, {
			'datasetlabel': 'PLACED',
			'datasetValue': [2],
			'type': 'bar'
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
		'dataLabel': 'MR223344',
		'dataSet': [
			{
				'datasetlabel': 'NOT_PLACED',
				'datasetValue': [10],
				'type': 'bar'
			}, {
				'datasetlabel': 'PLACED',
				'datasetValue': [15],
				'type': 'bar'
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
		'dataLabel': 'OPY778448',
		'dataSet': [
			{
				'datasetlabel': 'NOT_PLACED',
				'datasetValue': [18],
				'type': 'bar'
			}, {
				'datasetlabel': 'PLACED',
				'datasetValue': [52],
				'type': 'bar'
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
console.log(_.uniq(dataLables));

var statusBar = ['NOT_PLACED', 'PLACED', 'RECIEVED', 'READY_TO_STORE', 'PROCURED', 'BORROWED', 'STORED', 'SCRAPPED', 'REQUESTED'];

var returnObj = {};
returnObj['dataLabels'] = dataLables;
returnObj['statusBar'] = statusBar;



_.each(statusBar, function (v) {
var array=[];
var itemValmain;
//console.log(v+"Array = ");
	_.each(dataLables, function (m) {
		var itemVal = getArray(m, v);
		array.push(itemVal);
		itemValmain = itemVal;
		console.log(v + ':' + ':' + m + ':' + itemVal)
	});
	console.log(array);
	returnObj[v] = array;
});

function getArray(a, b) {

	var filterSingleLabel = _.filter(data, function (v, k) {
		return v.dataLabel == a
	});
	var x = filterSingleLabel[0].dataSet;
	console.log(x)

	var arrayObj = _.filter(x, function (v, k) {
		return v.datasetlabel == b
	});
	console.log(arrayObj);
	return arrayObj[0].datasetValue[0];
	// console.log(arrayObj);
}


