

let div = document.querySelector('.container');

const items = div.querySelectorAll("div")
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD', '#E74C3C'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
const elementsArray = Array.from(items);
elementsArray.forEach(item => {
    item.style.backgroundColor = getRandomColor()
})

