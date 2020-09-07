## 문자열

이번에는 문자열에 대해서 한 번 배워보겠습니다. 보통 우리가 흔히 알고있는 문장, 단어들은 프로그래밍에서 문자열이라고 불립니다. 자바스크립트를 배울 때 기본적으로 알아야 하는 문자열 만드는 법, 문자열 따옴표, 문자열 결합 등을 다뤄보겠습니다.

### 시작하며

단어들은 인간에게 있어 무척 중요합니다. 단어는 우리가 소통하는 방식에 아주 큰 부분을 차지하고 있죠. 그리고 웹은 보통 텍스트 형식으로 이루어진 매개체이며, 우리는 이 매개체를 통해 서로 상호소통을 합니다. 이렇게 문자열이 큰 부분을 웹에서 차지하고 있는데, 이것을 자바스크립트를 통해 잘 다룰 줄 아는 것은 아주 중요합니다. 

우리는 환영메세지를 출력할 수도 있고, 비밀번호를 잘못 입력하였다면 에러 메세지를 띄울 수도 있고, 여러가지를 할 수 있습니다.

### 문자열 - 기초

**문자열 생성하기**

먼저 문자열을 생성하여 보겠습니다.
```javascript
let string = 'Hey, This is a string :)';
string;     // 'Hey, This is a string :)'
```

문자열을 생성하는 방법은, 숫자와 같습니다. 변수를 생성하고, 거기에 문자열을 넣어주면 됩니다. 하지만 숫자와 다른 점은, 여러분이 `'(따옴표)`를 써주어야 한다는 것이죠.

만약에 `'`를 써주지 않으면 아마 오류가 날 것입니다.

```javascript
let badString = I am a bad string;
let badString = I am a bad string';
let badString = 'I am a bad string;

// 3개 다 오류가 날 것입니다!
```

이것이 오류가 나는 이유는, 어떤 문자든 `'`가 둘러져 있지 않으면 변수의 이름, 속성의 이름, 아니면 이미 지정된 단어 등등으로 자바스크립트에서 생각하기 때문입니다. 

하지만, 이미 변수에 문자열을 집어넣어주고, 그 변수를 다른 변수에 넣어주면 작동을 합니다.
```javascript
let newString = string;
newString;      // 'Hey, This is a string :)'
```

**작은 따옴표(') vs 큰 따옴표(")**

자바스크립트에서는 문자열을 만들 때 작은 따옴표를 쓰든, 큰 따옴표를 쓰든 상관이 없습니다.

```javascript
let singleQuote = 'Single Quote Bro!';
let doubleQuote = "Double Quote Baam!";

singleQuote;    // "Single Quote Bro!"
doubleQuote;    // "Double Quote Baam!"
```

어떤 것을 쓰든 큰 차이가 없기 때문에, 여러분이 선호하는 방식을 써주시면 됩니다. 하지만 작은 따옴표와 큰 따옴표를 섞어서 쓴다면 오류가 날 것입니다.

```javascript
let badQuotes = 'What the heck?";
```

이렇게 해주면, 브라우저는 여러분이 문자열을 닫아주지 않았다고 생각할 것입니다. 그래서 변수 선언을 하려고 하면 오류가 나는 것입니다.

**이스케이프 문자**

가끔씩은, 우리가 문자열 안에 작은 따옴표나 큰 따옴표를 써야 하는 경우가 있습니다.

```javascript
let lyric = 'I've been through';
```

이것도 에러를 낼 것입니다. 왜냐하면, 위의 예시에서 자바스크립트는 문자열이 `'I'` 하나라고 생각을 하기 때문이죠. 뒤의 문자들은 문자열로 취급하지 않습니다.

위의 코드를 고치고 싶으면, 이스케이프 문자를 써주어야 합니다. 이스케이프 문자란, 어떠한 문자를 코드가 아닌 문자열의 일부로 만들어주는 문자입니다. 자바스크립트에서는 `백슬래쉬(\)`를 통해서, 이스케이프 문자를 만들 수 있습니다.

```javascript
let lyrics = 'I\'ve been through';  // "I've been through"
```

이 링크에서, [이스케이프 문자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)들 리스트를 확인해 보실 수 있습니다.

### 문자열 병합하기(Concatenating Strings)

병합이라는 용어는, "합친다" 라는 말은 프로그래밍에서 약간 더 고급지게 쓰는 표현입니다. 문자열을 합칠때 자바스크립트에서는 `+` 연산자를 통해서 문자열을 합칠 수 있습니다.

```javascript
let firstName = 'Mayer';
let lastName = 'John';
let fullName = lastName + ' ' +  firstName;

fullName;   // John Mayer
```

병합을 실제로는 이렇게 사용할 수도 있습니다.
```javascript
let name = prompt('What is your name?');
alert('Hello ' + name + ', nice to meet you!');
```

### 숫자와 문자

숫자 섹션에서도 다루었듯이, 숫자와 문자를 합치면 이상한 현상이 발생합니다.
```javascript
'Hey ' + 242;   // "Hey 242"
```

보통 우리가 생각하기에 'Hey' 라는 단어와 '242'라는 숫자를 합치는 것은 계산이 불가능 하지만, 우리의 똑똑한 브라우저가 242를 문자로 만들어 버려 `"Hey 242" 라고 그냥 병합해버리는 것이죠.

```javascript
let birthOfYear = '19' + '55';
birthOfYear;        // 1955
typeof birthOfYear; // string(문자열)
```

만약에, 여러분이 숫자를 문자로바꾸고 싶거나, 문자를 숫자로 바꾸고 싶을때 방법들이 있습니다. Number 객체는 만약에 값이 문자로 된 숫자라면, 그것을 숫자로 바꾸어 줄 수 있습니다.
```javascript
let myNumberString = '123';
let myNumber = Number(myNumberString);
typeof myNumber;    // number;
```

거꾸로, 모든 숫자는 toString() 이라는 메쏘드를 통해 숫자를 문자열로 바꾸어 줄 수도 있죠.
```javascript
let myNum = 123;
let myString = myNum.toString();
typeof myString;    // string
```

### 템플릿 리터럴(Template Literals)

문자열을 만드는 또 한가지 방법이 있는데, 그것은 템플릿 리터럴입니다. 이건 작은따옴표와 큰 따옴표보다 새로운 문법인데, 조금 더 유연합니다. 템플릿 리터럴을 사용하려면, 백틱(역따옴표`)을 사용하여 주시면 됩니다.

