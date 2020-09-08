## 변수의 예시

대부분의 보통 프로그래밍에서는 많은 데이터를 다루게 되죠. 한 번 예를 들어보자면,

- 카카오톡 - 채팅 앱에서는 유저, 채팅 그리고 등등의 데이터를 저장합니다.

- 학교 웹 시스템 - 학교에서는 보통 학생들의 정보, 학점, 수업 정보 등등의 데이터를 저장해둡니다.

변수는 정보들을 저장하기 위해서 사용되는 저장공간이라고 생각해주세요.

### 변수

변수는 데이터를 저장하기 위한 이름이 붙여진 저장소입니다. 우리는 변수들을 이용해서 유저들의 정보, 학생들의 학점등등 많은 것을 저장할 수 있습니다.

자바스크립트에서 변수를 생성하기 위해서는 let이라는 키워드를 쓰면 됩니다.
let을 이용해서 myMessage라는 변수를 생성해보겠습니다.

```javascript
let myMessage;
```

이제 여기에 문자열을 저장해주어 볼게요. 

```javascript
let myMessage;

myMessage = 'Hello World!'; // 'Hello World'라는 문자열을 저장
```

이제 Hello World라는 문자열은, 컴퓨터의 메모리에 변수의 이름과 함께 저장되어 있습니다. 우리는 이 문자열을 변수의 이름을 통해 접근할 수 있습니다.

```javascript
let myMessage;
myMessage = 'Hello World!';

alert(myMessage);   // Hello World!
```

가끔씩은, 여러 개의 변수 선언을 한 줄에 해줄 수도 있죠.

```javascript
let user = 'DaeguBroski', age = 29, message = 'Heyya!';
```

아니면 이렇게 여러 줄에 해줄 수도 있습니다.

```javascript
let user = 'DaeguBroski',
  age = 29,
  message = 'Hello';
```

### var를 통한 변수 선언

가끔씩, 여러 분은 오래된 자바스크립트 코드에서 let 대신 var라는 키워드를 발견하실 수도 있습니다.

```javascript
var mySchool = 'Keimyung';
```

var 라는 키워드는 let을 통한 변수선언과 거의 똑같습니다. 똑같이 변수선언을 하죠.
하지만 아주 약간 다른데, 아직 우리가 상관해야 할 것은 아닙니다. 나중에 한 번 더 다루도록 하고 지금은 let을 통해 변수 선언을 하도록 할게요.

### 실생활 비유

우리는 "변수"의 개념을 우리가 실생활에 자주쓰는 박스를 통해서 한 번 이해해보도록 할게요. 변수를, 이름 스티커가 붙여져 있는 박스라고 한 번 생각해보세요.

예를 들어, "메세지"라는 이름을 가진 박스에는, 아마도 메세지와 관련된 내용들을 집어넣어주겠죠?

<!-- 변수사진 넣어주기 -->

우리는 이 박스에 어떠한 내용물도 넣어줄 수 있습니다. 넣었다 뺐다 할 수도 있죠.

```javascript
let message;
message = "Hey, Ya!";     
message = 'How are you?'; // How are you로 내용물이 바뀜

alert(message);
```

하지만 관련된 내용물을 넣어주는게 좋겠죠? 그래야 나중에 message 박스를 열어봤을 때 메세지와 관련된 없는 내용물이 없을테니까요.

우리는 또한, 한 박스에 있는 내용물을 다른 박스에 넣어줄 수도 있습니다.

```javascript
let greeting = 'Halo!';

let message;

message = greeting; // greeting에 있는 'Halo'를 message 박스에도 복사해서 넣어줌

alert(greeting);
alert(message);
```

**똑같은 변수를 두 번 선언하면 에러가 납니다**

변수는 항상 한 번만 선언되어야 합니다. 똑같은 변수를 여러 번 선언하려고 하면 에러가 납니다.

```javascript
let pants;
let pants; // SyntaxError: 'pants' has already been declared
```

예를 들어, 여러분이 만약 옷장을 정리하는데, 똑같은 이름의 박스를 여러개를 만들면 아마 헷갈리겠죠? 그럴 경우에는 차라리 더욱 더 이름을 세분화 시켜주는게 나을겁니다.

```javascript
let cargoPants; // 카고바지용 박스
let cottonPants; // 면바지용 박스
let jeans;       // 청바지용 박스
```

### 변수 이름 짓기

변수 이름을 지을 때는 몇가지의 룰이 있습니다.

1. 변수 이름은 오직 문자, 숫자, 아니면 $, _ 기호만 가질 수 있습니다.
2. 첫번째 문자는 숫자가 될 수 없습니다.

```javascript
let _myName = 'DaeguBoy';   // _가능
let *myName = 'DaeguBoy';   // * 불가능

let firstName = 'Chulsoo';  // 가능
let 1stName = 'Chulsoo';    // 첫번째 문자 숫자, 불가능
```

보통 변수가 여러 개의 단어를 가진 이름 일때는, 카멜표기법이라는 방식을 써줍니다. 낙타표기법으로도 불리는 이 방식은, 말 그대로 낙타의 등을 닮았다고 하여 지어진 이름입니다. 각 단어의 첫번째 문자를 대문자로 표시해줌으로써, 읽기 쉽게 해주는 것이죠.

```javascript
let myBestFriend = undefined;   // 첫번째 문자마다 대문자로 표시하여줍니다.
```

그리고, 대문자와 소문자가 다르면 그것은 다른 변수로 칩니다.
```javascript
let ship = '소문자 배';
let ShIp = '대문자 배';

alert(ship);  // '소문자 배';
alert(ShIp);  // '대문자 배'
```

**이미 지정된 이름들**

