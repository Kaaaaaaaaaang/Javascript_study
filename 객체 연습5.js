let obj = {};

function A() { return obj; }
function B() { return obj; }

// 두 함수 모두 this 대신에 객체를 반환하게 하면 new A() == new B()가 성립한다.
alert(new A() == new B()); // true