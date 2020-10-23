# DOM(Document Object Model - 문서객체모델) 다루기

<!--

- What is DOM in relation to a webpage?

- What's the difference between a "node" and an "element"?

- How do you target nodes with "selectors"?

- What are the basic methods for finding/adding/removing and altering DOM nodes?

- What is the difference between a "nodelist" and an "array of nodes"?

- How do "events" and "listeners" work? What are three ways to use events in your code?

- How does "bubbling" work?

-->

- DOM(Document Object Model) 소개
- 노드에 접근을 하는 방법들(CSS 선택자, 관계형 선택자)

## DOM(Document Object Model - 문서객체모델) 소개

자바스크립트의 가장 강력한 기능 중 하나는, 웹 페이지를 동적으로 구현할 수 있다는 것입니다. 예를 들어, 우리가 인터넷으로 옷을 살 때 장바구니에 담아서 결제를 하는 과정, 아니면 유튜브에 들어가서 댓글을 단다던지, 이렇게 우리가 웹 페이지와 동적인 소통을 할 수 있는 것은 자바스크립트 덕분입니다.

자바스크립트는 웹 페이지의 내용을 수정하거나, 추가하거나 변경할 수 있습니다. 하지만, 이렇게 하기 위해서는 웹 페이지에 대한 접근이 필요한데, 그것을 **DOM(Document Object Model)** 이라는 녀석이 제공을 합니다. 

예를 들어서, 여러분이 구글 크롬으로 네이버 홈페이지로 이동을 하였습니다. 구글 크롬(브라우저)은 네이버 페이지의 내용을 여러분이 볼 수 있게 로딩을 할 때, 그 페이지의 DOM을 생성합니다. 그 DOM은 HTML 문서를 표현하는 API이죠. 

DOM은 HTML 문서와 자바스크립트가 서로 상호작용을 할 수 있게 도와주는 매개체라고 생각하시면 됩니다. DOM 안에는 HTML의 내용들이 트리(tree) 구조로 생성이 되는데 이것을 우리는 **DOM tree** 라고 부릅니다. 이 DOM tree는 **노드** 라는 것들로 구성이 되어있는데, 이 노드는 HTML의 요소(태그), 주석, 문자 등 어떤 것이 될 수도 있습니다.

그러면, 한 번 HTML 예시를 보면서 DOM TREE를 더 잘 이해해보도록 할게요.

```html
<!DOCTYPE html>
<html lang="en">
<head> 
  <title>Document</title>
</head>
<body>
  <div>
    <ul>
      <li>메씨</li>
      <li>부욜</li>
      <li>푸케</li>
    </ul>
  </div>
</body>
</html>
```

![DOM 트리 예시](./img/DOM-Tree.png)

위의 HTML 파일을 브라우저가 불러들일 때, 위의 그림과 같은 DOM 트리를 형성하게 됩니다. 아까 얘기하였듯이, 각각의 박스들은 노드라고 불리는 객체입니다. 이 노드는 요소(Element)가 될 수도 있고, 문자(Text)가 될 수도 있죠. 

예를 들면, `html`, `body`, `div`, `ul` 등등은 요소(Element)이고, `메씨`, `부욜`, `푸케`는 문자(Text) 입니다. 그래서 가장 위에 있는 노드는 항상 `document` 노드가 되겠죠. 

그리고 여기서 아셔야 할 점은, HTML과 비슷하게, 부모와 자식개념이 있습니다. 그래서 `document` 라는 노드는 모든 노드들의 **부모 노드(parent node)**입니다. 그리고 그 부모 노드의 바로 밑에 있는 것들을 **자식 노드(child node)**라고 얘기하기도 합니다. 만약에, 부모 노드가 한 개의 자식 노드말고 여러 개의 자식 노드를 가지고 있다면 그것들은 **형제 노드(sibling node)**라고 불리웁니다.

어때요, HTML과 완전 비슷하지 않나요? 그래서 쉽게 정리를 하자면, 문서객체모델(DOM)이라는 것은, HTML을 위한 프로그래밍 인터페이스입니다. 프로그램이나 스크립트 언어 같은 것들에 접근에 문서를 편집하고 수정하는 권한을 주는 것이죠.

쉽게 말하면 DOM은 HTML을 수정, 참조, 삭제 하기 위한 표준입니다.

## 노드에 접근을 하는 방법들(CSS 선택자, 관계형 선택자)

