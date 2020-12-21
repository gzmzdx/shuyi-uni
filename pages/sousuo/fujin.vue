<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar zhead="65rpx" height="44" title="附近的书" title-color="white" title-size="40" :background="background" back-icon-color="white"
		 back-icon-size="50">
			<view class="navbar-right" slot="right">
				<view class="right_list" style="height: 80rpx;width: 80rpx;">
					<image style="height: 80rpx;width: 80rpx;" src="../../static/images/搜索icon@2x.png"></image>
				</view>
			</view>
		</u-navbar>
		<view style="height: 65rpx"></view>
		<!-- 范围 -->
		<view class="list">
			<view data-num="1" @click="getNearbyNum" class="td" :class="[num == 1?'text-color':'']">1KM以内</view>
			<view data-num="1.5" @click="getNearbyNum" class="td" :class="[num == 1.5?'text-color':'']">1.5KM以内</view>
			<view data-num="2" @click="getNearbyNum" class="td" :class="[num == 2?'text-color':'']">2KM以内</view>
			<!-- <navigator url="fujinB"> -->
			<view class="td">同城</view>
			<!-- </navigator> -->
		</view>
		<view>
			<map :data-name='markers' :longitude="longitude" :latitude="latitude" @markertap="go" @tap="total" show-compass="true"
			 show-scale="true" show-location="true" :markers="markers" :polyline="polyline" :style="'width:'+ width+'px;height:'+height+'px;'">
				<view class="book-back" v-if="sense == 1">
					<cover-view class="title">
						<cover-view class="top">
							<cover-image @click="total" class="topImage" src="/static/images/top1.png"></cover-image>
						</cover-view>
						<cover-view class="dw">
							<cover-view class="weizhi">
								<cover-image class="imgs" src="/static/images/dh.png"></cover-image>
								<cover-view class="dimin">书籍所在位置：</cover-view>
								<cover-view class="xianshi"></cover-view>
							</cover-view>
						</cover-view>
						<cover-view class="xinxi">
							<cover-view class="nei">
								<cover-image class="tupian" :src="marker.picturePath"></cover-image>
							</cover-view>
							<cover-view class="book-body">
								<cover-view class="book-name">书名：{{marker.bookName}}</cover-view>
								<cover-view class="book-name1">作者：{{marker.author}}</cover-view>
								<cover-view class="book-name1">出版社：{{marker.publisher}}</cover-view>
								<cover-view class="book-name1">所在图书馆：{{marker.library}}</cover-view>
								<cover-view class="book-name1">是否外借：</cover-view>
								<cover-view class="book-add" @click="addFriend" :data-name="marker">预约</cover-view>
							</cover-view>
						</cover-view>
					</cover-view>
				</view>
			</map>
		</view>
	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				background: {
					background: '#6C40F3'
				},
				num: 1,	//默认选择
				width: '', //屏幕宽度
				height: '', //屏幕高度
				ployline: [], //路线渲染
				latitude: 36.309051, //当前坐标纬度
				longitude: 120.396592, //当前坐标经度
				now_Location: { //当前坐标
					latitude: '',
					longitude: '',
				},
				end_Location: { //目的地坐标
					latitude: '',
					longitude: '',
				},
				now_Duration: {}, //剩余时间
				now_Distance: {}, //剩余距离
				sense: 0, //弹出框
				marker: {}, //当前导航信息
				name: '', //当前地址
				//标记点
				markers: [],
				//初始化标记点
				markers_new: [{
					iconPath: "/static/images/dw.png",
					id: 0,
					latitude: "26.46203",
					longitude: "106.67001",
					width: 40,
					height: 40,
					callout: {
						content: "书本名",
						borderWidth: "2rpx",
						fontSize: "35rpx",
						display: "BYCLICK"
					},
					bookName: '', //书本名称
					realBookId: '', //书本id
					picturePath: '', //书本图片
					author: '', //作者
					publisher: '', //出版社
					library: '', //图书馆
				}],
			}
		},
		onLoad: function(options) {
			console.log("options:", options);
			var that = this;
			// 获取屏幕宽高
			that.width = wx.getSystemInfoSync().windowWidth;
			that.height = wx.getSystemInfoSync().windowHeight;
			uni.getLocation({
				type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
				success: function(res) {
					console.log('当前位置数据Object如下：')
					console.log(res)
					/** 开始同步数据 */
					// that.latitude = res.latitude
					// that.longitude = res.longitude
					that.getNearbyBook(120.396592, 36.309051, 1);
				}
			})
		},
		methods: {

			//点击公里数获取范围内的图书
			getNearbyNum(e) {
				var that = this;
				var num = e.currentTarget.dataset.num;
				var longitude = that.longitude;
				var latitude = that.latitude;
				that.num = num;
				that.getNearbyBook(longitude, latitude, num);
			},
			/**
			 * 根据当前位置获取附近的书
			 * @param {Object} longitude 经度
			 * @param {Object} latitude  纬度
			 * @param {Object} distance 范围公里数
			 */
			async getNearbyBook(longitude, latitude, distance) {
				var that = this;
				var BookList = [];
				var params = {
					url: "realBook/getBookByMap",
					type: 'POST',
					data: {
						longitude: longitude,
						latitude: latitude,
						distance: distance
					}
				}
				/**
				 * iconPath: "/static/images/dw.png",
					id: 0,
					latitude: "26.46203",
					longitude: "106.67001",
					width: 40,
					height: 40,
					callout: {
						content: "伍辉",
						borderWidth: "2rpx",
						fontSize: "35rpx",
						display: "BYCLICK"
					}
				 */
				BookList = await app.myRequest(params);
				console.log(BookList);
				if (BookList !== undefined && BookList.length > 0) {
					for (var i = 0; BookList.length > i; i++) {
						var marker = {};
						var callout = {};
						// markers[i] = that.markers_new[0];
						marker.iconPath = "/static/images/dw.png";
						marker.id = i;
						marker.longitude = BookList[i].longtitude;
						marker.latitude = BookList[i].latitude;
						marker.width = 40;
						marker.height = 40;
						marker.bookName = BookList[i].book.bookName;
						marker.realBookId = BookList[i].realBookId;
						marker.picturePath = BookList[i].book.picturePath;
						marker.author = BookList[i].book.author;
						marker.publisher = BookList[i].book.publisher;
						marker.library = BookList[i].library.name;
						callout.content = BookList[i].book.bookName;
						callout.borderWidth = "2rpx";
						callout.fontSize = "35rpx";
						callout.display = "BYCLICK";
						marker.callout = callout;
						// console.log("wwwww",marker);
						that.markers.push(marker)
					}
					// console.log("hhhhhhh",that.markers);
				}
			},
			/**
			 * 点击对应的标记点触发
			 * @param {*} e 
			 */
			go(e) {
				var that = this
				console.log(e.detail.markerId)
				var val = e.detail.markerId
				if (val != null) {
					console.log("我执行了")
					that.sense = 1; //显示隐藏标签
					that.marker = that.markers[val];
				}
				console.log("maker：", that.marker);
				// uni.openLocation({
				// 	latitude: 36.309051,
				// 	longitude: 120.396592,
				// 	success: function(e) {
				// 		console.log(e);
				// 	}
				// });
				// var point = new plus.maps.Point(120.396592, 36.309051);
				// plus.maps.Map.reverseGeocode(
				// 	point, {},
				// 	function(event) {
				// 		var address = event.address; // 转换后的地理位置
				// 		var point = event.coord; // 转换后的坐标信息
				// 		var coordType = event.coordType; // 转换后的坐标系类型
				// 		console.log(address, 'address');
				// 	},
				// 	function(e) {}
				// );
			},
			/**
			 * 点击地图触发
			 */
			total() {
				var that = this;
				that.sense = 0;
			},
			/**
			 * 借阅图书
			 */
			addFriend(e) {
				console.log(e.currentTarget.dataset.name.callout.content);
				var name = e.currentTarget.dataset.name.callout.content
				uni.showModal({
					content: '确定借阅图书吗？',
					success(res) {
						if (res.confirm) {
							console.log('用户点击确定')
							uni.showToast({
								title: '借阅成功',
								type: 'success',
								duration: 2000
							})
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					},
					fail(res) {
						console.log("失败了！")
					}
				})
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
	.tab1 {
		display: flex;
		background-color: #6C40F3;
	}

	.tit1 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;
	}

	.tit3 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 40%;
	}

	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}

	.im {
		margin-top: 10rpx;
		margin-left: 200rpx;
	}

	.im1 {
		margin-top: 10rpx;
		margin-left: 40rpx;
	}

	.list {
		height: 80rpx;
		margin-top: 10rpx;
		display: flex;
		background-color: #FFFFFF;
	}

	.td {
		margin: 20rpx 20rpx;
		height: 45rpx;
		width: 22%;
		font-size: 28rpx;
		text-align: center;
		background-color: #FFFFFF;
		/* width: 20%; */

		/* border-top: 1rpx solid #C0C0C0;
		border-bottom:1rpx solid #C0C0C0; */
	}

	.br {
		height: 30rpx;
		width: 1rpx;
		margin-top: 25rpx;
		background-color: #DFDFDF;
	}

	.map {
		/* margin-top: 30rpx; */
		width: 100%;
		height: 1400rpx;
	}

	.book-back {
		width: 100%;
		height: 100%;
		background-color: rgb(0, 0, 0, .5);
	}

	.title {
		display: column;
		width: 100%;
		height: 550rpx;
		background-color: white;
		position: fixed;
		bottom: 0;
		/* margin-left: 2%;
		margin-right: 2%;
		border-radius: 10rpx 10rpx 0 0; */
	}

	.top {
		width: 100%;
		height: 50rpx;
		line-height: 60rpx;
		/** 垂直居中 **/
		text-align: center;
		/** 水平居中 **/
	}

	.topImage {
		margin-left: 47%;
		width: 10%;
		height: 50rpx;
	}

	.dw {
		display: flex;
		width: 100%;
		height: 100rpx;
		margin-top: 20rpx;
	}

	.weizhi {
		display: flex;
		width: 100%;
		height: 100rpx;
	}

	.imgs {
		width: 10%;
		height: 70rpx;
		/* margin-top: 20rpx; */
		margin-left: 30rpx;
	}

	.dimin {
		width: 23%;
		margin-top: 10rpx;
		margin-left: 5rpx;
		color: #636363;
	}

	.xianshi {
		display: inline;
		white-space: pre-line;
		width: 60%;
		color: #000;
		font-size: 35rpx;
		height: 100rpx;
		padding-top: 5rpx;
		margin-left: 20rpx;
		margin-top: 5rpx;
		margin-right: 5rpx;
	}

	.xinxi {
		display: flex;
	}

	.nei {
		display: row;
		width: 35%;
		height: 400rpx;
	}

	.tupian {
		width: 95%;
		height: 350rpx;
		margin-left: 30rpx;
	}

	.book-name {
		margin-left: 40rpx;
		margin-right: 20rpx;
		/* margin-top: 30rpx; */
		height: 45rpx;
		width: 90%;
		font-size: 30rpx;
		color: #6C40F3;
	}

	.book-name1 {
		margin-left: 40rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
		font-size: 28rpx;
		color: #636363;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.book-add {
		margin-top: 30rpx;
		margin-right: 20rpx;
		border-radius: 10rpx;
		float: right;
		width: 50%;
		height: 60rpx;
		text-align: center;
		color: #fff;
		line-height: 60rpx;
		/** 垂直居中 **/
		text-align: center;
		/** 水平居中 **/
		background-color: #6C40F3;
	}

	.img {
		margin-top: 30rpx;
		margin-left: 5rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.book-body {
		display: row;
		margin-top: 15rpx;
		height: 400rpx;
		width: 63%;
		color: #636363;
	}

	.juli {
		width: 70%;
		margin-top: 40rpx;
		margin-left: 70rpx;
	}

	.item {
		padding-left: 10rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		width: 150rpx;
		height: 60rpx;
		color: #255BBA;
	}
	.text-color{
		color: #6C40F3;
	}
</style>
