<template>
	<view>
		<!-- 顶部 -->
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">我的收藏</view>
			<navigator url="./xinjiang">
			<image class="shua1" src="../../static/images/添加.icon.png" style="width: 40rpx; height: 40rpx;"></image>
			</navigator>
		</view>
		<!-- 分割线br2 -->
		<view class="br2"></view>
		<!-- 中间 -->
		<view class="mid">
			<view class="topone">
				<view class="title">文学</view>
				<view class="delate">
					<image src="../../static/images/red_clearance_icon.png" style="width: 35rpx;height: 35rpx;"></image>
					<view class="Sc">删除</view>
				</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">于思蓝</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书3.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">你是人间四月天</view>
					<!-- <image src="../../static/images/shoucang1.png" style="width: 40rpx; height: 30rpx;"></image> -->
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">余小鱼</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
		</view>
		<view class="mid">
			<view class="topone">
				<view class="title">武侠小说</view>
				<view class="delate">
					<image src="../../static/images/red_clearance_icon.png" style="width: 35rpx;height: 35rpx;"></image>
					<view class="Sc">删除</view>
				</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
					<!-- <image src="../../static/images/shoucang1.png" style="width: 40rpx; height: 30rpx;"></image> -->
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">于思蓝</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书3.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">你是人间四月天</view>
					<!-- <image src="../../static/images/shoucang1.png" style="width: 40rpx; height: 30rpx;"></image> -->
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">余小鱼</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
		</view>
		<view class="mid">
			<view class="topone">
				<view class="title">文学</view>
				<view class="delate">
					<image src="../../static/images/red_clearance_icon.png" style="width: 35rpx;height: 35rpx;"></image>
					<view class="Sc">删除</view>
				</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
					<!-- <image src="../../static/images/shoucang1.png" style="width: 40rpx; height: 30rpx;"></image> -->
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">于思蓝</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书3.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">你是人间四月天</view>
					<!-- <image src="../../static/images/shoucang1.png" style="width: 40rpx; height: 30rpx;"></image> -->
				</view>
				<view class="shumu">
					作者：
					<view class="shumutwo">余小鱼</view>
				</view>
				<view class="shumuone">出版社：为人民服务出版社</view>
				<view class="shumuone">出版时间：2020-09</view>
				<view class="shumuthree">广东省立中山图书馆馆藏</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
/* 顶部导航条 */
.tq{
		height: 80rpx;
		background-color:#6C40F3;
	}
.tab {
		display: flex;
		background-color:#6C40F3;
	}
.tit2 {
		margin-top: 20rpx;
		color:#FFFFFF ;
		text-align: center;
		margin-left: 55rpx;
		/* display: flex; */
		font-size: 40rpx;
		width: 65%;
	
	}
	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}
	.shua1 {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

.br1 {
	width: 90%;
	height: 3rpx;
	background-color: #dcdcdc;
	margin-left: 30rpx;
}
.br2 {
	/* margin-left: 20rpx; */
	width: 100%;
	/* height: 10rpx; */
	/* background-color: #DCDFE6; */
}
.top {
	border-bottom: #d2d2d2 1rpx solid;
	/* background-color: #6C40F3; */
	display: flex;
	height: 90rpx;
}
.wz {
	width: 40%;
	font-size: 32rpx;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.Xjiang {
	display: flex;
	font-size: 30rpx;
	margin-top: 28rpx;
	margin-left: 345rpx;
}
.image {
	/* margin-top: -5rpx; */
	/* margin-l: 600rpx; */
}
.xinjian {
	margin-left: 5rpx;
	/* margin-top: -55rpx; */
	font-size: 30rpx;
}
.topone {
	background-color: #f5f5f5;
	display: flex;
	height: 60rpx;
}
.title {
	width: 75%;
	/* background-color: #000000; */
	font-size: 28rpx;
	margin-top: 10rpx;
	margin-left: 30rpx;
}
.delate {
	display: flex;
	font-size: 28rpx;
	margin-top: 15rpx;
	margin-left: 35rpx;
}
.Sc {
	margin-left: 5rpx;
	font-size: 28rpx;
	color: red;
}
.mid {
	height: auto;
	/* background-color: #007AFF; */
}
.midone {
	width: 100%;
	height: 200rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	align-items: center;
	/* border-bottom: 3rpx solid #bbbbbb; */
	/* background-color: #2C405A; */
}
.zhengti {
	margin-left: 30rpx;
	display: flex;
}
.imag {
	margin-left: 30rpx;
}
.ima {
	width: 40rpx;
	height: 30rpx;
	/* margin-left: 400rpx; */
}
.midwz {
	font-size: 30rpx;
	height: 35rpx;
	width: 520rpx;
	margin-top: -5rpx;
	align-items: center;
	margin-left: 28rpx;
	/* background-color:  #333333; */
}
.shumu {
	margin-left: 180rpx;
	height: 30rpx;
	font-size: 25rpx;
	margin-top: -130rpx;
	color: #999999;
	/* background-color: #4CD964; */
	width: 100%;
}
.shumuone {
	margin-left: 180rpx;
	font-size: 25rpx;
	color: #999999;
	/* background-color: #4CD964; */
}
.shumutwo {
	margin-left: 70rpx;
	font-size: 25rpx;
	color: #007aff;
	margin-top: -32rpx;
	/* background-color:  #F0AD4E; */
}
.shumuthree {
	margin-top: 10rpx;
	font-size: 25rpx;
	color: #f0ad4e;
	margin-left: 180rpx;
	/* background-color: #3F536E; */
}
</style>
