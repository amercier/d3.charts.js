js
============

Object-oriented API build on top of D3.js

**js** is an abstraction layer on top of D3.js that allows you to
create charts.


Line Chart
----------

```
require(['d3/charts/Chart', 'd3/data/Continuous', 'd3/axis/X', 'd3/axis/Y', 'd3/'], function(Chart, ContinuousData, XAxis, YAxis) {

  new Chart({
      width: 700,
      height: 200
    })
    .addData(new ContinuousData(data))
    .addLayer(new YAxis())
    .addLayer(new YAxis())
    .addLayer(new Line());
```

```
require(['d3/charts/Chart', 'd3/data/Continuous', 'd3/axis/X', 'd3/axis/Y', 'd3/'], function(Chart, ContinuousData, XAxis, YAxis) {

  new Chart({
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      width: 700,
      height: 200
    })
    .addData(new ContinuousData(data))
    .addLayer(new XAxis({
        thickness: 1,
        tickSize: 6,
        subDivide: true,
        subTickSize: 3,
        position: 'bottom',
        class: 'axis axis-x'
      })
    .addLayer(new YAxis({
        thickness: 1,
        tickSize: 6,
        subDivide: true,
        subTickSize: 3,
        position: 'left',
        class: 'axis axis-y'
      })
    .addLayer(new Line( {
        ,
        class: 'line'
      });

});
```
