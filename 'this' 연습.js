function makeUser(){
    return{
        name : "John",
        // ref : this
        ref() {
            return this;
        }
    };
};

let user = makeUser();

// alert(user.ref.name);
// 에러 발생
// this 값을 설정할 땐 객체 정의가 사용되지 않는다. this 값은 호출 시점에 결정된다.
// 위 코드에서 makeUser() 내 this는 undefined가 된다. 메서드로 호출된 게 아니라 함수로써 호출되었기 때문이다.
