function hamburguerMobileSetup() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
}

function updateSelectedByUrl() {
    const currentPage = window.location.pathname;
    const oldSelected = document.querySelector("a > p.navbar-custom-text.navbar-current");
    let newSelected;

    if (currentPage.includes('about'))
        newSelected = document.querySelector("a > p.navbar-custom-text.about");
    else if (currentPage.includes('portfolio'))
        newSelected = document.querySelector("a > p.navbar-custom-text.portfolio");
    else
        newSelected = document.querySelector("a > p.navbar-custom-text.home");

    if(newSelected != oldSelected) {
        oldSelected.classList.remove("navbar-current");
        newSelected.classList.add("navbar-current");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateSelectedByUrl();
    hamburguerMobileSetup();
})