자바스크립트에서 [이미 지정된 이름들](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)도 있습니다. 이러한 이름들은 이미 지정되어 있기 때문에 변수 이름으로 쓸 수 없어요!

```javascript
let let = 5; // Uncaught SyntaxError: let is disallowed as a lexically bound name

let return = 3; // Uncaught SyntaxError: Unexpected token 'return'
```

변수 선언은 var, let, const 없이도 사실 가능은 합니다. 하지만 이것은 좋은 방법이 아니기 때문에, let이나 const를 붙여주셔서 변수 선언을 해주시는 게 맞습니다.

### 상수

상수는 변하지 않는 변수입니다. 상수변수를 선언하기 위해서는 `let` 대신 `const`를 써주어야 합니다. 이런 식으로 생성된 변수는 한 번 선언되면, 값을 바꿀 수가 없죠.

```javascript
const myAge = 29;
myAge = 20;       // 에러가 발생할 것입니다. 젊음으로 돌아갈 수 없는 가혹한 현실...
```

보통 상수는, 변수 값이 변하지 않을 때 많이 사용을 합니다. 예를 들어서 색깔의 값을 변수에 저장해둔다고 하죠. 16진수 색상에서, 보통 색깔들은 고유한 번호를 가지고 있습니다. 이 색깔의 번호는 변하지 않죠!

```javascript
const COLOR_BLACK = '#000000';
const COLOR_WHITE = '#ffffff';
const COLOR_BLUE = '#0000ff';
const COLOR_RED = '#ff0000';

let myColor = COLOR_BLACK;
alert(myColor);   // #000000
```

### 변수 이름 짓는 팁

변수를 만들때, 변수 이름을 잘 짓는 건 아주 중요합니다. 변수의 이름이 깔끔, 명확하고 그것이 가지고 있는 데이터를 잘 설명해 줄 수 있을 때, 코드를 관리하기가 쉬워집니다. 여러분이 어떤 프로젝트를 하고나서 몇 달 뒤에 다시 업데이트를 해야 하는데, 변수 이름이 깔끔하지 않으면 코드를 이해하는데 어려움이 있겠죠?

```javascript
let abcfe = 'DaeguBoy';
alert(`제 이름은 ${abcfe}입니다.`);

let myName = 'DaeguBoy';
alert(`제 이름은 ${myName}입니다.`);
```

위의 두 변수는 똑같은 내용을 가지고 있습니다. 하지만 첫번째 변수의 이름은 그냥 무작위로 지어졌기 때문에 우리에게는 아무런 의미가 없죠? 하지만 myName이라는 변수는, 나의 이름을 가지고 있다라는 의미를 우리에게 아주 잘 전달해줍니다. 

그래서, 변수 선언을 하기 전에 어떠한 이름으로 선언해줄지 잘 생각해보세요. 이렇게 하는 것이 나중에 여러분에게 많이 도움이 될 것입니다.

그리고 변수 이름을 지을 때 몇가지 따르면 좋은 팁이 있습니다.

- 사람이 읽을 수 있는 이름 `myName`, `shoppingCart`, `studentList`
- 약칭이나 단어는 최대한 피하세요. 여러분이 아주 확실하게 알고 있는 경우에만 사용하도록 하세요. `newButton`을 `nbtn`으로 쓰는 것처럼 말이죠. 
- 이름을 최대한 구체적이고 가지고 있는 데이터를 잘 설명하게 지어주세요. 예를 들어, `data`, `price` 이러한 것들은 아무 것도 얘기해주지 않습니다. 어떠한 데이터를 얘기하는지, 어떠한 값을 얘기하는지 구체적으로 명시해주는게 좋습니다. 예를 들어, 카카오의 주가를 변수에 담아 준다고 얘기하면, `kakaoStockPrice` 이런식으로, 구체적으로 이름을 지어주세요
- 변수 이름을 지을때 일관성을 가지세요. 예를 들어, 게임 프로그램을 만들때 유저를 `user`라고 칭해주기로 했다면, 현재 접속한 유저는 `currentUser`, 새로 가입한 유저는 `newUser` 등등 `user`를 계속 사용해주시면 됩니다. `newMan`, `newGirl` 이런 것들은 프로그램의 일관성이 없습니다.

변수 이름을 지어주는 일은 아주 어렵습니다. 하지만 계속 좋은 변수 이름을 지어나가는 것을 연습을 해나간다면, 점점 더 코드가 깔끔해질 것입니다.

**변수를 다시 쓸 것인가? 새로운 변수를 선언할 것인가?**

마지막으로 가끔씩, 변수를 새로 선언하는게 올바름에도 불구하고, 계속 똑같은 변수에다 값을 집어넣어 변수의 값을 변경해주는 경우가 있습니다. 

현실을 예로 든다면, 양말을 담는 박스가 있는데, 거기에다가 티셔츠, 속옷, 양말, 바지 다 집어넣음으로써 그 박스에 무엇이든지 잘 모르게 되는 것이죠. 이러한 경우에는 처음에는 괜찮아 보일지 모르더라도, 나중에는 디버깅 하는데 오히려 시간을 훨씬 더 많이 쓰게 됩니다.

변수를 여분으로 더 생성하는 것은 좋은 것입니다. 나쁜 것이 아닙니다.

### 참고사항

많은 내용들은 오픈소스 프로젝트인 [The Odin Project](https://www.theodinproject.com/dashboard)에서 가져온 내용들입니다. 

- [자바스크립트 변수](https://javascript.info/variables)

### 고칠점 / 연락하기

혹시나 글에서 고칠 점이나 추가되어야 할 점이 있다면, [Jasmine 깃허브](https://github.com/DaeguDude/jasmine/tree/week1-number)에서 issue를 생성해주시고, 개인적인 연락은 k3hppk@gmail.com 으로 주시면 됩니다.







