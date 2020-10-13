# 배열

배열은 여러가지의 값을 담을 수 있는 특별한 변수입니다. 만약에 여러분이 변수에 여러가지의 값을 저장한다고 한 번 생각해볼게요.

```javascript
let car1 = "Tesla";
let car2 = "Toyota";
let car3 = "Hyundai";
let car4 = "Kia";
```

이런 식으로 저장을 하겠죠. 하지만 만약에 여러분이 300, 400개의 차를 저장해야 한다면 어떻게 하실건가요? 300개의 변수를 만드실건가요? 그것은 엄청 불편할 것입니다.

그러한 경우에 배열을 선언해서 배열 안에 300개의 값을 넣어줄 수 있습니다. 배열이란, 하나의 이름 안에 여러가지의 값을 가질 수 있고, 그 값들을 원소번호를 통해 접근할 수 있습니다.

## 배열 생성하기

배열을 생성하는 법에는 두 가지 방법이 있습니다.

`[]`를 사용하거나, `new Array()`를 사용하여주면 됩니다.

```javascript
let cars = ["Tesla", "Toyota", "Hyundai", "Kia"];

let cities = new Array("Daegu", "Seoul", "Busan");
```

하지만 거의 대부분 `[]`을 사용하여 배열을 생성합니다.

## 배열에 접근하기

객체에는 보통 순서가 없지만, 배열에는 순서가 있습니다. 그래서, 배열에 접근할 때 원소번호를 통하여 접근할 수 있습니다. 배열의 원소들에는 번호가 있는데 0부터 시작합니다.

```javascript
let cities = new Array("Daegu", "Seoul", "Busan");

alert( cities[0] ); // Daegu
alert( cities[1] ); // Seoul
alert( cities[2] ); // Busan
```

### 배열에 원소 값 바꾸기

여러분은 배열의 원소의 값을 바꾸어 줄 수도 있습니다.

```javascript
cities[1] = "Gwangju";

alert( cities ); // ["Daegu", "Gwangju", "Busan"]
```

### 배열에 원소 추가하기
아니면 배열에 새로운 값을 추가해 줄 수도 있습니다.

```javascript
cities[3] = "Ulsan"; 

alert ( cities ); // ["Daegu", "Gwangju", "Busan", "Ulsan"]
```

### 배열의 특성

배열은 어떠한 값도 담을 수 있습니다. 예를 들어,

```javascript
let arr = ['Ulsan', { name: 'Chulsoo'}, true, function sayYo() { console.log ('yo')}];

alert( arr[0] ); // Ulsan

// 원소 번호를 통해 함수에 접근하여, 함수를 호출합니다.
arr[3](); // yo
```

### 배열의 메쏘드(pop/push, shift/unshift)

컴퓨터공학에 있어서 [큐](https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)#:~:text=%ED%81%90(queue)%EB%8A%94%20%EC%BB%B4%ED%93%A8%ED%84%B0%EC%9D%98,%EC%A0%80%EC%9E%A5%ED%95%98%EB%8A%94%20%ED%98%95%EC%8B%9D%EC%9D%84%20%EB%A7%90%ED%95%9C%EB%8B%A4.)는 아주 중요하죠. 큐라는 것은 어떠한 물체들의 집합으로 생각하시면 됩니다. 그리고 큐는 FIFO(First-in-First-Out)라는 데이터 구조를 가지고 있습니다. 예를 들어서 영화관의 표를 사러 줄을 선 사람들을 생각해보세요. 먼저 온 사람이 먼저 표를 사겠죠?

큐는 컴퓨터 공학에서 아주 많이 사용되는 개념입니다. 우리는 큐를 배열을 통해서 쉽게 구현할 수 있습니다. 

```javascript
let people = ["Chulsoo", "Younghee", "Sangmyeong"];
```

