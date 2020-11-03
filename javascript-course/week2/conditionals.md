## 조건문

어떤 프로그래밍에서든, 코드는 인풋에 따라 다른 결정을 내려야 하는 상황들이 발생하고는 합니다. 예를 들어서, 게임을 할 때 유저의 생명이 0이면, 게임이 끝나야겠죠. 아니면, 날씨 어플리케이션에서, 비바람이 엄청 분다면 비바람이 부는 그래픽을 보여준다던지, 그러한 것들 처럼 어떠한 상황일때, 어떠한 결과값을 보여줄 수 있어야 합니다. 이번에는, 자바스크립트에서 어떻게 조건문이 쓰여지는지 한 번 확인해보겠습니다.

### 여러분은 한 개의 상태만 가질 수 있습니다..!

인간은 언제나 삶에 살아감에 있어서, 자신의 인생에 중대한 영향을 미칠 결정을 내려야 하죠. 예를 들어, 밤에 내가 이 야식을 먹으면 살이 찌는건 분명한데...안 먹자니 너무 맛있겠고, 먹자니 살이 찌는게 걱정되고.. 이러한 작은 걱정부터, 이번 학기는 휴학을 해야하나 말아야 하나 등등 이러한 큰 결정들 까지 여러가지의 갈등이 있습니다.

조건문은 이러한 결정을 내리는 과정을 코드로 나타내는 것입니다. 예를 들어, 만약에 밤 10시 이후 라면을 먹었다면, 결과값으로 내일 아침 퉁퉁 부은 얼굴을 반환해주면 되겠죠?

### if...else 문

프로그래밍에서 가장 흔한 조건문이고, 여러분이 가장 많이 쓰게 될 `if...else`문에 대해서 한 번 알아보죠.

#### 기본 if...else 문법

```javascript
if (조건) {
    // 조건이 진실이라면 여기의 코드를 실행하세요
} else {
    // 조건이 거짓이라면 여기의 코드를 실행해주세요.
}
```

이것을 한글로 한 번 설명해볼게요.

1. if() 문이 있습니다.
2. () 괄호 안에는, 조건이 들어가죠. 예를 들어, 밤 10시 이후인가?
3. { } 중괄호에는, 코드가 들어갑니다. 어떤 코드를 넣어도 되지만, 어떤 조건이 진실일때만 돌아가죠.

4. else() 문이 있습니다.
5. { } else 문의 중괄호에도 코드가 들어가는데, 이 안의 코드는 조건이 **거짓** 일때 돌아갑니다.

정리하자면, '만약 조건이 진실이라면, A를 실행하고 거짓이라면 B를 실행해주세요.'.

그리고, `else` 문을 쓰지 않고도 조건문을 실행할 수 있습니다.

```javascript
if (조건) {
    // 조건이 참이라면 여기의 코드를 실행해주세요.
}
```

이렇게 else 문 없이 코드를 써도 괜찮은 코드입니다. 어떤 조건이 진실일때만 중괄호 안의 코드를 실행하고, 아니라면 아무것도 하지 않습니다.

마지막으로, `if..else` 문을 중괄호 없이 쓸 수도 있습니다. 

```javascript
if (조건) // 여기의 코드 실행
else // 여기의 코드 실행
```

하지만 이 방법을 추천드리지는 않습니다. 왜냐하면 읽기가 더욱 어렵기 때문이죠. 또한 여러분이 쓰는 코드는, 여러분만이 읽을 코드가 아니라 다른 사람도 읽어야 하기 때문에 전통적인 방법을 따르는게 가장 좋습니다.

**실제 예시**

그러면 이번에 아까 장난으로 얘기했던 라면을 실제 예시로 들어볼게요. 아마 여러분은 어떠한 조건에 맞춰서 결정을 내릴 것입니다. "지금 시간을 봐서 시간이 저녁 10시가 지났으면 절대 라면을 먹지 않겠다...!"

```javascript
let currentTime = 23;

if(currentTime > 22) {
    let eatRamen = false;
} else {
    let eatRamen = true;
}
```

위의 조건문에서, currentTime이 22를 넘으면, eatRamen은 false가 됩니다. 먹지 않겠다는 것이죠. 그리고 currentTime이 22를 넘지 않는다면 eatRamen은 true가 됩니다. 먹을 거라는 말입니다.

### else if 문

