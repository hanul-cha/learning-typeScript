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
