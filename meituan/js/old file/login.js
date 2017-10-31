//$("#header").load("data/header.php");
//1:为登录按钮绑定点击事件

$("#btn").click(function(e){
    //2:阻止事件默认行为,原因:a默认行为
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val();
    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success(data){
			alert(data.code+":"+data.msg);
        },
        error(data){
            alert("您的网络出现故障，请检查");
        }
    });
    //data/login_do.php
    //5:接收服务器返回结果
});


