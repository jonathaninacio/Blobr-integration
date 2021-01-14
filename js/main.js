

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
var prevArrow = document.getElementById('prev-arrow');
var nextArrow = document.getElementById('next-arrow');

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