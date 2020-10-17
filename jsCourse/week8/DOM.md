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