DOM에 대한 기초를 알아보았으니, 이제 DOM을 이용해서 어떻게 HTML과 소통을 할 수 있는지 알아봅시다. HTML 요소들과 상호작용을 하기 위해서는 먼저 HTML 요소에 접근을 하는 방법부터 알아야겠지요. HTML 요소에 접근을 하는 방법에는 2가지 방법이 있습니다.

- CSS 선택자(CSS Selectors)
- 관계형 선택자(Relational Selectors)

**CSS 선택자**

CSS 선택자 문법은 css에서 사용되는 문법으로 어떠한 요소에 스타일을 줄 때 사용이 되죠.

- 태그(Tag): 선택자 `p`는 `<p></p>` HTML tag를 찾습니다.

- 클래스(Class): 선택자 `.myDiv`는 `class="myDiv"`라는 값을 가진 모든 원소를 찾습니다.

- 아이디(Id): 선택자 `#list`는 `id=list` 라는 값을 가진 원소를 찾습니다.

**관계형 선택자**

관계형 선택자는 노드간의 관계를 통해 DOM 트리를 탐색할 수 있는 방법을 제공합니다. 이러한 관계들은 노드의 속성으로 저장되어 있습니다. 노드에 속한 아래의 속성들을 이용하여 우리는 DOM 트리를 탐색할 수 있습니다.

- `parentNode`
- `firstChild`
- `lastChild`
- `nextSibling`
- `previousSibling`

## CSS 선택자로 노드에 접근하기

원소를 선택하는 두 가지의 방법을 알아보았으니 이제는 실제로 주어진 방법을 이용하여 노드에 접근을 하여 볼게요. 아까 얘기하였듯이, `document` 객체는 DOM 트리에서 항상 최상단에 위치한 객체입니다. 그러므로 다른 객체들에 접근을 하려면 먼저 `document` 객체에 접근을 하여야 합니다.

DOM 인터페이스는 웹 페이지를 자바스크립트로 조작하기 위한 속성과 메쏘드들을 제공합니다. 가장 먼저, `.querySelector()` 메쏘드에 대해서 한 번 알아보겠습니다. `.querySelector()` 메쏘드는 주어진 선택자에 맞는 첫번째 원소를 반환합니다. 만약, 어떠한 원소도 주어진 선택자와 매칭이 되지 않는다면 `null`을 반환하죠.

`.querySelector()` 메쏘드는 CSS 선택자를 인수로 받기 때문에 가장 일반적으로 많이 쓰입니다. 왜냐하면 태그, 클래스, 그리고 아이디 등 어떤 것을 사용하여도 원소에 접근을 할 수 있기 때문이죠. 아주 유연합니다.

아까의 예제를 조금 바꿔서 한 번 보겠습니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=5, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <ul class="player-list">
      <li id="mesi" class="player">메씨</li>
      <li id="buyol" class="player">부욜</li>
      <li id="puque" class="player">푸케</li>
    </ul>
  </div>
</body>
<script src="script.js"></script>
</html>
```

```javascript
const playerList = document.querySelector(".player-list");

console.log(playerList);
// <ul class="player-list">...</ul>
```

위의 예제에서는 `class="player-list"` 라는 값을 가진 가장 첫번째 원소를 찾을 것입니다. 그리하여, `playerList`를 확인해보면 `class="player-list"` 값을 가진 `ul` 태그가 반환되신 것을 확인하실 수 있습니다.

아니면, CSS 선택자를 통하여 매칭되는 ID를 찾아 원소를 찾아낼 수도 있습니다.

```javascript
const mesi = document.querySelector("#mesi");

console.log(mesi);
// <li id="mesi">...</li>
```

만약에 주어진 CSS 선택자와 매칭이 되는 모든 원소를 찾고 싶다면 `.querySelectorAll()` 메쏘드를 사용하여 주시면 됩니다. `.querySelectorAll()`는 CSS 선택자와 매칭이 되는 모든 원소들을 노드 리스트로 반환을 하여 줄 것입니다.

```javascript
const players = document.querySelectorAll(".player");

