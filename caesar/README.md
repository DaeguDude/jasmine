---
layout: post
title:  "시저암호"
categories: jekyll update
---

# 카이사르 암호화

[카이사르 암호(Caesar cipher)](https://ko.wikipedia.org/wiki/%EC%B9%B4%EC%9D%B4%EC%82%AC%EB%A5%B4_%EC%95%94%ED%98%B8)
또는 시저 암호는 암호학에서 다루는 간단한 순환암호의 일종입니다.
실제로 로마의 황제 카이사르는 이 카이사르 암호를 사용하기도 했습니다. 카이사르 암호는 암호화하고자 하는 
내용을 알파벳별로 일정한 거리만큼 밀어서 다른 알파벳으로 치환하는 방식입니다. 

예를 들어, 'ABCDE'를 3만큼 옮겨준다면, 

- A -> D
- B -> E
- C -> F
- D -> G
- E -> H

'DEFGH'로 암호화 되어서 나올 것입니다.
이번 프로젝트에서는 카이사르 암호화를 동작하는 함수를 자바스크립트로 만들어, 웹에서 유저의 입력을
받아 그것을 암호화 할 것 입니다.

# 카이사르 암호 함수 설명

카이사르 암호 함수는 2가지의 매개변수를 가집니다.

- string: 문자열을 받아줄 매개변수
- shift: 암호화할 값을 받아줄 매개변수

코드의 예를 들자면 이렇습니다.

```javascript
const caesar = function(string, shift) {
    // string을 받아, shift 값만큼 변화시켜 줄 것입니다.
}

caesar("ABCDE", 1);
// 예상되는 결과값: BCDEF
```




