// 함수 rest파라미터, destructuring 할 때 타입지정

/* 
rest 파라미터는 함수에 파라미터가 몇개들어올지 미리 정의가 불가능한 경우 사용한다
몇개를 파라미터를 넘겨주든 전부 배열에 담기기 때문에 타입지정도 배열형태의 타입지정을 해주면된다
spread operator와는 다른아이니 햇갈리지 말자
*/

/* 
destructuring 문법은 react많이 쓴는 사람이면 익숙할텐데
*/

let [prop1, prop2] = ["hi",123]

let people = {
    student: true, age: 20
}
let { age } = people
//이런거

let myObj = {
    student: true,
    age: 20
}

const myfnc = ({ student, age } :{student :boolean, age :number}) => {
    console.log(student, age)
}

myfnc(myObj)
//이런거

const maxNumber = (...num :number[]) :number => {
    let maxNum = 0;
    num.forEach(i => {
        if(maxNum < i){
            maxNum = i
        }
    })

    return maxNum
}
console.log(maxNumber(4,2,6,2,9))

const myObj2 = {
    user: "kim",
    comment: [3,5,4],
    admin: false
}

interface MyObj2Type {
    user :string
    comment :number[]
    admin :boolean
}

const myFnc2 = ({ user, comment, admin } :MyObj2Type) :void => {
    console.log(user, comment, admin)
}

myFnc2(myObj2);


const myAry = [40, "win", false]

type AryType = (number | string | boolean)[]

const myFnc3 = ([a, b, c] :AryType) :void => {
    console.log(a, b, c)
}

myFnc3(myAry)

/* -----narrowing방법 더 알아보기----- */

type Fish = {
    swim :string
}
type Bird = {
    fly :string
}

const animalFnc = (animal :Fish | Bird) => {
    if( 'swim' in animal ){// Fish타입인지 검사하는 조건문
        animal.swim
    }
}
//자료형 내로잉을 해줄때 in을 사용해 안에 인자로 존재하는지 검사해주면 된다

//class같이 부모인자를 검사하는 방식으로 내로잉 할수도 있음
let myDate = new Date();
if(myDate instanceof Date){
    console.log("true")
}

//키값이 아예 다를땐 in같은걸 쓸수 있는데 키는같은데 타입이 다를땐 다른방법을 사용한다
type Car = {
    wheel :"4개"
    color :string
}
type Bike = {
    wheel :"2개"
    color :string
}

const myWheel = (x :Car | Bike) => {
    if(x.wheel === "4개") {

    }
}
//두가지 타입둘다 wheel를 가지고 있어서 접근가능함 


/* && */

/* 
&&연산자는 조건식으로 쓰는것말고도 여러개를 썻을때 특이하게 작동한다

&& 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면

&& 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.

falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.
*/

1 && null && 3   // null이 남음
undefined && '안녕' && 100  // undefined 남음