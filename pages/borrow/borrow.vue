<template>
	<view class="show">
		<view class="book">
			<view class="imag">
				<image src="../../static/images/photo.gif" style="width: 208rpx; height: 258rpx;"></image>
			</view>
			<view class="book-name">冰与火之歌</view>
		</view>
		<!-- 分割线 -->
		<view class="br3"></view>
		
		<view class="text">
			<view class="book-Name">冰与火之歌</view>
			<view class="book-author">作者：
				<view>康玉兰著</view>
			</view>
			<view class="book-publisher">出版社：
				<view>北京大学联合出版社</view>
			</view>
			<view class="book-publish-time">出版年：
				<view>2017年</view>
			</view>
		</view>
		
		<!-- 分割线 -->
		<view class="br3"></view>
		<view class="order-book">
			<view class="order-book-image">
				<image class="house-image" src="../../static/images/tuguan.gif"></image>
			</view>
			<view class="order-book-right1">
				<view class="right-name">
					广东省中山图书馆
				</view>
				<view class="order-book-right1">
					<view class="order-ok">
						在馆可预约
					</view>
					<view class="count">
						数量：<view>2</view>
					</view>
					<view class="address">
						<image src="../../static/images/dingwei.png"></image>约<view>1196</view>km
					</view>
				</view>
				<view class="btnSubmmit">
					<button class="orderSubmmit">预约</button>
				</view>
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
			
		}
	}
</script>

<style>
	.book{
		height: 350rpx;
	}
	.imag{
		margin-left: 35%;
		margin-top: 40rpx;
		
	}
	.book-name{
		font-size: 36rpx;
		color: #333333;
		margin-top: 9rpx;
		margin-left: 37%;
	}
	.br3{
		height: 26rpx;
		background-color: #F4F5F6;
	}
	.text{
		margin-top: 30rpx;
		height: 200rpx;
		border: 1rpx solid ;
		margin-left: 50rpx;
	}
	.book-Name{
		font-size: 36rpx;
		color: #333333;
	}
	.book-author{
		display: flex;
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #999999;
	}
	.book-publisher{
		display: flex;
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #999999;
	}
	.book-publish-time{
		display: flex;
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #999999;
	}
	.order-book{
		width: 100%;
		height: 280rpx;
		border: #18B566 1rpx solid;
		display: flex;
	}
	.order-book-image{
		margin-top: 60rpx;
		margin-left: 45rpx;
		
	}
	.house-image{
		width: 300rpx;
		height: 190rpx;
	}
	.order-book-right1{
		margin-top: 60rpx;
		margin-left: 30rpx;
	}
</style>
