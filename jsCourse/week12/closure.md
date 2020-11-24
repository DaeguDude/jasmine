## 스코프 클로져(Scope Closure)

아마 스코프 포스트를 읽고 이해를 하셨다면, 지금 쯤은 아마도 스코프가 어떻게 동작하는지에 대해 잘 이해하고 계실 겁니다.

이제는 저희는 **클로져**에 대해서 한 번 알아볼 것입니다. 자바스크립트를 배우다 보면 클로져에 대해서는 들어보셨을 텐데, 아마도 그것이 정확히 무엇인지는 잘 몰랐을 겁니다. 

하지만 괜찮아요! 여러분이 스코프를 잘 이해하셨다면, 클로져를 이해하는 것은 어렵지 않을 일입니다. 만약에 렉시컬 스코프에 대해서 이해가 잘 안되신다면 다시 한 번 포스트를 읽으시는 것을 추천드리겠습니다.

## 핵심

클로저에 대한 아주 더럽고(?) 이해하기 어려운 정의를 먼저 한 번 적어보겠습니다.

> 클로저는 자신의 렉시컬 스코프 밖에서 실행되었지만, 자신의 렉시컬 스코프를 기억하고 접근할 수 있을 때를 의미한다.

예? 예? 예???????

네. 괜찮습니다 ㅎㅎ 코드를 보면서 조금 더 자세히 알아볼게요.

```javascript
function Celebrity() {
    const name = "Jaeseok";

    function sayName() {
        console.log(name);
    }

    sayName();
}

Celebrity(); // Jaeseok
```

우리가 스코프에서 배웠듯이 `sayName` 스코프는 `Celebrity`에 속한 `name` 변수에 대해서 접근을 할 수 있습니다. 왜냐하면 식별자를 찾는 과정이 안쪽에서 바깥쪽으로 진행되기 때문이죠.

그러면 `sayName`이 `Celebrity`에 있는 `name`에 접근 권한을 가지고 있으니, 이게 "클로져(closure)" 일까요?

음... 맞는 말일 수도 있지만 위의 정의에 따르면 이것은 클로져는 아닙니다. 아마 클로져의 일부라고는 할 수 있겠네요. 

그러면 클로져를 더욱 더 자세히 관찰해볼까요?

```javascript
function Celebrity() {
    const name = "Jaeseok";

    function sayName() {
        console.log(name);
    }

    return sayName;
}

const myCelebrity = Celebrity(); 
myCelebrity(); // Jaeseok
```

무슨 일이 일어난 걸까요? 여러분이 아시다시피, `sayName` 이라는 함수는 `Celebrity` 함수 렉시컬 스코프에 대해서 접근 권한을 가지고 있죠. 그런데, 평소와는 다르게 우리가 `sayName` 함수를 값으로써 반환을 시켰습니다.