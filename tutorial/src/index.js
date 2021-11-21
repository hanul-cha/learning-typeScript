//tutle type array자료형에 사용가능한 엄격한 타입
let dog = ["dog", true];
//응용
const spreadFnc = (...x) => {
    console.log(x);
};
spreadFnc(1, "2");
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
//3번째 인자 타입지정에 쓰인건 rest파라미터랑 비슷하게 작동함
let testArr = ['동서녹차', 4000, true];
let testArr2 = ['동서녹차', 4000, true, false, true, true, false, true];
const testFnc = (...a) => {
};
const testFnc2 = (...a) => {
    let myNumber = [];
    let myString = [];
    a.forEach(i => {
        if (typeof i === "string") {
            myString.push(i);
        }
        else {
            myNumber.push(i);
        }
    });
    const test = [myNumber, myString];
    return test;
};
console.log(testFnc2(1, "12", 123, "325"));
