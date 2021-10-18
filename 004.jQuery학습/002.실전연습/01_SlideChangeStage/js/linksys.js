//gnb링크 이동 셋팅하기 - linksys.js//

//원페이지이므로 gnb메뉴는 한 페이지 안에서 페이지 위치이동을 애니메이션 한다
// 동시에 페이지 위치표시자를 사용하여 페이지의 현재위치를 표시해 준다!
//현재 페이지에 해당하는 gnb는 클래스를 사용하여 마우스 오버시와 동일한 디자인을 준다

$(function(){//JQB////////////////

  //대상 : .gnb a + .indic a
  //-> gnb와 인디케이터는 구조가 똑같음
  //따라서 이미 구현된 클릭이벤트함수에 추가만해도 됨

  //대상 : .gnb a 
  
  $(".gnb a, .indic a").click(function(e){

    // 1.기본이동막기
    e.preventDefault();

    //2. 클릭된 a의 부모 li의 순번 알아내기
    //index()메서드 사용 -> 선택요소의 순번을 리턴!
    //parent(메서드는 a요소의 부모인 li로 올라간다
    //li는 순번이 0부터 읽어옴
    let idx = $(this).parent().index();

    console.log("메뉴클릭"+idx);

      //페이지이동을 위한 페이지번호(pno)는 
      //메뉴 클릭시의 순번인 idx와 같다!!
      //그래서 pno에 idx를 할당함
      pno = idx;//중요!!!

      ////////////////////////////////////////////////////////////////
        //3. 전체 윈도우(window)화면 높이값 단위로 이동위치 만들기
        let pos = $(window).height()*pno;
        //$(window).height()윈도우 높이값

        console.log("이동위치"+pos);

        ///////////////////////////////////////////////////////////////
        //////////4.실제위치로 페이지 이동하기
        //////////////////////////////////////////////////////////////
        //전체 스크롤 이동대상 : html, body
        //-> 두개 다 잡는게 브라우저 공통임
        $("html, body").animate({
          scrollTop: pos +"px"
        },800,"easeInOutCirc");

         ///////////5.현재 gnb메뉴의 li에 class넣기
        //대상: .gnb li + .indic li
        $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
        .siblings().removeClass("on");

  });///click/////////////////////





});////////////JQB//////////////////