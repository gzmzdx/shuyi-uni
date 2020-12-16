<template>
	<view>
		<!-- 导航栏 -->
		<view class="ta"></view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header">
					<image @click="leftClick" class="address" src="../../static/images/turn_left_two_return2x.png"></image>
					<view class="name">图书详情</view>
					<view class="map-wrap" @click="rightClick">
						<image class="iconfont" src="../../static/images/detail_fenx_icon.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="blank"></view>
		<!-- 图片背景 -->
		<view class="bg">
			<image class="ima1" :src="bookDetail.picturePath"></image>
			<view class="tit6">{{bookDetail.bookName}}</view>
		</view>
		<view class="tit">{{bookDetail.bookName}}</view>
		<view class="table">
			<view class="text_tex">作者：{{bookDetail.author}}</view>
			<view class="text_tex">出版社：{{bookDetail.publisher}}</view>
			<view class="text_tex">出版年：{{bookDetail.publisherYear}}</view>
			<view class="text_tex">图书馆：</view>
			<view class="text_tex">ISBN：{{bookDetail.isbn}}</view>
			<view class="text_tex">馆藏数量：{{bookDetail.num}}</view>
			<view class="text_tex">可借数量：{{num}}</view>
			<view class="text_tex">书易读者：</view>
			<view class="text_tex">索书号：{{bookDetail.classificationSymbol}}</view>
		</view>
		<!-- 图书简介 -->
		<view class="jian">
			<view class="tit2">图书简介</view>
			<view class="text">{{bookDetail.summary}}</view>
		</view>

		<!-- 作者简介 -->
		<view class="jian">
			<view class="tit2">作者简介</view>
			<view class="text">{{bookDetail.authorAbstract}}</view>
		</view>

		<!-- 类似的书 -->
		<view class="jian2">
			<view class="tit2">类似的书</view>
			<view class="book_like">
				<view v-for="item in bookLikeList">
					<navigator :url="'../Bdetail/Bdetail?isbn='+item.isbn">
						<image class="image" :src="item.picturePath"></image>
					</navigator>
				</view>
			</view>
		</view>

		<view class="mar-btn"></view>

		<!-- 底部 -->
		<view class="buttom">
			<button class="btn1" @click="borrowBook" style="color: #00AAFF;">借书</button>
			<button class="btn2" style="color: #FFFFFF;">收藏</button>
		</view>

	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				"bookDetail": {}, //数据详情
				"bookLikeList": [], //类似的书
				"num": 0,	//可借书的数量
			}
		},
		onLoad(e) {
			console.log(e.isbn);
			this.getBookByISBN(e.isbn);
		},
		methods: {

			borrowBook: function() {
				uni.navigateTo({
					url: '../borrow/borrow'
				})
			},
			//根据ISBN获取图书详情
			async getBookByISBN(e) {
				console.log(e)
				var that = this;
				var params = {
					url: "book?isbn=" + e,
					type: 'GET'
				}
				const res = await app.myRequest(params);
				that.bookDetail = res.content[0];
				that.getBookByBook(res.content[0].classificationSymbol);
				that.getBookNumByBookId(res.content[0].bookId);
			},

			//根据分类号查询类似的书
			async getBookByBook(e) {
				var that = this;
				console.log(e)
				if (e == null && e == '') {
					var params = {
						url: "book?blurry&page=0&size=3",
						type: 'GET'
					}
				} else {
					var params = {
						url: "book?page=0&size=3&blurry=" + e,
						type: 'GET'
					}
				}
				const res = await app.myRequest(params);
				that.bookLikeList = res.content;
				console.log("ffffffff:", that.bookLikeList);
			},
			
			//根据booId查询可解的书
			async getBookNumByBookId(e){
				var that = this;
				if(e == null || e=="" || e==undefined){
					uni.showToast({
						icon: 'none',
						title: '网络链接失败！'
					})
				}else{
					var params = {
						url: "realBook/queryIsBorrowed?bookId=" + e,
						type: 'GET',
						data: {}
					}
					that.num = await app.myRequest(params);
				}
			},
			// leftClick(){
			// 	uni.reLaunch({
			// 	    url: '../main/main'
			// 	});
			// },
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


	.tab1 {
		display: flex;
		background-color: #6C40F3;
	}

	.tit1 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 220rpx;
		display: flex;
		font-size: 40rpx;
		/* width: 40%; */
	}

	.tit5 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 220rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;
	}

	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}

	/* .im{
		margin-top: 15rpx;
		margin-left: 0rpx;
	} */
	.im1 {
		margin-top: 10rpx;
		margin-left: 40rpx;
	}

	.ima {
		margin-top: 20rpx;
		margin-left: 260rpx;
		-moz-box-shadow: 2px 2px 10px #06c;
		-webkit-box-shadow: 2px 2px 10px #06c;
		box-shadow: 2px 2px 10px #06c;
	}

	.ima1 {
		margin-top: 20rpx;
		margin-left: 260rpx;
		width: 200rpx;
		height: 300rpx;
		-moz-box-shadow: 2px 2px 10px #06c;
		-webkit-box-shadow: 2px 2px 10px #06c;
		box-shadow: 2px 2px 10px #06c;
	}

	.bg {
		height: 400rpx;
		width: 95%;
		margin-top: 20rpx;
		margin-left: 18rpx;
		background-color: #F8F8F8;
		-moz-box-shadow: 0 0 10px #06c;
		-webkit-box-shadow: 0 0 10px #06c;
		box-shadow: 0 0 10px #06c;
	}

	.tit {
		width: 100%;
		margin: 20rpx 20rpx;
		font-size: 36rpx;
	}

	.tit3 {
		/* margin: 20rpx 20rpx; */
		text-align: center;
		font-size: 36rpx;
		color: #333333;
	}

	.tit6 {
		/* margin: 20rpx 20rpx; */
		text-align: center;
		font-size: 36rpx;
		color: #333333;
	}

	.text_tex {
		// height: 30rpx;
		/* margin: 10rpx 20rpx; */
		margin-left: 20rpx;
		margin-top: 10rpx;
		color: #8F8F94;
		font-size: 26rpx;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		/* autoprefixer: off */
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/*autoprefixer: on */
		/*设置 需要显示的行数*/
	}

	.tex1 {
		/* margin: 10rpx 10rpx; */
		margin-left: 10rpx;
		margin-top: 20rpx;
		color: #8F8F94;
		height: 30rpx;
		width: 660rpx;
		font-size: 28rpx;
	}

	.ta {
		display: flex;
	}

	.imag {
		/* margin-left: 150rpx; */
		margin-top: 20rpx;
	}

	.table {
		margin-top: -10rpx;
		height: 400rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}

	.jian {

		width: 100%;
		position: relative;
		min-height: 80rpx;
		margin-top: 17rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}

	.jian1 {
		height: 240rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}

	.jian2 {
		height: 350rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}

	.tit2 {
		margin: 20rpx;
		font-size: 36rpx;
		color: #333333;
		display: block;
		word-break: break-all;
		word-wrap: break-word;
	}

	.text {
		margin: 20rpx 20rpx;
		font-size: 26rpx;
		color: #999999;
		width: 95%;
		height: 100%;
		/* overflow-wrap: break-word; */
		line-height: 1.7em;
	}

	.lis {
		height: 400rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}

	.toux {
		border-radius: 50%;
		margin: 20rpx 20rpx;
	}

	.li {
		display: flex;
	}

	.name {
		color: #00AAFF;
		margin-top: 35rpx;
		font-size: 30rpx;
	}

	.vip {
		color: #F0AD4E;
		font-size: 25rpx;
		border-radius: 10rpx;
		border: 1rpx solid #F0AD4E;
		height: 35rpx;
		margin-top: 38rpx;
		background-color: #FFFFFF;
		text-align: center;
		width: 80rpx;
		margin-left: 10rpx;
	}

	.time {
		color: #8F8F94;
		font-size: 25rpx;
		margin-left: 200rpx;
		margin-top: 37rpx;
	}

	.text1 {
		margin: 10rpx 20rpx;
		font-size: 25rpx;
		margin-left: 100rpx;
		color: #808080;
	}

	.book_like {
		display: flex;
		height: 260rpx;
	}

	.image {
		width: 200rpx;
		height: 250rpx;
		margin: 10rpx 20rpx;
		margin-left: 26rpx;
	}

	.mar-btn {
		width: 100%;
		height: 100rpx;
	}

	.buttom {
		width: 100%;
		height: 88rpx;
		display: flex;
		padding: 0;
		margin: 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.btn1 {
		width: 50%;
		margin: 0;
		border-radius: 0;
		border-color: #FFFFFF;
		background-color: #FFFFFF;
		color: #00AAFF;
		font-size: 30rpx;
	}

	.btn2 {
		width: 50%;
		margin-right: 0rpx;
		background-color: #6C40F3;
		color: #FFFFFF;
		border-radius: 0rpx;
		font-size: 30rpx;
	}
</style>
