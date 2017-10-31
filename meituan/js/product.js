
function loaduser(p=1){
    $.ajax({
        type:"GET",
        url:"data/product.php",
        data:{currentpage:p},
        success:function(data){
           console.log(data);
            var html = "";
            for(var s of data.data){
                html+=`
				<div class="s1">
					<a href="product_leave_message.html"><img src="${s.big_pic }" ></a>
                    <h4><a href="product_leave_message.html">${s.title}</a></h4>
                    <span>${s.title2}</span>
                    <p><span>￥</span> <span class="sale">${s.price}</span> <span>门店价￥79</span></p>
                    <div>
                        <span class="s2">已售<i>${s.count_sale}</i></span> <img src="${s.small_pic}" alt=""> <a href="javascript:;">5464654人评价</a>
                    </div>
                </div>`;
            }
            $(".product>.product-all>.left").html(html);
            var html="";
            html+=`<li><a href="javascript:;">上一页</a></li>`;
            for(var i= 1;i<=data.totalpage;i++){
                html+=`<li><a href="javascript:;">${i}</a></li>`;
            }
            html+=`<li><a href="javascript:;">下一页</a></li>`;
            $(".product>.product-all>.bottom").html(html).children(":eq("+p+")").addClass("active");
            if(p==1)
            $(".product>.product-all>.bottom>li:first-child").addClass("disabled");
            if(p==data.totalpage)
            $(".product>.product-all>.bottom>li:last-child").addClass("disabled");
            if(p!=1&&p!=data.totalpage)
            $(".product>.product-all>.bottom>li:first-child,.product>.product-all>.bottom>li:last-child")
                .removeClass("disabled");
        },
        error:function(){
            alert("网络出现故障，请检查");
        }
    });
}
loaduser();
$(".product>.product-all>.bottom").on("click","li:not(.disabled)>a",function(e){
    e.preventDefault();
    $a=$(this);
    if($a.parent().is(":first-child")){
        loaduser(p=p-1);
    }else if($a.parent().is(":last-child")){
        loaduser(p=p+1);
    }else {
        var n=$(this).html();
        loaduser(p=n);
    }

});