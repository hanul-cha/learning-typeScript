//tip : 초보 typescript사용자들은 온통 변수에 type지정을 해버림 
//typescript는 대부분 자동적으로 type을 생성해줌
//간단한 변수들은 타입을 생략할수 있도록하지만 가시성을 위해 사용해도 좋음



//easy test

/* 
1. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

*/

let Favorite :{ song :string, singger :string } = {
    song : "요즘",
    singger : "양다일"
}




/* 
2. 다음과 같이 생긴 자료의 타입지정을 해보자

let project = {
    menber : ["kim", "park"],
    days : 30,
    started : true,
}

project 변수 우측에 적으면 됩니다. 

member 안엔 문자로 가득한 array만 들어올 수 있고 

days는 숫자, started는 true/false만 들어올 수 있습니다. 
*/

let project :{menber :string[], days : number, started :boolean} = {
    menber : ["kim", "park"],
    days : 30,
    started : true,
}



//타입을 미리 지정하기 애매할때

//union type : 타입 2개 이상 합친 새로운 타입만들기

let consumer :number | string = 123; //숫자형 또는 문자형으로 할당가능()로 묶을수도 있음

// var 어레이: number[] = [1,'2',3] 에 에러를 지워보자
var ary :[number, string, number] = [1,'2',3]
var ary2 :(number | string)[] = [1,'2',3]

/*
★ var ary2 :number | string[] = [1,'2',3] 로 시도해봤을땐 여전히 에러가 나옴
그렇다면 무조건 괄호를 써줘야 되는건가?? 라는 물음엔 반은 맞고 반은 틀리다

:number | string[] 라는 type은 
숫자형(1234) 또는 배열형(["kim"]) 이 올수 있다는 뜻이다.
*/

// var 오브젝트: {data : number} = { data : '123' }

var obj: {data : number | string} = { data : '123' }

/* 
특징은 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라짐

array, object에 정의된 Union 타입은 OR 연산자가 유지됨 
*/


//마스터키 역할을 하는 any, unknown

let newName :any;
newName = 123;
newName = true;
//말그대로 어떤 타입이든 들어와도 된다는뜻
//하지만 typescript를 쓰는 이유가 없어지니 남발은 금지

let myName :unknown;
myName = 123;
myName = true;

//최신 typescript에선 unknown을 권장함
//any와 흡사하고 거의 같게 작동하지만 
//다른변수에 할당하려할땐 새로운변수의 type을 따라가서 오류가 발생됨
//any의 경우 새로운 변수타입을 따라가지 않고 그냥 type실드를 벗겨낸다

//ex : let nowName :string = myName; 는 오류를 잡아줌

//사칙연산같은경우 아무리 간단한 식이라도 확실한 type이 아니라면 에러를 발생시킴
//ex : 
/* 
let mathType :unknown;
mathType -1 (에러발생)

typescript는 엄격한걸 좋아함

같은이유로 
let age :string|number;
age +1 
이런것도 안됨 

너무 염격해서
let age :unknown = 1;
age -1;
같이 할당을 해준애들조차도 안된다.
사칙연산을 사용할땐 정확한 type을 지정해주도록 하자
*/ 

/*   easy test   */
/* 
let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];

변수 4개에 타입 지정하기
age면수엔 undifined말고 숫자로 가능
*/

let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];

/* 
let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
*/

let 학교 :{
    score :(number|boolean)[],
    teacher :string,
    friend :string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]




//함수에 타입지정하기

function fnc(x :number) :number {
    return x + 3
}
function fnc2(x :number) :void {
    x + 3
}

//파라미터에 타입이 지정이 되었다면 무조건 파라미터를 넘겨주지 않으면 오류가남

function fnc3(x? :number) {
    x + 3
}
//파라미터를 써도 되고 안써도 된다는 함수를 만들고 싶을땐 이렇게 사용하면 된다!\

/* 
x? :number는 x :number|undefined와 같다
*/

function func4(x :number|string) :void{
    x + 3 
}
//이건 타입이 어떤지 아직 확정되지 않아서 오류를 발생시킴 그걸 방지하려면 if문을 사용해야되는데
//그것보단  typeof같은 네로잉을 사용할것임

function riteName(name? :string) {
    if(name) {
        console.log(`안녕하세요 ${name}`)
    } else {
        console.log("이름을 입력해주세요")
    }
}

function canMarriage(money :number, house: boolean, Charm :string):string|void {
    let score :number = 0;
    score += money
    if(house === true){
        score += 500
    }
    if(Charm === "상"){
        score += 100
    }
    if(score >= 600){
        return "결혼가능"
    }
}
console.log(canMarriage(100,true,"상"))
