<template>
	<view class="all">
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<!-- #ifdef APP-PLUS -->
			<view class="tit1">借书卡</view>
			<image class="im" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tit5">借书卡</view>
			<image class="im1" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			<!-- #endif -->
			</view>
		<view class="tab"></view>
		<!-- #ifdef APP-PLUS -->
			<view class="tr">
				<image class="ima" src="../../static/images/借书证.jpg" style="width: 310rpx; height: 200rpx;"></image>
				<view>
				<view class="tit">广东省省立图书馆</view>
				<view class="tex">注册日期：2020-9-9</view>
				<view class="tex">类型：普通A A类卡</view>
				<view class="tex">当前状态：正常</view>
				<view class="tex">借阅证编号：111111</view>
				<view class="tex">正在借阅：124本</view>
				<view class="li">
					<navigator url="xuig">
					<image class="share" src="../../static/images/修改.png" style="width: 70rpx; height: 80rpx;"></image>
					<image class="dele" src="../../static/images/删除.png" style="width: 70rpx; height: 70rpx;"></image>
					</navigator>
					</view>
						</view>
					</view>
					<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="tr1">
					<image class="ima" src="../../static/images/借书证.jpg" style="width: 310rpx; height: 200rpx;"></image>
					<view>
					<view class="tit">广东省省立图书馆</view>
					<view class="tex">注册日期：2020-9-9</view>
					<view class="tex">类型：普通A A类卡</view>
					<view class="tex">当前状态：正常</view>
					<view class="tex">借阅证编号：111111</view>
					<view class="tex">正在借阅：124本</view>
					<view class="li">
						<navigator url="xuig">
						<image class="share" src="../../static/images/修改.png" style="width: 70rpx; height: 80rpx;"></image>
						<image class="dele" src="../../static/images/删除.png" style="width: 70rpx; height: 70rpx;"></image>
						</navigator>
						</view>
							</view>
						</view>
				<!-- #endif -->
		<navigator url="card">
		<button class="but">+ 添加图书馆</button>
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
			
		}
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
			margin-left: 220rpx;
			display: flex;
			font-size: 40rpx;
			/* width: 20%; */
		}
	.tit5 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 220rpx;
			display: flex;
			font-size: 40rpx;
			width: 30%;
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
	margin-top: 20rpx;
}
.tex{
	font-size: 25rpx;
	color: #8F8F94;
	margin-top: 10rpx;
}
.share{
	margin-left: 240rpx;
	top: -55rpx;
}
.share1{
	margin-left: 240rpx;
	/* top: -55rpx; */
}
.dele{
	top: -50rpx;
	/* margin-left: -10rpx; */
}

.but{
	margin-top: 20rpx;
	background-color: #6C40F3;
	color: #FFFFFF;
}
</style>
