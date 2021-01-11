# iterable 객체

반복 가능한(iterable) 객체는 배열을 일반화한 객체이다. 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있다.

배열은 대표적인 이터러블이다. 배열 외에도 다수의 내장 객체가 반복 가능하다. 문자열 역시 이터러블의 예이다.

배열이 아닌 객체가 있는데, 이 객체가 어떤 것들의 컬렉션(목록, 집합 등)을 나타내고 있는 경우, for..of 문법을 적용할 수만 이다면 컬렉션을 순회하는데 유용할 거다.

### Symbol.iterator

```javascript

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

##### 문자열을 이터러블이다.

배열과 문자열은 가장 광범위하게 쓰이는 내장 이터러블이다.

for..of는 문자열의 각 글자를 순회한다.

```javascript
for (let char of "test") {
  // 글자 하나당 한 번 실행(4회 호출).
  alert( char ); // t, e, s, t가 차례대로 출력
}
```

##### 이터레이터를 명시적으로 호출하기

```javascript
let str = "Hello";

// for..of를 사용한 것과 동일한 작업
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력
}
```

#### 이터러블과 유사 배열

- 이터러블은 위에서 설명한 바와 같이 메서드 Symbol.iterator가 구현된 객체이다.
- 유사 배열(array-likt)은 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체이다.

브라우저나 등의 호스트 환경에서 자바스크립트를 사용해 문제를 해결할 때 이터러블 객체나 유사 배열 객체 혹은 둘 다인 객체를 만날 수 있다.

이터러블 객체이면서 유사배열 객체인 문자열이 대표적이다.

이터러블 객체라고 해서 유사 배열 객체는 아니다. 유사 배열 객체라고 해서 이터러블 객체인 것도 아니다.

#### Array.from

범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 진짜 배열을 만들어준다. 이 과정을 거치면 이터러블이나 유사 배열에 배열 메서드를 사용할 수 있다.

```javascript
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (메서드가 제대로 동작)
```

