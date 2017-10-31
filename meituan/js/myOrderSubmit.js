var vm = new Vue({
    el:"#cartList",
    data: {
        totalMoney:0,
        productList:[],
        productCount:0,
        noShow:true,
        checked:false
    },
    filters:{
        formatMoney: function (value) {
            return "￥"+value;
        }
    },
    mounted:function () {
        this.$nextTick(function () {
            this.cartView();
        })
    },
    methods:{
        cartView:function () { // 初始化购物车,加载数据
            var _this = this;
            this.$http.get("data/myOrderSubmit.json").then(function (res) {
                _this.productList = res.body.result.list; //这里遇到一个问题,首次加载的时候需要显示总金额,直接把calcTotalPrice放在mounted里,由于这里是.then回调,执行calcTotalPrice的时候productList里面是没有数据的,所以使用.then回调执行
                _this.productCount = res.body.result.productCount;
            }).then(function () {
                _this.calcTotalPrice();
            }).then(function () {
                _this.showWarning();
            })
        },
        changeMoney:function (product,way) { //改变商品数量
            if(way > 0){
                product.productQuentity++;
            } else {
                product.productQuentity--;
            }
            if(product.productQuentity<=1){
                product.productQuentity = 1;
            }
            this.calcTotalPrice();
            this.showWarning();
        },
        calcTotalPrice:function () { //计算总金额
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function (item,index) {
                _this.totalMoney += item.productPrice * item.productQuentity;
            });
            if(this.checked){
                this.totalMoney -= this.productCount;
            }
        },
        showWarning:function () { //显示警示框
            if(this.totalMoney < 500){
                this.noShow = true;
            } else {
                this.noShow = false;
            }
        },
        selectedDiscount:function () {
            this.checked = !this.checked;
            this.calcTotalPrice();
        }
    }
})