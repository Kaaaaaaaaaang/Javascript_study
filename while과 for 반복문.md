# while과 for 반복문

#### 'while' 반복문

```javascript
while(condition){
    //코드
    //'반복문 본문(body)'라 부른다.
}
```

```javascript
let i = 0;
while(i < 3) { //0, 1, 2가 출력된다.
    alert(i);
    i++;
}
```

- 반복문 본문이 한 번 실행되는 것을 반복(iteration)이라고 부른다. 위 예시에선 세 번의 이터레이션을 만든다.

#### 'do...while' 반복문

```javascript
do {
  // 반복문 본문
} while (condition);
```

```javascript
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

#### 'for' 반복문

```javascript
for (begin; condition; step) {
  // ... 반복문 본문 (body) ...
}
```

- begin : 반복문이 집입할 때 단 한 번 실행된다.
- condition : 반복마다 해당 조건이 확인된다. false이면 반복문을 멈춘다.
- body : conditoin이 truthy일 동안 계속해서 실행된다.
- step : 각 반복의 body가 실행된 이후에 실행된다.

```javascript
for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력된다.
  alert(i);
}
```

```javascript
for (;;) {
  // 끊임 없이 본문이 실행된다.
}
```

#### 반복문 빠져나오기

대개는 반복문의 조건이 falsy가 되면 반복문이 종료된다.

그런데 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있다.

```javascript
let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 눌렀을 때

  sum += value;

}
alert( '합계: ' + sum );
```

#### 다음 반복으로 넘어가기

```javascript
for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않는다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력된다.
}
```

#### break/continue + label

레이블(label)은 반복문 앞에 콜론과 함께 쓰이는 식별자이다.

```javascript
labelName: for(...) {
    ...
}
```

반복문 안에서 break <labelName> 문을 사요하면 레이블에 해당하는 반복문을 빠져나올 수 있다.

```javascript
outer: for (let i = 0; i < 3; i++) {
    
  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나온다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 한다.
  }
}
alert('완료!');
```

위 예시에서 break outer는 outer라는 레이블이 붙은 반복문을 찾고, 해당 반복문을 빠져나오게 해준다. 따라서 제어 흐름이 (*)에서 alert('완료!')로 바로 바뀐다.