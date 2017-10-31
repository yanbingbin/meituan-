<?php
#必须被包含到其他页面中
#连接到数据库服务器
header("Content-Type:application/json;charset=utf-8");
$conn = mysqli_connect("127.0.0.1","root","","database",3306);
#设置后续的sql语句所用的字符串
$sql="set names utf8";
mysqli_query($conn,$sql);

function getResult($res) {
	$posts = array();
	while($row = mysqli_fetch_assoc($res)){
		$posts[] = $row;
	}
	return $posts;
}
?>
