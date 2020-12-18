<template>
	<view>
		<view class="address1">
			<view class="mingzi">
				<view class="cos">李小琴</view>
				<view class="phone">182*****2038</view>
			</view>
			<view class="dzhi">
				<view class="tupian2">
					<image class="imag4" src="../../static/images/位置.png"></image>
				</view>
				<view class="dizhi">广东省广州大学城外环西路100号楼303</view>
			</view>

		</view>
		<view class="fenge"></view>
		<!--书籍-->
		<view class="show">

			<view class="midone">
				<view class="zhengti">
					<image class="imag" :src="book.picturePath" style="width: 158rpx; height: 188rpx;"></image>
					<view class="midwz">{{book.bookName}}</view>
				</view>
				<view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：{{book.publisher}}</view>
					<!-- <view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
					</view> -->
				</view>
				<view class="aa">
					<view class="sa">
						<view class="ss u-flex">馆藏：
							<view>{{list[index]&&list[index].library.name}}</view>
						</view>
						<!-- <view class="s7">
							<view class="s4">书易读者：
								<view class="s5" style="margin-left: 100rpx;">冰山一角，爱书的猫...</view>
							</view>
						</view> -->
					</view>
					<!-- <view class="sa2">
						<button type="warn" class="delete">删除</button>
					</view> -->
				</view>


			</view>
		</view>
		<!-- <view class="dibu">
			<view class="one">
				<image class="syps" src="../../static/images/1.jpg"</image>
				<view class="">书易配送</view>
			</view>
			<view class="two">
				<image class="wlps" src="../../static/images/1.jpg"</image>
				<view class="">物流配送</view>
			</view>
			<view class="three">
				<image class="dzzt" src="../../static/images/1.jpg"</image>
				<view class="">读者自提</view>
			</view>
		</view> -->

		<!--书籍-->
    <u-button @tap="orderSubmit(realBookId)" class="u-m-t-80 u-m-l-50 u-m-r-50" >提交</u-button>
	</view>
</template>

<script>
	import {getBookByBookId,realBook} from "../../api";

  export default {
		data() {
			return {
        book:{},
        index:0,//第几个图书馆
        list:{},
        realBookId:null,
        bookId:null,
			}
		},
		methods: {
      orderSubmit(realBookId){
        realBook({realBookId}).then(({data})=>{
          uni.showToast({icon:"none",title: "下单成功"});
          uni.switchTab({
            url: '/pages/main/main'
          });
        }).catch(err=>{
          uni.showToast({icon:"none",title: "服务器繁忙!"});
        })
      }
		},
    onLoad(query){
      //获取到图书信息
      console.log(query);
      this.index = query.index;
      this.realBookId = query.realBookId;
      this.bookId = query.bookId;
      getBookByBookId({bookId:query.bookId}).then(({data})=>{
        this.book = data.book;
        this.list = data.list;
      })
    }
	}
</script>

<style>
	.one{
		margin-left: 10rpx;
	}
	.two{
		margin-left: 100rpx;
	}
	.three{
		margin-left: 100rpx;
	}
	.wlps1{
		width: 60rpx;
		height: 60rpx;
	}
	.address1{
		margin-left: 60rpx;
		margin-top: 30rpx;
	}
	.dizhi{
		font-size: 26rpx;
		color: #999999;
	}
	.mingzi{
		display: flex;
		color: #999999;
	}
	.cos{
		font-size: 32rpx;
	}
	.phone{
		font-size: 26rpx;
		line-height: 45rpx;
		margin-left: 20rpx;

	}
	.dibu{
		display: flex;
		margin-top: 140rpx;
		font-size: 20rpx;
		color:#999999;
		margin-left:150rpx;

	}
	.fenge{
	/* 	height: 5rpx;
		width: 100%; */
		border-bottom: 1rpx solid #C8C7CC;
	}
	.dzhi{
		display: flex;
		margin-top: 10rpx;
	}
	.tupian{

	}
	.imag4{
		width: 40rpx;
		height: 40rpx;
		margin-left: -10rpx;

	}
	.bottom{
		border: #EEEEEE 1rpx solid;
	}
	.show {
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}

	.delete {
		width: 110rpx;
		font-size: 20rpx;
		height: 50rpx;
	}

	.sa2 {
		margin-left: 150rpx;
		margin-top: 30rpx;
	}

	.aa {
		display: flex;
	}

	.yuan {
		border-radius: 50%;
		width: 45rpx;
		height: 40rpx;
		border: 1rpx solid #C8C7CC;
		margin-top: 100rpx;
		margin-left: 50rpx;
		margin-right: -70rpx;

	}

	.midone {
		width: 100%;
		height: 200rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		margin-bottom: 50rpx;
		align-items: center;
		margin-left: 30rpx;
	}

	.zhengti {
		display: flex;
		width: 100%;
		/* background-color: #4CD964; */
	}

	.imag {
		margin-left: 30rpx;
		size: 80%;
	}

	.midwz {
		font-size: 36rpx;
		height: 35rpx;
		margin-top: -5rpx;
		align-items: center;
		margin-left: 5rpx;
		width: auto;
		color: #333333;
		/* background-color:  #333333; */
	}

	.s1 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: -120rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
		display: flex;
	}

	.s2 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}

	.s3 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}

	.s4 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		/* color: #F0AD4E; */
		color: #999999;
	}

	.ss {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #00BFFF;
	}

	.s5 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: -26rpx;
		align-items: center;
		margin-left: 60rpx;
	}

	.s6 {
		color: #00BFFF;

	}

	.s7 {
		height: 35rpx;
		align-items: center;
		width: auto;
		/* display: flex; */
	}
</style>
