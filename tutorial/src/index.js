//tutle type array자료형에 사용가능한 엄격한 타입
let dog = ["dog", true];
//응용
const spreadFnc = (...x) => {
    console.log(x);
};
spreadFnc(1, "2");
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
//3번째 인자 타입지정에 쓰인건 rest파라미터랑 비슷하게 작동함
let testArr = ['동서녹차', 4000, true];
let testArr2 = ['동서녹차', 4000, true, false, true, true, false, true];
const testFnc = (...a) => {
};
const testFnc2 = (...a) => {
    let myNumber = [];
    let myString = [];
    a.forEach(i => {
        if (typeof i === "string") {
            myString.push(i);
        }
        else {
            myNumber.push(i);
        }
    });
    const test = [myNumber, myString];
    return test;
};
console.log(testFnc2(1, "12", 123, "325"));
/*----- ts파일에서 js파일 import를 해오고 싶을때 -----*/
/* declare let a
console.log(a+1) */
//재정의 해주는 키워드
//ts에선 다른파일이랑 겹치는 변수는 typescript의 ambient module로 선언되서 못씀
//로컬 모듈로 만드는 방법은 간단하다 선언된 파일에서 export가 한번이라도 되면 그 파일은 모듈형식임
//근데 또 모듈파일에서 한두게만 전역으로 쓰고 싶을때가 있는데 그것도 declare해서 쓰면된다 a.ts에 써놓음
const myCat = "hi";
//d.ts
const mynum = 1;
class Car {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let gogoCar = new Car("morning");
//implements는 타입을 할당하고 변형시키는 키워드는 아니다
class NewCar {
    tax(a) {
        return a * 0.1;
    }
}
let user = {
    name: 'kim',
    age: '20',
    location: 'seoul'
};
let myCss = {
    'fonct-size': {
        'fonct-size': {
            'fonct-size': 14
        }
    }
};
let obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
/*---- object 타입 변환기 만들기 ----*/
let myObj = {
    name: 'kim',
    age: 20
};
console.log(Object.keys(myObj));
let a = "age";
