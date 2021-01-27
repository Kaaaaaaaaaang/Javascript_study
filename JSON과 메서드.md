# JSON과 메서드

- 값이나 객체를 나타내주는 범용 포맷

자바스크립트가 제공하는 JSON 관련 메서드

- JSON.stringfy - 객체를 JSON으로 바꿔준다.
- JSON.parse - JSON을 객체로 바꿔준다.

```javascript
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // string

alert(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

JSON.stringfy는 객체뿐만 아니라 원시값에도 적용할 수 있다.

- 객체 {...}
- 배열 [...]
- 원시형 :
  - 문자형
  - 숫자형
  - 불린형 값 true와 false
  - null

### replacer로 원하는 프로퍼티만 직렬화하기

```javascript
let json = JSON.stringfy(value[, raplacer, space])
// value : 인코딩 하려는 값
// replacer : JSON으로 인코딩하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
// space : 서식 변경 목적으로 사용할 공백 문자 수
```

```javascript
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 4));
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
```

#### toJSON

```javascript

let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

### JSON.parse

JSON.parse를 사용하면 JSON으로 인코딩된 객체를 다시 객체로 디코딩 할 수 있다.

```javascript
let value = JSON.parse(str, [reviver]);
// str : JSON 형식의 문자열
// reviver : 모든 (key, value) 쌍을 대상으로 호출되는 function(key, value) 형태의 함수로 값을 변경시킬 수 있다.
```

```javascript
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

#### reviver 사용하기

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 30
```

