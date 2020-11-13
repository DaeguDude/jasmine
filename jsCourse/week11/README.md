# 객체 기본 & 생성자 - (11주차)

<!-- 
- 객체 101
- 짧은 리뷰ㅎ
  - object literal
  - Bracket Notation & Dot Notation
- Object as a Design Pattern
- Object Constructor
- Exercise

- Prototype
- 추천하는 상속방법

 -->

## 객체 소개

객체는 자바스크립트에 있어서 아주 중요한 부분입니다. 간단하고 쉬운 프로그래밍은 객체를 사용하지 않고 코드를 작성할 수 있겠지만 실제 규모가 있는 프로젝트에서는 객체를 무조건적으로 사용하게 될 것입니다. 자바스크립트에서 객체를 사용하는 것은 아주 쉽게 어려워질 수 있습니다. 그러므로, 일단 기본적인 것들을 먼저 배워보겠습니다.

- Javascript.info에서 [객체의 기본](https://ko.javascript.info/object)에 대해서 아주 자세하게 설명이 되어 있습니다. 이 것을 먼저 읽어주세요. 마지막의 연습문제를 꼭 풀어주세요.

위의 링크된 페이지를 다 읽으셨나요? 처음 보셨다면 이해하기는 쉽지 않았을 겁니다. 한 번만에 다 이해하는 것은 어려울 수 있으니, 이해가 안되었던 부분을 다시 돌아가 이해하려 하는 것도 도움이 될 수 있습니다.

그러면, 여러분이 읽으신 것을 한 번 다시 복습해보겠습니다. 객체를 생성하는 법에는 여러 가지 방법이 있는데, 최선의 방법은 **객체 리터럴** 이라는 방식을 사용하는 것입니다.

```javascript
const Student = {
  name: "길상",
  age: 18,
  "길상의 개인정보": function() {
    console.log(`이름: "${this.name}" 나이:${this.age}살`);
  }
}
```

객체의 정보(프로퍼티)에 접근하는 방법은 점 표기법과 대괄호 표기법 2가지가 있습니다.

```javascript
// 점 표기법(dot notation)
Student.name // 길상

// 대괄호 표기법(bracket notation)
Student["길상의 개인정보"] // [Function]
```

어떤 방법을 쓰는지는 상황에 따라서 다릅니다. 보통 점 표기법을 선호하지만, 특정 상황에서는 점 표기법을 사용할 수가 없읍니다. 예를 들어서, `Stuent."길상의 개인정보"`는 작동하지 않을 것입니다. 왜냐하면 프로퍼티가 공백이 있는 문자열이기 때문입니다. 또한 여러분은 변수를 점 표기법에 사용할 수 없습니다.

```javascript
const variable = "name";

Student.variable // undefiend
Student[variable] // 이것은 Student["name"]과 똑같습니다. "길상"을 반환할 것입니다.
```

## Learning Outcomes

이 포스트를 읽고 난 뒤, 여러분은 아래의 질문들에 답하실 수 있어야 합니다.

- Write an object constructor and instantiate the object.
- Describe what a prototype is and how it can be used.
- Explain prototypal inheritance.
- Understand the basic do’s and don’t’s of prototypical inheritance.
- Explain what Object.create does.

## 디자인 패턴으로써의 객체

여러분의 코드를 깔끔하게 정리하는 방법 중 가장 간단한 방법은 코듣를 객체로 묶는 방법입니다. 아래의 예시를 한 번 볼게요.

```javascript
// 예시 1
const studentOneName = "철수";
const studentOneAge = 29;
const studentTwoName = "영희";
const studentTwoAge = 22;

// 예시 2
const studentOne = {
  name: "철수",
  age: 29
}

const studentTwo = {
  name: "영희",
  age: 22
}
```

코드를 보면, 예시1은 딱히 나쁘지 않아 보입니다. 사실 예시2 보다 더 적은 줄을 사용하고요. 하지만, 객체를 이용하면 아주 많은 이점들이 있습니다. 

```javascript
function printAge(student) {
  console.log(student.age);
}
```

만약에 여러분이 객체를 사용하지 않았다면, 위의 예시는 사용을 할 수 없겠죠. 대신에, 여러분이 각 학생의 이름을 출력하고 싶다면 변수 이름을 기억하고, 그 변수를 출력해주어야겠죠.

```javascript
console.log(playerOneName);
console.log(playerTwoName);
```

그런데, 사실 이것도 크게 나쁘지는 않습니다... 그런데 만약에 여러분이 어떤 학생의 이름을 출력할지 모른다면요?

```javascript
function checkAttendance(student) {
  console.log(`${student.name} 학생, 출석했나요?`);
}
```

또, 우리가 2명의 학생이 아니라 몇 십만명이 되는 전국의 모든 학생을 관리해야 하는 코드를 짜야된다면요? 그럴 땐, 객체를 사용해서 정보를 관리하는게 최선의 방법일 것입니다. 그런데, 그러한 상황에 일일이 직접 다 치는 건 말이 안 될 겁니다. 그러면 어떻게 해야 할까요?

## 객체 생성자

만약에 여러분이 특정한 타입의 객체를 많이 만들어야 한다면, 객체 생성자를 사용해서 만드는 게 아주 좋은 방법입니다.

```javascript
function Student(name, age) {
  this.name = name;
  this.age = age;
}
```

그리고 `new` 라는 키워드와 함께 사용할 수 있습니다.

```javascript
const student = new Student('철수', 29);
console.log(student.name);
```

여러분이 객체 리터럴에 함수를 추가한 것처럼, 객체에도 함수를 추가할 수 있습니다.

```javascript
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(name);
  }
}

const student1 = new Student('철수', 29);
const student2 = new Student('영희', 22);
student1.sayName(); // 철수
student2.sayName(); // 영희
```

## 연습문제

"Book" 객체를 만드는 생성자를 작성해보세요. 여러분의 책 객체는, `제목(title)`, `작가(author)`, `페이지수(pages)`, 그리고 여러분이 책을 읽었는지 안 읽었는지를 얘기해주는 `읽음(read)` 정보를 가지고 있어야 할 것입니다.

그리고 생성자에 책의 정보를 말해줄 수 있는 함수도 넣어주세요.

```javascript
harryPotter.sayInfo(); // 'Half-Blood Prince by J.K. Rowling, 607 pages, not read yet'
```

팁: 함수에서 `console.log`를 쓰는 것보다 `return`을 쓰는 것이 항상 좋은 선택입니다. 그러니 위의 상황에서는 이렇게 사용하시면 되겠죠.

`console.log(harryPotter.info());`