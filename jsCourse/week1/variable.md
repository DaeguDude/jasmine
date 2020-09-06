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