철수, 영희, 그리고 상명이라는 사람들이 차례로 줄을 서있다고 하죠. 표를 철수에게 가장 먼저 팔 것 입니다. `array.shift()` 를 이용하여 배열의 가장 첫번째에 있는 값을 빼낼 수 있습니다.

```javascript
alert( people.shift() ); // Chulsoo를 배열에서 꺼냅니다.

alert( people ); // Younghee, Sangmyeong
```

그리고 만약, 한솔이라는 사람이 표를 사려고 줄을 섰다고 치죠. 그러면 줄의 가장 끝에 서야 할 것 입니다. 우리는 `array.push()`를 이용하여, 배열의 가장 마지막에 값을 넣어줄 수 있습니다.

```javascript
let people = ["Younghee", "Sangmyeong"];

people.push("Hansol");

alert( people ); // ["Younghee", "Sangmyeong", "Hansol"]
```

그런데, 갑자기 경환이라는 친구가 새치기를 하였습니다. 그러면 줄의 가장 맨 앞에 서있겠죠? 그럴 때, `array.unshift()` 를 이용하여 배열의 가장 앞에 값을 넣어줄 수도 있습니다.

```javascript
let people = ["Younghee", "Sangmyeong", "Hansol"];

people.unshift("Gyeonghwan");

alert( people ); // ["Gyeonghwan", "Younghee", "Sangmyeong", "Hansol"]
```

이렇게 우리는 배열을 이용하여 첫번째 값을 제거하고 마지막에 새로운 값을 넣어줌으로써 큐를 쉽게 구현할 수 있습니다.

또 다른 자료구조로는 스택이라는 것이있죠. 스택은 큐와 달리, 가장 늦게 들어간 것이 가장 먼저 나오는 구조입니다. 배열을 이용하여 이것을 쉽게 구현할 수 있습니다. 예를 들어 새로운 학기에, 교수님이 책을 나눠준다고 생각해보세요. 교수님이 책을 쌓았을 때는 가장 먼저 쌓은 것이 가장 밑에 있을 것입니다. 하지만, 나중에 나누어 줄 때는 가장 늦게 쌓은 것이 가장 먼저 나가죠? 이것을 LIFO(Last-in-First-Out)구조라고 얘기 합니다.

예를 들어, 

```javascript
let books = ['Grit', 'Frozen', 'Who moved my cheese?', 'naked statistics'];
```

이런 식으로 책이 쌓여 있습니다. 아마 나누어 줄 때는 naked statistics이라는 책을 가장 먼저 나누어 줄 것입니다. 우리는 `array.pop()`을 통하여, 배열의 가장 끝에 있는 원소를 제거하여 줄 수 있습니다.

```javascript
let books = ['Grit', 'Frozen', 'Who moved my cheese?', 'naked statistics'];

alert( books.pop() ); // naked statistics을 제거하고 창에 띄워줍니다.

alert( books ); // 'Grit', 'Frozen', 'Who moved my cheese?'
```

또한 책을 기존에서 더 쌓아줄 수도 있겠죠.

```javascript
let books = ['Grit', 'Frozen', 'Who moved my cheese?'];

books.push('1984');

alert( books ); // 'Grit', 'Frozen', 'Who moved my cheese?', '1984'
```

### 배열 루프


**for**

가장 쉬운 `for` 문을 통하여 우리는 배열의 모든 원소들에 접근할 수 있습니다. 

```javascript
let books = ['Grit', 'Frozen', 'Who moved my cheese?', '1984'];

for(let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

// Grit, Frozen, Who moved my cheese?, 1984
```

우리는 배열의 `length` 프로퍼티를 이용하여, 배열의 길이를 알아내고 그 길이만큼 반복을 하여주었습니다.

**forEach**

또한 배열은 `Array.forEach` 라는 것을 통하여, 배열안의 모든 원소들을 아주 쉽게 접근할 수도 있습니다. 이 메쏘드는 모든 원소들에 주어진 함수를 실행합니다.