console.log(players);
// NodeList(3) [li#mesi.player, li#buyol.player, li#puque.player]
```

<!-- 제목을 바꿔야 할 듯 싶다 -->
## CSS 기본 메쏘드로 노드에 접근하기

자바스크립트는 DOM 노드를 선택하기 위한 또 다른 메쏘드들을 제공합니다.

- `.getElementsByTagName(tagName)`: 태그 이름을 인수로 받아, 매칭되는 HTML 태그들을 반환합니다.
- `.getElementbyId(id)`: id를 인수로 받아서, 주어진 id와 매칭되는 id의 속성 값을 가진 원소를 반환합니다. 
- `.getElementsbyClassName(names)`: 클래스 이름을 인수로 받아서, `class`의 속성 값이 주어진 클래스 이름과 
같은 원소들을 찾아 반환합니다.

그러면 예시를 들어서 한 번 사용을 해보겠습니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=5, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <ul class="player-list">
      <li id="mesi" class="player">메씨</li>
      <li id="buyol" class="player">부욜</li>
      <li id="puque" class="player">푸케</li>
    </ul>
  </div>
</body>
<script src="script.js"></script>
</html>
```

만약, `li` 라는 태그를 모두 찾고 싶다면 `.getElementsByTagName()` 메쏘드를 사용하면, 주어진 태그에 맞는
모든 태그를 찾아낼 것입니다.

```javascript
const allLis = document.getElementsByTagName("li");

// HTMLCollection(3) [li#mesi.player, li#buyol,player, li#puque.player]
```

<!-- 더 좋은 설명 필요 -->
이번에는 특정한 ID 값을 가진 원소를 찾아보겠습니다. `getElementById()` 메쏘드를 써주시면 됩니다. 위의 것과
달리 이번에는 한 개의 원소만 반환하는데 왜냐하면 id 속성 자체가 오직 하나의 값만 가질수 있도록 디자인 되었기 때문입니다.

```javascript
const myFavoritePlayer = document.getElementById("mesi");

// <li id="mesi" class="player">메씨</li>
```

아니면 `.getElementsbyClassName()` 메쏘드를 써서 특정한 클래스 값을 가진 원소들을 찾을 수도 있습니다.

```javascript
const allPlayers = document.getElementsByClassName('player')

// HTMLCollection(3) [li#mesi.player, li#buyol,player, li#puque.player]
```

## 관계형 선택자로 노드에 접근하기

또 다른 방법으로 우리는 관계형 선택자를 사용하여서 노드에 접근할 수 있습니다. 관계형 선택자는 말 그대로 노드간의 관계를 이용하여
DOM Tree를 돌아다니는 방법입니다. 이러한 관계형 선택자들은 노드안에 프로퍼티로 저장되어 있습니다.

예시를 통해서 실제로 사용하여 보면서 관계형 선택자를 이해해볼게요.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=5, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <ul class="player-list">
      <li id="mesi" class="player">메씨</li>
      <li id="buyol" class="player">부욜</li>
      <li id="puque" class="player">푸케</li>
    </ul>
  </div>
</body>
<script src="script.js"></script>
</html>
```

먼저, `div` 노드에 한 번 접근하여보겠습니다. 

```javascript
const div = document.querySelector('div');
```

그리고 `parentNode` 라는 프로퍼티를 사용하여 `div`의 부모노드를 살펴볼게요.

```javascript
console.log(div.parentNode);

// <body>...</body>
```

`div` 의 바로 위에 있는 부모노드는 `body`이죠? 그래서 확인을 해보시면 `body`를 반환하시는 것을 볼 수 있습니다. 

부모노드를 확인할 수 있는 방법이 있으면 자식노드를 확인할 수 있는 방법도 있어야겠죠? `childNodes` 를 통해서 자식노드들도 확인을 할 수 있습니다.

```javascript
const playerList = document.querySelector('.player-list');
console.log(playerList.childNodes);

// NodeList(7) [text, li#mesi.player, text, li#buyol.player, text, li#puque.player, text]
```

`childNodes`는 모든 노드들을 `NodeList` 라는 배열과 비슷한 형태로 반환을 합니다. 하지만 배열이 아니라 배열이 가진 메쏘드들을 사용하지는 못합니다.

만약에, 여러분이 `text` 노드 등에는 큰 관심이 없고 `element` 타입의 노드만 반환을 하시고 싶다면 `children` 프로퍼티를 사용하여 주시면 됩니다.
여기서 말하는 `element` 타입의 노드란 `p`, `div`, `body` 등과 같은 우리가 알고 있는 HTML 원소를 얘기합니다.

```javascript
const playerList = document.querySelector('.player-list');
console.log(playerList.children);

