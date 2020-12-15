<template>
	<view>
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">我的主页</view>
			<navigator url="../Setup/Setup">
			<image class="shua1" src="../../static/images/通讯录.设置.icon.png" style="width: 45rpx; height: 45rpx;"></image>
			</navigator>
			<navigator url="../myinfomation/myinfomation">
			<image class="shua1" src="../../static/images/通讯录.编辑.icon.png" style="width: 40rpx; height: 40rpx;"></image>
			</navigator>
		</view>
		<view class="top">
			<view class="tou"><image class="topimage" src="../../static/images/头像2.jpg" style="width: 155rpx;height: 155rpx;border-radius: 50%;"></image></view>
			<view class="dj">
				<view class="vip">LV.11</view>
				<view class="denji">书圣</view>
			</view>
		</view>
		<view class="one">
			<view class="title">个性签名</view>
		</view>
		<view class="two">
			<view class="gq">所有的胜利，与征服自己的胜利比起来，都是微不足道的。</view>
		</view>
		<view class="one">
			<view class="title">借还历史</view>
		</view>
		<navigator url="../borrow_and_return/borrow_and_return">
		<view class="mid">
			<view class="imgs">
				<image class="img" src="../../static/images/书1.jpg" style="width: 220rpx; height: 240rpx;"></image>
				<image class="img" src="../../static/images/书3.jpg" style="width: 220rpx; height: 240rpx;"></image>
				<image class="img" src="../../static/images/书2.jpg" style="width: 220rpx; height: 240rpx;"></image>
			</view>
		</view>
		</navigator>
		<view class="one">
			<view class="title">我的心得</view>
		</view>
		<navigator url="../index/MyExperience">
		<view class="below">
			<view class="belowone">
				<view class="note">
					<view class="notetitle">
						《学习心得》
					</view>
					<view class="time">
						2020-08-09
					</view>
				</view>
				<view class="nr">
					三十八度六
				</view>
			</view>
			<view class="br1"></view>
			<view class="belowone">
				<view class="note">
					<view class="notetitle">
						《学习心得》
					</view>
					<view class="time">
						2020-08-09
					</view>
				</view>
				<view class="nr">
					三十八度六
				</view>
			</view>
		</view>
		</navigator>
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
		margin-left: 15rpx;

	}
/* 头像 */
.top {
	height: 270rpx;
	text-align: center;
}
.tou {
	height: 140rpx;
	background-color: #6c40f3;
	/* border: 1rpx solid #f0ad4e; */
}
.topimage {
	margin-top: 50rpx;
	align-items: center;
	border: 5rpx solid #ffffff;
}
/* 等级 */
.dj {
	display: flex;
	align-items: center;
	/* background-color: #18B566; */
}
.vip {
	margin-left: 308rpx;
	color: #f0ad4e;
	font-size: 25rpx;
	border-radius: 10rpx;
	border: 1rpx solid #f0ad4e;
	height: 35rpx;
	margin-top: 80rpx;
	width: 80rpx;
	align-items: center;
	/* margin-left: 300rpx; */
}
.denji{
	align-items: center;
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 5rpx;
	margin-top: 80rpx;
}
/* 标题 */
.one {
	background-color: #f5f5f5;
	display: flex;
	height: 60rpx;
}
.title {
	width: 75%;
	/* background-color: #000000; */
	font-size: 28rpx;
	color: #333333;
	margin-top: 10rpx;
	margin-left: 30rpx;
}
/* .delate {
	background-color: #000000;
	display: flex;
	font-size: 28rpx;
	margin-top: 15rpx;
	margin-left: 35rpx;
}
.Sc {
	margin-left: 5rpx;
	font-size: 28rpx;
	color: red;
} */
.two{
	/* background-color: #f5f5f5; */
	display: flex;
	height: 60rpx;
}
.gq {
	width: 100%;
	color: #c3c3c3;
	/* background-color: #000000; */
	font-size: 24rpx;
	margin-top: 10rpx;
	margin-left: 30rpx;
}
.mid {
	background-color: #FFFFFF;
	height: 260rpx;
	margin: 10rpx 10rpx;
}
.imgs {
	display: flex;
	width: 95%;
	margin-left: 20rpx;
	margin-top: 10rpx;
}
.img {
	size: 100%;
	margin: 10rpx 12rpx;
}
/* 读书笔记内容 */
.below{
	/* margin: 12rpx 12rpx; */
}
.belowone{
	height: 160rpx;
	/* background-color: #008000; */
}
.note{
	/* margin-top: 50rpx;
	margin-left: 30rpx; */
	/* background-color: #00BFFF; */
	display: flex;
}
.notetitle{
	margin-top: 50rpx;
	margin-left: 30rpx;
	font-size: 26rpx;
	/* background-color: #000000; */
	width: 70%;
}
.time{
	margin-top: 50rpx;
	margin-left: 15rpx;
	font-size: 26rpx;
	color: #E6E6E6;
}
.nr{
	margin-left: 30rpx;
	margin-top: 10rpx;
	font-size: 24rpx;
	color: #999999;
}
.br1 {
		width: 100%;
		height: 3rpx;
		background-color: #F4F5F6;
		margin-left: 30rpx;
	}	
</style>
