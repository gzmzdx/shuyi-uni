<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header">
					<image @click="leftClick" class="address" src="../../static/images/turn_left_two_return2x.png"></image>
					<view class="name">新书上架</view>
					<view class="map-wrap" @click="rightClick">
						<image class="iconfont" src="../../static/images/change_icon.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="blank"></view>

		<view class="list" v-for="item in newbookList">
			<view class="ta">
				<image v-if="item.book.num <=0" class="biaoz" src="../../static/images/bukejie_icon.png" style="width: 60rpx; height: 60rpx;"></image>
				<image v-if="item.book.num > 0" class="biaoz" src="../../static/images/kejie_icon.png" style="width: 60rpx; height: 60rpx;"></image>
			</view>
			<image class="ima1" :src="item.book.picturePath"></image>
			<view>
				<navigator :url="'../Bdetail/Bdetail?isbn='+item.isbn">
					<view class="title_name">{{item.book.bookName}}</view>
					<view class="tex">作者 ：{{item.book.author}}</view>
					<view class="tex">出版社 ：{{item.book.publisher}}</view>
					<!-- <view class="tex">出版时间 ：2020-09</view> -->
					<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				newbookList: [], //新书list
			}
		},
		onLoad() {
			this.getNewBook(0); //新书
		},
		methods: {
			//获取新书列表
			async getNewBook(e) {
				var that = this;
				var params = {
					url: "newbook?size=10&page=" + e,
					type: 'GET',
					data: {}
				}
				const res = await app.myRequest(params);
				that.newbookList = res.content;
				for (var i = 0; that.newbookList.length > i; i++) {
					var bookId = that.newbookList[i].book.bookId;
					var params = {
						url: "realBook/queryIsBorrowed?bookId=" + bookId,
						type: 'GET',
						data: {}
					}
					const num = await app.myRequest(params);
					//将可解的数量赋值到num中
					that.newbookList[i].book.num = num
				}
			},
			leftClick() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	// 顶部页面
	$color-base: #6C40F3;
	$words-color-base: #333333;
	$words-color-light: #999999;

	.header-wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;

		.index-header {
			display: flex;
			height: 150rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			padding-top: 40rpx;
			background-color: $color-base;
			font-size: 28rpx;
			color: #fff;
			align-items: center;
			// justify-content: space-between;

			.address {
				// margin-left: 50upx;
				width: 60rpx;
				height: 60rpx;
				font-size: 26rpx;
				margin-top: 20rpx;
			}

			.name {
				color: #FFFFFF;
				width: 80%;
				height: 60rpx;
				font-size: 36rpx;
				margin-top: -32rpx;
				text-align: center;
			}

			.map-wrap {
				.iconfont {
					margin-top: 50rpx;
					width: 60rpx;
					height: 60rpx;
					font-size: 36rpx;
					margin-right: 5rpx;
				}

				text {
					font-size: 26rpx;
				}
			}
		}
	}

	.blank {
		height: 150rpx;
	}

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
		width: 50%;

	}

	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	/* .tab1 {
		height: 10rpx;
		background-color: #F1F1F1;
	} */
	.shua {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

	.shua1 {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

	.tit1 {
		margin-top: 28rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
		font-size: 28rpx;
		width: 20%;
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
		width: 500rpx;
		margin-left: 10rpx;
		margin-top: 50rpx;
		font-size: 40rpx;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		/*设置 需要显示的行数*/
	}

	.tex {
		font-size: 28rpx;
		margin-top: 10rpx;
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
</style>
