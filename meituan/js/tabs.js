$(".s").on("click","li",function(e){
	$e = $(e.target);
	console.log( $(".s li").index($e) );
	var index = $(".s li").index($e);
	$(".details").css("display","none");
	$(".active").removeClass("active");
	$e.addClass("active");
	$(".details:eq("+index+")").css("display","block");
});
console.log(1);