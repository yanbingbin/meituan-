/**accordion**/
$("[data-trigger=accordion]").parent()
	.on("click","[data-trigger=accordion]",e=>{
		$(e.target).next().toggleClass("in")
			.siblings("[data-trigger=accordion]+*").removeClass("in")
	});


/**tabs**/
$(".tabs:has([data-toggle=tab])")
      .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
	})

/**dropdown**/
$(".dropdown").hover(function(){
	var $index=$(this).children(".dropdown-menu").children().length;
	var $li=parseInt($("li.item").css("height"));
	$(this).children(".dropdown-menu").addClass("in").css("height",$index*$li);
	$(".history").children(".in").css("height",50);
},function(){
	$(this).children(".dropdown-menu").removeClass("in").css("height",0);
})
