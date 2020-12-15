<template>
	<view>
		<!-- <view class="ta"></view> -->
		<!-- 导航栏 -->
		<!-- 最近使用列表 -->
		<view class="di">
			<!-- #ifdef APP-PLUS -->
			<view class="tit">最近使用</view>
			<image class="more" src="../../static/images/red_clearance_icon.png" style="width: 40rpx; height: 40rpx;"></image>
			<view class="text">清除</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tit4">最近使用</view>
			<image class="more1" src="../../static/images/red_clearance_icon.png" style="width: 40rpx; height: 40rpx;"></image>
			<view class="text1">清除</view>
			<!-- #endif -->
		</view>
		<view class="td">
			<view>
				<image class="image" src="../../static/images/art_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">艺术</view>
			</view>
			<view>
				<image class="image" src="../../static/images/economics_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">经济</view>
			</view>
			<view>
				<image class="image" src="../../static/images/hour_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">小说</view>
			</view>
			<view>
				<image class="image" src="../../static/images/children.icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">儿童</view>
			</view>
			<view>
				<image class="image" src="../../static/images/aviation_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">航天</view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="di">
			<view class="tit4">全部分类</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="di">
			<view class="tit">全部分类</view>
		</view>
		<!-- #endif -->
		<view class="td">
			<view>
				<image class="image" src="../../static/images/literature_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">文学</view>
			</view>
			<view>
				<image class="image" src="../../static/images/art_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">艺术</view>
			</view>
			<view>
				<image class="image" src="../../static/images/children.icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">儿童</view>
			</view>
			<view>
				<image class="image" src="../../static/images/hour_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">小说</view>
			</view>
			<view>
				<image class="image" src="../../static/images/economics_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">经济</view>
			</view>
		</view>
		<view class="tr1"></view>
		<view class="td">
			<view>
				<image class="image" src="../../static/images/law_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">法律</view>
			</view>
			<view>
				<image class="image" src="../../static/images/military_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">军事</view>
			</view>
			<view>
				<image class="image" src="../../static/images/science_icon2x.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">科技</view>
			</view>
			<view>
				<image class="image" src="../../static/images/history_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">历史</view>
			</view>
			<view>
				<image class="image" src="../../static/images/financial_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">金融</view>
			</view>
		</view>
		<view class="tr1"></view>
		<view class="td">
			<view>
				<image class="image" src="../../static/images/politics_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">政治</view>
			</view>
			<view>
				<image class="image" src="../../static/images/philosophy_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">哲学</view>
			</view>
			<view>
				<image class="image" src="../../static/images/geography_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">地理</view>
			</view>
			<view>
				<image class="image" src="../../static/images/horticulture_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">园艺</view>
			</view>
			<view>
				<image class="image" src="../../static/images/language_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">语言</view>
			</view>
		</view>
		<view class="tr1"></view>
		<view class="td">
			<view>
				<image class="image" src="../../static/images/medicine_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">医学</view>
			</view>
			<view>
				<image class="image" src="../../static/images/traffic_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">交通</view>
			</view>
			<view>
				<image class="image" src="../../static/images/environment_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">环境</view>
			</view>
			<view>
				<image class="image" src="../../static/images/astronomy_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">天文</view>
			</view>
			<view>
				<image class="image" src="../../static/images/aviation_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">航空</view>
			</view>
		</view>
		<view class="tr1"></view>
		<view class="td">
			<view>
				<image class="image" src="../../static/images/spaceflight_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">航天</view>
			</view>
			<view>
				<image class="image" src="../../static/images/mathematics_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">数学</view>
			</view>
			<view>
				<image class="image" src="../../static/images/physics_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">物理</view>
			</view>
			<view>
				<image class="image" src="../../static/images/chemistry_icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">化学</view>
			</view>
			<view>
				<image class="image" src="../../static/images/forestry.icon.png" style="width: 50rpx; height: 50rpx;"></image>
				<view class="name">林业</view>
			</view>
		</view>
		<view class="tr1"></view>
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
	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	.im {
		/* margin-top: -50rpx; */
		margin-left: 190rpx;
	}

	.di {
		background-color: #F1F1FF;
		width: 100%;
		display: flex;
		height: 80rpx;
	}

	.more {
		margin-top: 18rpx;
		margin-left: 480rpx;
	}

	.more1 {
		margin-top: 18rpx;
		margin-left: 210rpx;
	}

	.text {
		margin-top: 18rpx;
		color: #FF3D3D;
	}

	.text1 {
		margin-top: 24rpx;
		color: #FF3D3D;
		margin-left: 10rpx;
	}

	.tr {
		width: 100%;
		height: 5rpx;
		background-color: #F1F1F1;
	}

	.tr1 {
		width: 100%;
		height: 3rpx;
		background-color: #F1F1F1;
	}

	.tit {
		font-size: 30rpx;
		margin: 20rpx 20rpx;
		color: #646464;
		height: 30rpx;
	}

	.tit4 {
		font-size: 30rpx;
		margin: 20rpx 20rpx;
		color: #646464;
		height: 30rpx;
		display: flex;
		width: 50%;
	}

	.td {
		display: flex;
		height: 150rpx;
		background-color: #FFFFFF;
		width: 100%;
	}

	.image {
		margin: 20rpx 40rpx;
	}

	.name {
		margin: -20rpx 46rpx;
		color: #333333;
		font-size: 26rpx;
		width: 60rpx;
	}
</style>
