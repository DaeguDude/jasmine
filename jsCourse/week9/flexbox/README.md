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

```css
.container {
    display: flex;
}
```

### flex-direction
![flex-direction](./img/flex-direction.png)

```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap
![flex-wrap](./img/flex-wrap.png)

### flex-flow

### justify-content
![justify-content](./img/justify-content.png)

### align-items
![align-items](./img/align-items.png)

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

