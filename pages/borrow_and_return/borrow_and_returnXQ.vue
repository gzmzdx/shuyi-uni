<template>
	<view>
		<view class="top">
			<view class="topone">订单编号：11120391192216</view>
			<view class="br1"></view>
			<!-- 中间书籍部分 -->
			<view class="midone">
				<view class="zhengti"><image :src="info.picture_path" style="width: 140rpx;height: 180rpx;"></image></view>
				<view class="xq">
					<view class="midwz" v-text="info.book_name">致敬老师</view>
					<view class="s1">
						<view>作者：</view>
						<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
						<view class="s6" v-text="info.author">大鲤鱼</view>
					</view>
					<view class="s2" >
						<view>出版社：</view>
						<view v-text="info.publisher">湖南文艺出版社</view>
					</view>
					<view class="s7">
						<view class="s3">
							<view>出版时间：</view>
							<view v-text="info.publisher_year">2017-09-10</view>
						</view>
						<view class="s4" v-text="info.library">广东省立中山图书馆馆藏，广东中山图书馆</view>
						<view class="s8">
							<navigator url="./borrow_and_returnXQ">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!-- 下面快递部分 -->
			<view class="below">
				<view class="kd">
					承运快递：
					<view class="s5" v-text="info.return_type">书易物流</view>
				</view>
				<!-- <view class="kd">
					地址：
					<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
					<view class="s5">上海市松江区亭林镇大叶公路500号</view>
				</view> -->
				<view class="kd1">
					<view>借入时间：</view>
					<view v-text="formatDate(info.borrow_time)">2017-09-10</view>
				</view>
				<view class="kd1">
					<view>还书时间：</view>
					<view v-text="formatDate(info.needreturn_time)">2017-09-10</view>
				</view>
			</view>
			<view class="br1"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id:"",//借还id
			info:{}//后台传来的信息
		};
	},
	onLoad(res) {
		this.getIDetail(res.id)
		console.log("++++来活了",res)
	},
	methods: {
		getIDetail(id){
			uni.request({
				 url:getApp().globalData.URL+'borrowList/borrowAndRetrueDetail',
				 data:{
					 borrowId:id
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
	}
};
</script>

<style>
/* 订单编号 */
.topone {
	height: 40rpx;
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.br1 {
	width: 100%;
	height: 3rpx;
	background-color: #f4f5f6;
	margin-top: 20rpx;
	/* margin-left: 30rpx; */
}
/* 订单详情 */
.midone {
	display: flex;
	/* width: 100%; */
	height: 210rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	/* align-items: center; */
	/* background-color: #00BFFF; */
	/* border-bottom: 1rpx solid #EBEBEB; */
}
.zhengti {
	margin-left: 30rpx;
	width: 125rpx;
	height: 170rpx;
	/* background-color: #0066CC; */
}
.xq {
	margin-left: 40rpx;
	height: 180rpx;
	width: 500rpx;
}
.midwz {
	font-size: 28rpx;
}
.s1 {
	font-size: 20rpx;
	height: 35rpx;
	/* margin-top: -120rpx; */
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display: flex;
	flex-flow : row;
}
.s2 {
	font-size: 20rpx;
	height: 35rpx;
	/* margin-top: 20rpx; */
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display : flex ;
	flex-flow : row;
}
.s3 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display : flex ;
	flex-flow : row;
}
.s4 {
	font-size: 24rpx;
	height: 35rpx;
	margin-top: 10rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #f0ad4e;
}
.s5 {
	font-size: 24rpx;
	height: 35rpx;
	margin-top: -32rpx;
	align-items: center;
	margin-left: 110rpx;
	color: #999999;
}
.s6 {
	color: #00bfff;
}

.s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
}

.s8 {
	margin-top: 20rpx;
	margin-left: 380rpx;
}
.wz {
	font-size: 20rpx;
	margin-top: 5rpx;
	margin-left: 2rpx;
	text-align: center;
	position: absolute;
}
/* 下半部分快递详情 */
.below {
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.kd {
	margin-top: 10rpx;
	font-size: 24rpx;
	color: #000000;
}
.kd1 {
	margin-top: 10rpx;
	font-size: 24rpx;
	color: #000000;
	display : flex ;
	flex-flow : row;
}
</style>
