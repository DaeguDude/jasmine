# 반복문

<!-- 
- Keep me in the loop
- Why bother?
- The Standard For loop
- Exiting Loop with Break
- Skipping with continue
- while and do...while
- Example
-->

프로그래밍 언어는 반복적인 일을 수행하는 데 있어 무척이나 유용합니다. 예를 들어서 간단한 연산부터 아니면 특정한 똑같은 상황을 반복하는 것과 같은 것처럼 말이죠. 이번에는 그러한 일을 수행할 수 있게 해주는 자바스크립트의 반복 구조에 대해서 한 번 알아보겠습니다. 

## Keep mp in the loop

반복은 프로그래밍에서 아주 중요한 개념입니다. 똑같은 일을 계속 반복하죠. 영어로는 Iteration이라고 합니다. 

그러면 예를 한 번 들어볼게요. 근손실을 방지하기 위해 눈물을 흘리지 않는 헬창의 삶을 예로 들게요.

<!-- 헬창 반복문 그림 넣기 -->

Counter: 닭 가슴살이 없어.
Condition: 나는 이번 달을 버티기 위한 충분한 닭 가슴살을 구비해두었는가?
Iterator: Collect 닭가슴살

<!-- Counter, Condition, Iterator에 대한 설명넣기 -->

아마도 이렇게 의사코드를 작성할 수 있겠죠.

```javascript
loop(닭가슴살 = 0; 필요한닭가슴살 = 10) {
  if (닭가슴살 >= 필요한 닭가슴살) {
    exit loop;
    // 충분한 닭가슴살이 있고 나의 마음은 안정되었다.
  } else {
    닭가슴살 += 2;
    // 닭가슴살을 2개 더 주문하자.
  }
}
```

자, 코드를 보면 현재 헬창이 원하는 닭가슴살의 개수는 10개입니다. 그리고 현재가지고 있는 닭가슴살은 0개이죠. 그는 닭가슴살이 떨어질지도 모른다는 생각에 이미 근손실이 발생하는 중입니다....(는 헛소리고요..). 한 번의 반복마다 헬창은 현재 가지고 있는 닭가슴살이 필요한 닭가슴살만큼 있는지 확인합니다. 만약에 충분히 있다면 반복을 그만하고, 없다면 2개씩 더 주문할 것 입니다.

## Why bother?

여러분은 이제 반복문의 개념에 대해서 대충은 이해가 가실 것입니다. 그러면 우리가 왜 반복문이 필요할까요? 왜냐하면 반복문은 **똑같은 일을 귀찮지 않고 정말 빠르게 수행해내기 때문이죠.**

한 번 예시를 보겠습니다. 만약에 여러분이 놀이공원의 롤러코스터 입장을 체크하는 아르바이트를 하고 있다고 생각해볼게요.

키가 120cm, 그리고 나이가 10살 이상인 경우에만 입장을 시킨다고 가정하보겠습니다.

```javascript
function checkEntrance(height, age) {
  if (height >= 120 && age >= 10) {
    alert('입장하세요.');
  } else {
    alert('입장하실 수 없습니다.');
  } 
}

let height = prompt('키가 어떻게 되세요?');
let age = prompt('나이는 어떻게 되시죠?');

checkEntrance(height, age);
```

이런식으로 코드를 짤 수 있겠죠. 근데 롤러코스테는 보통 여러 명이 타죠? 그런데 사람이 엄청 많이 들어오면 어떻게 해야 할까요? 

```javascript
let height = prompt('키가 어떻게 되세요?');
let age = prompt('나이는 어떻게 되시죠?');

checkEntrance(height, age);

height = prompt('키가 어떻게 되세요?');
age = prompt('나이는 어떻게 되시죠?');
checkEntrance(height, age);

height = prompt('키가 어떻게 되세요?');
age = prompt('나이는 어떻게 되시죠?');
checkEntrance(height, age);

// .........
```

이런 식으로 코드를 짜야 할 것입니다. 코드가 엄청 비효율적이죠? 우리는 이것을 반복문을 통해서 깔끔하고 손쉽게 해결할 수 있습니다.

```javascript
function checkEntrance(height, age) {
  if (height >= 120 && age >= 10) {
    alert('입장하세요.');
  } else {
    alert('입장하실 수 없습니다.');
  } 
}

for(let i = 0; i < 10; i++) {
  let height = prompt('키가 어떻게 되세요?');
  let age = prompt('나이는 어떻게 되시죠?');

  checkEntrance(height, age);
}
```

위에서 우리는 10명의 사람을 반복문을 통하여 체크하였습니다. 만약에 우리가 반복문을 쓰지 않았다면 코드가 엄청 늘어났겠죠. 10,000명이 들어왔다면 30,000 ~ 40,000 줄의 코드를 적어주었어야 할 것입니다. 하지만 반복문에서는, 하나의 숫자만 바꿔주면 손 쉽게 해결되죠. 반복문은 아주 좋은 친구인것 같습니다.


## The standard for loop

