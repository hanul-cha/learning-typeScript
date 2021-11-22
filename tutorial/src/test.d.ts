//.d.ts는  타입정의 보관용 파일이다
export type Age = number
export interface Person {
    name: string
}

/* 
typescript는 기본적으로 글로벌모듈파일로 생성되는데
.d.ts이런 데피니션파일은 예외다 그리하야 쓰고 싶으면 export해줘야 한다
그런데 이것도 많아지고 전역에서 써야하는 이유가 생긴다면
tsconfig옵션으로 전역으로 만들어 줄수 있다. 키워드는 tsconfig폴더에서 확인
*/