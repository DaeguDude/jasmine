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







