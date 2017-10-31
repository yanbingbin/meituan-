<?php
header("Content-Type:text/html;charset=UTF-8");
?>
<div id="topmsg">
	<ul id="topmsg-left">
		<li><img src="images/star1.png" alt="">&nbsp;收藏美团</li>
		<li><a href="login.html" target="_block" class="loginColor">登录</a>&nbsp;&nbsp;
			<a href="#">注册</a>&nbsp;&nbsp;|
		</li>
	</ul>
	<ul id="topmsg-right">
		<li class="nabla"><a href="javascript:;">我的订单</a></li>
		<li class="nabla dropdown account">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">我的美团&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="item"><a href="javascript:;">我的订单</a></li>
				<li class="item"><a href="javascript:;">我的评价</a></li>
				<li class="item"><a href="javascript:;">我的收藏</a></li>
				<li class="item"><a href="javascript:;">抵用券</a></li>
				<li class="item"><a href="javascript:;">我的余额</a></li>
				<li class="item"><a href="javascript:;">账户设置</a></li>
			</ul>
		</li>
		<li class="nabla dropdown history">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">最近浏览&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="empty">暂无浏览记录</li>
			</ul>
		</li>
		<li class="nabla dropdown isSale">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">联系客服&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="item"><a href="javascript:;">申请退款</a></li>
				<li class="item"><a href="javascript:;">申请退换货</a></li>
				<li class="item"><a href="javascript:;">查看美团券</a></li>
				<li class="item"><a href="javascript:;">换绑手机</a></li>
				<li class="item"><a href="javascript:;">常见问题</a></li>
			</ul>
		</li>
		<li class="nabla dropdown merchant">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">我是商家&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="item"><a href="javascript:;">商家合作中心</a></li>
				<li class="item"><a href="javascript:;">我想合作</a></li>
				<li class="item"><a href="javascript:;">手机免费开店</a></li>
				<li class="item"><a href="javascript:;">商家营销平台</a></li>
			</ul>
		</li>
		<li class="nabla dropdown recruit">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">代理商招募&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="item"><a href="javascript:;">餐饮代理商招募</a></li>
				<li class="item"><a href="javascript:;">非餐饮代理商招募</a></li>
			</ul>
		</li>
		<li class="nabla dropdown more">
			<a class="dropdown-btn" data-trigger="dropdown" href="javascript:;">更多&nbsp;<i></i></a>
			<ul class="dropdown-menu fade">
				<li class="item"><a href="javascript:;">手机版</a></li>
				<li class="item"><a href="javascript:;">邀请好友</a></li>
			</ul>
		</li>
	</ul>
</div>
<!--头部-->
<div id="header-top" class="clear">
	<a href="#" id='logo'>
		<img src="images/logo.png" />
	</a>
	<div id="weizi">
		<h2>杭州</h2>
		<a href="#">切换城市</a>
	</div>
	<div id="top-input" class="clear">
		<form action="">
			<div id="check">
				<ul id="check-boxes">
					<li class="check-box nabla" id="check-box1"><span>团购</span><i></i></li>
					<li class="check-box" id="check-box2"><span>商家</span></li>
				</ul>
			<input type="text" class="search" id="search" placeholder="请输入商品名称,地址等">
			<input type="submit" value="搜索" id="sousuo">
			</div>
			<ul id="check-list">
				<li><a href="javascript:;">火锅</a></li>
				<li><a href="javascript:;">锅内锅外</a></li>
				<li><a href="javascript:;">自助</a></li>
				<li><a href="javascript:;">蛋糕</a></li>
				<li><a href="javascript:;">哈根达斯</a></li>
				<li><a href="javascript:;">巴菲盛宴</a></li>
				<li><a href="javascript:;">烤肉</a></li>
				<li><a href="javascript:;">知味观</a></li>
				<li><a href="javascript:;">肯德基</a></li>
			</ul>
		</form>
	</div>
	<div id="header-right">
		<ul>
			<li><a href="javascript:;"><img src="images/1.png" ></a></li>
			<li><a href="javascript:;"><img src="images/2.png" ></a></li>
			<li><a href="javascript:;"><img src="images/3.png" ></a></li>
		</ul>
	</div>
	<div id="header-list">
	<ul>
		<li id="li1">全部分类</li>
		<li id="li2" class="li"><a href="javascript:;">首页</a></li>
		<li id="li3" class="li"><a href="javascript:;">今日新单</a></li>
		<li id="li4" class="li"><a href="javascript:;">美食</a></li>
		<li id="li5" class="li"><a href="javascript:;">身边外卖</a></li>
	</ul>
	</div>
</div>
</div>