```javascript
let song = 'You look perfect tonight';
```

이것을 템플릿 리터럴로 바꾸려면, 백틱을 사용하여 주세요.

```javascript
let song = `You look perfect tonight`;
```

그러면 우리는 왜 템플릿 리터럴을 사용할까요? 한 번 예시를 보겠습니다.

```javascript
let gaekoScore = 7;
let highestScore = 10;
let message = '개코씨, 당신의 점수는 ' + highestScore + '점 만점에 ' + gaekoScore + '점 입니다!';

message;    // "개코씨, 당신의 점수는 10점 만점에 7점 입니다!"
```

message라는 변수를 만들기 위해서 보통의 방식인 작은따옴표나 큰 따옴표를 사용하면 표현이 엄청나게 복잡해지고 알아보기 쉽지가 않죠. 하지만 템플릿 리터럴을 사용하면 아주 간단하게 만들 수 있습니다.

```javascript
let gaekoScore = 7;
let highestScore = 10;
let message = `개코씨, 당신의 점수는 ${highestScore}점 만점에 ${gaekoScore}점 입니다.`;

message;    // "개코씨, 당신의 점수는 10점 만점에 7점 입니다!"
```

똑같은 결과값을 출력하지만, 템플릿 리터럴은 더욱 더 직관적이죠? 여러분이 문자열에 변수나, 표현식을 넣고 싶다면 단지 `${ }`를 둘러싸주시면 됩니다. 이것은 placeholder(플레이스홀더)라고 불리기도 합니다.

**계산도 가능**

```javascript
let kenLeeScore = 15;
let gaekoScore = 3;
let result = `이근 대위와 개코의 점수차이는 ${kenLeeScore - gaekoScore}점입니다.`;

result;     // "이근 대위와 개코의 점수차이는 12점입니다."
```

## 문자열 속성과 메쏘드

마지막으로 문자열의 속성과 메쏘드에 관해서 알아보겠습니다. 속성은 어떤 것에 대한 자세한 설명들 이라고 보시면 되겠고, 메쏘드는 유용한 기능들 이라고 생각하시면 편할 수도 있습니다. 한 번 살펴보면서 더욱 더 이해를 깊게 해보죠.

#### 문자열 길이
`length` 속성은 문자열의 길이를 반환합니다.

```javascript
let text = 'Ken Lee is a KING';
let textLength = text.length;

textLength; // 17
```

#### 문자열안에서 문자열 찾기
`indexOf()` 메쏘드를 통해, 문자열안에서 찾으려는 특정한 문자가 첫번째로 나타나는, 원소의 위치를 반환합니다.

```javascript
let string = '여러분, 저는 저를 찾을 수 있을까요?';
string.indexOf('저');  // 5
```

자바스크립트는 원소의 위치를 0에서 부터 셉니다. 그래서 첫번째 `저` 라는 문자의 위치를 반환하여 5라는 값을 받았습니다.

`lastIndexof` 메쏘드를 통해, 문자열안에서 찾으려는 특정한 문자가 마지막으로 나타나는 원소의 위치를 반환하기도 합니다.

