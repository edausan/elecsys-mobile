document.addEventListener('DOMContentLoaded', function () {
    var sidenav = selector('.sidenav');
    M.Sidenav.init(sidenav);
    var drop = selector('.dropdown-trigger');
    M.Dropdown.init(drop);
});

function selector(elem) {
    var elem = document.querySelectorAll(elem);
    return elem
}