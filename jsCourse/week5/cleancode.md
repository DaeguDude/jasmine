# 깨끗한 코드

개발자들은 코드를 작성하는 것 보다 읽는 데에 훨씬 더 많은 시간을 들입니다. 이것은 여러분의 코드에 있어서도 마찬가지 일 것입니다. 여러분이 코드를 유지보수하기 위해서나 아니면 여러분의 코드를 읽을 다른 사람을 위해서라도 읽기 좋은 코드를 작성하는 것은 아주 중요합니다.

밑의 예시를 한 번 보겠습니다.

더럽고 읽기 어려운 코드,

```javascript
const x = 
function(y) {
let z = 0; y.forEach(
function(q){
    z += q;
});return z;
)
};

x([2,2,2])
```

깔끔하고 읽기 쉬운 코드,

```javascript
const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
        sum += number;
    });
    return sum;
}

sumArray([2,2,2]);
```

믿기 힘들지도 모르시겠지만, 위의 두 코드 예시는 똑같은 일을 합니다. 배열을 받아들여서, 각각의 원소들의 값을 더해서 총합을 되돌려주는 것이죠. 여러분이 어떤 코드를 읽어야 하는데, 그 코드가 첫번째 예시처럼 작성이 되어있다면 어떻게 될까요? 코드를 이해하는데에만 시간이 엄청 걸릴 것입니다. 

두 번째 예시는 어떤가요? 만약에 여러분이 코드가 어떤 일을 하는 지 몰라도, 함수의 이름이 잘 작성되어 있기 때문에 코드를 이해하기에 훨씬 쉬울 것입니다.

좋은 자바스크립트 코드를 작성하는데에는 여러가지의 구성요소들이 있습니다. 하지만 그 중에서도 가장 중요한 것은 **일관성** 입니다. 그러면 몇 가지의 구성요소들을 알아보겠습니다.

## 몇 가지의 규칙들

1. 들여쓰기(Indentation): 여러분이 들여쓰기를 어떻게 하는지는 사실 딱히 중요하지는 않습니다. 여러가지의 자바스크립트 스타일 가이드들에서는 들여쓰기에 대한 여러가지의 옵션을 제공을 하죠. 하지만 어떤 것이 다른 것 보다 낫다고는 할 수 없고, 가장 중요한 것은 일관성입니다. 여러분이 4칸을 들여쓰기 하신다면, 코드에서 항상 4칸을 들여쓰시고, 2칸을 들여쓰신다면 항상 2칸을 들여쓰세요.

```javascript
// X
if (true) {
  console.log('hello there');
} else { 
    console.log('nah man');
}

// O
if (true) {
  console.log('hello there');
} else { 
  console.log('nah man');
}
```

2. 세미콜론(Semicolons): 자바스크립트에서 세미콜론은 써도 되고 안 써도 됩니다. 코드가 실행될 때, 자바스크립트 컴파일러가 세미콜론이 없다면 자동으로 넣어줄 것이기 때문이죠. 하지만 이러한 기능들은 특정한 상황들에서 무시될 수가 있고, 이것이 버그로 이어질 수도 있습니다. 그렇기 때문에 세미콜론을 항상 넣어주는 게 좋습니다.

예를 들어,

```javascript
const numOne = 1
const numTwo = 2
const sum = numOne + numTwo
(numOne + numTwo).toString()
```

이러한 경우에 `Uncaught TypeError: numTwo is not a function at <anonymous>:3:22` 라고 출력이 될 것입니다. 왜냐하면 자바스크립트는 위의 코드를,

```javascript
const numOne = 1
const numTwo = 2
const sum = numOne + numTwo(numOne + numTwo).toString()
```

이렇게 받아들이기 때문이죠. 중요한 것은 어떠한 상황에 이러한 에러가 발생하는 지를 아는 것이 아니라, 세미콜론을 그냥 써주면 이러한 불필요한 상황을 피할 수 있다는 것입니다!

3. 줄 길이(Line Length): 줄 길이도 여러가지의 스타일 가이드에서 여러가지의 선택지를 제안합니다. 하지만 스타일 가이드들에서의 하나의 공통점은 모두 다 줄 길이를 제한하는 것을 추천한다는 것입니다. 어느정도에서 제한하는 것은 여러분의 선택이지만, 보통 80자 정도에서 끊어주면 괜찮습니다. 그리고 두번째 줄은 항상 연산자로 시작하고 들여쓰기를 2번 해주시는게 좋습니다.

하지만! 최근에는 디스플레이가 훨씬 넓어지고 스타일이 다양해짐에 따라 80자에서 제한하는 것보다 120자에서 제한한다던지 여러가지의 스타일이 많습니다. 여러분에 알맞는 스타일로 하시면 되고 너무 길게만 하지마세요.

```javascript
let reallyReallyLongLine = something + somethingElse + anotherThing
    + howManyTacos + oneMoreReallyLongThing;
```

4. 이름 짓기: 변수나 함수를 위한 이름은 항상 구체적이고 직관적이여야 합니다. 그리고 항상 camelCase를 사용하세요. 예를 들어, `let sayMyName = () => {}` 이런 식으로 말이죠. 여러분의 코드를 일관성있고 가독성있게 만들기 위해서, 변수는 항상 명사로 시작하고 함수는 항상 동사로 시작하면 좋습니다. 반복문이나 콜백 함수를 쓸 때 변수이름으로 한 개의 문자만 지정하는 것은 괜찮지만 다른 경우에는 이름을 최대한 구체적, 직관적으로 적어주세요.

```javascript
// O
const mySchoolGrade = 3;
const myName = 'DaeguDude';
const selected = true;

// X(변수는 동사로 시작하지 마세요)
const getCount = 10;
const isSelected = true;

// O
function getMySchoolGrade() {
  return mySchoolGrade;
}

// X(함수는 명사로 시작하지 마세요)
function myName() {
  return 'Mr.Daegu';
}
```




