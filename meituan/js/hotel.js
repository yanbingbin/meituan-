/**dropdown**/
$(".dropdown").hover(function(){
  var $this=$(this);
  $this.children(".dropdown-menu").addClass("active").show();
},function(){
  $(this).children(".dropdown-menu").removeClass("active").hide();
})
$(".header-categorys-box").hover(function(){
  var $this=$(this);
  $(".header-categorys-list").show()
      .prev().children().children().css("transform","rotate(-135deg)");
},function(){
 $(".header-categorys-list").hide()
     .prev().children().children().css("transform","rotate(45deg)");
})
//酒店图片详情的点击
$(".hotel-img-sm").on("click","li",function(){
  var $this=$(this);
  var sr=$this.children().attr("src").replace("sm","lg");
  $this.css("border-color","#31BBAC").siblings().css("border-color","transparent");
  $(".hotel-img-info div.hotel-img-lg").css("background-image","url("+sr+")");
})
/*酒店列表中，共有几个产品*/
$(".book-info").on("click",".active-tab",function(){
  var $this=$(this);
  var $tab=$this.parent().parent().next();
  if($tab.hasClass("active")){
    $tab.removeClass("active").hide();
    $(this).children(".icon-triggle").css({
        "border-bottom-color":"transparent",
        "border-top-color":"#666",
        "margin":"-4px 5px"
    })
  }else{
    $tab.addClass("active").show();
    $(this).children(".icon-triggle").css({
        "border-bottom-color":"#31BBAC",
        "border-top-color":"transparent",
        "margin":"2px 5px"
    })
  }
})
//交通位置
$(".map-container").on("click","li",function(){
  var $this=$(this);
  var index=$this.index();
  $this.css({
     "color":"#31BBAC",
    "border-bottom":"2px solid #31BBAC"
  }).siblings().css({
    "color":"#666",
    "border-bottom":"none"
  })
  console.log($this);
  console.log(index);
  $(".map-details .map-it:eq("+index+")").show().siblings(".map-it").hide();
})