그러면 루프의 구조에 대해서 한 번 알아보겠습니다. 첫번째는 여러분이 아마 가장 많이 쓸 `for` loop 입니다. 

```javascript
for (초기화; 조건; 마지막-표현식) {
  // 반복을 할 코드
}
```

for loop가 가지고 있는 구성은:

1. `for` 키워드. 괄호를 붙여야 합니다.
2. 괄호안에 세미콜론으로 나뉜 3개의 아이템을 가지고 있습니다.
  
  1. 초기화(Initializer) - 보통 숫자 값을 가지고 있는 변수입니다. 이 변수는 매번 반복이 될 때마다 보통 값이 올라갈 것입니다. 가끔씩 무엇을 카운트 변수(counter variable) 라고도 불립니다.

  2. 조건(Condition) - 앞에서 얘기한 것 처럼, 조건은 언제 반복문이 멈춰야 하는 지를 명시합니다. 보통 비교 연산자를 가지고 있는 표현식이 될 것입니다.

  3. 마지막-표현식(final-expression) - 이것은 반복이 끝나고 나서 항상 동작하는 표현식입니다. 보통 초기화에서 선언된 변수의 값을 증가시키는데에 많이 사용됩니다. 

그러면 실제 예시를 한 번 볼게요.

```javascript
const friends = ['상수', '민철', '로건', '헐크'];
let msg = '나의 친구들: ';

for (let i = 0; i < friends.length; i++) {
  msg += friends[i] + ', ';
}

// "나의 친구들: 상수, 민철, 로건, 헐크, "
```

위의 예시는 반복문이 배열이 가진 아이템을 반복하기 위해서 사용되고 있습니다. 자바스크립트에서 아주 흔한 패턴입니다. 

1. 카운트 변수(counter variable), `i`가 `0` 의 값으로 초기화 되었습니다.

2. 조건, `i < friends.length` 를 보시면, i가 `friends` 배열의 길이보다 커질 때 까지 반복을 계속 하라고 명시되어 있습니다. 여기서의 조건은, 반복문이 작동하는 조건입니다. 쉽게 말해, `i`가 `friends.length`보다 작을 때만 코드를 작동하라는 것입니다.

3. 반복문에서, 우리는 msg의 변수가 가지고 있는 문자열 `나의 친구들: `에 각각 배열의 아이템을 덧붙여 줍니다. 

  1. `i`가 0인 첫번째 반복에서, `friends[0]`의 값인 `상수`를 덧붙여 줍니다.

  2. `i`가 1인 두번째 반복에서도, `friends[1]`의 값인 `민철`을 덧붙여 줍니다.

  3. 매 반복이 끝날때 마다, 마지막 표현식 `i++`이 작동하며 카운트 변수를 1씩 증가시킵니다.

4. `i`의 값이 `friends.length`와 같아졌을때, 반복은 멈춥니다.

마지막으로, 우리의 결과값을 보시면 아주 이상적인 결과값은 아니라는 것을 알 수 있습니다.

> "나의 친구들: 상수, 민철, 로건, 헐크, "

마지막에 `,`는 불필요하죠? 이럴 경우에는, 간단하게 반복문안에 조건문을 넣어주면 됩니다.

```javascript
for (let i = 0; i < friends.length; i++) {
  if (i === friends.length - 1) {
    msg += friends[i] + '입니다.';
  } else {
    msg += friends[i] + ', ';
  }
}
```

## break로 반복문 탈출하기

만약에 반복문을 끝내지 않고 중간에 멈추고 싶다면, 여러분은 `break` 문을 쓰실 수 있습니다. 아마 `switch` 문에서 `break`를 사용하셨던 걸 기억하실 겁니다. `break`문은 반복문을 바로 탈출하고, 그 다음의 코드를 작동시킵니다.

예를 들어서 여러분이 선생님이라고 가정해볼게요. 여러분은 배열 안에 들어가있는 학생들의 전화번호중에서, 한 학생의 번호를 찾고 싶다고 가정해볼게요. 그러면 우리는 그 학생의 전화번호만 찾으면 반복문을 멈추면 되죠?

예시를 보겠습니다.

```javascript
const contacts = ['상수:01012345678', '민철:01098765432', '로건:01024681357', '헐크:01013572468'];

function getContact(searchName, contacts) {
  let contactFound = false;
  
  for (let i = 0; i < contacts.length; i++) {
    const splitContact = contacts[i].split(':');
    const studentName = splitContact[0];
    const studentNumber = splitContact[1];

    console.log(`${i+1}번째 반복: `)
    if (searchName === studentName) {
      console.log(`${searchName}의 번호는 '${studentNumber}' 입니다.`);
      contactFound = true;
      break;
    } 

  }

  if (!contactFound) {
    console.log(`${searchName}라는 학생은 못 찾았습니다.`);
  }
}


getContact('로건', contacts);
// 1번째 반복:
// 2번째 반복:
// 3번째 반복:
// 로건의 번호는 '01024681357' 입니다.
```







