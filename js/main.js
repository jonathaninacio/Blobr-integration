
window.onload = () => {
    var monthFlexScrollbar = document.getElementById('month-flex-scrollbar');
    var maxScrollLeft = monthFlexScrollbar.scrollWidth - monthFlexScrollbar.clientWidth;
    monthFlexScrollbar.scrollLeft = maxScrollLeft;
};


function showPopupMenu() {
    document.getElementById('dropdown-button').classList.toggle("sidebar-dropdown-selected");
    document.getElementById('dropdown-menu').classList.toggle("popup-menu-visible");
}
