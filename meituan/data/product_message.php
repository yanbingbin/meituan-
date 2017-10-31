<?php
// header("Content-Type:application/json;charset=utf-8");
// $conn = mysqli_connect("127.0.0.1","root","","mt",3306);
// mysqli_query($conn,"SET NAMES UTF8");
require("init.php");
@$pagesize=$_REQUEST['pagesize'] ;//显示条数  默认10条
if($pagesize==null){
	$pagesize=10;
 }
@$currentpage=$_REQUEST['currentpage'];//想看第几页数   默认第一页
if($currentpage==null){
	$currentpage=1;
 }

$sql="select count(*)from  product_message ";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$total= $row[0];
/*if($total%$pagesize==0){
		$totalpage=$total/$pagesize;//总页数
}else{
		$totalpage=ceil($total/$pagesize);
}*/
$totalpage=$total%$pagesize==0?$total/$pagesize:($total-($total%$pagesize))/$pagesize+1;
$start=($currentpage-1)*$pagesize;
$sql="select * from  product_message  limit $start,$pagesize ";//想看第几页的所有数据
$result=mysqli_query($conn,$sql);
//$arry=mysqli_fetch_all($result,MYSQLI_ASSOC);
$arry = getResult($result);


$prepage=1;//上一页
if($currentpage>1){
	$prepage=$currentpage-1;
}


$nextpage=$totalpage;//下一页
if($currentpage< $totalpage){
	$nextpage=$currentpage+1;
}
$str="{\"prepage\":$prepage,\"nextpage\":$nextpage,\"totalpage\":$totalpage}";

Array_push($arry,$str);
echo Json_encode($arry);


?>