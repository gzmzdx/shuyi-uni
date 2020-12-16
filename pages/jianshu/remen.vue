<template>
	<view>
		<!-- 导航栏 -->
		<navbar title="热门推荐" title-color="white" title-size="40" :background="background" back-icon-color="white"
		 back-icon-size="50">
			<view class="navbar-right" slot="right">
				<view class="right_list" style="height: 50rpx;width: 50rpx;">
					<image style="height: 50rpx;width: 50rpx;" src="../../static/images/分类.png"></image>
				</view>
			</view>
		</navbar>
		<!-- #ifdef APP-PLUS -->
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit">热门推荐</view>
			<image class="im" src="../../static/images/分类.png" style="width: 80rpx; height: 80rpx;"></image>
			<image class="im1" src="../../static/images/搜索icon@2x.png" style="width: 80rpx; height: 80rpx;"></image>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">热门推荐</view>
			<image class="im" src="../../static/images/分类.png"></image>
			<image class="im1" src="../../static/images/搜索icon@2x.png"></image>
		</view>
		<!-- #endif -->

		<view class="list" v-for="item in hotbookList">
			<image class="ima1" :src="item.book.picturePath"></image>
			<view>
				<navigator :url="'../Bdetail/Bdetail?isbn='+item.isbn">
					<view class="title_name">{{item.book.bookName}}</view>
					<view class="text_tex">作者 ：{{item.book.author}}</view>
					<view class="text_tex">出版社 ：{{item.book.publisher}}</view>
					<!-- <view class="tex">出版时间 ：2020-09</view> -->
					<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	let app = getApp();
	import navbar from '../../components/c-navbar/index.vue'
	export default {
		components: {
			navbar,
		},
		data() {
			return {
				background: {
					background: '#6C40F3'
				},
				hotbookList: [], //热书列表
			}
		},
		onLoad() {
			this.getHotBook(0); //热书
		},
		methods: {

			//获取热书列表
			async getHotBook(e) {
				var that = this;
				var params = {
					url: "hotbook?size=10&page=" + e,
					type: 'GET',
					data: {}
				}
				const res = await app.myRequest(params);
				that.hotbookList = res.content;
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.tq {
		height: 70rpx;
		background-color: #6C40F3;
	}

	.tab {
		display: flex;
		background-color: #6C40F3;
	}

	.tit {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 250rpx;
		display: flex;
		font-size: 40rpx;
		width: 60%;

	}

	.tit2 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;

	}

	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	/* .tab1 {
		height: 10rpx;
		background-color: #F1F1F1;
	} */

	.tit1 {
		margin-top: 28rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
		font-size: 28rpx;
		width: 20%;
	}

	.im {
		margin-top: 10rpx;
		width: 60rpx;
		height: 60rpx;
		margin-left: 40rpx;
	}

	.im1 {
		/* margin-top: 10rpx; */
		width: 60rpx;
		height: 60rpx;
		margin-left: 0rpx;
	}

	.list {
		height: 330rpx;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}

	.ima {
		margin: 40rpx 40rpx;
	}

	.ima1 {
		margin: 40rpx 40rpx;
		width: 200rpx;
		height: 250rpx;
	}

	.ta {
		/* margin-left: 100rpx; */
		width: 0rpx;
	}

	.biaoz {
		/* margin-top: 60rpx; */
		margin-left: 180rpx;
	}

	.title_name {
		width: 400rpx;
		margin-left: 10rpx;
		margin-top: 50rpx;
		font-size: 40rpx;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		/* -webkit-box-orient: vertical; */
		-webkit-line-clamp: 2;
		/*设置 需要显示的行数*/
	}

	.text_tex {
		width: 450rpx;
		/* height: 30rpx; */
		text-align: left;
		font-size: 28rpx;
		margin-top: 15rpx;
		color: #808080;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/*设置 需要显示的行数*/
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
</style>
