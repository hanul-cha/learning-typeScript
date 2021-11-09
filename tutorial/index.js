//타입 확정하기 Narrowing & Assertion
//1. narrowing
function fnc1(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
fnc1(123);
function fnc2(x) {
    let ary = [];
    if (typeof x === "number") {
        ary[0] = x;
    }
}
fnc2(123);
//2. assertion
function fnc3(x) {
    let ary = [];
    ary[0] = x;
}
fnc3(123);
//as를 사용해서 이 타입은 number라고 지정해줄수 있음 하지만역시 남발금지
/*
예를들어 파라미터 타입이 string만 있는데 갑자기 as number이케 쓰면 안됨...
네로잉할때 쓰는건 맞지만 어떤타입이 들어올지 100% 확신할수 있을때 사용
*/
let kim = { subject: "math" };
let jane = { subject: ["science", "english"] };
let minsu = { subject: ["science", "art", "korean"] };
function myfnc(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
}
myfnc(jane);
let animal = "";
/*
const에 할당된 배열은 수정이 가능하다 const는 재할당을 막는 선언문이지 내부의 키값을
바꾼다고 경고를 발생시키진 않음 하지만 typescript에선 가능하다
*/
const boyFriend = {
    name: "hanul"
};
boyFriend.name = "hansol";
const girlFriend = {
    name: "ember"
};
let test = {
    size: 123,
    position: [1, 2, 3]
};
