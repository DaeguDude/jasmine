# 팩토리 함수(Factory Function) & 모듈(Module)

## 생성자(Constructor)의 문제는 무엇일까?

객체 생성자를 쓰는 법은 여러분의 코드를 깔끔하게 하는 많은 방법 중 하나입니다. 실제 코드에서도 많이 사용이 되고, 자바스크립트 언어의 기본적인 뼈대이기도 하죠.

그러나....

생성자를 쓰는 것에 대해서 반대하는 많은 사람들이 있습니다. 그 중 하나의 이유는 여러분이 조심하지 않으면 여러분의 코드에 버그가 생길 수도 있다는 것입니다.

생성자에 가장 큰 문제중 하나는 생성자는 보통 함수처럼 생겼다는 것입니다. 그래서 여러분이 만약 원래 쓰는 함수처럼 `new` 없이 쓴다면, 여러분이 생각한대로 동작을 하지 않을테고 버그가 쉽게 생기겠죠.

생성자가 나쁘다는 게 아니라, 객체를 만드는 데에는 생성자 말고도 다른 방법이 있다는 것을 아는 것이 중요합니다. 

## 팩토리 함수 소개

팩토리 함수 패턴은 생성자와 비슷한데 `new`를 안 쓰고 그냥 객체를 `return` 함으로써 객체를 생성한다는 것입니다. 한 번 예시를 볼게요.

```javascript
const PersonFactory = (name, age) => {
    const sayHello = () => console.log('안녕하세요!');
    return { name, age, sayHello };
};

const chuljin = personFactory('철진', 28);

console.log(chuljin.name); // jeff

chuljin.sayHello(); // '안녕하세요!'
```

위의 예시는, 아래의 예시와 똑같습니다.

```javascript
const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
}

const chuljin = new Person('철진', 28);
```

**객체 줄임법**

혹시 위의 예시를 보고 조금 의아해 하신 분이 있을 수도 있는데요. ES6와 함께 객체를 줄여서 쓰는 방법이 나왔는데요. 

```javascript
return { name: name, age: age, sayHello: sayHello }
```

는

```javascript
return { name, age, sayHello }
```

와 같습니다. 간단하게 얘기해서 여러분이 만들고자 하는 객체의 프로퍼티가 여러분이 사용하고자 하는 변수의 이름과 같다면 줄여서 쓰면 된다는 것입니다.

이것을 안다면, 우리는 이런 것도 할 수 있겠죠.

```javascript
const name = 'Chuljin';
const age = '27';
const phoneNumber = '01012345678';
const food = 'rice';

// 이렇게 출력하면 출력은 되지만 무엇인가 깔끔하지 않죠?
console.log(name, age, phoneNumber, food); // Chuljin 27 01012345678 rice


// 만약에 이런 식으로 객체로 반환한다면, 훨씬 깔끔하게 볼 수 있습니다.
console.log({name, age, phoneNumber, food});
// {name: "Chuljin", age: "27", phoneNumber: "01012345678", food: "rice"}
```

## 비공개 변수와 함수들

여러분은 앞에서 스코프에 대해서 배우셨으니 한 번 이 예시를 같이 보시죠.

```javascript
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
}

const taco = FactoryFunction('taco');
```

스코프의 개념 때문에, 우리는 `FactoryFunction` 안에 있는 모든 함수에 접근을 할 수 없습니다. 그래서 `printString`, `capitalizeString`, 그리고 `taco.capitalizeString`이 에러를 만들죠.

이 함수를 쓰는 유일한 방법은 이 함수들은 `return`문을 이용해 반환해주는 것입니다. 그러면 우리는 `capitalizeString`에 접근권한이 없지만, `printString`은 접근권한이 있기 때문에, 우리는 함수를 쓸 수 있는 것이죠. 이것이 저번 포스트에서 얘기한 클로저입니다.

클로저의 개념은 함수가 자신이 선언된 스코프 밖에서 호출되어도 자신이 선언된 스코프를 기억하고 그 스코프안에 있는 식별자(함수, 변수)등에 접근을 할 수 있다는 것입니다. 여기서는 `printString`이 `FactoryFunction` 의 스코프에 접근을 할 수 있죠.

또 다른 예시입니다.

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

위에서는, `counterCreator`가 `count` 라는 지역변수를 가지고 있습니다. 그리고 `count`에 접근 권한을 가지고 있는 함수를 반환해주죠. 그리고 이 함수를 사용하기 위해서 우리는 `counter`라는 변수에 보관해주었습니다. 그래서 우리가 함수를 실행시킬때 마다, `counterCreator` 안에 있는 `count`가 계속 올라가는 것입니다.

팩토리 함수에서 클로저는 우리에게 **비공개** 변수나 함수들을 만들게 해줍니다. 비공개 함수는 사용할 수 있게 노출되어 있지는 않지만 공개된 함수를 통해서 우리는 비공개 함수에 접근을 해서 사용을 할 수 있죠. 다른 말로 해서, 우리의 객체가 하나, 두 개의 행동밖에 하지 않아도 우리는 함수를 잘게 나눔으로써 더욱 더 깔끔하고 읽기 쉬운 코드를 짤 수 있다는 것입니다. 위의 예시를 보면,`capitalizeString`은 비공개 함수이고, `printString`은 공개된 함수입니다.

이러한 비공개 함수의 개념은 아주 유용하고 가능한한 많이 사용되어야 합니다. 여러분의 프로그램이 여러가지 기능이 필요하다면, 이러한 기능들 중에 여러분의 프로그램에서 공개되서 쓰여야 하는 기능은 사실 몇 개 없을지 모릅니다. 그래서 이렇게 숨겨서 하는 것은 나중에 리팩토링 하기 쉽고 읽기 좋은 코드가 됩니다.

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

위의 예시를 보고 어떤 일이 일어나고 있는지 한 번 살펴보세요.

만약에 우리가 `chuljin.die()`를 하면 어떻게 될까요? 아니면 우리가 플레이어의 생명을 `chuljin.health = chuljin.health - 1000;`을 하는 것은요? 이것들은 우리가 공개적으로 노출시켜두지 않았기 때문에 에러를 낼 것입니다. 이것은 아주 좋은 것이죠. 이렇게 객체를 만드는 것은 우리가 객체를 어떻게 사용할 것인지에 대해서 생각을 하고 만든 것이기 때문에 아주 좋습니다. 이런 식으로 코드를 짜면 나중에 관리가 아주 쉬워질 것입니다.

**팩토리 함수와 상속**

우리는 생성자에서, 프로토타입과 상속의 개념에 대해서 자세히 살펴보았는데요. 팩토리 함수를 통해서도 아주 쉽게 상속을 할 수 있습니다.

```javascript
const Teacher = (name, age) => {
    const sayName = () => console.log(`저는 ${name} 입니다.`);
    const sayAge = () => console.log(`저는 ${age}살 입니다.`);

    return { sayName, sayAge };
}

const GoodTeacher = (name, age) => {
    const { sayName } = Teacher(name, age);
    const encourageStudent = () => console.log('너희들은 잘 할 수 있다 믿어!');
    return { sayName, encourageStudent };
}

const hansol = GoodTeacher('hansol', 28);
```

이러한 패턴은 아주 좋습니다. 왜냐하면 여러분은 여러분이 상속하고 싶은 함수만 상속받아 새로운 객체에서 사용을 할 수 있기 때문이죠. 만약에 모든 것을 다 넣고 싶으면, `Object.assign`이라는 것을 쓰셔도 됩니다.

