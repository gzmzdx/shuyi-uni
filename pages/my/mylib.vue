<template>
	<view> 
	<!-- 	<view class="Array">
			<navigator url="lib">
				<view class="list1">
					<image class="ima" src="../../static/images/me_blue.png" style="width: 110rpx; height: 110rpx;"></image>
					<view class="tabs">
						<view class="tr">
						<view class="tit">爱读书的</view>
						<view class="btn">LV11</view>
						<view class="te">书圣</view>
						<image class="imag" src="../../static/images/double_right_arrow.png" style="width: 20rpx; height: 20rpx;"></image>
						</view>
						<view class="tex">馆主s</view>
						<view class="tr">
						<view class="text">简介：</view>
					    <view class="text1">书山有路勤为径，学海无涯苦作舟</view>
					</view>
					</view>
				</view>
				</navigator>
			</view>
		</view> -->
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<!-- #ifdef APP-PLUS -->
			<view class="tit1">好友图书馆</view>
			<image class="im" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tit5">好友图书馆</view>
			<image class="im1" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			<!-- #endif -->
			</view>
			<view class="tr">
				<image class="ima" src="../../static/images/借书证.jpg" style="width: 310rpx; height: 200rpx;"></image>
				<view>
				<view class="tit">好友图书馆</view>
				<view class="tex">创建时间：2020-9-9</view>
				<view class="tex">类型：文学类</view>
				<view class="tex">图书馆人数：124人</view>
	</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden:false,
			}
		},
		methods: {
			HiddenClick(){
				this.ShowHidden=false
			},
			titClick(){
				this.ShowHidden=!this.ShowHidden;
			}
		},
	}
</script>

<style>
	.ta{
			height: 70rpx;
			background-color:#6C40F3;
		}
	.tab1 {
			display: flex;
			background-color:#6C40F3;
		}
	
	.tit1 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 200rpx;
			display: flex;
			font-size: 40rpx;
			width: 50%;
		}
	.tit5 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 220rpx;
			display: flex;
			font-size: 40rpx;
			width: 35%;
		}
	.li{
		display: flex;
	}
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 8rpx;
		margin-left: 240rpx;
	}
	.im1{
		margin-top: 8rpx;
		margin-left: 140rpx;
	}
	.tab{
		height: 20rpx;
		background-color: #F1F1F1;
	}
	.tr{
		width: 100%;
		height: 300rpx;
		background-color: #FFFFFF;
		display: flex;
		border-bottom: 1rpx solid #C8C7CC;
	}
	.tr1{
		width: 100%;
		height: 400rpx;
		background-color: #FFFFFF;
		display: flex;
		border-bottom: 1rpx solid #C8C7CC;
	}
.ima{
	margin: 30rpx 30rpx;
	margin-top: 40rpx;
	border-radius: 3%;
}
.tit{
	font-size: 30rpx;
	margin-top: 50rpx;
}
.tex{
	font-size: 25rpx;
	color: #8F8F94;
	margin-top: 10rpx;
}
</style>
