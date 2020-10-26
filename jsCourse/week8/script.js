const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = '저는 텍스트 노드입니다!';

container.appendChild(content);

const pRed = document.createElement('p');
pRed.style.color = "red";
pRed.textContent = "나는 빨간색이야";

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "나는 h3 파란색이야";

const div = document.createElement('div');
div.style.background = "yellow";
div.style.border = "1px solid black";

const h1 = document.createElement('h1');
h1.textContent = "나는 div 안에 있다!";

const p = document.createElement('p');
p.textContent = "나도";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(pRed);
container.appendChild(h3);
container.appendChild(div);