우리가 금방 알아본 예시들은 2가지의 선택에서 갈등을 한 것입니다. 하지만 실제 상황은 2가지의 선택에서 결정을 내리는 것이 아니라 아주 수많은 선택지 속에서 결정을 내리는 복잡한 구조이죠? 

프로그래밍에서는 3가지 이상의 선택지가 필요하면 어떻게 하면 될까요?

`else if`문을 사용하여, 여러 가지의 선택지를 추가하여 줄 수 있습니다. else if는 if처럼 또 다른 조건을 부여하여 줄 수 있습니다.

```javascript
let weather = 'snowing';

if (weather === 'sunny') {
    alert('날씨 덥다. 반바지 입어');
} else if (weather === 'rainy') {
    alert('비온다. 비 바람막이랑 우산 챙겨!');
} else if (weather === 'snowing') {
    alert('눈온다 이녀석아, 나가지마');
} else {
    alert('무슨 날씨야..?');
}
```

그러면 코드를 한 번 살펴볼까요? 

1. weather라는 날씨를 넣어줍니다.

2. 가장 처음으로 if문의 weather === 'sunny' 조건을 만족하는지 확인합니다.
조건을 만족하지 않으므로 다음으로 넘어갑니다.

3. 다음에 else if문의 weather === 'rainy' 조건을 만족하는지 확인합니다.
조건을 만족하지 않으므로 다음으로 넘어갑니다.

4. 또 else if문의 weather === 'snowing' 조건을 만족하는지 확인합니다.
조건을 만족하네요! 그래서 `alert('눈온다 이녀석아, 나가지마')`코드를 실행시켜줍니다!

5. 앞의 조건을 만족했기 때문에 코드가 끝이 납니다. else문은 실행이 되지 않습니다.

**비교 연산자**

비교 연산자는 조건문안의 조건을 테스트하기 위해서 사용됩니다. 

- `===`와 `!==` 는 값이 같은지 다른지 테스트 합니다.
- `<` 와 `>`는 값이 크거나 작은지 테스트 합니다.
- `<=`와 `>=`는 값이 같거나 큰지, 같거나 작은지 테스트 합니다.

**기억해야 할 점!**

여러분이 짚고 넘어가야 하실 것이 있는데, 우리는 조건을 통해 보통 참이냐 거짓이냐를 반환하여, 거기에 맞는 코드를 실행시킵니다. 어떠한 값이 `false`가 아니더라도, `false`로 치는 경우가 있습니다.

`false`인 경우
- undefined, null, 0, NaN
는 false로 칩니다.

`true`인 경우
- undefined, null, 0, Nan을 제외하고는 항상 true입니다.

예를 들어서,

```javascript
let kimchi = '배추김치';

if (kimchi) {
    alert('야, 김치있다. 라면이랑 같이 먹으면 되겠다.');
} else {
    alert('김치 없는데 라면이랑 뭐 먹지?');
}
```
위의 경우에, kimchi에 `배추김치`라는 문자열이 들어가 있죠. 위에서 설명하였듯이, `undefiend`, `null`, `0`, `NaN`을 제외하고는 모두 true로 간주하기 때문에, 첫번째 if문 안의 코드 `alert('야, 김치있다. 라면이랑 같이 먹으면 되겠다.');`가 실행될 것입니다.

### 중첩 if...else문

저희는 일차원적인 if...else문을 봤지만, if...else문 안에 또 다른 if...else문을 넣어주는 건 아무런 문제가 없습니다. 실제 우리의 삶의 결정도 일차원 적으로 이루어지지 않죠.

```javascript
if (weather === 'sunny') {
    if(temperature > 30) {
        alert('Man!, 반바지 무조건 입자');
    } else if(temperature <= 30) {
        alert('이 정도면 긴바지 입어도 큰 문제 없겠는데?');
    }
}
```
위의 코드는, 처음에 weather의 값이 sunny인지 확인하고, sunny가 맞다면, 또 다른 if...else문으로 들어갈 것입니다. 그 다음에는 temperature가 30도 이상인지 아닌지 확인한 후 그에 알맞은 코드를 실행하여 줄 것입니다.

### 논리 연산자: AND, OR 그리고 NOT

만약에 여러분이 여러개의 중첩된 if..else문을 적고 싶지 않다면, 논리연산자를 이용해서 조금 더 깔끔하게 할 수도 있습니다.

