# 플렉스박스(flexbox)

플렉스박스는 컨테이너안의 아이템을 행이나 열로써 나타내는 1차원적인 레이아웃입니다. 플렉스박스 컨테이너안의 아이템은 공간에 따라서 늘어나거나 작아질 수도 있습니다. 플렉스박스가 나온 이유는 이때까지는 `float`와 `position`을 이용한 레이아웃을 사용해 CSS 레이아웃을 만들었는데, 이것이 불편하였기 때문입니다. 플렉스박스를 이용하여 조금 더 쉽게 레이아웃을 짜봅시다.

## 기본 & 용어

플렉스박스는 여러가지 프로퍼티를 담고있는 모듈입니다. 이 여러가지의 프로퍼티들은 컨테이너에 사용되어야 하는 프로퍼티도 있고, 어떠한 프로퍼티들은 플렉스 아이템들에 사용되어야 합니다.

플렉스박스를 이해하려면, 플렉스 방향을 이해하여야 합니다.

![flexbox](./img/basic-concept.png)

아이템은 주축(main axis)이나 횡축(cross axis)을 통하여 놓아질 것입니다.

- **주축(main axis)**: 플렉스 컨테이너의 주축은 플렉스 아이템이 놓아지는 기본 값입니다. 중요한 것은, 주축이 무조건 수평이 아니라 `flex-direction`의 값에 따라 수직으로 바뀔 수도 있다는 것을 아셔야 합니다.

- **주-시작(main-start) | 주-끝(main-start)**: 컨테이너안의 플렉스 아이템들은 주-시작부터 주-끝 방향으로  놓아집니다.

- **주-크기(main-size)**: `flex-direction`의 값에 따라, 

- **횡축(cross axis)**:

- **횡-시작(cross-start) | 횡-끝(cross-end)**:

- **횡-크기(cross-size)**:


<!----------------------------- 
플렉스 컨테이너 
------------------------------>
![flex-container](./img/flex-container.png)
## 부모 프로퍼티(플렉스 컨테이너)

### display

`display` 프로퍼티를 통해서 플렉스 컨테이너를 생성할 수 있습니다. 바로 밑의 태그들이 플렉스 아이템이 됩니다.

```css
.container {
    display: flex;
}
```

### flex-direction
![flex-direction](./img/flex-direction.png)

`flex-direction`을 통해서 주축(main-axis)를 정할 수 있습니다. 플렉스박스는 1차원 레이아웃이기 때문에 아이템이 행(`row`) 아니면 열(`column`)로 놓아진다고 생각하시면 쉽습니다.

```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`(기본값): 수평으로 왼쪽에서 오른쪽으로 플렉스 아이템 정렬
- `row-reverse`: 수평으로 오른쪽에서 왼쪽으로 플렉스 아이템 정렬
- `column`: 주축(Main Axis)이 바뀜. `row`를 수직으로 생각하면 됨
- `column-reverse`: `row-reverse`를 수직으로 생각하면 됨

### flex-wrap

![flex-wrap](./img/flex-wrap.png)

기본적으로, 플렉스 아이템을 한 줄에 정렬을 하려고 할 것인데, `flex-wrap` 프로퍼티를 통해서 플렉스 아이템을 여러 줄로 정렬할 수도 있다.

```css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`(기본값): 모든 플렉스 아이템들이 한 줄에 정렬됨
- `wrap`: 플렉스 아이템들이 여러 줄로 정렬됨. 위에서 아래로
- `wrap-reverse`: 플렉스 아이템들이 여러 줄로 정렬됨. 아래서 위로

### flex-flow

`flex-direction`과 `flex-wrap` 프로퍼티의 단축 프로퍼티. 기본 값은 `row nowrap` 입니다.

```css
.container {
    flex-flow: column wrap;
}
```

### justify-content

![justify-content](./img/justify-content.png)

<!-- 더 많은 설명이 필요할 듯 -->
`justify-content` 프로퍼티는 주축(Main Axis)을 어떻게 정렬할 것인지 결정을 합니다. 

```css
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

- `flex-start`(기본값): 아이템들이 `flex-direction` 방향의 시작점에 정렬됩니다.
- `flex-end`: 아이템들이 `flex-direction` 방향의 끝나는 점에 정렬됩니다.
- `start`: 아이템들이 `writing-mode` 방향의 시작점에 정렬됩니다.
- `end`: 아이템들이 `writing-mode` 방향의 끝나는 점에 정렬됩니다.
<!-- - `left`:  -->
<!-- `right` -->
- `center`: 아이템들이 중앙에 정렬이 됩니다.
<!-- - `space-between`: 각각의 아이템들 사이에 똑같은 공간 넓이만큼 정렬이 됩니다. 첫번째 아이템은 시작점에, 마지막 아이템은 끝나는 점에 있습니다. -->
<!-- space around -->
<!-- - `space-evenly`:  -->

여기서 아셔야 할 것은, 이 프로퍼티의 값들이 아직 브라우저에서 지원을 안 하는 경우가 있습니다. 예를 들어, `start/end/left/right` 는 아직 크롬에서 지원을 안 합니다. MDN의 [페이지](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)를 방문해보시면, 어떤 것이 지원되고 안 되는지 표를 보실 수 있습니다.

### align-items
![align-items](./img/align-items.png)

`align-items` 프로퍼티는 플렉스 아이템들이 횡축에서 어떻게 정렬이 될지 정합니다. 아주 쉽게 생각하면, `justify-content`의 횡축 버전으로 생각하시면 됩니다.

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}

- `stretch`(기본값) 
```

### align-content
![align-content](./img/align-content.png)

<!----------------------------- 
플렉스 아이템 
------------------------------>

## 자식 프로퍼티(플렉스 아이템)

### order

### flex-grow

### flex-shrink

### flex-basis

### flex

### align-self

