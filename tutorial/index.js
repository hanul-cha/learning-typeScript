//riteral type
let testName; //이제 여기엔 123이라는 숫자만 들어올수 있음
testName = 123;
function rsf(x) {
    return [x];
}
//lireral type의 문제점 
let myAry = {
    name: "kim"
};
function myFnc(a) {
}
let fnc1 = (a) => {
    return 123;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
let myFnc2 = (a, fnc1, fnc2) => {
    let result = fnc1(a);
    let result2 = fnc2(result);
    console.log(result2);
};
myFnc2('010-1111-2222', cutZero, removeDash);
