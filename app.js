const container = document.getElementById('container');
// const colors = ['#e74c3c', '#8e44ad', '#3498db', 'e67e22', '#2ecc71'];

const squares = 2400;
const randomColors = [];


for (let i = 0; i < 2000; i++) {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    let color = [`rgb(${r}, ${g}, ${b})`];
    randomColors.push(color);
}

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
};

function getRandomColor() {
    return randomColors[Math.floor(Math.random() * randomColors.length)]
}