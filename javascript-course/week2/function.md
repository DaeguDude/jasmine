# 함수

여러분들이 코드를 많이 써봤겠지만, 그 코드들이 아주 유용하게 사용되지는 않았을 겁니다. 만약에, 어떠한 기능을 구현하는 코드를 만들어서 패키지처럼 만들었다고 생각해보죠. 그러면 그 패키지를 계속 쓸 수 있으면 아주 편리할 것입니다. 그것이 함수의 힘입니다. 자바스크립트에서는 함수가 엄청 많이 쓰입니다.

함수는 어떠한 블록에 코드를 넣고, 특정한 기능을 수행하게 합니다. 그리고 이 함수를 계속 사용할 수 있는 것이죠. 이번에는, 함수의 기본적인 개념과 문법, 그리고 어떻게 호출하고 선언하는지, 스코프와, 매개변수 등등에 대해서 배워보겠습니다.

## 함수를 제가 본 적이 있나요?

자바스크립트에서는, 함수는 어디에나 있습니다. 사실 우리도 이미 함수를 사용해왔지만 여러분들이 그것이 함수인지 몰랐던 경우가 더 많겠죠. 이제 그러면 함수에 대해서 정확히 알아보고 문법도 한 번 알아보겠습니다. 보통 우리가 코드를 쓸 때, `for loop`, `do...while loop`, 아니면 `if..else문`을 제외하고, () 괄호를 쓰시면 함수를 쓰고 계시다고 생각하셔도 됩니다.

### 브라우저의 내장 함수

우리는 이미 브라우저에 내장되어 있는 함수를 많이 써왔습니다. 예를 들어서, 문자열을 볼게요

```javascript
let myText = 'I am a string';
let newText = myText.replace('string', 'coco');

console.log(newText);   // "I am a coco"

// replace라는 함수는 타겟 문자열을, 우리가 바꿔주려는 문자열과 교체시켜 줍니다.
// 여기에서는 string 이라는 문자열을 coco와 바꿔주었습니다.
```

아니면 배열을 다룰 때도 사용하곤 하죠.

```javascript
let myArray = ['I', 'love', 'butter', 'beer'];
let stringOfArray = myArray.join('');

console.log(stringOfArray); // "I love butter beer"

// join 이라는 함수는 배열을 받아서, 배열의 모든 원소를 한 개의 문자열로 만들어 줍니다.
```

아니면, 문자열을 숫자로 바꿔줬을 때도 있었죠.

```javascript
let myString = '42';
let myNumber = Number(myString);

console.log(myNumber);  // 42
```

우리는 이런 식으로, 알게 모르게 함수를 사용해왔습니다.

## 함수와 메쏘드

프로그래밍에서는 어떤 객체에 속해 있는 함수를 메쏘드라고 부릅니다. 아직 이것이 어떻게 동작하는지는 정확하게 알지 않으셔도 됩니다. 나중에 객체가 무엇이고, 객체를 어떻게 생성하는지 배울 겁니다. 메쏘드라는 말을 처음에 듣고 사용을 한다면, 이것이 함수랑 똑같은데 왜 메쏘드라 불리는지 헷갈릴 수 있기 때문에, 여기서 짚고 넘어갈게요.

우리가 자주 써왔던 코드는 함수도 있고 메쏘드도 있습니다. 조금만 검색을 해보시면, 내장함수나, 내장객체, 그리고 거기에 속한 메쏘드들을 확인 하실 수 있습니다.

## 함수 선언

이렇게 내장 함수나 메쏘드들을 사용하는 것은 아주 유용합니다. 하지만 우리들만의 함수를 만들어서 쓸 수 있다면 그것도 아주 편하겠죠? 한 번 우리들만의 함수를 만들어볼게요.

함수를 선언 하시려면, 

```javascript
function 함수이름(매개변수) {
    // 코드를 적어주세요
}
```

