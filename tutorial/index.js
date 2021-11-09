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
myFnc(myAry.name);
/*
이걸보면 왜 안되냐고 할수 있음 언뜻보기엔 파라미터가 똑같은 모양이니까
여기서 놓치고 있는건 파라미터에 지정된 타입이 "kim" 이라는것이다
myAry에 타입은 string이고 a의 타입은 "kim"이다 그러니까 안됨

이건 여러가지로 해결가능한데 그중하나가 as const이다
let myAry = {
    name:"kim"
} as const
이렇게 사용하는데 readonly로 바꿔주고 할당된 값 자체를 type으로 지정해준다
*/ 
