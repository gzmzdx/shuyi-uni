<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<view class="head-tab">
				<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 60rpx; height: 60rpx;"></image>
				<view class="tit1">找书</view>
				<navigator url="../sousuo/sousuo">
					<image class="im" src="../../static/images/search_icon2x.png"style="width: 80rpx; height: 80rpx;"></image>
				</navigator>
			</view>

		</view>
		<!-- 分类选择 -->
		<view class="list1">
			<view class="td">中文</view>
			<view class="td">英文</view>
			<view class="td">借阅量</view>
			<view class="td">出版时间</view>
			<view class="td">在馆</view>
			<view class="td">书易流通</view>
		</view>
		<view class="tab1"></view>
		<view class="list">
			<image class="im1" src="../../static/images/封面.png" ></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<view class="tex">出版时间 ：2020-09</view>
				<view class="tex1">广东省图书馆、广东中山图书馆</view>
			</view>
		</view>
		<view class="list">
			<image class="im1" src="../../static/images/封面.png" ></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<view class="tex">出版时间 ：2020-09</view>
				<view class="tex1">广东省图书馆、广东中山图书馆</view>
			</view>
		</view>
		<image class="top" src="../../static/images/top.png" style="width: 80rpx; height: 80rpx;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
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

<style lang="scss">
	.tab1 {
		display: flex;
	}

	.head-tab {
		background-color: #6C40F3;
		// margin-top: 50rpx;
		display: flex;
	}

	.tit1 {
		margin-top: 49rpx;
		/* color: #555555; */
		margin-left: 15rpx;
		font-size: 45rpx;
		color: #FFFFFF;
		width: 20%;
	}

	.back {
		margin-top: 50rpx;
		margin-left: 10rpx;
	}

	.im{
		margin-top: 40rpx;
		margin-left: 400rpx;
	}

	.list1 {
		display: flex;
		height: 70rpx;
		background-color: #F8F8F8;
	}

	.td {
		width: 160rpx;
		font-size: 25rpx;
		text-align: center;
		height: 40rpx;
		margin: 10rpx 10rpx;
		border: 1rpx solid #C8C7CC;
		border-radius: 15rpx;
		/* background-color: #00AAFF; */
		margin-top: 15rpx;
		color: #999999;
	}

	.list {
		height: 290rpx;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}

	.im1 {
		margin: 40rpx 40rpx;
		width: 150rpx;
		height: 200rpx;
	}

	.name {
		margin-top: 30rpx;
		font-size: 40rpx;
	}

	.tex {
		font-size: 28rpx;
		margin-top: 5rpx;
		color: #808080;
	}

	.tex1 {
		margin-top: 15rpx;
		font-size: 35rpx;
		color: #F0AD4E;
	}

	.top {
		top: -170rpx;
		margin-left: 680rpx;
	}

	.fenl {
		display: flex;
	}
</style>
