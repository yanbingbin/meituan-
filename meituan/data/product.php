<?php
//header("Content-Type:application/json;charset=utf-8");
require("init.php");
@$pagesize=$_REQUEST['pagesize'] ;//显示条数  默认10条
if($pagesize==null){
	$pagesize=10;
 }
@$currentpage=$_REQUEST['currentpage'];//想看第几页数   默认第一页
if($currentpage==null){
	$currentpage=1;
 }

$sql="select count(*)from product_list";
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
$sql="select * from product_list limit $start,$pagesize ";//想看第几页的所有数据
$result=mysqli_query($conn,$sql);
//$arry=mysqli_fetch_all($result,MYSQLI_ASSOC);
$arry = getResult($result);
$output=[
  "pagesize"=>$pagesize,
  "currentpage"=>$currentpage,
  "total"=>$total,
  "totalpage"=>$totalpage,
  "data"=>$arry
];

echo Json_encode($output);


?>