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

DOM은 HTML 문서와 자바스크립트가 서로 상호작용을 할 수 있게 도와주는 매개체라고 생각하시면 됩니다. DOM 안에는 HTML의 내용들이 트리(tree) 구조로 생성이 되는데 이것을 우리는 **DOM tree** 라고 부릅니다. 이 DOM tree는 **노드** 라는 것들도 구성이 되어있는데, 이 노드는 HTML의 요소(태그), 주석, 문자 등 어떤 것이 될 수도 있습니다.


