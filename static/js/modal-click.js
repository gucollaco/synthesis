document.addEventListener("mousemove", function(event) {
    const modalEcho = document.querySelector('.show-modal-echo');
    const modalRango = document.querySelector('.show-modal-rango');
    const modalPac = document.querySelector('.show-modal-pac');
    const modalDraw = document.querySelector('.show-modal-draw');
    
    if(modalEcho) updateModalEcho()
    if(modalRango) updateModalRango()
    if(modalPac) updateModalPac()
    if(modalDraw) updateModalDraw()
});

updateModalEcho();
updateModalRango();
updateModalPac();
updateModalDraw();

function updateModalEcho() {
    document.querySelector('.show-modal-echo').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-echo');
        const html = document.querySelector('html');

        modal.classList.add('is-active');
        html.classList.add('is-clipped');
    });

    document.querySelector('.modal-button-close-echo').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-echo');
        const html = document.querySelector('html');

        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
}

function updateModalRango() {
    document.querySelector('.show-modal-rango').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-rango');
        const html = document.querySelector('html');

        modal.classList.add('is-active');
        html.classList.add('is-clipped');
    });

    document.querySelector('.modal-button-close-rango').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-rango');
        const html = document.querySelector('html');

        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
}

function updateModalPac() {
    document.querySelector('.show-modal-pac').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-pac');
        const html = document.querySelector('html');

        modal.classList.add('is-active');
        html.classList.add('is-clipped');
    });

    document.querySelector('.modal-button-close-pac').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-pac');
        const html = document.querySelector('html');

        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
}

function updateModalDraw() {
    document.querySelector('.show-modal-draw').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-draw');
        const html = document.querySelector('html');

        modal.classList.add('is-active');
        html.classList.add('is-clipped');
    });

    document.querySelector('.modal-button-close-draw').addEventListener('click', function(event) {
        const modal = document.getElementById('modal-draw');
        const html = document.querySelector('html');

        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
}    
