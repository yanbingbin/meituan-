/*商品详情*/

/*商品评论*/
function loaduser(p){
	$.ajax({
		type:"GET",
        url:"data/product_list.php",
		data:{currentpage:p},
		success:function(data){
			console.log(data);
			var html = "";
			var data1=data.slice(0,data.length-1);
			console.log(data1);
			for(var s of data1){
				html+=`
					<li>
                    <div class="left">
                        <img src="${s.user_pic}" alt=""><br>
                        <span>${s.user_name}</span>
                    </div>
                    <div class="right">
                        <img src="${s.star}" alt=""><span>${s.time}</span>
                        <p>${s.leave_message}</p>
                        <a href="javascript:;"><img src="${s.pic1}" alt=""></a>
                        <a href="javascript:;"><img src="${s.pic2}" alt=""></a>
                        <h6><a href="javascript:;">紫燕百味鸡代金券</a></h6>
                    </div>
                </li>`;
			}
			$(".product1>.product1-all").html(html);
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
			$(".page").html(pagehtml);
		},
		error:function(){
        alert("网络出现故障，请检查");
        }
	});
}
loaduser(1);