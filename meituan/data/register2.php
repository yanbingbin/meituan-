<?php

require("init.php");
@$uname = $_REQUEST["uname"];
$sql="select * from user where name='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row!=null){
   echo '{"code":1,"msg":"用户名存在"}';
}else{
   echo '{"code":-1,"msg":"用户名通过"}';
}

?>