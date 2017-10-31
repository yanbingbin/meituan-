/**
 * Created by WEB-UID-JAVA on 2017/10/9.
 */
$(document).ready(function () {
    $(".count").on("click",".reduce,.add",e=>{
        var $button=$(e.target);
        var $input=$button.siblings("input");
        var n=$input.val();
        // console.log(n);
        if($button.html()=="+"){
            n++;
            $('.re_tip').text('');
        }else if(n>1){
            n--;
        }else if(n==1){
            $('.re_tip').text('数量最小为1');
        }
        $input.val(n);
    });
 });