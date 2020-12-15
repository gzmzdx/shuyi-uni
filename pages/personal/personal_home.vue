<template>
	<view>
		<view class="top">
			<view class="tou">
				<image class="topimage" :src="info.avatar" style="width: 135rpx;height: 135rpx;border-radius: 50%;"></image>
			</view>
			<view class="bn">
				<view class="name" v-text="info.nickname">爱丽丝</view>
			</view>
			<!-- <view class="Grade">
				等级
			</view> -->
			<view class="dd">
				<view class="didian" v-text="info.city">广州</view>
			</view>
			<!-- 个性签名 -->
			<view class="gq">
				<view class="qianmin" v-text="info.signature">书上有路，学海无涯</view>
			</view>
			<navigator url="../myinfomation/myinfomation">
			<view class="genduo">
				<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
			</view>
			</navigator>
		</view>
		<!-- 中间 -->
		<view class="mid">
			<view class="wz">
				最近读书
			</view>
			<view class="book" v-for="b in book">
				<navigator :url="'../Bdetail/Bdetail?isbn='+b.ISBN">
					<image class="bookone" :src="b.picture_path" style="width: 120rpx;height: 150rpx;"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openId:1 ,//暂时是1
				info:{},//读者信息
				book:[],//最近读的书
				token:'token',
			}
		},
		onLoad() {
			this.getReaderInfo();
		},
		methods: {
			//获取读者信息
			getReaderInfo(){
				var that = this;
				uni.request({
					 // url:getApp().globalData.URL +'api/reader/app?id='+that.openId,
					 url:getApp().globalData.URL +'reader/personal',
					 data:{
						 id:that.openId,
						 token:that.token,
					 },
					 header: {
					     'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					 method:'GET',
					 success:res =>{
						that.info=res.data.readerInfo;
						that.book=res.data.zjds
						console.log("后台的数据2：",res.data.zjds)
						},
						fail:(res)=>{
							this.showModal("网络错误！")
						}
				})
			},
			//提示框
			showModal(val){
				 uni.showToast({
					title: val,
					icon: 'none'
				 });
			},
		},
	}
</script>

<style>
.top {
	height: 185rpx;
	width: 100%;
	/* background-color: #007AFF; */
	border-bottom: 1rpx solid #F1F1F1;
}
.topimage {
	margin-top: 25rpx;
	margin-left: 25rpx;
}

.name{
	margin-left: 180rpx;
	font-size: 30rpx;
}

.bn {
	margin-top: -135rpx;
}
.dd {
	margin-top: 0rpx;
	margin-left: 180rpx;
	font-size: 20rpx;
	color: #BBBBBB;
}
.qianmin {
	margin-top: 0rpx;
	margin-left: 180rpx;
	font-size: 25rpx;
	color: #555555;
}
.genduo{
	margin-left: 700rpx;
	margin-top: -70rpx;
}
.mid{
	height:230rpx;
	border-bottom: 1rpx solid #F1F1F1;
}
.wz{
	font-size: 30rpx;
	margin-left: 20rpx;
}
.book{
	margin-top: 20rpx;
	margin-left: 25rpx;
	/* display: flex; */
	/* display: inline-block;*/
	display: inline-flex;
	/* align-items: flex-end; */
}
</style>
