# 팩토리 함수(Factory Function)

## 생성자(Constructor)의 문제는 무엇일까?

객체 생성자를 쓰는 법은 여러분의 코드를 깔끔하게 하는 많은 방법 중 하나입니다. 실제 코드에서도 많이 사용이 되고, 자바스크립트 언어의 기본적인 뼈대이기도 하죠.

그러나....

생성자를 쓰는 것에 대해서 반대하는 많은 사람들이 있습니다. 그 중 하나의 이유는 여러분이 조심하지 않으면 여러분의 코드에 버그가 생길 수도 있다는 것입니다.

이유는 생성자는 보통 함수처럼 생겼다는 것입니다. 그래서 여러분이 만약 원래 쓰는 함수처럼 생성자를 `new` 없이 쓴다면, 여러분이 생각한대로 동작을 하지 않을테고 버그가 쉽게 생기겠죠.

```javascript
function Student(name) {
    this.name = name;
    this.sayName = function() {
        console.log(`제 이름은 ${this.name}입니다.`);
    }
}

const newStudent = Student('Joon');

console.log(newStudent); // undefined
```

위의 예시에서는, `Student`라는 생성자를 이용하여, 학생 객체를 만들려고 했지만, `new` 라는 키워드를 까먹었기 때문에 객체가 제대로 생성되지 않았죠. 왜냐하면 `Student` 생성자는 일반 함수와 똑같이 생겼기 때문에 이렇게 `new`를 빠트리는 실수를 할 수 있는 겁니다.

그러나 제가 얘기하고자 하는 것은 생성자가 나쁘다는 게 아니라, 객체를 만드는 데에는 생성자 말고도 다른 방법이 있다는 거에요!

## 팩토리 함수 소개

팩토리 함수 패턴은 생성자와 비슷한데 `new`를 안 쓰고 그냥 객체를 `return` 함으로써 객체를 생성한다는 것입니다. 한 번 예시를 볼게요.

```javascript
const StudentFactory = (name, age) => {
    const sayHello = () => console.log('안녕하세요!');
    return { name, age, sayHello };
};

const myStudent = studentFactory('철진', 28);

console.log(myStudent.name); // '철진'

chuljin.sayHello(); // '안녕하세요!'
```

위의 예시는, 아래의 예시와 똑같습니다.

```javascript
const Student = function(name, age) {
    this.sayHello = () => console.log('안녕하세요!');
    this.name = name;
    this.age = age;
}

const chuljin = new Student('철진', 28);
```

**객체 줄임법(Object Shorthand)**

혹시 위의 예시에서 `{ name, age, sayHello }`를 보고 의아해 하신 분이 있나요? 왜냐하면 객체의 프로퍼티는 보통 '키-값' 으로 이루어진 쌍이기 때문에 당연히 의아해 할 수 있습니다.

위의 예시는 객체 줄임법으로, ES6와 함께 새롭게 추가된 기능입니다.
쉽게 얘기하자면, 여러분이 만드는 객체의 프로퍼티 이름이, 여러분이 가리키는 변수 이름과 같다면 한 번만 써주면 된다는 겁니다.

예를 들어서 위의 예시에서, 이렇게 반환한 객체는,

```javascript
const StudentFactory = (name, age) => {
    const sayHello = () => console.log('안녕하세요!');
    return { name, age, sayHello };
};
```

아래의 예시와 똑같다는 것입니다.

```javascript
const StudentFactory = (name, age) => {
    const sayHello = () => console.log('안녕하세요!');
    return { name: name, age: age, sayHello: sayHello };
};
```

첫번째 예시가 훨씬 더 깔끔하지 않나요?

우리는 객체 줄임법을 가지고 조금 더 재밌는 것도 할 수 있습니다.

```javascript
const name = 'Chuljin';
const age = '27';
const phoneNumber = '01012345678';
const favoriteFood = 'rice';
```

위의 변수들을 다 출력을 해야한다면 어떻게 출력하실 건가요?

```javascript
console.log(`name: ${name}, age: ${age}, phoneNumber: ${phoneNumber}, favoriteFood: ${favoriteFood}`); 
// name: Chuljin, age: 27, phoneNumber: 01012345678, favoriteFood: rice
```

위의 방식대로 할 수도 있겠죠. 하지만 객체 줄임법을 사용해서 아주 더 깔끔하게 코드를 짤 수도 있습니다. 

```javascript
console.log({name, age, phoneNumber, favoriteFood});
// {name: "Chuljin", age: "27", phoneNumber: "01012345678", favoriteFood: "rice"}
```

