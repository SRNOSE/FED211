//보그 코리아 링크 시스템 JS - linkssys.js//
$(function(){///JQB///////////////////////////

  console.log("링크시스템 로딩구역");


  //1. 로고클릭시 첫페이지로 가기!
  //대상 : .logo a
  $(".logo a").click(function(){
    location.href = "index.html";
  });////click/////////////////////////

  ///2. GNB메뉴 링크 연결하기///
  //대상 : .gnb a
  //이벤트 : click -> click()메서드 사용
  $(".gnb a").click(function(e){//e는 이벤트 전달변수(꼭 써줘야 한다!!)
    //e-이벤트전달변수: 여러가지 이벤트관련 설정가능!
    //1.기본이동속성 막기(a태그는 위로 살짝 튀는 성질이 있다)
    e.preventDefault();
    //preventDefault() 기본이벤트 발생을 막아준다!
    //e라는 이벤트 전달변수를 꼭 써야함!

    //2. 클릭된 a요소의 택스트 읽어오기
    let mtxt = $(this).text().toLowerCase().trim();//innerText는 쟈스~
    //toLowerCase()-> 소문자 변환 메서드
    //toUpperCase()-> 대문자 변환 메서드
    // -> 메뉴가 대문자인데 GET방식으로 넘길때 소문자로 넘기고자 함, 그래서 변환!
    // ->SUB페이지에서 소문자로 넘긴 파라미터를 활용함!

    //trim() 메서드 : 문자데이터 앞뒤공백제거
    //-> 마지막 search아이콘 클릭시 앞뒤공백있는 "search"라는 글자가 나온다! 이것의 앞뒤공백을 제거한다

    console.log(mtxt);

    //3. 페이지 이동하기 : url뒤에 ? (물음표) 키=값 쌍으로 보냄
    if(mtxt !=="search")//search가 아닐때만 이동한다.if문 하나면 중괄호 생략가능
      location.href = "sub.html?cat="+mtxt;
    //cat이라는 키이름은 내가 지은 것, 키=값 데이터를 맞추기 위함

  });////click이벤트////////////////////////////





})////JQB//////////////////////////////////////