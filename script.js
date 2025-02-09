const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

// Mostrar modal de Brenda
document.getElementById('btn-brenda').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-brenda').style.display = 'block';
});

// Cerrar modal de Brenda
document.getElementById('close-brenda').addEventListener('click', () => {
    document.getElementById('modal-brenda').style.display = 'none';
});

// Mostrar modal de Cesar
document.getElementById('btn-cesar').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-cesar').style.display = 'block';
});

// Cerrar modal de Cesar
document.getElementById('close-cesar').addEventListener('click', () => {
    document.getElementById('modal-cesar').style.display = 'none';
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});