## 연습문제

객체를 반환하는 팩토리 함수를 작성해보세요.

## 비공개 변수와 함수들

앞에서 배운 스코프와 클로져에 대해 다 기억이 나시는가요? 만약에 잘 이해가 안되신다면 더 읽기 전에 [스코프](https://github.com/DaeguDude/jasmine/blob/master/jsCourse/week12/scope.md)와 [클로져](https://github.com/DaeguDude/jasmine/blob/master/jsCourse/week12/closure.md)의 개념을 한 번 더 보시는 것을 추천드립니다. 비공개 변수와 함수를 이해하기 위해서는 스코프와 클로져에 대한 개념이 있어야 하기 때문이죠.

비공개 변수와 함수에 대해서 얘기하기 위해, 아래의 예시를 먼저 볼게요.

```javascript
const TeacherFactory = (name) => {
    const capitalizeName = () => name.toUpperCase();
    const printName = () => console.log(`제 이름은 ${capitalizeName()} 입니다.`);
    
    return { printName };
}

const hansol = TeacherFactory('Hansol');

capitalizeName(); // 에러!
printName(); // 에러!
hansol.capitalizeName(); // 에러!;
hansol.printName(); // '제 이름은 HANSOL 입니다.'
```

우리가 배운 스코프의 개념에 따르면 함수는 자신만의 스코프를 생성합니다. 그러므로 `TeacherFactory`는 자신만의 스코프를 가지고 있고 외부에서는 접근이 불가능하죠. 그래서 함수 안에 있는 `capitalizeName`, `printName` 등을 접근하려고 하면 에러가 발생합니다.

`TeacherFactory` 스코프 안에 있는 함수들을 쓰는 방법은, 이 함수들을 `return`을 이용해 반환해줌으로써 사용이 가능하게 하는 방법이 있습니다. 위의 예시에서는 `printName` 만을 반환해 사용이 가능하게 해주었죠. 

<!-- 다른 말은 없을까? 필요한 것들만 노출을 시키는 것은 논리를 깔끔하게 해주는가? -->
하지만 여기서 중요한 점은 우리는 `capitalizeName` 함수는 반환을 해주지 않았습니다. 하지만 `printName` 함수를 이용하여 성공적으로 `capitalizeName`을 사용할 수 있었죠. 이것이 클로져의 개념입니다. 이렇게 하면 좋은 점은 우리가 필요한 것들만 노출을 시켜 논리를 조금 더 깔끔하게 할 수 있겠죠. 

또 다른 예시를 한 번 볼게요.

```javascript
const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    }
}

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
```

위에서는, `counterCreator`가 `count` 라는 지역변수를 가지고 있습니다. 그리고 `count`에 접근 권한을 가지고 있는 화살표 함수를 반환해주죠. 

`counterCreator` 함수를 호출한다면, `counterCreator` 스코프에 접근 권한을 가지고 있는 화살표 함수가 반환이 될 것입니다. 우리는 `counterCreator`를 호출하여 `counter`라는 변수에 화살표 함수를 보관해주었습니다.

그리고 우리가 `counter`를 실행시킬 때마다, 반환된 화살표 함수가 실행되며 `counterCreator` 안에 있는 `count` 라는 지역변수의 값을 1씩 올려주게 되죠. `counter`를 통하지 않는다면 우리는 `count`에 접근할 방법이 없습니다.

이렇게 팩토리 함수에서 클로저는 우리에게 **비공개** 변수나 함수들을 만들게 해줍니다. 

비공개 함수는 객체의 안에서 동작하기 위해서 사용되기는 하지많은, 다른 곳에서는 사용이 되지 않는 함수들입니다. 다른 말로해서, 우리의 객체가 한 두 가지의 기능밖에 없더라도, 우리는 그것을 잘게잘게 나누어 코드를 조금 더 깔끔하게 짤 수 있다는 것이죠.

아래의 예시를 한 번 볼게요.

<!-- 코드를 잘게 나누는 예시 -->
```javascript
const Facebook = () => {
    const isValidUserId = () => {
        // ID 체크
    }

    const isValidPassword = () => {
        // 비밀번호 체크
    }

    const getAds = () => {
        // 광고 로딩
    }

    const getFeeds = () => {
        // 새로운 피드 로딩
    }

    const getUserMedia = () => {
        getAds();
        getFeeds();
    }

    const displayError = () => {
        // 에러 보여주기
    }

    const runFacebook = () => {
        if (isValidUserId() && isValidPassWord()) {
            getUserMedia();
        } else {
            displayError();
        }
    }

    return { runFaceBook };
}
```

`Facebook` 이라는 것이 있고 우리가 이 것을 통해 페이스북을 실행할 수 있다고 해볼게요. 페이스북을 실행하기 위해서는 여러가지 절차를 거쳐야 할 것입니다. 예를 들어, 아이디와 비밀번호를 체크하고, 그것이 맞다면 광고와 피드를 로딩해야겠죠. 또한 아이디와 비밀번호가 틀렸다면 에러를 띄워야겠죠. 

하지만, 이러한 절차는 노출이 될 필요 없이, `runFacebook` 이라는 하나의 함수 안에 들어갈 수 있습니다. 그리고 다른 함수들은 `runFacebook`을 동작하게 하기 위한 비공개 함수들이 되는 것이죠. 만약에 페이스북을 켜는 함수인 `runFacebook` 함수가, 여러개의 함수로 나누어지지 않았고 하나의 함수로 되어있었다면 코드가 아주 지저분하겠죠?

## 팩토리 함수로 돌아가서

이제 우리는 이론을 대충 알았으니 다시 한 번 팩토리 함수를 봅시다. 팩토리 함수는 객체를 반환하는 자바스크립트의 일반 함수입니다. 팩토리 함수를 쓰는 것은 여러분의 코드를 정리하는데 아주 좋은 방법입니다. 예를 들어서, 여러분이 게임을 만들고 있다고 생각해볼게요. 그러면 우리는 이 플레이어가 할 수 있는 모든 것을 집어넣어주어야 할 것입니다.

```javascript
const Player = (name, level) => {
    let health = level * 2;

    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        console.log(`${name}님, 사망하셨습니다.`);
    };

    const damage = x => {
        health = health - x;
        if (health <= 0) {
            die();
        }
    };

    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()}님이 ${name}님에게 데미지를 입혔습니다.`);
        }

        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name}님이 ${enemy.getName()}님에게 데미지를 입혔습니다.`);
        }
    };

    return { attack, damage, getLevel, getName };
};

const chuljin = Player('chuljin', 10);
const hansol = Player('hansol', 5);
```

