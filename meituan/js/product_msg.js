
$(".box-all").on("click",".box",
	function () {
		$(this).addClass("active");
        $(this).siblings().removeClass("active");
    }
)
function loaduser(p){
	$.ajax({
		type:"GET",
        url:"data/product_message.php",
		data:{currentpage:p},
		success:function(data){
			var html = "";
			var data1=data.slice(0,data.length-1);
			console.log(data1);
			for(var s of data1){
				html+=`<div class="message-top">
                        <img src="${s.user_pic}" alt="">
                        <div class="user-message" style="padding-top: 0px;">
                            <span>${s.user_name}</span>
                            <img src="img/level_2.svg" >
                        </div>
                        <div class="message-style" >
                            <a href="javascript:;" style="color: #666;">${s.didian}</a>
                        </div>
                        <div class="star clear">
                            <img src="${s.star}" alt="">
                            <span class="time" style="float: right">${s.time }</span>

                        </div>
                    </div>
                    <div class="message-center">
                        <span>
                           ${s.message }
                        </span>
                        <div class="imgs" style="margin-top: 20px">
                            <img src="${s.pic1}" alt="">
                            <img src="${s.pic2}" alt="">
                            <img src="${s.pic3}" alt="">
                            <img src="${s.pic4}" alt="">
                        </div>
                    </div>`;
					
			}
			$("#message").html(html);
			var page=data[data.length-1];
			var page1=JSON.parse(page);
			var pagehtml="";
			pagehtml+=`<ul>
			 	<li><a href='javascript:loaduser(1)'>首页</a>
			</li>
			 	<li><a href="javascript:loaduser(${page1.prepage})">上一页</a>
			</li>
			 	<li><a href='javascript:loaduser(${page1.nextpage})'>下一页</a>
			</li>
			 	<li><a href='javascript:loaduser(${page1.totalpage})'>尾页</a>
			</li>
			 </ul>`;
			$("#page").html(pagehtml);
		},
		error:function(){
        alert("网络出现故障，请检查");
        }
	});
}
loaduser(1);