함수 이름은, 코드의 내용과 알맞는 이름을 적어주시면 됩니다. 그리고 () 괄호를 열어, 매개변수라는 것을 지정해줍니다. 매개변수란, 함수가 가지는 변수입니다. 함수가 호출될 때, 어떤 값을 넘겨준다면, 그 값을 매개변수에 저장해주죠. 그리고 {} 중괄호를 열어, 함수가 동작시켜야 할 코드를 넣어주시면 됩니다.

그러면 실제 예시를 한 번 볼게요.

```javascript
function sayNameHundredTimes() {
    for(let i=0; i < 100; i++) {
        console.log('I am Daegudude!');
    }
}
```

위의 코드에서, sayNameHundredTimes 라는 이름의 함수를 선언하였습니다. 이 함수는 제 이름을 백 번 콘솔 창에 프린트 해 줄 것입니다.

## 함수 호출

위에서 제 이름을 백 번 프린트하는 함수를 선언했다면, 이 함수를 실제로 써볼 수 있어야겠죠? 함수를 동작시키는 것을 우리는 함수를 호출한다고 얘기합니다. 함수가 선언되면, 그 함수는 바로 실행이 되지 않습니다. 함수가 그냥 존재하는 상태이죠. 함수는 우리가 호출해줘야만 작동을 합니다.

그러면 위의 함수를 한 번 호출해볼게요. 함수를 호출하실 때는 `함수이름()` 형식으로 호출해주시면 됩니다.

```javascript
function sayNameHundredTimes() {
    for(let i=0; i < 100; i++) {
        console.log('I am Daegudude!');
    }
}

sayNameHundredTimes();
// I am Daegudude!
// I am Daegudude!
// ......
// I am Daegudude!
```

## 함수 매개변수(Parameter)와 인수(Argument)

어떠한 함수들은 값을 전달받아 함수 안에서 그 값을 유용하게 쓰기도 합니다. 그 값을 받아주는 변수를 매개변수라고 합니다. 

어떠한 경우에 우리는 매개변수를 사용하게 될까요? 예를 들어서, 이름을 프린트해주는 함수를 선언해볼게요.

```javascript
function sayName() {
    console.log('Hello Daegudude');
}

sayName(); // "Hello Daegudude"
```

이런 식으로, 함수를 선언한다면 한 사람의 이름 밖에 프린트를 해주지 못하죠. 이것은 아주 유연하지 못한 함수입니다. 만약에 매개변수를 사용한다면, 우리는 어떠한 사람의 이름이 들어와도 그 사람의 이름을 프린트하여 줄 수 있습니다.

```javascript
function sayName(name) {
    console.log(`Hello, ${name}`);
}

sayName('Ironman');         // "Hello, Ironman"
sayName('Thor');            // "Hello, Thor"
sayName('Doctor Strange');  // "Hello, Doctor Strange"
```

위의 코드에서, `sayName(name)` 함수는 name이라는 매개변수를 가지고 있습니다. 그리고 'Ironman', 'Thor', 'Doctor Strange' 라는 값을 전달받아 이름을 출력하여 줍니다. 
이렇게 함수를 호출할 때 넘겨주는 값들을 **인수**라고 합니다. 정의하자면, 함수를 호출할 때 매개변수에 전달되는 값입니다.

매개변수는, 꼭 한 개가 아니여도 됩니다. 여러 개여도 문제가 없습니다.

```javascript
function checkIn(name, temperature) {
    console.log(`안녕하세요 ${name}님, 열은 ${temperature}도 입니다`);
}

checkIn('아이언맨', '36.5');    // "안녕하세요 아이언맨님, 열은 36.5도 입니다"
```

위에서, `checkIn` 함수는 'name', 'temperature'라는 매개변수를 가지고 있고, 우리는 '아이언맨', '36.5'도라는 인수를 각각의 매개변수에 넘겨주었습니다.

## return 값