// HTMLCollection(3) [li#mesi.player, li#buyol,player, li#puque.player]
```

`lastChild` 프로퍼티를 이용하여, 어느 노드의 마지막 노드를 반환할 수도 있습니다. 반대로, `firstChild` 프로퍼티를 이용하여
첫번째 노드를 반환할 수도 있겠죠.

```javascript
const playerList = document.querySelector('.player-list');

console.log(playerList.firstChild); // 
console.log(playerList.lastChild);
```

<!-- 예제에 관련된 그림과 마무리 -->

## DOM 메쏘드들

위에서도 얘기하였듯이 여러분의 브라우저가 페이지를 여러분에게 보여주기 위해서 HTML 코드를 DOM(문서객체모델)로 생성을 합니다. 이 HTML 코드와 DOM의 가장 큰 차이점은 DOM 안에 있는 객체인 노드들이 많은 프로퍼티와 메쏘드를 가지고 있다는 것입니다. 이 프로퍼티와 메쏘드를 통해서 우리는 웹 페이지를 자바스크립트로 조작을 할 수 있습니다.

실제로 HTML 예시와 함께 DOM의 여러가지 프로퍼티와 메쏘드 등을 상황에 맞게 사용해보겠습니다.

아래의 `index.html` 파일을 만들어주세요.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=5, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div></div>
<script src="script.js"></script>
</html>
```

`body` 태그 안에, 하나의 `div` 태그만 있습니다.

**요소(element) 생성하기**

`document.createElement(태그이름)` 은 태그이름에 맞는 요소를 생성합니다.
그럼 `ul` 요소를 한 번 생성해볼까요?

```javascript
const ul = document.createElement('ul');
```

이렇게 하면 `ul` 요소가 생성이 되는데 중요한 건 이 새로운 요소가 DOM 안에 들어가 있지 않습니다. 그냥 메모리에만 생성될 뿐이죠. 그래야 페이지에
올리기 전에 이 요소를 스타일을 추가한다거나, 클래스를 추가한다던지 등등의 조작을 할 수 있겠죠.
만약에 여러분이 DOM 안에 넣어주고 싶다면 아래의 메쏘드를 써주시면 됩니다.

**요소(element) 넣어주기**

`parentNode.appendChild(자식노드)`는 **자식노드**를 **부모노드**에 넣어줍니다.
HTML 파일 안에 있는 `div` 요소에 아까 생성한 `ul` 요소를 넣어주겠습니다.

```javascript
const div = document.querySelector('div');
div.appendChild(ul);
```

**요소(element) 지워주기**

`parentNode.removeChild(자식노드)`는 지정된 **자식노드**를 **부모노드**에서 지워줍니다.
그런데 생각해보니 이 `ul`이 필요없을 것 같아, `ul`을 지워주겠습니다.

```javascript
const div = document.querySelector('div');
div.removeChild(ul);
```

그리고 다시 HTML을 확인해보시면, `div` 태그 안에 아무것도 없는 게 보이실 겁니다.

**요소(element) 세부사항 조작하기**

이렇게 요소를 넣어주고 지워주기만 한다면 큰 의미가 없겠죠? 만약에 DOM의 어떤 요소에 대해서 자바스크립트가 알고 있다면, 여러분은 속성을 추가-삭제-수정 한다던지,
클래스를 바꿔준다던지, 스타일링을 자바스크립트에 직접 해준다던지 많은 것들을 할 수 있습니다.

그렇다면 실제로 한 번 `div` 요소에 스타일링을 조금 해줄게요.

**CSS 인라인 스타일 추가하기**

```javascript
const div = document.querySelector('div');

div.style.height = '500px';
div.style.width = '500px';
// div의 높이와 넓이를 500px로 지정

div.style.background = "gray";
// div의 배경을 회색으로 지정
```

<!-- CSS Inline Style 룰에 대해서 설명 -->


The property names contained in the style object do not contain the normal hyphen that is used in CSS property names. The translation is pretty simple. Remove the hyphen and use camel case. (e.g. font-size = fontSize or background-image = backgroundImage). In the case where a css property name is a JavaScript keyword the javascript css property name is prefixed with "css" (e.g. float = cssFloat).

Short hand properties are available as properties as well. So you can not only set margin, but also marginTop.

Remember to include for any css property value that requires a unit of measure the appropriate unit  (e.g. style.width = '300px'; not style.width = '300';). When a document is rendered in standards mode the unit of measure is require or it will be ignored. In quirksmode assumptions are made if not unit of measure is included.

















