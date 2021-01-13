

var monthFlexScrollbar = document.getElementById('month-flex-scrollbar');
var maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;

window.onload = () => {
    maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;
    monthFlexScrollbar.scrollLeft = maxScrollLeft;
};

function showPopupMenu() {
    document.getElementById('dropdown-button').classList.toggle("sidebar-dropdown-selected");
    document.getElementById('dropdown-menu').classList.toggle("popup-menu-visible");
}

//prevarrow & nextarrow //scrolling .month-container with arrow buttons on each sides
function prevarrow() {
    if (monthFlexScrollbar.scrollLeft <= maxScrollLeft){
        monthFlexScrollbar.scrollBy({
            left:-300,
            behavior: 'smooth'
        })
        document.getElementById('next-arrow').style.fill = '#000';
        if (monthFlexScrollbar.scrollLeft-300 <= 0){
            document.getElementById('prev-arrow').style.fill = '#B3B3B3';
        }
    }
}
function nextarrow() {
    if (monthFlexScrollbar.scrollLeft >= 0){
        monthFlexScrollbar.scrollBy({
            left:300,
            behavior: 'smooth'
        })
        document.getElementById('prev-arrow').style.fill = '#000';
        if (monthFlexScrollbar.scrollLeft+300 >= maxScrollLeft){
            document.getElementById('next-arrow').style.fill = '#B3B3B3';
        }
    }
}