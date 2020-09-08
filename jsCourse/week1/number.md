## 숫자와 연산자들

숫자는 프로그래밍의 논리를 짤 때 아주 중요한 부분입니다. 사실, 숫자를 포함하지 않는 프로그래밍 작업은 거의 없죠. 그래서, 숫자가 어떻게 동작하는지 아는 건 꽤나 중요합니다. 어렵지 않으니 한 번 해볼게요.

### 기본적인 용어: "unary", "binary", "operand"

- 피연산자(operand) - 피연산자는 연산자가 적용이 되는 것을 얘기합니다. 예를 들어,
10 + 5에는 2가지 피연산자가 있죠. 왼쪽 피연산자는 10, 오른쪽 피연산자는 5입니다. 가끔씩 사람들은 이것을 인수라고 부르기도 합니다.

- 단항 연산자(unary operator) - 연산자가, 하나의 피연산자를 가지고 있으면 단항 연산자라고 불립니다.

```javascript
let x = 1;
x = -x;   // -1, 
```

- 이항 연산자(binary operator) - 이항 연산자는 보통 우리가 알고 있는 유형의 연산자이죠. 두 개의 숫자를 더해주거나, 빼주거나 등등을 할 때 쓰입니다.

```javascript
let x = 2, y = 5;
x * y;    // 10
```

### 시작

자바스크립트는 오직 하나의 숫자 유형만 있습니다. 숫자는 소수점이 있거나 없을 수 있죠.
```javascript
let x = 3.14;
let y = 3;

alert(x);      // 3.14
alert(y);      // 3
```

엄청나게 큰 숫자는, 과학적인 표기법을 쓸 수도 있습니다.
```javascript
let x = 123e5;     // 12300000
let y = 123e-5;     // 0.00123
```

### 정확성

정수는 15자리까지 정확하게 표현이 됩니다.
```javascript
let x = 999999999999999;     // 999999999999999
let y = 9999999999999999;     // 10000000000000000
```

소수점은 17자리까지 표현이 되지만, 이런 소수점 연산은 100% 정확하지 않습니다.
```javascript
let x = 0.2 + 0.1;     // 0.30000000000000004
```

위에서 일어나는 문제를 해결하려면, 곱해주고 다시 나눠주면 정확한 결과값이 나옵니다. 정말 불편한 구조긴 하죠?

```javascript
let x = (0.2 * 10 + 0.1 * 10) / 10     // 0.3
```

### 숫자와 문자열 더하기

여러분이 주의하셔야 할 점은, 자바스크립트는 `+` 연산자를 더하기와 병합에 같이 씁니다.
숫자는 더해지고, 문자열은 병합이 될 것입니다.

```javascript
let x = 10;
let y = 20;
let z = x + y;       // 30(숫자)
```

두 개의 문자열을 더하면, 결과는 병합된 문자열이 됩니다.

```javascript
let x = "10";
let y = "20";
let z = x + y;      // "1020"(문자)
```

숫자와 문자열을 더하면, 그 결과값은 병합된 문자열이 될 것입니다.

```javascript
let x = "10";
let y = 20;
let z = x + y;      // "1020"(문자)
```

결과값이 30일거라는 오해를 할 수도 있습니다.
```javascript
let x = 10;
let y = 20;
let z = "The result is: " + x + y;      // "The result is: 1020"
```

### 숫자 문자열

자바스크립트 문자열은 숫자를 가질 수도 있습니다.

```javascript
let x = 100;        // 숫자

let y = "100"       // 문자
```

자바스크립트는 보통 숫자 연산에서 문자열을 숫자로 바꾸려 할 것입니다.
```javascript
let x = "100";
let y = "10";
let z = x / y;      // 10
```

`+` 연산자 빼고는, 다 숫자처럼 계산을 한다고 생각을 하시면 편할 수도 있을 것 같습니다.
```javascript
let x = "100";
let y = "10";

x + y;      // 10010(문자)
x - y;      // 90(숫자)
x / y;      // 10(숫자)
x * y;      // 1000(숫자)
```

### NaN - Not a Number

NaN은 자바스크립트에서 지정한 Not a Number라는 단어입니다. 이 것은 결과값이 제대로 된 숫자가 아니라는 뜻을 나타냅니다.  제가 숫자와 숫자가 아닌 문자열을 연산을 해볼게요.

```javascript
let x = 100 / "Apple";    // x는 NaN이 됩니다.
```

`isNaN()`이라는 함수를 이용해서, 결과값이 숫자인지 아닌지도 알 수 있습니다.

```javascript
let x = 100 / "Apple";
isNaN(x);   // 결과값이 NaN이기 때문에, true를 반환합니다.
```

