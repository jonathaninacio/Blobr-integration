

let monthFlexScrollbar = document.getElementById('month-flex-scrollbar');
let maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;

// move scroll to the right + mouseover for chart popup
window.onload = () => {
    setTimeout(function () {
        maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;
        monthFlexScrollbar.scrollLeft = maxScrollLeft;

        let ctArea = document.getElementsByClassName('ct-area');
        ctArea[0].onmouseover = () => {
            document.getElementById('card1').style.display = 'block';
        };
        ctArea[0].onmouseout = () => {
            document.getElementById('card1').style.display = 'none';
        };
        ctArea[1].onmouseover = () => {
            document.getElementById('card2').style.display = 'block';
        };
        ctArea[1].onmouseout = () => {
            document.getElementById('card2').style.display = 'none';
        };
        ctArea[2].onmouseover = () => {
            document.getElementById('card3').style.display = 'block';
        };
        ctArea[2].onmouseout = () => {
            document.getElementById('card3').style.display = 'none';
        };
    }, 50);
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


