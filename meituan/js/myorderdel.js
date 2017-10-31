/*删除订单*/
$("#tb1").on("click","a.drop",e=>{
  var $tar=$(e.target);
  if(confirm("确定删除当前订单"))
	  $tar.parent().parent().parent().remove();
})