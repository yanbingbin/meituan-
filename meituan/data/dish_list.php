<?php
    require("init.php");
    $sql="SELECT img,name FROM dish_detail_banner";
    $result=mysqli_query($conn,$sql);
    //$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$rows = getResult($result);
	
    echo json_encode($rows);
?>
