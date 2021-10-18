//자동스크롤 기능 JS - autoScroll.js//

/////////////전역변수 구역/////////////
//현재페이지 번호
let pno = 0;
//전체페이지 개수 (상수로 설정하여 변경불가!)
const totnum = 7;
//광스크롤막기 상태변수 (0은 허용, 1은 불허용)
let psts = 0;


$(function(){////JQB////////////////////
  /* 
    [ 자동스크롤 구현 ]

    1.기능 : 마우스휠을 위나 아래로 작동시킬때 페이지가 위나아래로 자동으로 애니메이션되는 기능

    2. 이벤트 : 마우스휠을 움직일때 발생하는 이벤트는?
      -mousewheel(오리지널 이벤트) -> 파이어폭스 지원안함!
      -wheel (신규이벤트-벤더사의 웹표준이 아직아니다)
      -> 사파리가 지원안함!
      ->DOMMouseScroll(파이어폭스 전용이벤트)
      -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
        mousewheel, +DOMMouseScroll을 같이 사용할 것임!

    3. 마우스 휠 이벤트와 함수를 연결하는 방법 :
      - on(이벤트명,함수)
      -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
      (참고로 bind(이벤트명, 함수) 제이쿼리 버전3부터 지원중단!)

    4. 마우스휠 이벤트 대상 : 보통 document에 적용함!

    ※중요한 업데이트 유의사항!!
      document. body, window 객체는 이벤트를 막을 수 없다!
      -2019년도에 위의 세가지 중요객체에 대하여 기본기능 막기를 할 수 없도록
      브라우저 소스가 업데이트 되었는데 이유는 모바일에서 에러가 발생하는 문제의
      원인으로 지목되어 본 3가지 중요객체에 대해서는 e.preventDefault() 또는 return false를
      사용한 기능막기를 못하도록 하였다!

      예) 안되는 케이스
      $(document).on("click",fuction(){
        e.preventDefault(); -> 에러!!!
      });
      $(window).on("scroll",fuction(){
        return false; -> 에러!!!
      });
      $(body).on("mousewheel",fuction(){
       e.preventDefault(); -> 에러!!!
      });

      -> 에러를 우회하는 방법은 window, document,body대신에 
      내부에 전체부모박스를 하나 만들고 사용하는 방법이있다!
  */
      /////////////자동 스크롤 구현//////////////////////////////////
      //사용메서드 : on(이벤트명, 함수)
      //-> 이벤트명에 띄어쓰기로 여러개의 이벤트를 사용할 수 있다
      //이벤트명에 일반용과 파이어폭스용 이벤트를 모두 쓴다
      //해당되는 이벤트가 적용된다!
      //대상 :document
      $(document).on("mousewheel DOMMouseScroll",
      function(e){

        //기본막기 방법으로 하면 에러발생! 왜? document니까
        //e.preventDefault();
        //return false;
        //스크롤안되게 하려고 html, body에 css로 overflow:hidden을 줘서 기본기능을 대신 막는다
        //-> 원래 원페이지 자동스크롤 사이트는 스크롤바트랙대신 별도의 표시자(인디케이터)를 구현해 준다!

        // console.log("마우스 휠");

        ///////////////////////////////////////////////////////////
        ///0. 광스크롤 막기//////////////////////////////////////
        if(psts) return;//1이면 나가!
        psts =1;//막기
        setTimeout(() => {
          psts = 0; //해제
        }, 1000); //타임아웃//
        ///스크롤 이동시간만큼 막아준다!/////

        ///////////////////////////////////////////////////////////////////
        //1. 마우스휠 방향 알아내기(overflow:hidden으로 숨겨놔서)
        //////////////////////////////////////////////////////////////////

        //e변수로 들어오는 이벤트 전달값으로 알아낸다!
        e = window.event || e;
        //이벤트 전달값이 window오리지널 이벤트가 유효하면
        //사용할 수 있도록 보안코드를 작성해야한다
        //변수 = 경우1 || 경우2;
        //변수의 경우1과 경우2 중 true(유효한 것)이 먼저 할당됨!

        /* 
          [ 마우스 휠 방향 알아내기 위한 값 ->wheelDelta ]
          -휠델타란? 마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향, 이동거리 등의 정보를 제공
          -ie, chrome 등 브라우저 공용
          -opera브라우저는 detail을 사용한다
        */
        let delta = e.detail ? e.detail : e.wheelDelta;
        //delta변수에 유효한 설정이 적용되어 할당된다!
        //조건연산자(삼항연산자)-> 비?집:놀이동산;

        // console.log("휠델타:"+delta);

        //////////////////////////////////////////////////////////////////
        //2.마우스 휠 방향에 따라 페이지 번호 증감하기!
        ////////////////////////////////////////////////////////////////
        //전역변수에 페이지번호 변수가 필요하다 -> pno
        
        if(delta < 0){//-120 아랫방향 스크롤(다음페이지)
            pno++;//페이지번호 증감

        }////if//////////////////
        else{//120 윗방향 스크롤(이전페이지)
          pno--;//페이지번호 감소

        }//else////////////////
        console.log("페이지번호:"+pno);

        ////////////////////////////////////////////////////////////////
        //3. 이동할 페이지 위치값 알아내기(.page)위치값 알아내기
        let pos = $(".page").eq(pno).offset().top;
        //offset().top은 현재 선택요소의 top위치값

        console.log("이동위치"+pos);

      });////////////////////mousewheel이벤트////////////////////////









});////////JQB//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////