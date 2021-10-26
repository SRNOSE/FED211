// 파일럿 PJ 메인 JS - main.js

$(function(){//////////////////////////JQB///////////////////////////////

  //배너 드래그 기능 구현하기////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  //드래그 대상: .slide
  let slide = $(".slide");

  //드래그 기능주기->제이쿼리ui기능!
  slide.draggable({
    axis : "x" //x축 고정
  });////draggable//////////////////////////////


  /* 
    배너 드래그 이동의 기준:
    1.현재 슬라이드의 left :-100%값을 기준으로 판단함
    2. 오른쪽에서 들어오는 이동 -> left : -110%보다 작을때
    3. 왼쪽에서 들어오는 이동 -> left : -90%보다 클때
    4. 제자리로 돌아가는 이동 -> left가 -110%보다 크고 -90%작을때
    
    -> 구현 상 유의사항 : 실제로 이동시엔 px단위로 이동함
        따라서 %를 px로 변화해줘야 한다!
        예시) 가로크기:1000px->-100%->left : -1000px
                left : -110% ->left: -1100px(-1000*1.1)
                left : -90% ->left: -900px(-1000*0.9)
  */

 //윈도우 가로크기 구하는 함수
 let awin = ()=> $(window).width();
 //awin함수//
 //화살표함수 뒤에 중괄호{}없이 명령문 하나만 있으면 그게 바로return문이다
 //함수 호출하는 곳으로가져감!
   
   //윈도우 가로크기

   let win =awin();

   //화면크기 변경(resize)시 윈도우 가로크기 업데이트
   $(window).resize(()=>{

    win =awin();
    // console.log("윈도가로"+win);

   });//////resize//////////////////////////////////////////////


    console.log("윈도우가로크기는:"+win);

    //현재 슬라이드 위치값 구하기
    //슬라이드 위치값
    let spos;
    //이징변수
    let easing = "easeOutQuint";
    //화면커버(광드래그막기)
    let cover = $(".cover");
    //슬라이드 순번변수
    let sno = 0;//첫슬라이드는 0번(블릿li순번도 0번부터!)
    //블릿요소
    let indic =$(".bindic li");
    //슬라이드 개수
    let scnt = slide.find("li").length;
    // console.log("슬수"+scnt);

    //대상 .slide=slide변수
    //이벤트 :dragstop-> 드래그가 끝날때
   slide.on("dragstop", function(){

    //광드래그막기 커버보이기
    cover.show();
    
     //슬라이드 위치값 구하기
     spos = slide.offset().left;
     //offset().left화면 왼쪽 기준선 left위치
     console.log("슬위"+spos)

     ///////////////이동 구현하기///////////////////////////////////
     //1. 오른쪽에서 들어오는 이동 
     //->  슬라이드의 left값이  -110%보다 작을때
     //-110% 구하기-> -win*1.1

     if(spos < -win*1.1){

      //슬라이드가 -200% 위치로 이동한다
      //stop()매서드는 animate가 큐에 쌓이는 것을 막는다!
        slide.stop().animate({
        left: -win*2+"px"
      }, 600,easing, function(){//콜백함수(이동후)
        //첫번째 슬라이드li를 맨 뒤로 보내기
        //변경대상:slide
        slide
        .append(slide.find("li").first())
        //이때 left값을 -100%위치로 고정해야함
        .css({
          left:-win+"px"});

          //광드래그 커버 지우기
          cover.hide();

          //배너글자 등장함수 호출!
          showTxt();
          //아랫쪽의 sno변경이 먼저이루어짐!

      });/////////animate콜백함수///////////////

      //블릿순번 변경하기 : 오른쪽이동은 증가
      sno++;
      //한계수:슬라이드 수와 같아지면 첫번호로!
      if(sno===scnt) sno=0;

      //블릿변경함수 호출
      chgIndic();
      

     }/////////////if문 : -110%보다 작을때////////////////////

     //2. 왼쪽에서 들어오는 이동 
     //->  슬라이드의 left값이  -90%보다 클때
     //-90% 구하기-> -win*0.9

      else if(spos > -win*0.9){

      //슬라이드가 0위치로 이동한다
      slide.stop().animate({
        left: "0px"
      }, 600,easing,function(){//콜백함수(이동후)
        //대상: .slide-> slide변수
        slide
        // 맨뒤의 슬라이드 li를 맨앞으로 이동
        .prepend(slide.find("li").last())
        //left값을 원래 위치인 -100%로 변경
         .css({
           left:-win+"px"});
          //광드래그 커버 지우기
          cover.hide();

      });/////////animate콜백함수///////////////

         //블릿순번 변경하기 : 왼쪽이동은 감소
      sno--;
        //한계수:-1이 되면 마지막 번호로(슬개수-1)
        if(sno===-1) sno=scnt-1;

         //블릿변경함수 호출
         chgIndic();

     }/////////////else if문 : -90%보다 클때////////////////////

     //3. 사이범위 일때 제자리로 돌아오기///
     //-110% < 범위 < -90%
     else{
        //슬라이드가 원위치로 돌아온다
      slide.stop().animate({
        left: -win+"px"
      }, 300,easing,function(){//콜백함수(이동후)
         //광드래그 커버 지우기
         cover.hide();


      });/////////animate///////////////

     }/////else문: 사이범위///////////

     
    });//////////drag//////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    
    //블릿변경함수
    let chgIndic = ()=>{


      //블릿변경하기 : .bindic li->indic변수
      indic.eq(sno).addClass("on")
      .siblings().removeClass("on");
     //  console.log("블순:"+sno);
     
    };///////////chgIndic 함수/////////////

    ////배너등장택스트////
    let banTxt =[
      "Men's Season<br>Collection",
      "2021 Special <br> Collection",
      "GongYoo<br>Collection",
      "T-shirt<br> Collection",
      "Shoes<br> Collection",
      "Wind Jacket<br> Collection"
    ];
    /////////배너 글자 등장 함수///////////////////////////////////////////
    let showTxt=()=>{
      // console.log("슬순"+sno);
      
      //0. 있을수도 잇는 .btit박스 지우기!
      $(".btit").remove();

      //1.배너글자 박스 넣기
      //대상: .slide li(해당순번li)
      slide.find("li").eq(sno)
      .append('<h2 class="btit"></h2>');

      //2.배너 글자박스 css
      $(".btit")//주인공
      .css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate (-50%, -50%)",
        font: "bold 4.5vmax Verdana",
        color: "#fff",
        textShadow:"1px 1px 3px #777",
        whiteSpace: "nowrap"

      })/////////////////css/////////////////////
      //3. 글자넣기-주인공에서 이어짐!
      .html(banTxt[sno]);
      
    };////////////////////////////showTxt함수/////////////////////////////



  
  
  

});///////////////////////////////////////JQB///////////////////////////////
