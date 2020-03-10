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

카이사르 암호 함수에서, shift는 어떤 숫자도 될 수 있습니다. 음수가 될 수도 있고, 양수가 될 수도 있죠.
음수를 받는다면, 문자를 뒤로 옮겨주면 됩니다.

```javascript
caesar("ABCDE", -1);
// 예상되는 결과값: ZABCD
```

또한 값이 큰 숫자가 될 수도 있죠. 하지만, 아무리 큰 숫자를 받더라도 반환되는 값은 항상 알파벳이어야 
합니다. 예를들어, shift에 30이라는 값이 들어왔다고 하면 한 바퀴를 다시 돌면 됩니다.

```javascript
caesar("ABCDE", 30);
// 예상되는 결과값: EFGHI
```

마지막으로, 카이사르 암호는 알파벳만 암호화 시켜줍니다. 또한 소문자와 대문자를 따로 구분합니다.

```javascript
caesar("Hello World!", 1);
// 예상되는 결과값: Ifmmp Xpsme!
```

# 프로젝트 구성

예시:
![Image of Caesar Example](caesar예시.png)

# 프로젝트를 도와줄 유용한 자료들

## Caesar's Cipher 함수 관련 자료
- 많은 메쏘드들의 설명은 [MDN한글판](https://developer.mozilla.org/ko/docs/Web/JavaScript) 
자바스크립트 섹션에서 찾을 수 있어요
- [자바스크립트 배열사용법](https://offbyone.tistory.com/133)
- [String.prototype.split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
:String을 개별의 문자로 변환시켜 Array에 담아 반환
- [String.fromCharCode()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
:유니코드값을 바탕으로 문자열을 반환
- [아스키코드란? 자바스크립트 아스키코드 변환](https://m.blog.naver.com/PostView.nhn?blogId=diceworld&logNo=220175224345&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
- [String.prototype.charCodeAt()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
:주어진 인덱스에 대한 정수형 유니코드 값을 반환
- [Array.prototype.join()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
:배열의 모든 요소를 연결해 하나의 문자열로 반환
- [자바스크립트 나머지 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#%EB%82%98%EB%A8%B8%EC%A7%80)


# 힌트

1. caesar 함수를 선언해줍니다. 이 함수는 두 개의 매개변수를 가집니다. 유저의 입력을 받아줄 매개변수
와, 변환시킬 값을 받아줄 매개변수가 있습니다.

2. user에게서 받은 문자열을 각각의 개별 문자로 쪼개어 배열에 넣어줍니다. 그리고 이 배열의 모든 원소에
변환시킬 값만큼 옮겨줍니다.
    - 문자열을 개별의 문자로 변환시키는 법 알아야 함
    - 배열의 모든 원소에 접근하는 법을 알아야 함
    - 문자를 아스키코드 값으로, 아스키코드 값을 문자로 변환하는 법을 알아야 함
    - 들어온 문자가 알파벳인지 아닌지 확인해야함
    - 큰 값이 들어왔을 때, 어떻게 알파벳 속에서 순환할 것인지를 알아야 함





