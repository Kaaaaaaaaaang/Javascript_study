# setTimeout과 setInterval을 이용한 호출 스케일링

일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것을 '호출 스케줄링(scheduling a call)'이라고 한다.

호출 스케일링을 구현하는 방법

- setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
- setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법



#### setTimeout

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ... )
```

- func|code

실행하고자 하는 코드로, 함수 또는 문자열 형태이다. 대개는 이 자리에 함수가 들어간다.

- delay

실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0이다.

- `arg1`, `arg2`…

함수에 전달할 인수들이다.

```javascript
function sayHi(who, phrase) {
  alert( who + ' 님, ' + phrase );
}

setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.
// 실행하면 1초 후에 호출된다.
```

#### clearTimeout으로 스케줄링 취소하기

`setTimeout`을 호출하면 '타이머 식별자(timer identifier)'가 반환된다. 스케줄링을 취소하고 싶을 땐 timerId를 사용하면 된다.

```javascript
// 스케줄링 취소하기
let timerId = setTimeout(...);
clearTimeout(timerId);
```

#### setInterval

setInterval 메서드는 setTimeout과 동일한 문법을 사용한다.

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

인수 역시 동일하지만 setTimeout이 함수를 단 한 번만 실행하는 것과 달리 setInterval은 함수를 주기적으로 실행하게 만든다.

함수를 중단하려면 clearInterval(timerId)을 사용하면 된다.

```javascript
// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => alert('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);
```

** alert 창이 떠 있더라도 타이머는 멈추지 않는다.

#### 중첩 setTimeout

```javascript
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

*** 가비지 컬렉션과 setInterval, setTimeout

setInterval이나 setTimeout에 함수를 넘기면, 함수에 대한 내부 참조가 새롭게 만들어지고 이 참조 정보는 스케줄러에 저장된다. 따라서 해당 함수를 참조하는 것이 없어도 setInterval과 setTimeout에 넘긴 함수는 가비지 컬렉션의 대상이 되지 않는다.

스케줄러가 함수를 호출할 때까지 함수는 메모리에 유지된다.

#### 대기 시간이 0인 setTimeout

`setTimeout(func, 0)`이나 `setTimeout(func)`을 사용하면 `setTimeout`의 대기 시간을 0으로 설정할 수 있다.

이렇게 대기 시간을 0으로 설정하면 `func`을 ‘가능한 한’ 빨리 실행할 수 있다. 다만, 이때 스케줄러는 현재 실행 중인 스크립트의 처리가 종료된 이후에 스케줄링한 함수를 실행한다.

이런 특징을 이용하면 현재 스크립트의 실행이 종료된 ‘직후에’ 원하는 함수가 실행될 수 있게 할 수 있다.

```javascript
setTimeout(() => alert("World"));

alert("Hello");
```

