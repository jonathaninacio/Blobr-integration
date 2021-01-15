

let monthFlexScrollbar = document.getElementById('month-flex-scrollbar');
let maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;

window.onload = () => {
    maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;
    monthFlexScrollbar.scrollLeft = maxScrollLeft;
};

function showPopupMenu() {
    document.getElementById('dropdown-button').classList.toggle("sidebar-dropdown-selected");
    document.getElementById('dropdown-menu').classList.toggle("popup-menu-visible");
}

//prevarrow & nextarrow //scrolling .month-container with arrow buttons on each sides
let prevArrow = document.getElementById('prev-arrow');
let nextArrow = document.getElementById('next-arrow');

function fnprevarrow() {
    if (monthFlexScrollbar.scrollLeft <= maxScrollLeft){
        monthFlexScrollbar.scrollBy({
            left:-300,
            behavior: 'smooth'
        })
        nextArrow.style.fill = '#000';
        if (monthFlexScrollbar.scrollLeft-300 <= 0){
            prevArrow.style.fill = '#B3B3B3';
        }
    }
}
function fnnextarrow() {
    if (monthFlexScrollbar.scrollLeft >= 0){
        monthFlexScrollbar.scrollBy({
            left:300,
            behavior: 'smooth'
        })
        prevArrow.style.fill = '#000';
        if (monthFlexScrollbar.scrollLeft+300 >= maxScrollLeft){
            nextArrow.style.fill = '#B3B3B3';
        }
    }
}

function changeScrollDelta(event){
    event.currentTarget.scrollLeft += event.deltaY;
    if (monthFlexScrollbar.scrollLeft <= 0){
        prevArrow.style.fill = '#B3B3B3';
    }
    else if (monthFlexScrollbar.scrollLeft >= maxScrollLeft){
        nextArrow.style.fill = '#B3B3B3';
    }
    else{
        nextArrow.style.fill = '#000';
        prevArrow.style.fill = '#000';
    }
}
monthFlexScrollbar.addEventListener("wheel", changeScrollDelta, {passive: true});


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

