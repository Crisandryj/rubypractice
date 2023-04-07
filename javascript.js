const container = document.querySelector('#container');

const content = document.createElement('p');

content.textContent = "Hey!, Im red"
content.style.cssText = "color: red;"

container.appendChild(content)
