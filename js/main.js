

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


//chart using chartJs

var myChart = new Chart(document.getElementById('month-chart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Tue 01 Sep','', 'Thu 03 Sep','', 'Sat 05 Sep','',],
        datasets: [{
            label: 'Current period (September 2020)',
            lineTension:0,
            data: [2, 1, 3, null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    defaults:{
        global:{
            hover:{
                animationDuration:'200'
            }
        }
    },
    options: {
        layout:{
            padding: {
                left: 100,
                right: 40,
                top: 40,
                bottom: 40
            }
        },
        responsive:false,
        maintainAspectRatio:false,
        animation:{
            duration:0
        },
        tooltips:{

        },
        scales: {
            yAxes: [{
                gridLines:{
                    color:'rgba(235, 235, 235, 1)',
                },
                ticks: {
                    max: 4,
                    stepSize:1,
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines:{
                    color:'rgba(0,0,0,0)',
                },
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    },
    canvas:{
        parentNode:{
            style:{
                height:'500px',
            }
        }
    }
});
