$(document).ready(function(){
    $("#cart_allcheckbox").click(function(){
        if($("#cart_allcheckbox").prop("checked")){
            $(".all_check").prop("checked", true);
        }else{
            $(".all_check").prop("checked", false);
        }
    });

    $("#join_all_check").click(function(){
        if($("#join_all_check").prop("checked")){
            $(".join_all").prop("checked", true);
        }else{
            $(".join_all").prop("checked", false);
        }
    });

    $('.slider').slick({
        centerMode: false,
        slidesToShow: 1, // 한 화면에 보여질 개수
        dots: true, // 페이지네이션
        slidesToScroll: 1, // 스크롤 할 때 움직일 개수
        autoplay: true, // 자동으로 재생 flase
        autoplaySpeed: 5000, // 다음으로 넘어가는 시간
        arrows: true
    });

    $(".xd_btn").click(function(){
       $("#xd_box").toggleClass("xd") 
    });

    // $('.single-item').slick();
});
