//타입 확정하기 Narrowing & Assertion

//1. narrowing
function fnc1(x :number|string){
    if(typeof x === "string"){
        return x + "1"
    }else{
        return x + 1
    }
}
fnc1(123);

function fnc2(x :number|string){
    let ary :number[] = [];
    if(typeof x === "number"){
        ary[0] = x;
    }
}
fnc2(123)

//2. assertion
function fnc3(x :number|string){
    let ary :number[] = [];
    ary[0] = x as number
}
fnc3(123)
//as를 사용해서 이 타입은 number라고 지정해줄수 있음 하지만역시 남발금지
/* 
예를들어 파라미터 타입이 string만 있는데 갑자기 as number이케 쓰면 안됨...
네로잉할때 쓰는건 맞지만 어떤타입이 들어올지 100% 확신할수 있을때 사용
*/

let kim = { subject : "math" }
let jane = { subject : ["science", "english"] }
let minsu = { subject : ["science", "art", "korean"] }

function myfnc(x :{ subject: string|string[] }) {
    if(typeof x.subject === "string") {
        return x.subject
    } else if(Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1]
    }
}

myfnc(jane)




//타입을 변수에 할당해서 쓰는법
type AnimalType = string | number | undefined;

let animal :AnimalType = ""

/* 
const에 할당된 배열은 수정이 가능하다 const는 재할당을 막는 선언문이지 내부의 키값을
바꾼다고 경고를 발생시키진 않음 하지만 typescript에선 가능하다
*/
const boyFriend = {
    name: "hanul"
}
boyFriend.name = "hansol"
//에러 발생안함

type GirlFriendType = {
    readonly name: string
}
const girlFriend :GirlFriendType = {
    name: "ember"
}

/* 
girlFriend.name = "" readonly가 있어서 읽기전용이 되버림 = 수정불가에러
유의할점은 여기서 에러는 에디터에서 보여주는 에러일뿐 실제로 막진않음 js문법상 문제가 없기때문
*/

//타입변수 합치기
type Type1 = string
type Type2 = number

type margeType = Type1 | Type2

/* 
오브젝트 타입을 합칠때 내용물을 합치고 싶으면 &연산자를 사용할수 있음
개발자들은 합친다는 용어보단 extend한다고 표현함
*/

type PositionX = { x :number };
type PositionY = { y :number };

type NewPosition = PositionX & PositionY

//test

type NewAryType = {
    color? :string
    size :number
    readonly position :number[]
}

let test :NewAryType = {
    size: 123,
    position: [1,2,3]
}