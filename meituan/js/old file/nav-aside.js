"use strict";
//给导航添加鼠标事件
(()=>{var $nav=$("#navAside");
	$nav.on("mouseover","li",function(){
    $("#show-nav").show();
		var $li=$(this);
		$li.children("div").css("width",232);
		$li.children("i").removeClass("right");
		if($li.index()>0){
			$li.prev().children("div").css("width",232);
		}
		var $tar=$(`[data-toggle=${$li.attr("data-toggle")}]`);
		$tar.show();
		$tar.siblings("div[data-toggle]").hide();

	}).on("mouseout","li",function(){
		var $li=$(this);
		$li.children("div").css("width",217);
		$li.children("i").addClass("right");
		if($li.index()>0){
			$li.prev().children("div").css("width",217);
		}
	})
	$nav.mouseleave(function(e){
		var x=e.offsetX,x1=this.offsetLeft,w=this.offsetWidth;
		if(x>=(x1+w)){
			$("#show-nav").mouseleave(function(){
				$(this).hide();
				$(this).mouseleave=null;
			})
		}else{
			$("#show-nav").hide();
		}
	})
})();
//内容展示区
$("div[data-toggle]:not(:empty)").each((i,elem)=>{
	var $elem=$(elem)
	var len=$elem.children("ul").length;
	if(len==2){
		$elem.css("width",284);
	}else if(len==1){
		$elem.css("width",152);
	}
});