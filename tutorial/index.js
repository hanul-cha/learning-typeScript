//함수에서 사용하는 never타입
const neverFnc = () => {
    throw new Error(); //에러를 던져줌으로서 함수가 끝나지않고 중단됨 1,2번 조건을 만족해서 never사용가능
};
/*
void와 비슷한 효과를 가지고 있지만 조건이 붙음
1. return이 없어야함
2. endPoint가 없어야함
(실행이 끝나지 않아야함)
*/
/*
사실 never는 거의 쓰이지 않는다 return이 없다면 void를 사용하면 되기때문
never같은 타입의 경우는 지정해서 사용한다기보단 함수를 만들다보면 생기는 문제중
하나기 때문에 알고 있어야 대처가 가능하다
*/
//ex
const strangeFnc = (parameter) => {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter); //커서를 parameter에 올려보면 타입이 never타입이다
    }
};
//파라미터 타입을 string으로 지정했기때문에 string타입만 들어올수 있기때문에
//else가 실행될 일이 없다.
//never : 그럴일이 없다
//ex2
const errFnc = function () {
    throw new Error();
};
//이렇게 화살표 함수뿐아니라 함수표현식에서도 아무것도 안남게 되면 never타입으로 지정된다