```javascript
let string = '여러분, 저는 저를 찾을 수 있을까요?';
string.lastIndexOf('저');  // 8
```

#### 특정한 문자 추출하기

`slice()` 메쏘드를 통해, 문자열안에서 특정한 위치의 문자를 추출해낼 수도 있습니다.

`slice()` 메쏘드는 두 개의 매개변수를 가집니다. 첫번째는 시작 위치, 두번째는 끝나는 위치입니다. 하지만 끝나는 위치는 추출할 때 포함되지 않아요! 예를 들어서, 밑의 예시는 3번째 'n'부터 6번째 위치인 'e'까지 추출하지 않고, 5번째 위치인 'm'까지만 출력하여 'nam'을 가지게 되는 것이죠.

```javascript
let string = 'My name is say what!?';
let extractedString = string.slice(3, 6);

extractedString;    // 'nam'
```

만약에 두 번째 매개변수에 값을 넣어주지 않는다면, 시작점부터 문자열의 끝까지를 추출할 것입니다.

```javascript
let string = 'My name is say what!?';
let extractedString = string.slice(3);

extractedString;    // "name is say what!?"
```

#### substr()

`substr()` 메쏘드를 통하여, 시작점부터 특정한 길이만큼의 텍스트를 추출해 낼 수도 있습니다.

```javascript
let greeting = "Hey what's poppin?"
let extracted = greeting.substr(4, 6);

extracted;  // "what's"
```

만약에, 두번째 매개변수에 값을 넣어주지 않으면, slice와 같이 나머지를 다 추출할 것입니다.

```javascript
let greeting = "Hey what's poppin?"
let extracted = greeting.substr(4);

extracted;  // "what's poppin?"
```

#### 문자열 내용 바꿔주기

`replace()`를 이용해 문자열에 있는 문자의 내용을 바꿔줄 수도 있습니다. 하지만, 원래의 문자열의 내용을 바꾸어주는 것이 아니라, 내용이 바뀐 새로운 문자열을 반환합니다.

```javascript
let welcomeMessage = "Please come to Seoul University!"
let replacedMessage = welcomeMessage.replace('Seoul', 'Keimyung');

replacedMessage; // "Please come to Keimyung University!"
```

그리고 또한, 똑같은 단어가 여러개라면, 첫번째로 매치되는 단어만 바꾸어 줍니다.
```javascript
let welcomeMessage = "Please come to Seoul University and Seoul!"
let replacedMessage = welcomeMessage.replace('Seoul', 'Keimyung');

replacedMessage;    // "Please come to Keimyung University and Seoul!"
```

#### 대문자와 소문자로 바꿔주기

toUppercase()와 toLowerCase()를 이용해 대문자 소문자로 바꾸어 줄 수도 있습니다.

```javascript
let myName = 'kim homie';
let capitalizedName = myName.toUpperCase();

capitalizedName;    // "KIM HOMIE"
```

```javascript
let myName = 'KIm HomIE';
let lowerCasedName = myName.toLowerCase();

lowerCasedName;     // "kim homie"
```

#### concat()

`concat()` 메쏘드를 통해, 여러 개의 문자열을 합칠 수도 있습니다. '+' 연산자와 비슷한 역할을 해주죠.

```javascript
let text1 = "Hey,"
let text2 = "Welcome to the new world!"
let text3 = text1.concat(" ", text2);

text3;  // "Hey, Welcome to the new world!"
```

#### trim()

`trim()` 메쏘드를 통해, 앞쪽과 뒷쪽에 있는 여백을 지울 수도 있습니다.

```javascript
let textWithSpace = "        LIKE THIS!            ";
let textWithOutSpace = textWithSpace.trim();

textWithOutSpace;   // "LIKE THIS!"
```

#### 문자 추출하기

`chartAt()` 메쏘드를 통해, 특정한 원소위치에 있는 문자를 반환할 수도 있습니다.
```javascript
let myString = "Where am I?";
myString.charAt(1); // "h";
```

`chartCodeAt()` 메쏘드를 통해, 특정한 원소 위치에 있는 문자의 utf-16 code를 반환할 수도 있습니다. 쉽게 얘기하여, 모든 문자에 16진수 방식으로 값을 부여해 둔 것입니다.

```javascript
let string = 'abcde';

string.charCodeAt(0);   // 97
```

string변수에 첫번째로 위치한 a 문자는, 97이라는 숫자를 가지고 있네요.

#### 속성접근

ECMAScript 5(2009)에서는, 문자열에 속성방식으로 접근하는 새로운 방식을 소개했습니다. 

```javascript
let string = 'abcde';
string[0];  // a
string[1];  // b
string[4];  // e
```

