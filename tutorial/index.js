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
//타입스크립트에서 사용가능한 키워드
/*
자바, c언어 같은곳에서 쓰는 객체지향키워드를 사용할수 있음
public private protected static같은것...
class를 많이 만드는 로직에서 유용함
*/
class User {
    constructor(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
}
//public 키워드를 사용하면 모든 자녀가 사용하고 수정이 가능하다
let user1 = new User("park");
user1.name = "안녕";
//이제까지 public을 안붙여도 똑같았는데 pubilc이 default값이라 그럼
//user1.age = "11"
//private키워드로 생성하면 위에처럼 접근해서 바꾸려해도 불가능하고 class내에서만 조작가능하다 
//함부로 변경하면 안되는 변수에 지정해준다
//혹시라도 class외부에서 private키워드로 선언된 변수를 변경하고 싶을땐
class User2 {
    constructor(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    changeLastName(b) {
        this.familyName = b;
    }
}
let user2 = new User2("민수");
user2.changeLastName("park");
//미리 함수를 만들어서 사용하면됨
//pubilc사용하면 필드에 적고 재할당하는 구간을 줄일수 있음
class Person {
    constructor(name) {
        this.name = name;
    }
}
const myperson = new Person("kim");
console.log(myperson); //{ name: "kim" }
//class 에서 사용가능한 protected
/*
위에 사용한 private를 사용하면 class내에서만 조작 가능하게 바뀐다.
하지만 estends하고 있는 자식 class에서도 조작이 안된다.
class끼리는 수정이 가능하고 외부에선 조작을 막아주는 키워드가 protected임
*/
class ParentUser {
    constructor() {
        this.x = 10;
    }
}
class ChildUser extends ParentUser {
    doIt() {
        this.x = 20;
    }
}
//이런식으로 참조된 클래스에선 조작가능함
//statc
class StaticUser {
    constructor() {
        this.y = 20;
    }
}
StaticUser.x = 10;
const children = new StaticUser();
console.log(children); //y: 20
//static 키워드를 붙이면 부모 class에 직접 부여됨 (자식에게 안물려줌)\
//extends해도 사용가능
class StaticClass {
    constructor() {
        this.intro = StaticClass.skill + `전문가입니다`;
    }
}
StaticClass.skill = "js";
//this.skill이런거 안됨 직접 부여되었기때문에 직접부여된 클래스로만 참조가능
//this.skill 이케쓸려면 클래스 내부에서 사용할수 있게 private, protected 쓰면된다
//외부에서 접근이 불가능하지만 
StaticClass.skill;
//이런식으론 당연히 가능
