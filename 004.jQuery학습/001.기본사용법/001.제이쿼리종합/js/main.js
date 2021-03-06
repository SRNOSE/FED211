// 제이쿼리 기본 JS - main.js 

////////////// 제이쿼리 로드구역 ////////////////
$(function(){ //////// jQB /////////////////////

    /// 타이틀 오버시 글자색,배경색 변경
    // 대상: .tit
    let tit = $(".tit");
    
    // mouseover() 메서드 - 오버시 함수연결
    tit.mouseover(function(){
        // 변경대상: .tit -> 나자신 this키워드
        $(this).css({
            color: "hotpink"
            // background: "yellow"
        });/// css ////
    }); //////// mouseover ////////////////

    // 마우스 아웃시 원상복귀
    // mouseout(함수) - 마우스 아웃시 함수연결 
    tit.mouseout(function(){
        // 변경대상: .tit -> 나자신 this키워드
        $(this).css({
            // color: "yellow",
            // background: "pink"
        });/// css ////
    }); //////// mouseover ////////////////



    /////////////////////////////////////////
    /// 1. 대상선정 변수할당 /////////////////
    /////////////////////////////////////////

    // 대상1 : 버튼 - .btns button
    let btns = $(".btns button");

    // 대상2 : 민이세라 - .mi
    let mi = $(".mi");

    // 대상3 : 빌딩 - .building li
    let bd = $(".building li");

    // 대상4 : 메시지 - .msg
    let msg = $(".msg");

    // 이미지 태그 셋업
    let mz1 = '<img src="images/eel.png" alt="좀비1" class="mz eel">';
    let mz2 = '<img src="images/ein.png" alt="좀비2" class="mz">';
    let zom = '<img src="images/zom.png" alt="좀비들" class="mz">';

    // 소주병 태그 셋업
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';

    // 우리사진 가로크기 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width()*0.05;
    // console.log("가로크기5%:" + win5);
    // width() 선택요소의 가로크기 구하기
    // height() 선택요소의 세로크기 구하기
    // -> 단위없는 px값

    ///////////////////////////////////////////
    /// 2. 초기화 셋팅 /////////////////////////
    ///////////////////////////////////////////

    // 2-1. 모든 버튼 숨기고 첫번째만 보이게하기
    btns.hide().first().show();
    // 버튼들을 .숨겨() .첫번째()는 .보여()
    // 주어는 하나! 뒤에 메서드 체인!

    // 2-2. 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 메뉴넣기
    // each(function(idx,ele){구현부})
    // -> 선택요소를 순서대로 돌면서 구현부를 실행하는 메서드
    // -> idx 전달변수는 순번이 전달됨(0부터)
        // (idx -> index에서 나온말로 변수명 사용)
    // -> ele 전달변수는 요소자신(this키워드와 동일)
        // (ele -> element에서 나온말로 변수명 사용)
    // - 참고로 idx, ele변수면은 변경가능. 변수의 순서중요!
    // - 이 메서드를 사용하면 for문을 안써도 됨!
    bd.each(function(idx,ele){
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2.메뉴+소주병 넣기
        if(idx===9)
            $(ele).append(mz1);
        else if(idx===7)
            $(ele).append(mz2);
        else if(idx===1)
            $(ele).append(zom);
        else if(idx===2)
            $(ele).append(inj);

    }); ////// each //////////////////

    // 2-3.이미지 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅됨!


    //////////////////////////////////////////////////
    // 3. 버튼별 순서대로 클릭 이벤트 함수 만들기 //////
    //////////////////////////////////////////////////

    // 3-1. '들어가기' 버튼 ///////
    btns.first().click(function(){
        console.log("들어가기 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(8); // 8번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지의 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //
            
            // 5. 메시지변경
            // 메시지요소
            msg
            // 메시지 넣기
            .text("꼬르륵~ 배고프다! 밥먹으러 가자!!!")
            // 나타나기
            .fadeIn(200);
            // 한번 선택하고 이어서 메서드를 계속
            // 쓰는 방법을 메서드 체인이라고 함!
            // 중간에 이어서 쓸땐 세미콜론 없어야함!

            // 6. 다음변경 버튼 보이기
            btns.eq(1).slideDown(400);

        }); ////////// animate //////////

    }); ///// 3-1. '들어가기' 버튼 click ////////

    // 3-2. '옆방으로!' 버튼 //////////////////
    btns.eq(1).click(function(){
        console.log("옆방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(9); // 9번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // setTimeout(함수,시간)
            // -> JS내장 타이밍함수 : 일정시간뒤 함수 한번실행
            // setTimeout(()=>{},1/1000초)

            // 5. 메뉴 나타나기! (콜백에서 2초후)
            setTimeout(() => {
                // 현재li(tg변수)에 있는 메뉴만 보여라!
                tg.find(".mz").fadeIn(300);
                // find(요소) 하위 중 자손요소 찾기!

                // 6. 메시지변경
                msg.html("와!;;;; 장어덮밥!<br>너무 마이쪙!")
                .css({left: "-100%"})
                .delay(500).fadeIn(200);
                // delay(시간) - 애니메이션 앞에서 지연시간주기
    
                // 7. 다음변경 버튼 보이기
                btns.eq(2)
                .delay(700).slideDown(400);
                // 0.5초 기다리고 0.2초 나타난 메시지 기다린 후(0.7초)
                // 실행

            }, 2000); /// 타임아웃함수 ////////

        }); ////////// animate //////////

    }); /// 3-2. '옆방으로!' 버튼 click ////////

    // 3-3. '윗층으로!' 버튼 //////////////////
    btns.eq(2).click(function(){
        console.log("윗층으로!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(7); // 7번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 5. 메시지변경
            msg.text("여긴 어떤 커피가 맛있어요?")
            .delay(500).fadeIn(200);

            
            // 6. 아인슈페너 나타나기! (콜백에서 2초후)
            setTimeout(() => {
                // 현재li(tg변수)에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300);
                // find(요소) 하위 중 자손요소 찾기!

                // 6. 메시지변경
                msg.text("저희는 아인슈페너 맛집입니다.");
                // delay(시간) - 애니메이션 앞에서 지연시간주기
    
                // 7. 다음변경 버튼 보이기
                btns.eq(3)
                .delay(700).slideDown(400);

            }, 2000); /// 타임아웃함수 ////////

        }); ////////// animate //////////

    }); /// 3-3. '윗층으로!' 버튼 click ////////

    // 3-4. '다시옆방으로!' 버튼 //////////////////
    btns.eq(3).click(function(){
        console.log("다시옆방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(6); // 6번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 5. 메시지변경
            msg.text("시몬형제~~")
            .css({left:"100%"})
            .delay(500).fadeIn(200);

            // 6. 다음메시지: 2초후 변경하기
            setTimeout(() => {
                msg.html("회개하세요!!!!!!");

                // 버튼보이기
                btns.eq(4).fadeIn(200);

            }, 2000);


        }); ////////// animate //////////

    }); /// 3-4. '다시옆방으로!' 버튼 click ////////

    // 3-5. '윗층으로!' //////////////////
    btns.eq(4).click(function(){
        console.log("윗층으로!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(4); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 5. 메시지변경 : 1초후
            setTimeout(() => {
                msg.empty() // empty() 선택요소 텍스트 데이터 지우기
                .fadeIn(200,()=>{msg.text("부.");})
                .delay(1500).fadeIn(200,()=>{msg.text("부.끄.");})
                .delay(1500).fadeIn(200,()=>{msg.text("부.끄.러...");});
                // msg요소 뒤에 delay와 fadeIn 애니메이션을
                // 이어서 하면 순서대로 msg에 애니메이션이 쌓여서
                // 하나씩 실행된다! (이것을 애니메이션 큐에 쌓인다고함!)
                // 큐(Queue)는 브라우저 프로그램 실행 메모리 저장소

            }, 1000); /////// 타임아웃 //////////

            setTimeout(() => {
                bd.eq(7).find(".mz")
                // 윗층으로 올라오기 -> 타겟의 높이만큼(li하나높이)
                .animate({
                    // top: -tg.height() + "px"
                },500)
                // 주인공에게 달려들기 -> 타겟의 가로값의 1.5배
                .animate({
                    // right: tg.width()*1.5 +"px"
                },
                3000,"easeOutBounce",function(){
                    // 애니후 주인공 이미지 변경하기!
                    mi.find("img").attr("src","images/heart.png");
                    // attr(속성명,값) - 선택요소의 속성바꾸기
                    // attr(속성명) - 선택요소의 속성값 가져오기
                    
                    // // 메시지 변경하기
                    // msg.html("");
                    // 다음버튼 보이기
                    btns.eq(5).fadeIn(200);
                });
                
                // 가속도 easing 주기(이징명이 정확해야함!)
                // jQuery UI를 라이브러리 아래 추가함!
                // - jQuery UI는 제이쿼리 원본개발자들이
                // 추가개발하여 배포한 플러그인이다!
                // 드래그/드롭, 달력, 아코디언, 이징, 컬러애니 등
                // : 다운로드 사이트에서! 
                // https://jqueryui.com/easing/ -> 이징기능
                // 이징 미리보기: 구글에서 "easing" 검색 첫번째 결과
                // https://easings.net/ko


                
            }, 4000); /////// 타임아웃 /////////


        }); ////////// animate //////////

    }); /// 3-5. '윗층으로!' click ////////


    // 3-6. '대지식당!'//////////////////
    btns.eq(5).click(function(){
        console.log("저녁먹으러 가자!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(2); // 2번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 1. 소주병 돌기! (소주병은 하나뿐)
            // 주의: transform은 animate지원불가!
            // -> css의 transition설정으로 애니메이션할것!
            $(".inj").css({
                transform:"rotate(-150deg)",
                transition:".5s ease-out 1s", // 속시이지 (지연시간 1초)
                zIndex: "9999" // 주인공보다 위!
            });//////// css ////////////

            // 소주병 후(1.5초후) 다시 민이세라 부끄
            setTimeout(() => {
                // 민이세라 이미지 변경하기
                mi.find("img").attr("src","images/u&i.png");

                // 메시지넣기
                msg.text("소주한잔 할까~?").fadeIn(200)
                .delay(2000).fadeIn(100,
                    ()=>{
                        msg.html("소주엔 삼겹살이지!");
                    }); //// fadeIn /////////////

                // 소주병 없애기
                $(".inj").remove();
                // remove() 선택요소 삭제하기

                // 다음버튼 보이기
                btns.eq(6).fadeIn(8000);

            }, 1500); /////// 타임아웃 //////////


        }); ////////// animate //////////

    }); /// 3-6. '대지식당!'click ////////



    // 3-7. '3번방으로!' 버튼 //////////////////
    btns.eq(6).click(function(){
        console.log("아님 홍콩음식 먹을까?");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(3); // 3번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 미니언즈를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 메시지 보이기
            msg.text("2차는 간단하게 와인?").fadeIn(800);

            // 다음버튼 보이기
            btns.eq(7).fadeIn(1000);

        }); ////////// animate //////////

    }); /// 3-7. '3번방으로!' 버튼 click ////////



    // 3-8. '1번방으로!' 버튼 //////////////////
    btns.eq(7).click(function(){
        console.log("1번방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(1); // 1번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 메시지 보이기
            msg.text("이젠 젠가하러 가자~").fadeIn(1200);

            // 다음버튼 보이기
            btns.last().fadeIn(1400);

        }); ////////// animate //////////

    }); /// 3-8. '1번방으로!' 버튼 click ////////



    // 3-9. '헬기를 호출!' 버튼 //////////////////
    btns.last().click(function(){
        console.log("헬기를 호출! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 3. 이동할 빌딩 li의 위치정보 알아내기!

        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(0); // 0번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 이미지를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 4. 민이세라 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //

            // 메시지 보이기
            msg.text("아냐!! 오빠가 헬기 불렀어").fadeIn(200);

            //  택시!!!
            bd.eq(1).find(".mz")
            .fadeIn(200,function(){ // 콜백함수 (애니후 실행)

                // 택시 움직이기
                // this키워드 === bd.eq(1).find(".mz")
                $(this).animate({
                    right: tg.width()*1.3 + "px"
                    // li하나의 width크기의 1.3배만큼 right에서 이동
                }, 5000); ///// animate ////

                // 헬기 등장
                $(".heli").animate({
                    left: "20%"
                }, 2000, function(){ // 콜백함수(애니후)

                    // 주인공이 헬기에 탄 이미지로 변경!
                    $(this).attr("src","images/heli2.png");

                    // 주인공 지우기(헬기에 탔으니까!)
                    mi.hide();//display:none처리!
                    
                })
                .delay(1000) // 1초지연
                .animate({
                    // 조금 이동하기
                    left: "70%"
                },2000,function(){ // 콜백함수 (애니후)
                    // 헬기 탑승 후로 이미지 변경!
                    $(this).attr("src","images/heli3.png");
                }) //// animate ////
                .animate({ // 마지막 화면밖으로 10초간 천천히 나감
                    left: "100%"
                }, 9000, function(){ // 콜백함수 (애니후)
                    // 대상: .tit -> tit변수
                    tit.addClass("on");
                    // addClass(클래스명) - 선택요소에 class넣기
                    
                    // 3초후에 class "on2" 넣기
                    setTimeout(() => {
                        // 타이틀 두번째 액션 클래스넣기
                        tit.addClass("on2");
                        bd.parent().addClass("on");
                    }, 3000);

                }); //// animate /////

            }); ///////// fadeIn //////////////


        }); ////////// animate //////////

    }); /// 3-9. '헬기를 호출!' 버튼 click ////////






}); ////////// jQB ///////////////////////////
//////////////////////////////////////////////