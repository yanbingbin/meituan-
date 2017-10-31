$(()=> {
  $("#help-list").on("click", "a", function (e) {
    e.preventDefault();
    var $a = $(this), $li = $a.parent(), id = $a.attr("href"), $tar = $("#" + id);
    $li.addClass("selected").siblings().removeClass("selected");
    $tar.removeClass("hide").addClass("show").siblings("div").removeClass("show").addClass("hide");
  });
  $("#selfsevice-tags").on("mouseenter", "li", function () {
    var $li = $(this);
    if($li.attr("data-tar")==null){
      var y=parseInt($li.children().children("b").css("backgroundPositionY").slice(0,-2));
      $li.children().children("b").css("backgroundPositionY",y+62);
      $li.children().children("span").addClass("hover");
    }
  }).on("mouseleave", "li", function () {
    var $li = $(this);
    if($li.attr("data-tar")==null){
      $li.children().children("span").removeClass("hover");
      var y=parseInt($li.children().children("b").css("backgroundPositionY").slice(0,-2));
      $li.children().children("b").css("backgroundPositionY",y-62);
    }
  }).on("click","li a",function(e){
    e.preventDefault();
    var $a=$(this);
    var $li=$a.parent();
    if($li.attr("data-tar")==null){
      var $li1=$li.attr("data-tar","tar").siblings("[data-tar=tar]");
      var y=parseInt($a.children("b").css("backgroundPositionY").slice(0,-2));
      $li1.children().children("span").removeClass("hover");
      $li1.children().children("b").css("backgroundPositionY",y-62);
      $a.children("i").addClass("arrow").css("display","block");
      $li1.children().children("i").removeClass("arrow").css("display","none");
      $li1.attr("data-tar",null);
      var id=$a.attr("href");
      $(id).css("display","block").siblings(":not(ul,br,p)").css("display","none");
    }
  })
})

//#faq   #newbie  --start--
$("#help #faq>.faq-nav>.current>a").css({"backgroundColor":"#2BB8AA","color":"#fff"});
$("#help #faq>.faq-nav").on("click","li",function(){
  var $that=$(this);
  if(!$that.hasClass("current")){
    $that.addClass("current").children().css({"backgroundColor":"#2BB8AA","color":"#fff"});
    $that.siblings().removeClass("current").children().css({"backgroundColor":"#fff","color":"#2BB8AA"});
  }
})
$("#help #faq ul div.accordion_item,#help #newbie ul div.accordion_item").removeClass("expended").hide();
$("#help #faq ul.accordion_fold,#help #newbie  ul.accordion_fold" ).on("click","li .accordion_head",function() {
  var $this = $(this);
  if($this.next().hasClass("expanded")){
    $this.next().hide().removeClass("expanded")
      .prev().children("i").css({"borderBottomColor":"transparent","borderTopColor":"#999","top":"28px"});
  }else{
    $this.next().addClass("expanded");
    var $siblings=$this.parent().siblings().children("div .accordion_item");
    $siblings.removeClass("expanded").hide()
      .prev().children("i").css({"borderBottomColor":"transparent","borderTopColor":"#999","top":"28px"});
    $("div.expanded").show()
      .prev().children("i").css({"borderTopColor":"transparent","borderBottomColor":"#999","top":"25px"});
  }
})
//#faq   #newbie  --end--
//第7节
$("#help #zhilian ul div.nav-hide,#help #reservationfaq ul div.nav-hide").removeClass("expended").hide();
$("#help #zhilian ul.nav-show,#help #reservationfaq ul.nav-show").on("click","h4.nav-down",function() {
    var $this = $(this);
    if($this.next().hasClass("expanded")){
        $this.next().hide().removeClass("expanded")
            .prev().children("i").css({"borderBottomColor":"transparent","borderTopColor":"#999"});
    }else{
        $this.next().addClass("expanded");
        var $siblings=$this.parent().siblings().children("div .nav-hide");
        $siblings.removeClass("expanded").hide()
            .prev().children("i").css({"borderBottomColor":"transparent","borderTopColor":"#999"});
        $("div.expanded").show()
            .prev().children("i").css({"borderTopColor":"transparent","borderBottomColor":"#999"});
    }
})

//5,6

$("#help #bookfaq .nav-show li,#help #seatfaq .nav-show li").click(function(e){
  var $h4 = $(this).children(".nav-down");
  var $i = $(this).children(".nav-down").children("i");
  var contentDiv = $h4.next();
  if(contentDiv.css("display")=="none"){
    contentDiv.slideDown();
    $i.css({"borderTopColor":"transparent","borderBottomColor":"#999"});
  }else{
    contentDiv.slideUp();
    $i.css({"borderBottomColor":"transparent","borderTopColor":"#999"});
  }
})
// 这里是help页面的功能
$('#li1').mouseenter(function () {
	$('#nav-aside').css('display','block');
});
$('#li1').mouseleave(function(e){
	var y=e.clientY;
	var y1=this.offsetTop;
	var h=this.offsetHeight;
	if(y>=(y1+h)){
		$('#nav-aside').mouseleave(function() {
			$("#nav-aside").css('display','none');
		});
	}else{
		$("#nav-aside").css('display','none');
	}

})