- `&&` - AND; 두 개나 그 이상의 표현을 묶어서, 그 두개의 표현이 모두 참이라면 `true`를 반환하여 줍니다.
- `||` - OR; 두 개나 그 이상의 표현을 묶어서, 한 개의 조건이라도 만족한다면 `true`를 반환하여 줍니다.


**AND**

아까의 예시를 이용하여, AND를 활용하여 보겠습니다.

```javascript
if (weather === 'sunny' && temperature > 30) {
    alert('Man!, 반바지 무조건 입자');
} else if (weather === 'sunny' && temperature <= 30) {
    alert('이 정도면 긴바지 입어도 큰 문제 없겠는데?');
}
```

위의 예시의 아까의 예시와 결과값이 같습니다. if문의 조건은 weather의 값이 'sunny'이고, temperature가 30이상일때만 실행될 것입니다. 두 가지 다 만족을 해야하는 것이죠.

**OR**

이번에는 OR을 쓴 예시를 한 번 볼게요.

```javascript
let houseTemp = 'cool';
let houseStatus = 'noisy';

if (houseTemp === 'hot' || houseStatus === 'noisy') {
    alert('Better go to a cafe?');
} else {
    alert('Stay home, save lives');
}

// Better go to a cafe?
```

위의 코드는 둘 중에 하나의 조건이라도 만족한다면, if 블락 안에 있는 코드를 실행합니다.

**NOT**

마지막으로 NOT에 대해서 한 번 알아보겠습니다. NOT(!)은 한 표현의 결과값을 반대로 바꾸어줍니다. 참이면 거짓으로, 거짓이면 참으로 말이죠.

```javascript
let houseTemp = 'cool';
let houseStatus = 'noisy';

if (!(houseTemp === 'hot' || houseStatus === 'noisy')) {
    alert('Stay home, save lives');
} else {
    alert('Better go to a cafe?');
}
```

약간 헷갈릴 수도 있는데 한 번 차근히 보자면,

1. houseTemp === 'hot' 조건을 테스트 합니다. houseTemp 는 'cool'이기 때문에, false를 반환합니다.

2. houseStatus === 'noisy' 조건을 테스트 합니다. houseStatus === 'noisy'는 사실이기 때문에 true를 반환합니다.

3. || 은 둘 중에 하나라도 참이 있다면 true를 반환합니다. 집이 덥거나, 시끄럽다면....이라는 조건이죠. 지금 집이 시끄럽네요.

4. 위의 조건이 true 이지만 **NOT**을 통해, 결과값을 뒤집습니다. False가 되는것이죠.
그래서 else 문의 코드를 실행합니다.

아마도, 왜 `!`을 쓸까 하실 수도 있는데, 가끔씩 유용할 때도 있습니다. NOT이 포함된 위의 조건문은, '만약 덥지도 않고 시끄럽지도 않다면, 집에 머물러라' 라는 조건입니다.

### 스위치 문(Switch Statements)

`if...else` 문이 조건에 따라 코드를 실행하는데 아주 적절한 역할을 하지만, if...else 문에도 단점은 있습니다. 예를 들자면, 만약에 선택지가 여러개라면 if...else 문은 코드가 엄청 복잡해질 수도 있습니다.

이렇게 선택지가 여러개 일 때는, `switch`문을 써주면 좋습니다. switch문은, 한 개의 표현식이나 값을 인풋으로 받아, 인풋으로 받은 값에 맞는 선택지를 찾을 때까지 코드가 돌아갑니다. 

한 번 볼게요.

```javascript
switch (expression) {
    case choice1:
        // 여기의 코드 작동
        break;
    case choice2:
        // 여기의 코드 작동
        break;
    case choice3:
        // 여기의 코드 작동

    // 원하는 만큼 많이 추가할 수 있습니다.

    default:
        // 어떤 것도 만족하지 못하면, 그냥 이 코드 작동
}
```

1. switch 문이 있습니다.
2. () 괄호 안에는, 표현식이나, 값이 들어갑니다
3. case는 ~~~한 경우에라는 말로, 한 개의 선택지를 의미합니다.
4. 코드가, 만약에 값과 일치한다면, 그 안의 코드를 작동시킵니다.
5. 그 안의 코드가 작동한뒤, break를 통해 코드를 중지시킵니다.
6. case(선택지)는 원하는 만큼 넣으실 수 있습니다.
7. default는 위의 선택지중 어떠한 것도 만족하지 못할때, 그 안의 코드를 작동시키라는 말입니다. if문의 else와 비슷하다고 보시면 됩니다.

