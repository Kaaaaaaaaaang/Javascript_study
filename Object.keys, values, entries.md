# Object.keys, values, entries

일반 객체엔 다음과 같은 메서드를 사용할 수  있다.

- Object.keys(obj) : 키가 담긴 배열을 반환한다.
- Object.values(obj) : 값이 담긴 배열을 반환한다.
- Object.entries(obj) : [key, value] 쌍이 담긴 배열을 반환한다.

#### 객체 변환하기

객체엔 map, filter와 같은 배열 전용 메서드를 사용할 수 없다.

하지만 Object.entries와 Object.fromEntries를 순차적으로 적용하면 객체에도 배열 전용 메서드를 사용할 수 있다.

1. Object.entries(obj)를 사용해 객체의 키-값 쌍을 요소로 갖는 배열을 얻는다.
2. 1.에서 만든 배열에 map 등의 배열 전용 메서드를 적용한다.
3. 2.에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌린다.

```javascript
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

