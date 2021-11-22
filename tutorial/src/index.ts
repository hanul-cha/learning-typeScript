//tutle type array자료형에 사용가능한 엄격한 타입

let dog :[string, boolean?] = ["dog", true]

//응용
const spreadFnc = (...x :[number, string]) => {
    console.log(x)
}
spreadFnc(1,"2")

let arr = [1,2,3];
let arr2 :[number, number, ...number[]] = [4, 5, ...arr]
//3번째 인자 타입지정에 쓰인건 rest파라미터랑 비슷하게 작동함

let testArr :[string, number, boolean] = ['동서녹차', 4000, true]

let testArr2 :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

const testFnc = (...a :[string, boolean, ...(string|number)[]]) => {

}

const testFnc2 = (...a :(number|string)[]) => {
    let myNumber :number[] = [];
    let myString :string[] = [];

    a.forEach(i => {
        if(typeof i === "string"){
            myString.push(i)
        } else {
            myNumber.push(i)
        }
    })

    const test = [myNumber, myString]
    return test
}

console.log(testFnc2(1,"12", 123, "325"))



/*----- ts파일에서 js파일 import를 해오고 싶을때 -----*/

/* declare let a
console.log(a+1) */
//재정의 해주는 키워드


//ts에선 다른파일이랑 겹치는 변수는 typescript의 ambient module로 선언되서 못씀
//로컬 모듈로 만드는 방법은 간단하다 선언된 파일에서 export가 한번이라도 되면 그 파일은 모듈형식임
//근데 또 모듈파일에서 한두게만 전역으로 쓰고 싶을때가 있는데 그것도 declare해서 쓰면된다 a.ts에 써놓음
const myCat :Cat = "hi"


//d.ts
const mynum :myAge = 1;
//이런식으로 전역에서 쓸수 있다
//제이쿼리 bootstrap이런건 js형식 파일이라 유명한 라이브러리d.ts파일들을 찾아서 설치하는게 정신건강에 이로움




//implements 키워드
/* 
interface는 object 타입지정을 할 때 사옹하는데 class타입을 확인하고 싶을때도 사용가능
단 implements가 필요하다
*/

interface CarType {
    model :string
    price :Number
}

class Car implements CarType {
    model :string
    price :number = 1000;
    constructor (a :string) {
        this.model = a
    }
}

let gogoCar = new Car("morning")

//implements는 타입을 할당하고 변형시키는 키워드는 아니다

class NewCar implements CarType {
    model;
    price;
    tax(a) {
        return a * 0.1
    }
}
/* 
근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않습니다. 
결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다. 
*/



/*---- index signatures ----*/
//오브젝트에서 모든 키값이 중복된다면 사용할수 있음

interface StringOnly {
    [key :string] :string
}

let user :StringOnly = {
    name: 'kim',
    age: '20',
    location: 'seoul'
}

//반복되는 오브젝트 형태에서 recursive 한 타입만드는법

interface MyCssType {
    'fonct-size' :MyCssType|number
}

let myCss :MyCssType = {
    'fonct-size': {
        'fonct-size': {
            'fonct-size': 14
        }
    }
}

interface ObjType {
    [key :string] :string|number
}

let obj :ObjType = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

interface ObjType2 {
    [key :string] :number | ObjType2

}

let obj2 :ObjType2 = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}


/*---- object 타입 변환기 만들기 ----*/
let myObj = {
    name: 'kim',
    age: 20
}
console.log(Object.keys(myObj))
//이케 하면 myObj에 있는 키들을 전부 가져온다

//typescript에선 keyof라는게 있는데 비슷하게 작동한다
interface Person {
    age :number,
    name :string
}

type PersonKeys = keyof Person;
let a :PersonKeys = "age"
//이케 리터럴 타입으로 가져온다 여러개일경우 유니온으로온다

//타입변환기 만들기
type OtherCar = {
    color :boolean,
    model :boolean,
    price :boolean|number
}

type TypeChacger<myType> = {
    [key in keyof myType] :string
}
//왼쪽에 key값이 있다면 string으로 해달라는 forIn문비슷한 녀석

type newCar = TypeChacger<OtherCar>




type Bus = {
    color : string,
    model : boolean,
    price : number
}

type TypeChacgerBus<myType, t> = {
    [key in keyof myType] :t
}

type NewBus = TypeChacgerBus<Bus, number>