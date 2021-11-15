//클래스 문법에서의 typescript

class Person {
    name :string|void;
    fnc :() => void
    constructor(a :string | void){
        this.name = a 
    }

    fnc2(a :number) :void{
        console.log(`안녕나는 ${a}야`)
    }
}

Person.prototype.fnc = () => {

}
//필드값에 타입을 제외하고 라도 미리 선언해주지 않으면 할당할때 오류를 반환한다

let people = new Person("123");
let people2 = new Person();

//easy test
class Word {
    num;
    str;
    constructor(...params :(string|number)[]) {
        let thisIsString :string[] = []
        let thisIsNumber :number[] = []

        params.forEach((i) => {
            if(typeof i === "string"){
                thisIsString.push(i)
            } else {
                thisIsNumber.push(i)
            }
        })

        this.num = thisIsNumber
        this.str = thisIsString
    }
}


let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']


/* #####_____   interface   _____##### */ //개인적으로 매우 궁금했던거라

//타입을 변수로 지정할땐 type을 사용했었음
type Typename = string
//오브젝트에도 똑같이 적용 가능한데 type Square { color :string, width :number }

interface SquareType {
    color :string;
    width :number;
}

let square :SquareType = {
    color: "red",
    width: 123
}

//오브젝트는 interface 로도 가능하다

/*  extends  */

interface StudentType {
    name :string
}

interface TeacherType extends StudentType {
    age :number
}

let student :StudentType = { name: "kim" }
let teacher :TeacherType = { name: "kim", age: 20 }

//사실 type도 intersection type을 사용하면 가능하긴하다
type Animal = { name :string }
type Cat = { age :number } & Animal
//다른점은 복사의 의미가 아닌 둘다 만족해야 한다는 기호라는 점이 조금 다르다
//그래서 당연하게도 interface도 사용 &기호를 사용해서 타입참조가 가능하다



/* type과 interface의 차이 */

//interface는 중복선언이 가능하다
interface OneType {
    name :string
}
interface OneType {
    score :number
}
//이경우 자동으로 extends가 발생한다
//type은 안됨

/*
interface의 타입extends 경우 
키의 이름이 같아도 상관은 없지만 같은 키의 타입이 다르다면 오류가 발생함
하지만 type의 &기호를 사용해 타입을 합치면 이름이 같아도 오류가 발생안함
그이유는 위에서 말한것처럼 조건형식이기 때문에 오류가 발생할 이유가 없다.

하지만 실제로 사용해 보면 키값이 같으면서 두게의 속성을 가지는 변수는 없기때문에 오류가 발생함
*/

//test 1
interface 상품Type {
    brand :string
    serialNumber :number
    model :string[]
}

let 상품 :상품Type = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//test 2

interface 장바구니Type {
    product :string
    price :number
}

let 장바구니 :장바구니Type[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

//test 3
interface myObjType {
    plus :(a :number, b :number) => number
    minus :(a :number, b :number) => number
}

const myObj :myObjType = {
    plus(a, b){
        return a + b
    },
    minus(a, b){
        return a - b
    }
}


