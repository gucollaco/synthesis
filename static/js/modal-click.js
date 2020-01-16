document.querySelector('.show-modal-echo').addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    const html = document.querySelector('html');

    modal.classList.add('is-active');
    html.classList.add('is-clipped');
});

document.querySelector('.modal-button-close').addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    const html = document.querySelector('html');

    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
});
