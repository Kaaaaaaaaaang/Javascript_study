# 프로퍼티 getter와 setter

#### getter와 setter

접근자 프로퍼티는 'getter(획득자)'와 'setter(설정자)' 메서드로 표현된다.객체 리터럴 안에서 getter와 setter메서드는 get과 set으로 나타낼 수 있다.

getter 메서드는 프로퍼티를 읽으려고 할 때 실행되고, setter 메서드는 프로퍼티에 값을 할당하려 할 때 실행된다.

### 접근자 프로퍼티 설명자

접근자 프로퍼티엔 설명자 value와 writable가 없는 대신에 get과 set이라는 함수가 있다.

접근자 프로퍼티가 갖는 설명자

- **`get`** – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
- **`set`** – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
- **`enumerable`** – 데이터 프로퍼티와 동일함
- **`configurable`** – 데이터 프로퍼티와 동일함