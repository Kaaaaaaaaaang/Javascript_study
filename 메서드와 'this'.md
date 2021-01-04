# 메서드와 'this'

객체는 실제 존재하는 객체(entity)를 표현하고자 할 때 생성된다.

사용자는 현실에서 장바구니에서 물건 선택하기, 로그인하기, 로그아웃하기 등의 행동을 한다. 이와 마찬가지로 사용자를 나타내는 객체도 특정한 행동을 할 수 있다.

자바스크립트에선 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력을 부여해준다.

### 메서드 만들기

```javascript
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!
```

함수 표현식으로 함수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당해 주었다.

이렇게 객체 프로퍼티에 할당된 함수를 메서드(method)라고 부른다.

위 예시에선 user에 할당된 sayHi가 메서드이다.

메서드는 이미 정의된 함수를 이용해서 만들 수도 있다.

```javascript
// 함수 선언
function sayHi() {
  alert("안녕하세요!");
};

// 선언된 함수를 메서드로 등록
user.sayHi = sayHi;

user.sayHi(); // 안녕하세요!
```

##### 메서드 단축 구문

```javascript
// 아래 두 객체는 동일하게 동작한다.

user = {
  sayHi: function() {
    alert("Hello");
  }
};

user = {
  sayHi() { // "sayHi: function()"과 동일하다.
    alert("Hello");
  }
};
```

### 메서드와 'this'

##### this값은 런타임에 결정된다.

- 함수를 선언할 때 `this`를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 `this`엔 값이 할당되지 않습니다.
- 함수를 복사해 객체 간 전달할 수 있습니다.
- 함수를 객체 프로퍼티에 저장해 `object.method()`같이 ‘메서드’ 형태로 호출하면 `this`는 `object`를 참조합니다.

메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있다. 모든 메서드가 그런 건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용한다.

<b>메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있다.</b>

이때 '점 앞'의 this는 객체를 나타낸다. 정확히는 메서드를 호출할 때 사용된 객체를 나타낸다.

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타낸다.
    alert(this.name);
    // alert(user.name); //this 대신 user를 이용해서 접근하는 것도 가능하지만 이렇게 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있다.
  }

};

user.sayHi(); // John
```

#### 자유로운 'this'

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
```

#### 'this'가 없는 화살표 함수

화살표 함수는 일반 함수와는 달리 '고유한' this를 가지지 않는다. 화살표 함수에 this를 참조하면, 화살표 함수가 아닌 '평범한' 외부 함수에서 this 값을 가져온다.

아래 예시에서 함수 arrow()의 this는 외부 함수 user.sayHi()의 this가 된다.

```javascript
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
```

별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용하다.