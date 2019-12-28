function updateSelected(newSelected) {
    if (newSelected.classList.contains("navbar-item"))
        newSelected = newSelected.firstElementChild || newSelected.firstChild;

    const oldSelected = document.querySelector("a > p.navbar-custom-text.navbar-current");
    oldSelected.classList.remove("navbar-current");
    newSelected.classList.add("navbar-current");
}

function isNavbarOption() {
    if (event.target.matches("a > p.navbar-custom-text") ||
        event.target.matches("a.navbar-item[href]")) return true;
    return false;
}

document.addEventListener("click", function(event) {
    if (!isNavbarOption(event.target)) return;

    const newSelected = event.target;
    updateSelected(newSelected);
});
