<template name="Logistic">
	<view>
		<view class="mid">
			<view>
				<view class="zt"><view class="zt1">广东图书馆</view></view>
				<view class="midone">
					<view class="zhengti">
						<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
						<view class="midwz">致敬老师</view>
					</view>
					<view>
						<view class="s1">
							预约时间：2017-11-08
						</view>
						<view class="s2">持书人：爱哭的猫</view>
						<view class="s7">
							<view class="s3">支付：未支付</view>
							<view class="s4">
								当前状态：
								<view class="s5">等待持书人还书</view>
							</view>
							<view class="s8">
								<button class="btn5"><view class="wz">删除记录</view></button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mhcx:'', /*搜索框内容*/
			page:0,
			size:20,
			info:[],//
			openId:'1',//暂时是1
			flag:'true',//判断是否到底部
			condition:2//切换
		};
	},
	onLoad() {
		console.log("执行方法了")
		this.goToSearch()
	},
	//当划到最底部的时候触发事件
	onReachBottom:function(){				
			console.log("我是最底部了");
			if(this.flag=='true'){
				this.getMoreNews();
			}else{
				this.showModal("到底啦~")
			}			
			},
	methods: {
		//获取数据
		goToSearch(){
			uni.request({
				 url:getApp().globalData.URL+'api/reserveList/queryReserveList	',
				 data:{
					 
					 openId:this.openId,
					 mhcx:this.mhcx,
					 condition:this.condition,
					 page:this.page,
					 size:this.size,
				 },
				 method:'GET',
				 header: {
				     'content-type': 'application/json;charset=UTF-8' // 默认值
				   },
				success:res =>{
					console.log("后台传来的数据：",res.data)
					this.info = res.data;
					},
				fail: (res) => {
					this.showModal("网络错误！")
				}
			})
		},
		//分页加载
		getMoreNews:function(){						//数据到底,触发这个函数
			this.page = this.page + 1;
			uni.showNavigationBarLoading();		//一读取数据,就进行刷新
			var that = this;
			uni.request({
				url:getApp().globalData.URL+'api/reserveList/queryReserveList',
				data:{
					 openId:that.openId,
					 mhcx:that.mhcx,
					 page:that.page,
					 size:that.size,
				},
				method:'GET',
				header: {
					 'content-type': 'application/json;charset=UTF-8' // 默认值
				   },
				success:res =>{
					console.log("分页后台传来的",res.data);
					if(res.data.length==0){
						//到底了
						that.flag = 'false';
						that.page = that.page - 1;
						return false;
					}
					that.info=that.info.concat(Array.from(res.data)); //拼接数组
					// uni.stopPullDownRefresh();	//数据加载完成,刷新结束
					// uni.hideNavigationBarLoading();	//数据读取完毕,刷新停止	
				},
				fail: (res) => {
					this.showModal("网络错误！")
				}
			})
		},
		//日期转换方法
		formatDate(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? ('0' + MM) : MM;
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			let h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			let m = date.getMinutes();
			m = m < 10 ? ('0'+ m) : m;
			let s = date.getSeconds();
			s = s < 10 ? ('0' + s) : s;
			return y + '/' + MM + '/' + d+' '+h+':'+m+':'+s ;
		},
		//提示框
		showModal(val){
			 uni.showToast({
				title: val,
				icon: 'none'
			 });
		},
	}
};
</script>

<style>
.mid {
	/* margin-top:30rpx; */
	width: 100%;
	height: auto;
	/* background-color: #007AFF; */
	/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
}
.zt {
	/* height: 40rpx; */
	border-bottom: solid 1rpx;
	/* border-top:solid 1rpx; */
	margin-top: -5rpx;
	height: 60rpx;
	color: #bbbbbb;
}
.zt1 {
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 30rpx;
	line-height: center;
	margin-top: 25rpx;
}
.midone {
	width: 100%;
	height: 200rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	align-items: center;
	border-bottom: 1rpx solid #e3e3e3;
}
.zhengti {
	display: flex;
	width: 100%;
	margin-left: 30rpx;
}
.imag {
	margin-left: 30rpx;
}
.midwz {
	font-size: 28rpx;
	height: 35rpx;
	margin-top: -5rpx;
	align-items: center;
	margin-left: 30rpx;
	width: auto;
	/* background-color:  #333333; */
}
.s1 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: -130rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
	display: flex;
}
.s2 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s3 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s4 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #f0ad4e;
}
.s5 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: -26rpx;
	align-items: center;
	margin-left: 100rpx;
	color: #555555;
}
.s6 {
	color: #dd524d;
}

.s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
	/* display: flex; */
}

.s8 {
	text-align: center;
}
.btn1 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #00bfff;
	border-radius: 15rpx;
}
.btn3 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #4cd964;
	border-radius: 15rpx;
}
.wz {
	font-size: 16rpx;
	margin-top: 8rpx;
	/* width: 137rpx; */
	margin-left: 5rpx;
	text-align: center;
	position: absolute;
}
.btn5 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #dd524d;
	border-radius: 15rpx;
	text-align: center;
}
.wz1 {
	font-size: 16rpx;
	margin-top: 8rpx;
	/* width: 137rpx; */
	margin-left: 20rpx;
	text-align: center;
	position: absolute;
}
</style>
