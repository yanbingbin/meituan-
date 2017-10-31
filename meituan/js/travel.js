$(()=>{
  //动态加载左侧下面小图片,模态框下侧图片
  var picList=['images/23.png','images/24.png','images/25.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/19.png','images/20.png']
  var html="",html2="",len=picList.length;
  for(var i=0;i<picList.length;i++){
    var p=picList[i];
    html+=`<li class="img-item" data-toggle="img-item-${i}" style="background:url(${p});background-size:100%"></li>`;
    html2+=`<li class="img-item" data-toggle="img-item-${i}" style="background-image: url(${p});"></li>`;
  }
  //设置左边上标大图
  var w=97*picList.length,w2=147*picList.length;
  $('.piv-album .album-ul').html(html).css("width",w);
  $('.now-img').css({
    'background':`url(${picList[0]}) no-repeat`,
    "background-size":"100%"
  });
  //设置进入左侧小图区域时左右按钮状态
  $('.piv-album').hover(()=>{
    $('.piv-album .btn-next,.piv-album .btn-prev').toggleClass('opa1')
  })
  //设置左侧小图区域左右按钮鼠标移入移出效果
  $('.piv-album .btn-next,.piv-album .btn-prev').hover((e)=>{
    $(e.target).toggleClass('opa2');
  })
  //设置进入左侧上边图片区域中间的search按钮状态
  $('.piv-preview').hover(()=>{
    $('.zoom-in').toggleClass('opa')
    $('.piv-preview .btn-next,.piv-preview .btn-prev').toggleClass('opa')
  })
  
  //模态框 close按钮鼠标移入移出效果
  $('.btn-close').hover(function(){
    $(this).toggleClass('opa3')
  })
  //模态框隐藏显示设置
  $('.zoom-in').click(function(){
    $('#detail-show').css("display","block");
    $('#detail-show .album-ul').html(html2).css("width",w2);
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
  })
  $('.btn-close').click(function(){
    $('#detail-show').css("display","none");
  })
  $('.detail-show-bg').click(function(){
    $('#detail-show').css("display","none");
  })
  //图片列表滑动效果
  $('.piv-album .album-ul').on('mouseenter','.img-item',function(){
    var index=$(this).attr("data-toggle").slice(9);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
  })
  $('#detail-show .album-ul').on('click','.img-item',function(){
    var index=parseInt($(this).attr("data-toggle").slice(9));
    $('.zoom-box img').attr("src",picList[index]);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
  })
  //右侧大图下一张按钮
  $('.piv-preview .btn-next').click(function(){
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    if(index<len-1){
      index++;
    }else{
      index=0
    }
    $('.now-img').attr('data-toggle',`now-img-${index}`);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
    if(index%4===0){
      $('.piv-album .album-ul').css("left",-index*97);
    }
  })
  //右侧大图上一张按钮
  $('.piv-preview .btn-prev').click(function(){
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    if(index>0){
      index--;
    }else{
      index=len-1;
    }
    $('.now-img').attr('data-toggle',`now-img-${index}`);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
    if((index+1)%4===0){
      $('.piv-album .album-ul').css("left",-(index-3)*97);
    }
  })
  //右侧图片列表下一页按钮
  $('.piv-album .btn-next').click(function(){
    var oldLeft=$('.piv-album .album-ul').css("left").slice(0,-2);
    if(parseInt(-oldLeft/97/4)<(parseInt(len/4-1))){
      var newLeft=oldLeft-97*4;
      $('.piv-album .album-ul').css("left",newLeft);
    }
  })
  //右侧图片列表上一页按钮
  $('.piv-album .btn-prev').click(function(){
    var oldLeft=parseInt($('.piv-album .album-ul').css("left").slice(0,-2));
    if(parseInt(-oldLeft/97/4)>0){
      var newLeft=oldLeft+97*4;
      $('.piv-album .album-ul').css("left",newLeft);
    }
  })
  //模态框大图下一张按钮
  $('.zoom-view .btn-next').click(function(){
    var index=parseInt($('.zoom-box img').attr('data-toggle').slice(4));
    if(index<len-1){
      index++;
    }else{
      index=0
    }
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
    if(index%6===0){
      $('#detail-show .album-ul').css("left",-index*147);
    }
  })
  //模态框大图上一张按钮
  $('.zoom-view .btn-prev').click(function(){
    var index=parseInt($('.zoom-box img').attr('data-toggle').slice(4));
    if(index>0){
      index--;
    }else{
      index=len-1;
    }
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`);
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active')
    if((index+1)%6===0){
      $('#detail-show .album-ul').css("left",-(index-5)*147);
    }else if(index==len-1){
      var i=index%6;
      $('#detail-show .album-ul').css("left",-(index-i)*147);
    }
  })
  
  //left-content内容
  var productList=[];
  for(var i=0;i<32;i++){
    productList.push(`<li class="group-combo-li clear">
                <div class="group-combo-info clear">
                  <div class="img-wrapper">
                    <img src="images/11.jpg" alt="">
                  </div>
                  <div class="info">
                    <a href="#" class="combo-title">
                      <span class="combo-title-text">大慈岩风景区门票成人票,请至少提前2小时购买</span>
                      <img class="icon" src="images/tuan_icon.png"></a>
                    </a>
                    <div class="combo-subtitle">
                      <span class="sold-num">已售6382</span>
                      截止日期:
                      <span class="deadline">2017年10月31日</span>
                    </div>
                    <div class="combo-prices">
                      <span class="price-symbol">¥</span>
                      <span class="cur-price numfont">75</span>
                      <span class="market-price">门店价85</span>
                    </div>
                  </div>
                </div>
                <div class="operation">
                  <span class="panic-buy-btn"><a href="myOrderSubmit.html">立即抢购</a></span>
                </div>
              </li>`)
  }
  var len1=productList.length
  html=`<p class="sub-desc">${productList.length}款套餐</p>
            <ul class="product-list">
            `;
  for(var i=0;i<productList.length;i++){
    if(i<5){
      html+=productList[i];
    }else{
      break;
    }
  }
  html+=`</ul>
            <p class="toggle-btn">
              <span>更多${productList.length-5}款套餐</span>
              <spann class="fa fa-angle-down"></spann>
            </p>`
  $('.group-combo').html(html);
  $('.toggle-btn').click(function(e){
    e.preventDefault();
    if(len1<5){
      return;
    }
    var span=$(this).children()[0];
    if($(span).html()==='收起'){
      $('.product-list').append(html);
      $(span).html(`更多${len1-5}款套餐`)
      $('.product-list li:gt(4)').remove();
    }else{
      html='';
      for(var i=5;i<len1;i++){
        html+=productList[i];
      }
      $('.product-list').append(html);
      $(span).html('收起')
    }
  })
})