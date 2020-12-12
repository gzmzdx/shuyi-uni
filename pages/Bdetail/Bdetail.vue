<template>
	<view>
		<!-- 导航栏 -->
		<view class="ta"></view>
		<!-- #ifdef APP-PLUS -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit1">图书详情</view>
			<share>
			<!-- <image class="im" src="../../static/images/详情页.分享.icon.png" style="width: 50rpx; height: 50rpx;"></image> -->
			</share>
			</view>
		<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tab1" style="width: 100%; height: 90rpx;">
				<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
				<view class="tit5">图书详情</view>
				<share>
				<!-- <image class="im1" src="../../static/images/详情页.分享.icon.png" style="width: 50rpx; height: 50rpx;"></image> -->
				</share>
				</view>
			<!-- #endif -->
			
			<!-- 图片背景 -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="bg">
				<image class="ima1" src="../../static/images/封面.png" ></image>
			<view class="tit6">书名</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="bg">
				<image class="ima" src="../../static/images/封面.png" style="width: 200rpx; height: 300rpx;"></image>
			<view class="tit3">书名</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="tit">书名</view>
			<view class="table">
			<view class="tex">作者：</view>
			<view class="tex">出版社：</view>
			<view class="tex">出版年：</view>
			<view class="tex">图书馆：</view>
			<view class="tex">ISBN：</view>
			<view class="tex">馆藏数量：</view>
			<view class="tex">可借数量：</view>
			<view class="tex">书易读者：</view>
			<view class="tex">索书号：</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tit">书名</view>
			<view class="table">
			<view class="tex5">作者：</view>
			<view class="tex5">出版社：</view>
			<view class="tex5">出版年：</view>
			<view class="tex5">图书馆：</view>
			<view class="tex5">ISBN：</view>
			<view class="tex5">馆藏数量：</view>
			<view class="tex5">可借数量：</view>
			<view class="tex5">书易读者：</view>
			<view class="tex5">索书号：</view>
			</view>
			<!-- #endif -->
			<!-- 图书简介 -->
			<view class="jian">
				<view class="tit2">图书简介</view>
				<view class="text">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			</view>
			
			<!-- 作者简介 -->
			<view class="jian">
				<view class="tit2">作者简介</view>
				<view class="text">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			</view>
			
			<!-- 类似的书 -->
			<view class="jian2">
				<view class="tit2">类似的书</view>
				<view>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
				</view>
			</view>
			<!-- 底部 -->
			<!-- #ifdef APP-PLUS -->
			<view class="btn">
				<button class="btn1">借书</button>
				<button class="btn2">收藏</button>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="btn">
				<view class="btn3">借书</view>
				<view class="btn4">收藏</view>
			</view>
			<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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
		/* width: 40%; */
	}
	.tit5 {
		margin-top: 9rpx;
		color:#FFFFFF ;
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
	.im1{
		margin-top: 10rpx;
		margin-left: 40rpx;
	}
	.ima{
		margin-top: 20rpx;
        margin-left: 260rpx; 
		 -moz-box-shadow:2px 2px 10px #06c;
		 -webkit-box-shadow:2px 2px 10px #06c;
		 box-shadow:2px 2px 10px #06c;
	}
	.ima1{
		margin-top: 20rpx;
	    margin-left: 260rpx; 
		width: 200rpx;
		height: 300rpx;
		 -moz-box-shadow:2px 2px 10px #06c;
		 -webkit-box-shadow:2px 2px 10px #06c;
		 box-shadow:2px 2px 10px #06c;
	}
	.bg{
		height: 400rpx;
		width: 95%;
		margin-top: 20rpx;
		margin-left: 18rpx;
		background-color: #F8F8F8;
		 -moz-box-shadow:0 0 10px #06c;
		 -webkit-box-shadow:0 0 10px #06c;
		 box-shadow:0 0 10px #06c;
	}
	.tit{
		margin: 20rpx 20rpx;
		font-size: 36rpx;
	}
	.tit3{
		/* margin: 20rpx 20rpx; */
	    text-align: center;
		font-size: 40rpx;
		color: #333333;
	}
	.tit6{
		/* margin: 20rpx 20rpx; */
	    text-align: center;
		font-size: 40rpx;
		color: #333333;
	}
	.tex{
		/* margin: 10rpx 20rpx; */
		margin-left: 20rpx;
		color: #8F8F94;
		font-size: 28rpx;
	}
	.tex5{
		/* margin: 10rpx 20rpx; */
		/* margin-top: 10rpx; */
		margin-left: 20rpx;
		color: #8F8F94;
		font-size: 30rpx;
	}
	.tex1{
		/* margin: 10rpx 10rpx; */
		margin-left: 10rpx;
		margin-top: 20rpx;
		color: #8F8F94;
		height: 30rpx;
		width: 660rpx;
		font-size: 28rpx;
	}
	.ta{
		display: flex;
	}
	.imag{
		/* margin-left: 150rpx; */
		margin-top: 20rpx;
	}
	.table{
		margin-top: -20rpx;
		height: 380rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.jian{
		
		height: 240rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.jian1{
		height: 240rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.jian2{
		height: 350rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.tit2{
		margin: 20rpx ;
		font-size: 36rpx;
		color: #333333;
	}
	.text{
		margin: 20rpx 20rpx;
		font-size: 32rpx;
		color: #808080;
		width: 95%;
	}
	.lis{
		height: 400rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.toux{
		border-radius: 50%;
		margin: 20rpx 20rpx;
	}
	.li{
		display: flex;
	}
	.name{
		color: #00AAFF;
		margin-top: 35rpx;
		font-size: 30rpx;
	}
	.vip{
		color: #F0AD4E;
		font-size: 25rpx;
		border-radius: 10rpx;
		border:1rpx solid #F0AD4E;
		height: 35rpx;
		margin-top: 38rpx;
		background-color: #FFFFFF;
		text-align: center;
		width: 80rpx;
		margin-left: 10rpx;
	}
	.time{
		color: #8F8F94;
		font-size: 25rpx;
		margin-left: 200rpx;
		margin-top: 37rpx;
	}
	.text1{
		margin: 10rpx 20rpx;
		font-size: 25rpx;
		margin-left: 100rpx;
		color: #808080;
	}
	.image{
		width: 200rpx;
		height: 250rpx;
		margin: 10rpx 20rpx;
		margin-left: 26rpx;
	}
	.btn{
		display: flex;
		width: 100%;
	}
	.btn1{
		width: 50%;
		margin-left: 0rpx;
		background-color:#FFFFFF ;
		color: #00AAFF;
		border-radius: 0rpx;
	}
	.btn2{
		width: 50%;
		margin-right: 0rpx;
		background-color: #6C40F3;
		color: #FFFFFF;
		border-radius: 0rpx;
	}
	.btn3{
		width: 50%;
		height: 80rpx;
		margin-left: 0rpx;
		background-color:#FFFFFF ;
		color: #00AAFF;
		border-radius: 0rpx;
		text-align: center;
		align-items: center;
		font-size: 38rpx;
		/* border-radius: 10rpx; */
	}
	.btn4{
		/* width: 400rpx; */
		width: 50%;
		height: 80rpx;
		margin-right: 0rpx;
		background-color: #6C40F3;
		color: #FFFFFF;
		border-radius: 0rpx;
		text-align: center;
		font-size: 38rpx;
		/* border-radius: 10rpx; */
	}
</style>
