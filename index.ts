//tip : 초보 typescript사용자들은 온통 변수에 type지정을 해버림 
//typescript는 대부분 자동적으로 type을 생성해줌
//간단한 변수들은 타입을 생략할수 있도록하지만 가시성을 위해 사용해도 좋음



//easy test

/* 
1. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

*/

let Favorite :{ song :string, singger :string } = {
    song : "요즘",
    singger : "양다일"
}




/* 
2. 다음과 같이 생긴 자료의 타입지정을 해보자

let project = {
    menber : ["kim", "park"],
    days : 30,
    started : true,
}

project 변수 우측에 적으면 됩니다. 

member 안엔 문자로 가득한 array만 들어올 수 있고 

days는 숫자, started는 true/false만 들어올 수 있습니다. 
*/

let project :{menber :string[], days : number, started :boolean} = {
    menber : ["kim", "park"],
    days : 30,
    started : true,
}