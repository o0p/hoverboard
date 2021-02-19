const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', 'e67e22', '#2ecc71'];
const squares = 2400;

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {setColor(square)});
    square.addEventListener('mousleave', () => {removeColor(square)});
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
};

function removeColor(element) {

};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}