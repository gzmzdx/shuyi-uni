<template>
	<view class="all">
		<view class="td"></view>
		<view class="tit">
			<image class="image" src="../../static/images/userinfo_reading.png" ></image>
			<view class="tex">图书列表</view>
		</view>
		<view class="lieshu">
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
				<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
			</view>
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺</view>
				<view class="name2">[日]东野圭吾</view>
			</view>
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺</view>
				<view class="name2">[日]东野圭吾</view>
			</view>
		</view>
		<view class="lieshu">
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
				<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
			</view>
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺</view>
				<view class="name2">[日]东野圭吾</view>
			</view>
			<view class="lies">
				<image class="imag3" src="../../static/images/封面.png"></image>
				<view class="name1">解忧杂货铺</view>
				<view class="name2">[日]东野圭吾</view>
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
	.all{
		background-color: #F8F8F8;
	}
	.td{
		height: 10rpx;
		background-color: #F8F8F8;
	}
	.image{
		margin-top: 10rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.tex{
		/* text-align: center; */
		margin-top: 10rpx;
		margin-left: 10rpx;
		align-items: center;
		font-size: 36rpx;
	}
	.tit{
		/* margin-top: 10rpx; */
		width: 98%;
		height: 80rpx;
		margin-left: 5rpx;
		background-color: #FFFFFF;
		border-radius: 3%;
		text-align: center;
		display: flex;
	}
.lieshu {
	margin-top: 10rpx;
	background-color: #FFFFFF;
		display: flex;
		width: 100%;
		height: 500rpx;
	}

	.lies {
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 30%;
		height: 450rpx;
	}

	.imag3 {
		width: 100%;
		height: 300rpx;
	}

	.name1 {
		display: -webkit-box;
		width: 100%;
		height: 90rpx;
		font-size: 35rpx;
		color: #3C3C3C;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		/*设置 需要显示的行数*/
	}
	.name2 {
		display: -webkit-box;
		width: 100%;
		height: 40rpx;
		margin-top: 10rpx;
		font-size: 30rpx;
		color: #838383;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/*设置 需要显示的行数*/
	}
</style>
