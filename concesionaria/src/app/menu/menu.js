const { box } = require("./box");

box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.2)'; // Aumenta el tamaño al pasar el mouse
});

box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)'; // Vuelve al tamaño original al quitar el mouse
});