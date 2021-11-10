//타입스크립트로 HTML 변경과 조작 할때 주의점

let titleH4 = document.querySelector("#title");
//위에 변수엔 ts입장에선 잘 찾은건지 틀린건지 아직 모름 즉 null또는 알맞은값 두가지가 올수 있음

if (titleH4 != null) {
    titleH4.innerHTML = "반가워용"
}
//그래서 narrowing을 해줘야함

//instanceof를 쓰는법
if (titleH4 instanceof Element) {
    titleH4.innerHTML = "반가워용"
}

//엘리먼트를 넣은 변수자체에 as 를 사용해 내로잉해줄수 있지만 별로 같음
// ex) let titleH4 = document.querySelector("#title") as Element

//옵셔널체이닝을 사용하는방법 이것도 내로잉으로 인정한다고한다
if (titleH4?.innerHTML != undefined) {
    titleH4.innerHTML = "반가워용"
}


//2번째 instanceof를 사용하는게 제일 좋을거같다.
/* 
instacneof는 prototype의 참조 여부를 찾아 반환하는것이기 때문에
보다 정확한 타입을 입력해주어야 한다 typescript에선 아주 여러가지 타입을 제공함
*/
let myLink = document.querySelector('.link');
if(myLink instanceof HTMLAnchorElement) {
    myLink.href = 'http://kakao.com'
}
/* 
HTMLAnchorElement타입은
href뿐 아니라 style, class 이런것들도 쓸수 있다
*/

let myBtn = document.getElementById('button');
/* myBtn?.addEventListener("click", function(){
    console.log("안녕")
}) */
//이런식으로 옵셔널 체이닝으로 해결할수도 있음

if(myBtn instanceof HTMLButtonElement) {
    myBtn.addEventListener("click", function(){
        console.log("안녕")
    })
}

