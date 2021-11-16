// 함수 rest파라미터, destructuring 할 때 타입지정
/*
rest 파라미터는 함수에 파라미터가 몇개들어올지 미리 정의가 불가능한 경우 사용한다
몇개를 파라미터를 넘겨주든 전부 배열에 담기기 때문에 타입지정도 배열형태의 타입지정을 해주면된다
spread operator와는 다른아이니 햇갈리지 말자
*/
/*
destructuring 문법은 react많이 쓴는 사람이면 익숙할텐데
*/
let [prop1, prop2] = ["hi", 123];
let people = {
    student: true, age: 20
};
let { age } = people;
//이런거
let myObj = {
    student: true,
    age: 20
};
const myfnc = ({ student, age }) => {
    console.log(student, age);
};
myfnc(myObj);
//이런거
const maxNumber = (...num) => {
    let maxNum = 0;
    num.forEach(i => {
        if (maxNum < i) {
            maxNum = i;
        }
    });
    return maxNum;
};
console.log(maxNumber(4, 2, 6, 2, 9));
const myObj2 = {
    user: "kim",
    comment: [3, 5, 4],
    admin: false
};
const myFnc2 = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
myFnc2(myObj2);
const myAry = [40, "win", false];
const myFnc3 = ([a, b, c]) => {
    console.log(a, b, c);
};
myFnc3(myAry);
const animalFnc = (animal) => {
    if ('swim' in animal) { // Fish타입인지 검사하는 조건문
        animal.swim;
    }
};
const myWheel = (x) => {
    if (x.wheel === "4개") {
    }
};
//두가지 타입둘다 wheel를 가지고 있어서 접근가능함 
/* && */ 
