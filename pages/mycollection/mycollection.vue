<template>
	<view>
		<!-- 顶部 -->
		<view class="top">
			<!-- <text>我的书单</text> -->
			<view class="wz">我的书单</view>
			<navigator url="./xinjiang">
			<view class="Xjiang">
					<!-- <view class="image"> -->
					<image src="../../static/images/新建.png" style="width: 50rpx;height: 50rpx;"></image>	
					<!-- </view> -->
				<view class="xinjian">新建</view>
			</view>
			</navigator>
		</view>
		<!-- 中间 -->
		<view class="mid">
			<!-- <view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 150rpx; height: 180rpx;"></image>
					<view class="midwz">我的最爱</view>
				</view>
				<view class="shumu">100本</view>
				</navigator>
			</view> -->
			<!-- 分割线br2 -->
			<!-- <view class="br2"><view class="wz">我的书单</view></view> -->
			<!-- <view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 150rpx; height: 150rpx;"></image>
					<view class="midwz">mybook</view>
				</view>
				<view class="shumu">500本</view>
				</navigator>
			</view> -->
			<!-- 分割线br2 -->
			<!-- <view class="br2"></view> -->
			<!-- <view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image src="../../static/images/after.jpg" style="width: 150rpx; height: 150rpx;"></image>
					<view class="midwz">呵呵哈哈哈哈哈哈</view>
				</view>
				<view class="shumu">50本</view>
				</navigator>
			</view> -->
			<!-- 分割线br2 -->
			<!-- <view class="br2"></view> -->
		</view>
	</view>
</template>

<script></script>

<style>
.br2 {
		/* margin-left: 20rpx; */
		width: 100%;
		height: 50rpx;
		background-color: #F5F5F5;
	}
.top {
	box-shadow: ;
	background-color: #F8F8F8;
	display: flex;
	height: 90rpx;
	}
.wz {
	width: 40%;
	font-size: 30rpx;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.Xjiang{
	display: flex;
	font-size: 30rpx;
	margin-top: 30rpx;
	margin-left: 280rpx;
	/* margin-left: 610rpx; */
	/* margin-top: -40rpx; */
	/* text-align: right; */
	/* margin-right: 10rpx; */
	/* color: #D2D2D2; */
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
.mid {
	/* background-color: #007AFF; */
}
.midone {
	width: 100%;
	height: 180rpx;
	font-size: 28rpx;
	margin-top: 30rpx;
	align-items: center;
	/* border-bottom: 1rpx solid #bbbbbb; */
	/* background-color:   #007AFF; */
	/* border:1px solid transparent; */
}
/* .midone:hover{
	border: 1px solid red;
} */
.zhengti {
	display: flex;
	margin-left:20rpx;
	/* background-color: #4CD964; */
}
.imag{
	margin-left:20rpx;	
}
.midwz {
	height: 45rpx;
	font-size: 35rpx;
	margin-top: 35rpx;
	align-items: center;
	margin-left: 30rpx;
	/* background-color: #2C405A; */
}
.shumu {
	margin-left: 200rpx;
	font-size: 24rpx;
	margin-top: -70rpx;
	color: #999999;
	/* background-color: #007AFF; */
}
</style>
