// chartist chart creation
var data = {
    labels: ['','Tue\n01 Sep', '', 'Thu\n03 Sep', '', 'Sat\n05 Sep','','Mon\n07 Sep','','Wed\n09 Sep',''
            ,'Fri\n11 Sep','','Sun\n13 Sep','','Tue\n15 Sep','','Thu\n17 Sep','','Sat\n19 Sep','','Mon\n21 Sep',''
            ,'Wed\n23 Sep','','Fri\n25 Sep','','Sun\n27 Sep','','Tue\n29 Sep'],
    series: [
      [
          {value:null},
          {value:2}, 
          {value:1}, 
          {value:3},
        ],
    [
        {value:0},
        {value:0}, 
        {value:0}, 
        {value:0},
      ],
      [
        {value:null},
        {value:null}, 
        {value:null}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}, 
        {value:0}
    ]
    ]
};

var options = {
    width: "1050px",
    height: "370px",
    low: 0,
    high: 4,
    lineSmooth:false,
    axisY: {
        onlyInteger: true,
        labelInterpolationFnc: function(value) {
            return '€'+ value },
    },
};

var chart = new Chartist.Line('.ct-chart', data, options);

// replace point by circles
chart.on('draw', function(data) {
    if(data.type === 'point') {
    var pastille = new Chartist.Svg('circle', {
        d: ['M',
          data.x,
          data.y - 15].join(' '),
        cx: data.x,
        cy: data.y,
        r: '4',
        style: 'stroke-width:2px; fill-opacity: 1',
        id: Math.floor(data.x) + '-' + Math.floor(data.y) + 'point',
    }, 'ct-area');
      data.element.replace(pastille);
    }
});