함수에는 return 값이라는 것이 있습니다. 어떠한 함수는 return 값을 가지는 함수도 있고 그렇지 않은 함수도 있습니다. return 값이 무엇인지 이해하고, 여러분의 함수가 어떠한 값을 돌려주게 만드는 것은 아주 유용할 수 있습니다. 

return 값이란, 말 그대로 어떤 값을 돌려준다는 것입니다. 어떠한 작업을 마치고 그 값을 돌려줍니다. 여러분은 사실 이미 return 값을 사용을 해봤습니다. 하지만 명확하게 그것이 return 값인지는 몰랐던 것이죠.

```javascript
let myText = 'I am a string';
let newText = myText.replace('string', 'coco');

console.log(newText);   // 
```

`replace()` 라는 함수가 myText에 실행이 되었습니다. 그리고 두 개의 매개 변수를 가지죠.

1. substring - 이 매개변수는 'string' 이라는 문자열을 찾습니다.
2. string - substring을 대체해 줄 문자열('coco')

이 함수가 실행이 되고나면 substring을 string으로 대체한 문자열을 돌려줍니다. 위에서는 string을 coco로 대체하여 'I am a coco' 라는 문자열을 돌려주죠.

여러분이 만약 `replace()` 함수에 대한 MDN의 참고 페이지에 가시면, [`반환값`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value) 이라는 섹션이 있습니다. 함수에 대해서 어떠한 값이 반환 되는 지를 아는 것은 아주 유용합니다. 그래서 MDN 페이지에 함수에 대해선 거의 항상 return 값이 적혀있죠.

어떠한 함수는 값을 돌려주지 않기도 합니다. 예를 들어서, 저희가 위에서 썼었던 `sayNameHundredTimes()` 는 어떠한 값도 반환하지 않습니다.

그러면 간단한 사칙연산 함수를 통해 return의 예시를 보겠습니다.

```javascript
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

add(5, 10);         // 15
subtract(10, 10);   // 0
multiply(5, 5);     // 25
divide(100, 10);    // 10
```

위의 함수들은, 두 개의 숫자를 인수로 넘겨받아 각자의 함수 이름에 걸맞는 연산을 하여 값을 반환하여 줍니다.

## 익명 함수(Anonymous functions)

가끔씩 다른 사람들의 코드를 보다보면, 조금 이상한 형태로 함수가 선언되고 호출되는 것도 보실 수 있습니다. 

예를 들어, 이렇게 이름이 없는 함수도 있습니다.

```javascript
function() {
    alert('This is weird right?');
}
```

이렇게 이름 없는 함수는 익명 함수라고 불립니다. 보통 함수는 이름을 가지는데 이름을 가지지 않기 때문이죠! 이 함수는 혼자서는 아무것도 할 수 없습니다. 왜냐하면, 이름이 없기 때문에 호출을 할 수도 없기 때문이죠. 그래서 보통 이벤트를 다룰때, 함수가 바로 실행되게 넘겨주고는 합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <button>Hello 버튼</button>
</body>
<script>
  const myButton = document.querySelector('button');

  myButton.onclick = function() {
    alert('hello');
  }
</script>
</html>
```

위의 html 파일을 열어주시면, 웹에서 버튼이 보일 것입니다. 이 버튼을 클릭하면, hello라는 알림창이 뜨죠. 우리는 익명 함수를, 버튼이 클릭되는 이벤트가 발생하면 바로 실행시켜주게 코드를 적어준 겁니다. 

또 다른 예시로, 여러분은 익명 함수를 어떠한 변수의 값으로 줄 수도 있겠죠. 그러면 여러분은 변수가 익명 함수를 값으로 가지고 있기 때문에, 변수 이름으로 호출을 하여 함수를 사용할 수 있게 됩니다.
이것을 함수 표현식(function expression)이라고 얘기합니다.

```javascript
const sayHello = function() {
    alert('hello');
}

