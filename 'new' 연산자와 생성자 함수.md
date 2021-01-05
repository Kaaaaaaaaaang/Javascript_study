# 'new' 연산자와 생성자 함수

### 생성자 함수

생성자 함수(constructor function)

1. 함수 이름의 첫 글자는 대문자로 시작한다.
2. 반드시 "new" 연산자를 붙여 실행한다.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작한다.

1. 빈 객체를 만들어 this에 할당한다.

2. 함수 본문을 실행한다. this에 새로운 프로퍼티를 추가해 this를 수정한다.

3. this를 반환한다.

   - ```javascript
     function User(name) {
       // this = {};  (빈 객체가 암시적으로 만들어짐)
     
       // 새로운 프로퍼티를 this에 추가함
       this.name = name;
       this.isAdmin = false;
     
       // return this;  (this가 암시적으로 반환됨)
     }
     ```

재사용할 필요가 없는 복잡한 객체를 만들어야 할 땐 익명 생성자 함수로 감싸주는 방식을 사용한다.

```javascript
let user = new function(){
    this.name = "John";
    this.isAdmin = false;
}
```

### new.target과 생성자 함수

new.target. 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있다.

일반적인 방법으로 함수를 호출했다면 new.target은 undefined를 반환한다. 반면 new와 함께 호출한 경우엔 new.target은 함수 자체를 반환해준다.

```javascript
function User() {
  alert(new.target);
}

// "new" 없이 호출함
User(); // undefined

//"new"를 붙여 호출함
new User(); // function User { ... }
```

### 생성자와 return문

생성자 함수엔 보통 return문이 없다. 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없다.

return문이 있을 때

- 객체를 return 한다면, this 대신 객체가 반환된다.

  - ```javascript
    function BigUser() {
    
      this.name = "John";
    
      return { name: "Godzilla" };  // <-- this가 아닌 새로운 객체를 반환함
    }
    
    alert( new BigUser().name );  // Godzilla
    ```

- 원시형을 return 한다면, return문이 무시된다.

  - ```javascript
    function SmallUser() {
    
      this.name = "John";
    
      return; // <-- this를 반환함
    }
    
    alert( new SmallUser().name );  // John
    ```

return 뒤에 객체가 오면 생성자 함수는 해당 객체를 반환해주고, 이 외의 경우는 this가 반환된다.

** return 문이 있는 생성자 함수는 거의 없다.

### 생성자 내 메서드

생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성할 수 있다.

this에 프로퍼티를 더해주는 것 뿐만 아니라 메서드를 더해주는 것도 가능하다.

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

