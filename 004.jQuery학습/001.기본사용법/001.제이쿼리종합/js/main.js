//제이쿼리 기본 JS - main.js

////제이쿼리 로드구역///////////////////
//$(document).ready(function(){}); 길게 쓰는 방법//
$(function(){

  ///////////////////////////////////////////
  //1. 대상선정 변수할당////////////////
  ////////////////////////////////////////

  //대상1 : 버튼 -.btn button
  let btns = $(".btns button");

  //대상2 : 미니언즈 - .mi
  let mi = $(".mi");

  //대상3 : 빌딩 - .building li
  let bd =$(".building li");

  //대상4 : 메시지 - .msg
  let msg = $(".msg");

  /////////////////////////////////////////
  //2. 초기화 셋팅//////////////////////
  ///////////////////////////////////////

  //2-1. 모든 버튼 숨기고 첫번째만 보이게 하기
  btns.hide().first().show();
  //버튼들을 .숨겨() .첫번째()는 .보여()
  //주어는 하나! 뒤에 메서드 체인!

  ////////////////////////////////////////////////////
  //3. 버튼별 순서대로 클릭 이벤트 함수 만들기
  //////////////////////////////////////////////////

  //3-1. "들어가기" 버튼/////
   btns.first().click(function(){
     console.log("들어가기버튼");

     //미니언즈 이동하기
    // 대상 : .mi -> mi변수에 할당!

    // [ 애니메이트 메서드 ]
    // animate({css설정},시간, 이징, 함수)
    // - css설정에 따라 애니메이션 연출 메서드
    // -시간은 1/1000초(단위가 없음)
    // -이징은 가속도
    // -함수는 애니 후 실행코드(콜백함수)

    mi.animate({
      top: "500px",
      left: "500px"
    },2000);

   });/////////click/////////////




});///JQB/////////////////////////////////