sayHello();
```

하지만, 이렇게 변수의 값으로 익명 함수를 넘겨주는 방식은 잘 사용하지는 않습니다. 헷갈리기 때문이죠.

그래서 정석대로 함수를 선언해주시는게 깔끔합니다.

```javascript
function sayHello() {
    alert('hello');
}
```

익명함수는, 이벤트에 따른 어떤 함수를 실행시켜야 할 때 가장 많이 사용될 것입니다.

```javascript
myButton.onclick = function() {
    alert('버튼이 클릭되었습니다.');
}
```

## 화살표 함수(Arrow Function)

함수를 만들어주는 방법에는 또 다른 방법이 있습니다. 함수 표현식보다 더 나은 방법이죠. 이것은 "화살표 함수" 라고 불리웁니다.

```javascript
let myFunc = (arg1, arg2, ...argN) => 표현식
```

위의 함수 `myFunc`는 arg1...argN을 인수로 받아, 오른쪽 `표현식`을 계산을 한 다음, 그것의 결과값을 돌려줍니다. 함수 표현식이랑 같지만, 조금 더 깔끔한 문법이죠

```javascript
let myFunc = function(arg1, arg2, ...argN) {
    return 표현식;
}
```

그러면 실제 예시를 한 번 보겠습니다.

```javascript
// 함수 표현식
let sum = function(a, b) {
    return a + b;
}

sum(5, 10); // 15
```

```javascript
// 화살표 함수
let sum = (a, b) => a + b;

sum(5, 10); // 15
```

여러분이 위의 예시에서 보듯이 화살표 함수는 한 문장으로 아주 깔끔하게 함수를 만들었습니다.
`(a, b) => a + b`가 뜻하는 말은 a, b 인수를 받아, a + b를 계산하고 그 값을 돌려주라는 말입니다.

**인수가 한 개라면**

만약에, 우리가 인수를 한 개만 가진다면 () 괄호를 없애주셔도 됩니다.

```javascript
let squared = n => n ** 2;

squared(5); // 25
```

**인수가 없다면**

만약에, 우리가 인수를 받지 않는다면, 괄호를 비워주시면 됩니다.
```javascript
let sayHello = () => alert('Hey man?');

sayHello();
```

**여러 줄의 화살표 함수**

우리가 위에서 본 함수들은 한 줄의 코드를 가지고 있죠. 하지만 보통 우리가 함수를 만들 때는 한 줄보다 더 많은 코드를 쓰는 경우도 많습니다. 그럴 때는, 우리가 보통 함수를 감싸줄 때 처럼 {} 중괄호를 쓰시면 됩니다.

```javascript
let sum = (a, b) => {
    let result = a + b;
    return result;
};

sum(5, 10); // 15
```

## 함수 범위(scope)와 충돌

함수의 범위에 대해서 아주 잠깐 얘기해보도록 할게요 - 함수를 다룰 때 아주 중요한 개념입니다. 여러분이 함수를 선언하실 때, 함수의 블록(`{}`) 안에 있는 변수나 코드들은 그들만의 `범위(scope)`를 가지고 있습니다. 이것이 무슨 말이냐 하면은, 여러분이 함수 밖에서 이 코드에 접근이 불가능 하다는 말이죠.

```javascript
function storeMyName(name) {
    let myName = name;
}

storeMyName('Daeguboy');
console.log(myName); // ERROR!
```

위의 코드에서 여러분은 `storeMyName()` 함수의 안에 있는 `myName` 이라는 변수에 접근을 할 수 없습니다. myName 변수는 함수의 블록안에서만 존재하기 때문이죠.

반대로 함수의 밖이나, 어떠한 블록 밖에 있는 것들은 전역 범위(global scope)에 있다고 불리웁니다. 전역 범위에서 생성된 값들은 코드의 어디에서나도 접근이 가능하죠.

```javascript
let myName = 'Daeguboy';

function getMyName() {
    console.log(myName);    // 접근 가능!
}