### Infinity 무한대

Infinity라는 결과값은 자바스크립트에서 연산을 할 수 있는 가장 큰 숫자를 넘어서면 나오는 값입니다.

```javascript
let myNumber = 2;
while (myNumber!= Infinity) {   // 무한대에 도달하기 전까지 계속 돌아갑니다
  myNumber = myNumber * myNumber
  console.log(myNumber);
}
```

여러분이 수학에서 배우셨다시피, 어떤 숫자를 0으로 나누면 무한대를 반환합니다. 음 잠깐만요, 제가 배웠었나요...? 기억이 잘 안납니다...

```javascript
let x = 2 / 0;    // x는 Infinity입니다.
let y = -2 / 0;   // y는 -Infinity입니다.
```

### Hexadecimal 16진수

자바스크립트는, 어떠한 상수가 0x로 시작하면 16진수로 받아들입니다.

```javascript
var x = 0xFF;   // 255
```

기본적으로, 자바스크립트는 숫자를 10진수 형태로 보여줍니다. 하지만 toString() 이라는 메쏘드를 통해서 우리는 2진수부터 36진수까지도 나타낼수 있습니다.

```javascript
let myNumber = 32;
myNumber.toString(10);    // 32, 우리가 알고 있는 보통의 숫자 형태죠
myNumber.toString(32);    // 10
myNumber.toString(16);    // 20
myNumber.toString(8);     // 40
myNumber.toString(2);     // 100000   
```

### 추가적인 연산자

기본적인 사칙연산은 다루어 보았으니, 조금 더 추가적인 것들도 다뤄보도록 할게요.

- 나머지(Reaminder) - %
- 지수(Exponentation) - **
- 대입(Assignment) - =

### 나머지

나머지 연산자 %는, 우리가 보통 퍼센트로 많이 알고있죠. 하지만 대부분의 프로그래밍에서는, 나머지를 되돌려 줍니다.

```javascript
alert(7 % 3);   // 1
alert(6 % 2);   // 0
alert(11 % 4);   // 3
```

### 지수

지수 연산자 x ** y 는 x를 y번 곱하여 줍니다.

```javascript
alert(2 ** 2);    // 4
alert(5 ** 3);    // 125
alert(10 ** 3);   // 1000 
```

수학적으로 지수는 정수가 아닌 수를 가질 수도 있죠. 예를 들어서 제곱근은 1/2 만큼의 지수값을 가지면 되겠죠?

```javascript
alert(4 ** (1/2) );   // 2
alert(16 ** (1/4) );  // 2
```

### 연산자 우선순위

수학에서도, 보통 *, /가 +, -보다 먼저 우선 순위를 가지듯이, 연산자들 사이에는 우선순위가 있습니다. 이 MDN의 [연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)를 보시면, 연산자를 실행하는 우선순위를 확인하실 수 있습니다.

### 대입 = 

수학에서는 =이 왼쪽 값과 오른 쪽 값이 같다는 평등의 개념으로 사용되지만, 프로그래밍에서 =는 오른쪽값을 왼쪽에 대입시키는 경우에 사용됩니다. =도 연산자입니다. 우선 순위가 낮을 뿐이죠.

```javascript
let x = 2 * 2 + 1;

alert( x ); // 5
```

### 증가 / 감소

보통 숫자를 1 증가시키거나 감소시키는 것은 숫자 연산에서 아주 흔한 일입니다. 그래서 그것만을 위한 특별한 연산자가 있습니다.

- 증가(Incremenet) - ++ 는 변수를 1만큼 증가시킵니다.
```javascript
let myNumber = 2;
myNumber++;
alert(myNumber);    // 3
```

- 감소(Decrement) - --는 변수를 1만큼 감소시키죠.
```javascript
let myNumber = 2;
myNumber--;
alert(myNumber);    // 1
```

### 참고사항

많은 내용들은 오픈소스 프로젝트인 [The Odin Project](https://www.theodinproject.com/dashboard)에서 가져온 내용들입니다. 

- [자바스크립트 숫자 - w3school](https://www.w3schools.com/js/js_numbers.asp)
- [숫자와 연산자 - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [기본적인 연산자와 수학 - Javascript Info](https://javascript.info/operators)

### 고칠점 / 연락하기

혹시나 글에서 고칠 점이나 추가되어야 할 점이 있다면, [Jasmine 깃허브]((https://github.com/DaeguDude/jasmine/tree/week1-number))에서 issue를 생성해주시고, 개인적인 연락은 k3hppk@gmail.com 으로 주시면 됩니다.