여기서 노트는, 사실 default를 딱히 포함 안 시켜주셔도 됩니다. 하지만 어떠한 선택지도 만족시키지 못했을때, 그 예외에 대한 코드를 작동시키고 싶으시다면 포함시켜주시면 됩니다.

**switch 예시**
```javascript
let weather = 'snowing';

switch (weather) {
    case 'sunny':
        alert('날씨 덥다. 반바지 입어');
        break;
    case 'rainy':
        alert('비온다. 비 바람막이랑 우산 챙겨!');
        break;
    case 'snowing':
        alert('눈온다 이녀석아, 나가지마');
        break;
    default:
        alert('무슨 날씨야..?');
        break;
}

// alert('눈온다 이녀석아, 나가지마');
```

### 삼항 연산자(Ternary Operator)

마지막으로, 약간 이상한 녀석을 소개해드리겠습니다. 삼항 연산자 혹은 조건 연산자라고 불리는 이 녀석은, 똑같이 조건을 테스트하여, true나 false를 반환합니다.
이 녀석은 가끔씩 특정한 상황에서 요긴하게 쓰입니다. 그리고 코드가 if나 switch문 보다 훨씬 작습니다.

```javascript
( 조건 ) ? // true라면, 여기 코드 실행 : 아니면 여기 코드 실행
```

한 번 예시를 볼게요.

```javascript
let isHot = false;

let message = ( isHot ) ? '옷 시원하게 입어라' : '재킷 챙겨'

alert(message)
```

위의 예시에서, 조건 부분에 isHot, false값을 가진 변수를 조건으로 넘겨주고, 만약에 true라면 '옷 시원하게 입어라'를 아니라면 '재킷 챙겨'를 message에 넣어줍니다.

확인해보시면, isHot은 false이기 때문에, '재킷 챙겨'가 message 안에 담겨 있는 것을 확인하실 수 있습니다.

마지막으로, HTML과 CSS를 엮어서 삼항 연산자의 예시를 한 번 볼게요.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <label for="theme">테마를 선택해주세요: </label>
  <select id="theme">
      <option value="white">밝은 테마</option>
      <option value="black">어두운 테마</option>
  </select>

  <h1>Hㅔㄹ로!</h1>
</body>
</html>
```

```javascript
  const select = document.querySelector('select');
  const html = document.querySelector('html');

  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  select.onchange = function() {
    ( select.value === 'black' ) ? update('black', 'white') : update('white', 'black');
  }
```

이 코드를 실행시켜 보시면, 우리가 밝은 테마, 어두운 테마를 선택할 때마다 그에 맞게 배경과 텍스트 색깔이 바뀝니다. 여기서 우리는 `onchange` 라는 eventListener를 넣어주었는데요. 이것은 select의 선택값이 바뀔때마다 우리가 넘겨준 함수를 실행하여 줍니다. 

우리가 넘겨준 함수에는 삼항연산자가 있죠. 선택된 값이 black이라면, 배경을 어둡고 텍스트 색깔을 하얀색으로, 선택된 값이 white라면, 배경을 밝고 텍스트 색깔을 검은색으로 바꿔줍니다. 보시다시피, 삼항연산자를 쓸 때, 함수를 섞어서 더욱 더 강력하게 써주실 수 있습니다.

### 연습문제

1. message와 age라는 두 변수를 선언하여주세요. 두 변수는 아무 값을 가지지 않아도 됩니다. age가 12살 미만일시 '입장이 불가능하다'를, 12살 이상일시 '입장하세요' 라는 문자열을 message에 넣어주는 if...else 문을 만들어주세요.

2. 이것을 삼항 연산자로도 만들어보세요.

### 참고사항

많은 내용들은 오픈소스 프로젝트인 [The Odin Project](https://www.theodinproject.com/dashboard)에서 가져온 내용들입니다. 

- [코드 안에서 결정을 내리기 - 조건문](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/%EC%A1%B0%EA%B1%B4%EB%AC%B8)

### 고칠점 / 연락하기

혹시나 글에서 고칠 점이나 추가되어야 할 점이 있다면, [Jasmine 깃허브](https://github.com/DaeguDude/jasmine/tree/week1-number)에서 issue를 생성해주시고, 개인적인 연락은 k3hppk@gmail.com 으로 주시면 됩니다.






