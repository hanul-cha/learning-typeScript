//클래스 문법에서의 typescript
class Person {
    constructor(a) {
        this.name = a;
    }
    fnc2(a) {
        console.log(`안녕나는 ${a}야`);
    }
}
Person.prototype.fnc = () => {
};
//필드값에 타입을 제외하고 라도 미리 선언해주지 않으면 할당할때 오류를 반환한다
let people = new Person("123");
let people2 = new Person();
//easy test
class Word {
    constructor(...params) {
        let thisIsString = [];
        let thisIsNumber = [];
        params.forEach((i) => {
            if (typeof i === "string") {
                thisIsString.push(i);
            }
            else {
                thisIsNumber.push(i);
            }
        });
        this.num = thisIsNumber;
        this.str = thisIsString;
    }
}
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
let square = {
    color: "red",
    width: 123
};
let student = { name: "kim" };
let teacher = { name: "kim", age: 20 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
const myObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};
