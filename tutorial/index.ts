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

