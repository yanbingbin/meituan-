<?php
#必须被包含到其他页面中
#连接到数据库服务器
header("Content-Type:application/json;charset=utf-8");
$conn = mysqli_connect("qdm173198525.my3w.com","qdm173198525","785175917","qdm173198525_db",3306);
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