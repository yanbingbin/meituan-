<?php
header(
  "Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	@$fid=$_REQUEST["fid"];
	$sql="SELECT * FROM mt_goods where family_id=$fid limit 8";
	$result = mysqli_query($conn,$sql);
	$array = getResult($result);
	echo json_encode($array);
?>