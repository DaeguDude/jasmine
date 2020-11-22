# 프로토타입(Prototype)

프로토타입이란 자바스크립트 개발자가 이해해야할 아주 중요한 개념입니다. 이번 시간에는 프로토타입에 대해서 최대한 쉽게 자세히 한 번 알아보겠습니다. 

프로토타입을 이해하기 위해서는 여러분은 자바스크립트의 객체에 대해서 잘 이해하고 계셔야 합니다. 만약에 객체를 잘 이해하지 못했다면, [객체의 기본](https://ko.javascript.info/object)을 다시 한 번 읽어주세요.

자바스크립트 프로토타입에는 2가지 관련된 개념이 있습니다.

1. **프로토타입 프로퍼티(Prototype Property)**: 모든 자바스크립트 함수는 프로토타입 프로퍼티를 가지고 있습니다. 그리고 이 프로토타입 프로퍼티에 여러분은 메쏘드나 프로퍼티를 추가해 상속을 구현할 수 있습니다. 프로토타입 프로퍼티는 보통 상속에 사용됩니다. 함수의 프로토타입 프로퍼티에 함수나 프로퍼티를 붙여 함수의 인스턴스(instance)에서 사용할 수 있게 하여줍니다.

밑의 예시를 한 번 볼게요.

```javascript
function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}

// 우리는 `print`라는 함수를 `PrintStuff` 프로토타입 프로퍼티에 추가시켜서 함수의
// 인스턴스들이 이것을 사용할 수 있게 해줄겁니다.
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}

// 'PrintStuff' 생성자를 사용하여 새로운 객체를 만듭니다. 이렇게 하면 만들어진 객체가
// 'PrintStuff'의 프로퍼티와 메쏘드를 상속합니다.
var newObj = new PrintStuff ("난 새로운 객체고 print함수를 쓸 수 있어");

// 'newObj'가 모든 `PrintStuff` 함수로부터 'print' 메쏘드를 포함한 프로퍼티와 모든 메쏘드를 
// 상속합니다. 여러분은 이제 newObj 객체에서 'print' 함수를 쓰실 수 있습니다.
newObj.print(); // 난 새로운 객체고 print함수를 쓸 수 있어
```

2. **프로토타입 어트리뷰트(Prototype Attribute)**: 프로토타입의 두번째 개념으로는 프로토타입 어트리뷰트가 있습니다. 프로토타입 어트리뷰트는 객체의 '부모'를 얘기하여 줍니다. 간단히 얘기하여서, 객체의 프로토타입 어트리뷰트는 객체의 '부모'를 가르킵니다. 여기서 부모란 객체가 상속을 받은 곳을 의미하죠. 프로토타입 어트리뷰트는 줄여서 프로토타입이라고도 얘기하는데 여러분이 새로운 객체를 생성하면 자동으로 지정됩니다. 더 자세하게 설명하자면, 모든 객체는 프로퍼티를 다른 객체로부터 상속을 받습니다. 그리고 이 '다른 객체'가 객체의 프로토타입 어트리뷰트, 즉 부모입니다. 위의 코드 예시에서는, `newObj`의 프로토타입 어트리뷰트는 `PrintStuff.prototype` 입니다.

**생성자(Constructor)**

더 진행하기 전에, 생성자(constructor)에 대해서 한 번 얘기해보겠습니다. 생성자는 새로운 객체를 만들 때 쓰이는 함수이고, 여러분은 생성자를 쓸 때 `new` 라는 키워드를 쓰셔야 합니다.

예를 들어,

```javascript
function Student() {

}

// 우리는 'Student' 생성자를 이용해 'myStudent' 객체를 생성하였습니다.
const myStudent = new Student();
```

게다가, 다른 객체로부터 상속을 받는 모든 객체들은 `constructor` 라는 프로퍼티를 상속받습니다. 그리고 이 `constructor` 프로퍼티는 객체의 생성자를 가르킵니다.

```javascript
function Student() {

}
const myStudent = new Student();

// 'constructor' 프로퍼티가 생성자 'Student'를 가르킵니다.
myStudent.constructor; // Student() {}
```

**프로토타입 어트리뷰트로 돌아와서..**

생성자 얘기는 잠깐 접어두고 다시 프로토타입 어트리뷰트로 돌아와보죠. `new Object()`나 리터럴 객체(`{}`)로 만들어진 모든 객체들은 `Object.prototype`으로 부터 상속을 받습니다. 그래서, `Object.prototype`은 이렇게 만들어진 모든 객체들의 프로토타입 어트리뷰트(부모)입니다. 참고로 `Object.prototype`은 그 어떤 것으로부터도 상속을 받지 않습니다.

```javascript
// 'student' 객체는 'Object'로부터 상속을 받습니다. 그래서 'student'의 프로토타입
// 어트리뷰트(부모)는 'Object.prototype'입니다.
const student = new Object();

// 'teacher' 객체도 객체 리터럴('{}')로 만들어졌기 때문에 Object로부터 상속을 받습니다 
// 그리하여 'teacher'의 프로토타입 어트리뷰트(부모)도 'Object.prototype' 입니다.
const teacher = { name: "Chulsoo" }
```

**생성자 함수로 생성된 객체들의 프로토타입 어트리뷰트**

<!-- 재확인 -->
`Object` 생성자 말고 다른 생성자 함수들로 생성된 객체들의 프로토타입 어트리뷰트(부모)는 생성자 함수입니다.

예를 들어서,

```javascript
function Student() {

}

const myStudent = new Student();
// 'myStudent' 객체는  'Student'라는 생성자로 인해 생성되었기 때문에,
// 'myStudent'의 프로토타입은 'Student.prototype'입니다.
```

새로운 배열을 만들 때 쓰이는 `Array()` 생성자도 똑같습니다. `Array()` 생성자로 만들어지는 모든 객체들은 `Array.prototype`의 프로퍼티와 메쏘드를 상속받을 것입니다.

```javascript
const myArray = new Array();
// 'myArray' 배열(객체)의 프로토타입 어트리뷰트(부모)는 'Array.prototype'입니다.
```

정리하자면, 객체의 프로토타입 어트리뷰트가 지정되는 데에는 2가지 종류가 있습니다.

1. 만약에 객체가 리터럴 객체(`{ }`)로 만들어진다면, 만들어진 객체는 `Object.prototype`을 프로토타입으로 가질 것입니다(프로토타입 어트리뷰트).

2. 만약에 객체가 생성자 함수로 만들어진다면, 만들어진 객체는 `생성자함수.prototype`을 프로토타입으로 가질 것입니다. 예를 들자면, 밑의 예시와 같겠죠.

```javascript
// `myArray`의 프로토타입 객체 -> `Array.prototype`
const myArray = new Array();

// `myStudnet`의 프로토타입 객체 -> `Student.prototype`
const myStudnet = new Student();

// `myTeacher`의 프로토타입 객체 -> `Teacher.prototype`
const myTeacher = new Teacher();

// `myAccount`의 프로토타입 객체 -> `Account.prototype`
const myAccount = new Account();

// `myObject`의 프로토타입 객체 -> `Object.prototype`
const myObject = new Object();
```

**노트**: ECMAScript5 부터 `Object.create()` 라는 메쏘드를 사용하여 새로운 객체를 생성할 수도 있습니다. 다른 글에서 이것을 한 번 다루겠습니다.

## 프로토타입은 왜 중요하고 언제 사용될까?

앞에서 이야기 하였듯이, 자바스크립트에서 프로토타입이 사용되는 법에는 2가지가 있습니다.

1. **프로토타입 프로퍼티: 프로토타입 기반 상속**

자바스크립트는 원래 클래스를 기반으로 한 상속이 없었습니다. 그래서 자바스크립트 안에서의 모든 상속은 프로토타입 프로퍼티를 통해서 이루어졌습니다. 자바스크립트는 프로토타입 기반의 상속을 가지고 있습니다. 상속이란 객체가 다른 객체로부터 메쏘드와 프로퍼티를 받는 것을 얘기합니다. 자바스크립트에서는, 여러분은 프로토타입 프로퍼티를 통해 상속을 합니다. 

밑의 예시를 한 번 볼게요.

```javascript
function Plant() {
    this.country = "미국";
    this.isOrganic = true;
}

// 'showNameAndColor' 메쏘드를 'Plant'의 프로토타입 프로퍼티에 추가해줍니다.
Plant.prototype.showNameAndColor =  function () {
    console.log(`저는 ${this.name}이고, 제 색깔은 ${this.color}입니다.`)
}

// 'amIOrganice' 메쏘드를 'Plant'의 프로토타입 프로퍼티에 추가해줍니다.
Plant.prototype.amIOrganic = function () {
if (this.isOrganic)
    console.log("전 유기농이에요!");
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// 'Fruit.prototype'의 프로토타입(부모)을 'Plant' 생성자로 지정합니다. 
// 그리하여 'Plant'의 프로토타입 프로퍼티와 메쏘드들을 상속합니다. 
Fruit.prototype = new Plant ();

// 'aBanana' 라는 객체를 'Fruit' 생성자로 만들어줍니다.
var aBanana = new Fruit ("바나나", "노란색");

// 'aBanana'가 객체 프로토타입의 'name'을 이용합니다.
aBanana.name; // Banana

// 'aBanana' 객체는 'Fruit'과 'Plant' 둘 다로부로부터 메쏘드와 프로퍼티들을 상속받습니다.
aBanana.showNameAndColor(); // 전 유기농이에요!
```

<!-- 상속에 대한 설명 더 넣기! -->


2. **프로토타입 어트리뷰트: 객체의 프로퍼티에 접근하기**

프로토타입은 객체의 프로퍼티와 메쏘드에 접근할 때도 사용됩니다. 아무 객체의 프로토타입 어트리뷰트(프로토타입 객체 or 프로토타입)는 상속된 프로퍼티가 선언된 부모 객체입니다. 예를 쉽게 들면, 여러분의 이름을 생각해볼 수 있습니다. 여러분의 성은 보통 여러분의 아버지로부터 받습니다. 그렇게 여러분의 아버지는 여러분의 '프로토타입'이 될 수 있죠. 만약에 우리가 성이 어디서 왔는지 알아보려하면, 먼저 여러분을 체크하고, 만약에 찾을 수 없었다면, 여러분의 프로토타입인 여러분의 아버지를 체크할 것 입니다. 만약에 여러분의 아버지에서도 찾을 수 없었다면, 할아버지, 증조 할아버지 이런 식으로 계속 올라갑니다.

비슷하게도, 자바스크립트에서 여러분이 객체의 프로퍼티에 접근을 할 때, 보통 여러분이 지정해준 객체에서 부터 검색이 시작됩니다. 만약에 그 곳에서 찾지 못하였다면, 객체의 프로토타입에서 프로퍼티를 찾으려 할 것입니다. 만약에 객체의 프로토타입에서도 찾지 못하였다면, 그 객체의 프로토타입의 프로토타입에서 찾을 것이고, 이런 식으로 똑같이 검색이 계속 될 것입니다. 더 이상의 프로토타입이 없을 때 까지요. 이것이 **프로토타입 체인(Prototype Chain)**의 기본입니다. 자바스크립트는 이 프로토타입 체인을 이용하여 객체의 프로퍼티와 메쏘드를 찾습니다. 만약에 찾을 수 없으면 `undefined`가 반환이 됩니다.

이 프로토타입 체인 개념은 프로토타입 상속과 똑같은 개념입니다. 대신, 우리는 자바스크립트가 어떻게 객체의 프로퍼티와 메쏘드에 접근하는 지에 대해 집중을 하고 있을 뿐이죠.

밑의 예시를 통하여 객체의 프로토타입에 대해서 한 번 알아보겠습니다.

```javascript
const myFriends = {name: "Chulsoo"};

// myFriends(O)
myFriends.name; // 'Chulsoo'

// myFriends(X) -> Object.prototype(O)
myFriends.toString();
```

`myFriends`라는 객체가 리터럴 객체로 만들어집니다. 그러면 `Object.prototype`의 프로퍼티와 메쏘드를 상속받겠죠. 

`myFriends.name` 에서, `name` 이라는 프로퍼티의 검색을 `myFriends`에서 시작할 것입니다. 그리고 그 곳에 바로 선언이 되어 있기 때문에, 검색을 멈출 것입니다.

하지만 두번째 예시의 `myFriends.toString()` 에서는, 검색을 `myFriends`에서 시작을 하지만, 그 곳에서 찾을 수 없기 때문에 프로토타입인 `Object.prototype` 으로 검색이 넘어갈 것입니다. 그리고 그 곳에서 `toString` 메쏘드를 찾았기 때문에 검색이 멈출 것입니다.

프로토타입 체인의 또 다른 예시입니다.

```javascript
function People() {
    this.superstar = "마이클 조던";
}

People.prototype.athlete = "코비 브라이언트";

const famousPerson = new People();

// 
famousPerson.superStar; // "마이클 조던"

// famousPerson(X) -> People.prototype(O)
famousPerson.athlete; // "코비 브라이언트"

// famousPerson(X) -> People.prototype(X) -> Object.prototype(O)
famousPerson.toString()

```

## 다른 방법으로 객체 만들기

만약에 여러분이 프로토타입의 개념을 이해하셨다면, 이번에 설명하려는 개념이 어렵지 않으실 겁니다.

```javascript
function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

Student.prototype.sayName = function() {
    console.log(this.name);
}

Student.prototype.sayGrade = function() {
    console.log(this.grade);
}
```

만약에 여러분이 객체를 만들기 위해 생성자를 쓰신다면, 함수를 그 객체의 프로토타입(부모)에 함수를 선언하는게 제일 좋은 방법입니다. 그렇게 함으로써, 생성된 하나의 함수가 `Student`로 생성된 모든 객체에서 쓰일 수 있기 때문이죠. 만약에 우리가 생성자에 직접 함수를 선언한다면, 새로운 `Student` 인스턴스가 생겨날때마다, 함수가 객체에 선언될 것입니다. 지금 같은 경우는 큰 문제가 되지 않겠지만, 만약에 몇 만 개 이상의 객체를 만들어야 되고, 그 모든 객체들이 함수를 가지고 있다면 효율성에 문제가 있어지겠죠.

**추천하는 프로토타입 기반의 상속**

지금까지 객체가 다른 객체의 프로토타입을 상속하는 여러가지 방법들을 보셨습니다. 현재 시점에서 객체의 프로토타입(부모)를 지정하는 추천하는 방법은 `[Object.create](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)`를 사용하는 것입니다. 

`Object.create`는 지정된 프로토타입을 프로토타입(부모)로 가진 객체를 반환합니다. 

예시를 보시면,

```javascript
function Student() {
    
}

Student.prototype.sayName = function() {
    console.log(this.name);
}

function EighthGrader(name) {
    this.name = name;
    this.grade = 6;
}

EighthGrader.prototype = Object.create(Student.prototype);

const chulsoo = new EighthGrader("철수");
chulsoo.sayName() // "철수"
chulsoo.grade // 6;
```

우리는 먼저, `EighthGrader`를 위한 `Student` 라는 생성자를 만든 후, `EighthGrader`의 프로토타입을 `Student.prototype`의 복사본으로 지정하였습니다.

참고로, 이렇게 하시면 안됩니다.

```javascript
EighthGrader.prototype = Student.prototype;
```

왜냐하면, `EighthGrader.prototype`이 말 그대로 `Student.prototype`이 될 것이기 때문입니다. 복사본이 아니라요. 이렇게 하면 나중에 문제가 될 수 있습니다.

예를 들면,

```javascript
function Student() {

}

Student.prototype.sayName = function() {
  console.log(this.name);
}

function EighthGrader(name) {
  this.name = name;
  this.grade = 6;
}

// 주의: 하지마세요!!
EighthGrader.prototype = Student.prototype;

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

// 안돼요~~!
NinthGrader.prototype = Student.prototype;

NinthGrader.prototype.sayName = function() {
    console.log("하하하하하");
}

const chulsoo = new EighthGrader("철수");
chulsoo.sayName();
```

우리가 `EighthGrader.prototype`과 `NinthGrader.prototype`을 `Student.prototype`과 똑같게 만들어 버렸기 때문에, `NinthGrader.prototype`의 `sayName` 메쏘드를 코치는 것이 `Student.prototype`의 `sayName` 메쏘드를 고치는 것과 똑같은 현상이 발생하기 됩니다. 그러면, 문제가 되겠죠?