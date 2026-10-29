const modalOverlay = document.querySelector('.albums__modals');
const phosphorModal = document.getElementById('phosphor');
const phuneralModal = document.getElementById('phuneral');
const pinkPhloydModal = document.getElementById('pinkPhloyd');


document.getElementById('btnPhosphor').addEventListener('click', () => {
    modalOverlay.classList.add('is-open');
    phosphorModal.classList.add('is-active');
});

document.getElementById('btnPhuneral').addEventListener('click', () => {
    modalOverlay.classList.add('is-open');
    phuneralModal.classList.add('is-active');
});

document.getElementById('btnPinkPhloyd').addEventListener('click', () => {
    modalOverlay.classList.add('is-open');
    pinkPhloydModal.classList.add('is-active');
});

function closeModals() {
    modalOverlay.classList.remove('is-open');
    phosphorModal.classList.remove('is-active');
    phuneralModal.classList.remove('is-active');
    pinkPhloydModal.classList.remove('is-active');
}

document.querySelectorAll('.modals__close').forEach((button) => {
    button.addEventListener('click', closeModals);
});

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModals();
    }
});
