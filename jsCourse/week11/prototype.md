# 프로토타이프(Prototype)

프로토타입이란 자바스크립트 개발자가 이해해야할 아주 중요한 개념입니다. 이번 시간에는 프로토타입에 대해서 최대한 쉽게 자세히 한 번 알아보겠습니다. 

프로토타입을 이해하기 위해서는 여러분은 자바스크립트의 객체에 대해서 잘 이해하고 계셔야 합니다. 만약에 객체를 잘 이해하지 못했다면, [객체의 기본](https://ko.javascript.info/object)을 다시 한 번 읽어주세요.

자바스크립트 프로토타입에는 2가지 관련된 개념이 있습니다.

<!-- 글 재확인 -->
1. **프로토타입 프로퍼티(Prototype Property)**: 모든 자바스크립트 함수는 프로토타입 프로퍼티를 가지고 있습니다. 그리고 이 프로토타입 프로퍼티에 여러분은 메쏘드나 프로퍼티를 추가해 상속을 구현할 수 있습니다. 프로토타입 프로퍼티는 보통 상속에 사용됩니다. 함수의 프로토타입 프로퍼티에 함수나 프로퍼티를 붙여 함수의 인스턴스(instance)에서 사용할 수 있게 하여줍니다.

밑의 예시를 한 번 볼게요.

```javascript
function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}

// 우리는 `print`라는 함수를 `PrintStuff` 프로토타입 프로퍼티에 추가시켜서 함수의 인스턴스들이 이것을 사용할 수 있게 해줄겁니다.
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}

// 'PrintStuff' 생성자를 사용하여 새로운 객체를 만듭니다. 이렇게 하면 만들어진 객체가 'PrintStuff'의 프로퍼티와 메쏘드를 상속합니다.
var newObj = new PrintStuff ("난 새로운 객체고 print함수를 쓸 수 있어");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
// 'newObj'가 모든 `PrintStuff` 함수로부터 'print' 메쏘드를 포함한 프로퍼티와 모든 메쏘드를 상속합니다. 여러분은 이제 newObj 객체에서 'print' 함수를 쓰실 수 있습니다.
newObj.print(); // 난 새로운 객체고 print함수를 쓸 수 있어
```

2. **프로토타입 어트리뷰트(Prototype Attribute)**: 프로토타입의 두번째 개념으로는 프로토타입 어트리뷰트가 있습니다. 프로토타입 어트리뷰트는 객체의 '부모'를 얘기하여 줍니다. 간단히 얘기하여서, 객체의 프로토타입 어트리뷰트는 객체의 '부모'를 가르킵니다. 여기서 부모란 객체가 상속을 받은 곳을 의미하죠. 프로토타입 어트리뷰트는 보통 프로토타입 객체를 얘기하는데, 여러분이 새로운 객체를 생성하면 자동으로 지정됩니다. 더 자세하게 설명하자면, 모든 객체는 프로퍼티를 다른 객체로부터 상속을 받습니다. 그리고 이 '다른 객체'가 객체의 프로토타입 어트리뷰트, 즉 부모입니다. 위의 코드 예시에서는, `newObj`의 프로토타입 어트리뷰트는 `PrintStuff.prototype` 입니다.

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
// 'student' 객체는 'Object'로부터 상속을 받습니다. 그래서 'student'의 프로토타입 어트리뷰트(부모)는 'Object.prototype'입니다.
const student = new Object();

// 'teacher' 객체도 객체 리터럴('{}')로 만들어졌기 때문에 Object로부터 상속을 받습니다 그리하여 'teacher'의 프로토타입 어트리뷰트(부모)도 'Object.prototype' 입니다.
const teacher = { name: "Chulsoo" }
```

**생성자 함수로 생성된 객체들의 프로토타입 어트리뷰트**

<!-- 재확인 -->
`Object` 생성자 말고 다른 생성자 함수들로 생성된 객체들은, 프로토타입 어트리뷰트는 생성자 함수입니다.

예를 들어서,

```javascript
function Student() {

}

const myStudent = new Student();
// 'myStudent' 객체는  'Student'라는 생성자로 인해 생성되었기 때문에, 'myStudent'의 프로토타입은 'Student.prototype'입니다.
```

새로운 배열을 만들 때 쓰이는 `Array()` 생성자도 똑같습니다. `Array()` 생성자로 만들어지는 모든 객체들은 `Array.prototype`의 프로퍼티와 메쏘드를 상속받을 것입니다.

```javascript
const myArray = new Array();
// 'myArray' 배열(객체)의 프로토타입 어트리뷰트(부모)는 'Array.prototype'입니다.
```

정리하자면, 객체의 프로토타입 어트리뷰트(그냥 프로토타입이라고 얘기하기도 합니다)가 지정되는 것에는 보통 2가지 종류가 있습니다.

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