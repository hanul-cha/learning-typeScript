/* 
브라우저는 js밖에 못읽기때문에 js로 변환시켜줘야함 

tsc -w 켜놓으면 실시간으로 컴파일 해줌
*/

/* 
들어올수 있는 타입
string
number
boolean
null
undefined
bigint
[]
{}
등등
*/



let useName :string = "cha"; //이변수엔 문자형만 들어올수 있음

let aryName :string[] = ["cha", "kim", "moon"]

let abjName :{ name? : string } = { name : "cha" } 
//name이라는자료가 들어올수도 있고 아닐수도 있음... 
//이건 name대신 다른 속성이 들어와도 된다는게 아닌 속성이 아예없어도 오류를 내지 않기위함임

let multiName :string | number = "cha"; //문자형 또는 숫자형 둘다 올수 있음 

//지정할 타입이 길다면 변수로 할당해 사용할수도 있음
type Mytype = string | number; //type을 선언할땐 대문자로 선언해주는게 관례임

let newName : Mytype = 123;

//함수의 타입지정
function fnc(x :number) :number {
    return x * 2
}
//이 함수에서 파라미터는 number로, return값은 number로 되어야 한다는 뜻임


//배열의 위치에 따른 타입지정
type Menber = [number, boolean];
let john:Menber = [123, true];

//오브젝트에서 여러가지 속성에 같은 타입지정
type ObjMember = {
    [key : string] : string
}
//string속성의 키들의 값은 string이어야 한다는 뜻
let jhop : ObjMember = { name : "kim", age : "123" }

//class

class User {
    name :string
    constructor(name :string){
        this.name = name;
    }
    showname() {
        console.log(this.name)
    }
}

new User("jane")