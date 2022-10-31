const input = document.querySelector('.numberInput');
const para = document.querySelector('p');


const pi = 3.141592653589; // or Math.Pi

circumference = radius =>  2 * pi * radius; // Practicing arrow funcs

area = radius => (radius * radius) * pi;    // Another arrow

function r(number) {
    return Math.round(number);
}  

input.addEventListener('change', () => {
    const radius = parseFloat(input.value);
    if(isNaN(radius)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = `The circumference of radius ${radius} is ${r(circumference(radius))} centimeters, `;
        para.textContent += `the area is ${r(area(radius))} square centimeters.`;
    }
});