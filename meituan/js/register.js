$(".register>form>.username>input").focus(function(){
    $("#span1").html("");
});
var isUname=false;
var isPwd1=false;
var isPwd2=false;
$(".register>form>.username>input").blur(function(e){
    var reg1=/^\w{6,10}$/;
    if(!$(this).val()){
       $("#span1").html("用户名不为空");
       $(this).css("border","1px solid #f76120");
	   isUname=false;
    }
    else if(reg1.test($(this).val())){
        e.preventDefault();
        var s=$(this).val();
        $.ajax({
            type:"GET",
            url:"data/register2.php",
            data:{uname:s},
            success:function(data){
                if(data.code>0){
                    $("#span1").html("用户名存在");
					$(this).css("border","1px solid #f76120");
					console.log(1);
					isUname=false;
                }else if(data.code<0){
                    $("#span1").html("用户名通过");
					 $(this).css("border","");
					 isUname=true;
				}
            },
            error:function(data){
                alert("您的网络出现故障，请检查");
            }
        });
    }
    else {
        $("#span1").html("请输入6到10位字母或数字");
        $(this).css("border", "1px solid #f76120");
		isUname=false;
    }
});
$(".register>form>.password>input").blur(function(){
    var reg2=/^\d{6}$/;
    if(!$(this).val()){
        $("#span2").html("密码不为空");
        $(this).css("border","1px solid #f76120");
		isPwd1=false;
    }
    else if(reg2.test($(this).val())){
        $("#span2").html("密码通过");
        $(this).css("border","");
		isPwd1=true;
		$(".register>form>.password2>input").blur(function(){
			if(!$(this).val()){
				$("#span3").html("密码不为空");
				$(this).css("border","1px solid #f76120");
				isPwd2=false;
			}
			else if($(this).val()===$(".register>form>.password>input").val()) {
				$("#span3").html("密码通过");
				$(this).css("border","");
				isPwd2=true;
			}
			else {
				$("#span3").html("两次密码不一致");
				$(this).css("border", "1px solid #f76120");
				isPwd2=false;
			}
		});
    }
    else {
        $("#span2").html("请输入6数字");
        $(this).css("border", "1px solid #f76120");
		isPwd1=false;
    }
});

$("#submitbtn").click(function (e) {
    e.preventDefault();
    var m=$(".register>form>.username>input").val();
    var n=$(".register>form>.password>input").val();
	var n2=$(".register>form>.password2>input").val();
	if(!n||!m||!n2)
		alert("密码或用户名不能为空");
	else if(isUname==true && isPwd1==true && isPwd2==true){
		 $.ajax({
			type:"GET",
			url:"data/register.php",
			data:{uname:m,upwd:n},
			success:function(data){
				if(data.code>0){
					alert(data.msg);
					location.href = "index.html";
				}else if(data.code<0)
					alert(data.msg);
			},
			error:function(data){
				alert("您的网络出现故障，请检查");
			}
		});
	}else{
		alert("用户名或密码错误");
	}
});