function generateColors(boxes) {
    let colors = [];
    for (let i = 0; i < 12; i++) {
        colors[i] = (Math.random().toString(16)).substring(2,8);   
    }
    
    boxes.forEach(box => {
        let randomColor = '#' + colors.splice(Math.floor(Math.random() * colors.length), 1);
        let text = box.querySelector('p');
        box.setAttribute('style', 'background: ' + randomColor);
        text.innerHTML = `${randomColor}`;
    });

}

window.onload = () => {
    const boxes = document.querySelectorAll(".box");
    generateColors(boxes);
}

document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        const boxes = document.querySelectorAll(".box");
        generateColors(boxes);
    });
    
});