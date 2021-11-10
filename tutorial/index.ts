//riteral type
let testName :123;//이제 여기엔 123이라는 숫자만 들어올수 있음
testName = 123;


type RsfType = "가위"|"바위"|"보"
function rsf(x :RsfType) :RsfType[] {
 return [x]
}

//lireral type의 문제점 
let myAry = {
    name:"kim" 
}

function myFnc(a : "kim") {

}

/* myFnc(myAry.name) */


/* 
이걸보면 왜 안되냐고 할수 있음 언뜻보기엔 파라미터가 똑같은 모양이니까
여기서 놓치고 있는건 파라미터에 지정된 타입이 "kim" 이라는것이다
myAry에 타입은 string이고 a의 타입은 "kim"이다 그러니까 안됨

이건 여러가지로 해결가능한데 그중하나가 as const이다
let myAry = {
    name:"kim" 
} as const
이렇게 사용하는데 readonly로 바꿔주고 할당된 값 자체를 type으로 지정해준다
*/



/* **  함수의 type alias지정  ** */
type FncType_1 = (a :string) => number;

let fnc1 :FncType_1 = (a) => {
    return 123
};
//타입스크립트에서의 함수 엘리어스 지정은 에로우함수로 만들고 적용은 함수 표현식으로 한다


type 회원정보타입 = {
    name :string
    age :number
    plusOne :(a :number) => number 
    changeName :(a? :string) => void
}

let 회원정보 :회원정보타입 = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }
  회원정보.plusOne(1);
  회원정보.changeName();

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

type Fnc1Type = (a :string) => string
type Fnc2Type = (a :string) => number

type Myfnc2 = (a :string, fnc1 :Fnc1Type, fnc2 :Fnc2Type) => void

let myFnc2 :Myfnc2 = (a, fnc1, fnc2) => {
    let result = fnc1(a);
    let result2 = fnc2(result)
    console.log(result2)
}

myFnc2('010-1111-2222', cutZero, removeDash)