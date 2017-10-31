/**
 * Created by WEB-UID-JAVA on 2017/9/27.
 */
$(document).ready(function () {
    var timer=null;
    var index=0;

    $(".slider .banner_list").eq(0).show()
        .siblings().hide();
    $(".slider .sliderIndex [index]").mouseover(function () {
        index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".slider .banner_list").eq(index).show().siblings().hide();
    })

    function play(){
        index++;
        if(index<5){
            $(".slider .sliderIndex [index]").eq(index).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(index).show().siblings().hide();
        }else{
            index=0;
            $(".slider .sliderIndex [index]").eq(0).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(0).show().siblings().hide();
        }
    }

    function preplay(){
        index--;
        if(index<0){
            $(".slider .sliderIndex [index]").eq(4).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(4).show().siblings().hide();
            index=4;
        }else{
            $(".slider .sliderIndex [index]").eq(index).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(index).show().siblings().hide();
        }
    }

    $(".prev").click(function () {
        preplay();
    })

    $(".next").click(function () {
        play();
    })

});