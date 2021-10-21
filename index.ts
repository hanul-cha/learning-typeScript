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

let abjName :{ name? : string } = { name : "cha" } //name이라는자료가 들어올수도 있고 아닐수도 있음...

let multiName :string | number = "cha"; //문자형 또는 숫자형 둘다 올수 있음 