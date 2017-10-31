(()=>{
	$.get("data/01_index/floors.php",{fid:1},data=>{
		var html="";
		for(var v of data){
			html+=`<div class="product" >
                <a href="food.html">
                    <img src="${v.pic}" >
                </a>
                <div class="desc clear" >
                    <p class="name"><a href="${v.href}">${v.title}</a></p>
                    <p class="subName"><a href="${v.href}">${v.subtitle}</a></p>
                    <div class="sale" >
                        <p class="price1">
                            ¥${v.price1}
                        </p>
                        <p class="price2">门店价&nbsp;¥<span>${v.price2}</span></p>
                        <p class="sold">已售${v.sold}</p>
                    </div>
                </div>
								<div class="assess">
										<span>${v.assess}人评价</span>
										<img src="img/f_00.png" />
								</div>
            </div>`;
		}
		$("#f1 .floor-content").html(html);
	})
})();
(()=>{
	$.get("data/01_index/floors.php",{fid:2},data=>{
		var html="";
		for(var v of data){
			html+=`<div class="product" >
                <a href="travel.html">
                    <img src="${v.pic}" >
                </a>
                <div class="desc clear" >
                    <p class="name"><a href="${v.href}">${v.title}</a></p>
                    <p class="subName"><a href="${v.href}">${v.subtitle}</a></p>
                    <div class="sale" >
                        <p class="price1">
                            ¥${v.price1}
                        </p>
                        <p class="price2">门店价&nbsp;¥<span>${v.price2}</span></p>
                        <p class="sold">已售${v.sold}</p>
                    </div>
                </div>
								<div class="assess">
										<span>${v.assess}人评价</span>
										<img src="img/f_00.png" />
								</div>
            </div>`;
		}
		$("#f2 .floor-content").html(html);
	})
})();
(()=>{
	$.get("data/01_index/floors.php",{fid:3},data=>{
		var html="";
		for(var v of data){
			html+=`<div class="product" >
                <a href="hotel.html">
                    <img src="${v.pic}" >
                </a>
                <div class="desc clear" >
                    <p class="name"><a href="${v.href}">${v.title}</a></p>
                    <p class="subName"><a href="${v.href}">${v.subtitle}</a></p>
                    <div class="sale" >
                        <p class="price1">
                            ¥${v.price1}
                        </p>
                        <p class="price2">门店价&nbsp;¥<span>${v.price2}</span></p>
                        <p class="sold">已售${v.sold}</p>
                    </div>
                </div>
								<div class="assess">
										<span>${v.assess}人评价</span>
										<img src="img/f_00.png" />
								</div>
            </div>`;
		}
		$("#f3 .floor-content").html(html);
	})
})();
(()=>{
	$.get("data/01_index/floors.php",{fid:4},data=>{
		var html="";
		for(var v of data){
			html+=`<div class="product" >
                <a href="hotel.html">
                    <img src="${v.pic}" >
                </a>
                <div class="desc clear" >
                    <p class="name"><a href="${v.href}">${v.title}</a></p>
                    <p class="subName"><a href="${v.href}">${v.subtitle}</a></p>
                    <div class="sale" >
                        <p class="price1">
                            ¥${v.price1}
                        </p>
                        <p class="price2">门店价&nbsp;¥<span>${v.price2}</span></p>
                        <p class="sold">已售${v.sold}</p>
                    </div>
                </div>
								<div class="assess">
										<span>${v.assess}人评价</span>
										<img src="img/f_00.png" />
								</div>
            </div>`;
		}
		$("#f4 .floor-content").html(html);
	})
})();