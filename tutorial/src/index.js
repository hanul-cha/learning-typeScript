"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
예전에 js에 import export가 없을땐 namespace를 사용했었음
*/
let test = "park";
/*
import같은게 없었기때문에 여러 스크립트를 html에 연결하는 방식을썻는데
그렇게 되면 변수가 곂쳐서 배열에 묶어 사용하게 됬는데 그게 namespace임
파일에 import하는 방법은
///<reference path='./a.ts' />이렇게 사용했다
*/
/*------generic------*/
const unknownFnc = (x) => {
    return x[0];
};
const u = unknownFnc([4, 2]);
/*
이때 변수 u의 타입은 number라고 생각할수도 있지만
unknown이다 타입스크립트에게 타입변경을 기대하지말자
*/
/*
console.log(u+1)
u가 확실한 값이 아니기때문에 내로잉을 해주던가 as를 붙이던가 해야함
그대신 쓸수 있는게 generic이다
*/
const unknownFnc2 = (x) => {
    return x[0];
};
const u2 = unknownFnc2([4, 2]);
//이런식으로 타입을 파라미터 처럼 넘겨줄수 있음
const minusFnc = (x) => {
    return x - 1;
}; //extends를 사용하면 우측타입이 있는지 검사해준다 
let werw = minusFnc(123);
const lenghtFnc = (x) => {
    return x.length;
};
const lenghtA = lenghtFnc("123");
console.log(lenghtA);
