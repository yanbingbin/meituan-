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