```javascript
let books = ['Grit', 'Frozen', 'Who moved my cheese?', '1984'];

function askQuestion(book) {
    console.log(`Do you like ${book}?`);
}

books.forEach(askQuestion);

// Do you like Grit?
// Do you like Frozen?
// Do you like Who moved my cheese??
// Do you like 1984?
```

처음 보시면, 이 메쏘드가 어색할 수 있습니다. 위의 코드를 보시면, 처음 books라는 배열을 생성합니다. 그리고 `askQuestion` 이라는 함수를 선언해주죠. 그런 다음, 이 함수를 forEach 메쏘드의 인수로 넘겨줍니다. 그러면 `books.forEach(askQuestion)` 에서는, 배열의 각각의 원소에 대해서 `askQuestion` 함수를 실행하여 주게 됩니다.

## 배열의 추가적인 메쏘드들

### 배열을 문자열로 만들어주기

`array.toString()` 이라는 것을 사용하여 배열을 ',' 로 분리된 문자열로 만들어 줄 수 있습니다.

```javascript
let cars = ["Tesla", "Toyota", "Hyundai", "Kia"];

cars.toString(); // "Tesla,Toyota,Hyundai,Kia"" 
```

### 배열의 원하는 위치에 값 넣어주기

`array.splice()` 를 이용하여 우리는 배열의 원하는 위치에 값을 넣어줄 수도 있습니다.

```javascript
let cars = ["Tesla", "Toyota", "Hyundai", "Kia"];

cars.splice(2, 0, "Ford", "BMW")

alert( cars ); // Tesla,Toyota,Ford,BMW,Hyundai,Kia
```

- 첫번째 인수 (2)는 몇 번째 원소에 새로운 값이 추가되는 지를 의미합니다.
- 두번째 인수 (0)는 얼마나 많은 원소를 지울 것인지 의미합니다.
- 나머지 인수들 ("Ford", "BMW")는 들어갈 값입니다.

`array.splice()` 를 이용하여 그러면 원하는 위치의 값을 지워보겠습니다.

```javascript
let cars = ["Tesla", "Toyota", "Hyundai", "Kia"];

cars.splice(2, 1); // Hyundai

alert( cars ); // ["Tesla", "Toyota", "Kia"]
```


### 배열의 합치기

`array.concat()`을 이용하여 배열을 합칠 수도 있습니다.

```javascript
let cars1 = ["Tesla", "Ford", "BMW"];
let cars2 = ["Hyundai", "Kia", "Ssangyong"];
let cars3 = ["Toyota", "Mitsubishi"]

let carCollection = cars1.concat(cars2, cars3);

alert( carCollection ); // ["BMW", "Ford", "Hyundai", "Kia", "Mitsubishi", "Ssangyong", "Tesla", "Toyota"]
```

이런 식으로 여러가지의 배열의 메쏘드들을 사용할 수 있습니다. 여기서 가장 중요한 것은 이것을 외우는 것이 아니라, 여러분이 필요한 상황에 알맞게 메쏘드를 찾아쓸 수 있는 능력들입니다.

예를 들어, 여러분이 배열의 마지막에 원소의 값을 추가해야 한다고 하죠. 그럴 때는 구글에, **자바스크립트 배열 마지막에 값 추가법**, **Add element at the end of array Javascript** 등등, 구글링을 잘 해나가시는 능력이 더 중요합니다.


## 연습문제

**메쏘드 활용해보기**

1. '계명대학교', '영남대학교' 라는 값을 가진 `universities` 배열을 만들어주세요.
2. '서울대학교' 를 배열에 붙여줍니다.(메쏘드를 사용하세요)
3. 배열의 중앙에 있는 값을, '중앙대학교' 와 바꿔주세요. 여러분이 중앙에 있는 값을 바꾸기 위해 쓰는
코드가, 홀수의 배열이라면 항상 맞아야 합니다.
4. 배열의 첫번째 원소를 지우고, `console.log` 하여주세요.
5. '대구대학교'를 배열의 맨 앞에 넣어주세요.









