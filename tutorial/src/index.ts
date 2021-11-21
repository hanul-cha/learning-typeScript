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