위의 예시를 보고 어떤 일이 일어나고 있는지 한 번 살펴보세요. 여러 개의 함수가 있지만 우리는 모두다 노출 시키지는 않았습니다. 필요한 함수들만 노출을 시켰죠. 

만약에 `chuljin.die()`를 실행하면 어떻게 될까요? 아니면 `chuljin.health = -1000`을 한다면요? 아마 다 오류가 뜰 것입니다. 우리가 `chuljin` 이라는 플레이어를 죽이기 위해서는 계속해서 `damage`라는 함수를 쓸 수 밖에 없죠. 이런 식으로 코드를 짠다면, 코드를 관리하기가 더욱 더 쉽습니다.

왜냐하면 여러분은, 계속 데미지를 입히면 결국에 `chuljin` 이라는 플레이어가 사망할 것이라는 것을 알기 때문입니다. 어떻게 죽는지 등등은 여러분이 생각을 하지 않아도 되죠. 논리가 간단해지는 것입니다.


**팩토리 함수와 상속**

우리는 생성자에서, 프로토타입과 상속의 개념에 대해서 자세히 살펴보았는데요. 팩토리 함수를 통해서도 아주 쉽게 상속을 할 수 있습니다.

```javascript
const Teacher = (name) => {
    const sayName = () => console.log(`저는 ${name} 입니다.`);

    return { sayName };
}

const GoodTeacher = (name) => {
    const { sayName } = Teacher(name);
    const encourageStudent = () => console.log('너희들은 잘 할 수 있다 믿어!');
    return { sayName, encourageStudent };
}

const hansol = GoodTeacher('hansol');
```

이러한 패턴은 아주 좋습니다. 왜냐하면 여러분은 여러분이 상속하고 싶은 함수만 상속받아 새로운 객체에서 사용을 할 수 있기 때문이죠. 만약에 모든 것을 다 넣고 싶으면, `Object.assign`이라는 것을 쓰셔도 됩니다.

```javascript
const GoodTeacher = (name) => {
    const prototype = Teacher(name);
    const encourageStudent = () => console.log('너희들은 잘 할 수 있다 믿어!');
    const adviceStudent = () => console.log('열심히 하면 누구나 잘 할 수 있어');
    
    return Object.assign({}, prototype, {encourageStudent});
}
```

## 연습문제

팩토리 함수 패턴을 이용하여 상속을 하여보세요.