getMyName();    // Daeguboy'
```

위의 코드에서는, `myName`이라는 변수가 전역범위에 선언되었기 때문에 코드의 어디에서나 접근이 가능합니다. getMyName()을 실행하면 myName을 출력하여주죠.

범위의 개념을 알아보기 위해서 동물원을 한 번 생각해볼게요. 사자, 얼룩말, 호랑이, 펭귄들이 각자의 우리안에서 살고 있다고 생각해볼게요. 함수의 범위처럼요. 만약에 서로가 다른 동물의 우리에 들어갈 수 있다면 문제가 생기겠죠? 호랑이 같은 동물들이, 펭귄이 좋아하는 차가운 바닥에서 살 수 있을까요? 또한, 사자나 호랑이가 펭귄을 가만히 놔둘까요? 잡아먹을 수도 있습니다!

![Zoo Image](./img/zoo.png)*photocredit: MDN*

반면에 사육사는 전역 범위(global scope)랑 비슷합니다. 모든 우리의 열쇠를 가지고 있어서 어디든 들어갈 수 있죠. 그렇게 먹이 등을 주고 동물들을 보살필 것입니다.

**왜 함수는 그들만의 범위를 가지고 있는 것일까요?** 

가장 큰 이유는 보안과 코드를 잘 정리하기 위해서입니다. 가끔씩은 여러분의 변수가 코드 어디에서나 접근이 가능하도록 원하지 않을 경우가 있습니다. 예를 들어서, 여러분이 다른 자바스크립트 코드를 HTML 파일과 연결시켜주었는데, 똑같은 변수의 이름을 가지고 있다면요? 그러면 코드에 오류가 발생하겠죠.

```HTML
<script src="myScriptOne.js"></script>
<script src="myScriptTwo.js"></script>
<script>
  sayHello();
</script>
```

```javascript
// myScriptOne.js
let name = 'DaeguBoy';
function sayName {
  alert('Hello ' + name);
}
```

```javascript
// second.js
let name = 'DaeguGirl'
function sayName {
    alert('Yo what up man?');
}
```

위에서는, myScriptOne에서 name이라는 변수를 선언해주었죠? 하지만, myScriptTwo에서 똑같은 변수 이름을 가지고 있습니다. 이러한 경우에는, 하나의 변수이름 밖에 가질 수 없기 때문에 오류가 납니다. 

이러한 이유로 여러분의 코드를 함수 안에 넣어둔다거나 등등의 방법들을 이용하여 전역 변수를 최대한 적게 쓰는게 가장 좋은 방법입니다. 더 많은 방법들에 대해서는 뒤에서 더 깊게 설명하도록 하겠습니다.

### 연습문제

1. 두 개의 인수를 받아, 첫번째 인수를 두번째 인수만큼 제곱해주는 함수 power를 만들어주세요.

```javascript
power(2, 3)   // 8
power(10, 3)   // 1000
```

2. 함수를 화살표 함수로 바꾸어 주세요.

```javascript
function checkAge(age) {
    if (age < 18) {
        console.log('당신은 술 못사. 나가.');
    } else {
        console.log('당신은 술을 살 수 있습니다. 너무 많이 마시진 마세요.');
    }
}
```

### 참고사항

많은 내용들은 오픈소스 프로젝트인 [The Odin Project](https://www.theodinproject.com/dashboard)에서 가져온 내용들입니다. 

- [함수 - 재사용 가능한 코드 블록](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Functions)

- [함수 - return 값](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

- [화살표 함수](https://javascript.info/arrow-functions-basics)

### 고칠점 / 연락하기

혹시나 글에서 고칠 점이나 추가되어야 할 점이 있다면, [Jasmine 깃허브](https://github.com/DaeguDude/jasmine/tree/week1-number)에서 issue를 생성해주시고, 개인적인 연락은 k3hppk@gmail.com 으로 주시면 됩니다.





