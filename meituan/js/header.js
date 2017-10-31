/*顶部*/
$("#topmsg-left>li:first-child").hover(e=>{
	$(e.target).children().first().attr("src","images/star2.png")
},e=>{
	$(e.target).children().first().attr("src","images/star1.png")})
/*头部*/
$("#check-box1").parent().mouseover(function(){
	$(this).children().last().css({
		"opacity":"1",
		zIndex:9
		});
$("#check-boxes>#check-box1>i").addClass("hover")
}).mouseout(function(){
  $(this).children().last().css({
	  "opacity":"0",
	    zIndex:0
  });
$("#check-boxes>#check-box1>i").removeClass("hover")
});
$("#check-box2").click(function(){
	var   $html1=$("#check-box2>span").text();
	var   $html2=$("#check-box1>span").text();
    $("#check-box1>span").text($html1);
	$("#check-box2>span").text($html2);
	if($("#check-box1>span").text()=="商家")
	$("#search").attr("placeholder","请输入商家名称,地址等");
	if($("#check-box1>span").text()=="团购")
	$("#search").attr("placeholder","请输入商品名称,地址等");
})

/*session*/
var rs=sessionStorage.getItem("uname");
var loginSession=document.getElementById("loginSession");
console.log(rs);
if(rs){
	loginSession.innerHTML=`${rs}:欢迎您!<a href="logout.html">  退出登录</a>`;
}

		

	
