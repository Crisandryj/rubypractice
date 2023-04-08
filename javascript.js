const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const container = document.querySelector('#container');

const content = document.createElement('p');

content.textContent = "Hey!, Im red"
content.style.cssText = "color: red;"


const pink = document.createElement('div')

pink.textContent = "hello"
pink.setAttribute('style', 'border-style:solid; gbackground: pink;')
const metoo = document.createElement('p')
metoo.textContent = "me too!"

pink.appendChild(metoo)
const heading = document.createElement('h1')
heading.textContent ="hi I'm a div"

pink.appendChild(heading)
container.appendChild(pink)
