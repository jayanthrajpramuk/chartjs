var data =[{
  'dataLabel' : 'NOT_PLACED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [1],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'PLACED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [5],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'RECIEVED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [4],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'READY_TO_STORE',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [19],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'PROCURED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [123],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'BORROWED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [9],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'STORED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [7],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'SCRAPED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [22],
    'type' : 'pie'
  }]
},{
  'dataLabel' : 'REQUESTED',
  'dataSet':[{
    'datasetlabel':'',
    'datasetValue' : [5],
    'type' : 'pie'
  }]
}];

//console.log(_.pluck(data,'dataLabel'));

var dataSetList = _.pluck(data,'dataSet')
var arr = [];

_.each(dataSetList, function(k){
   arr.push(k[0].datasetValue[0]);
})

console.log(_.pluck(data,'dataLabel'));
console.log(arr);
