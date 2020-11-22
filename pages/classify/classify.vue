<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">全部分类</view>
			<navigator url="../sousuo/sousuo">
			<image class="im" src="../../static/images/搜索.png"style="width: 55rpx; height: 55rpx;"></image>
			</navigator>
			</view>
			<!-- 最近使用列表 -->
			<view class="tr"></view>
			<view class="tit">最近使用</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/icon_fiction.png" style="width: 75rpx; height: 75rpx;"></image>
				<view class="name">文学</view>
				</view>
				<view>
			<image class="image" src="../../static/images/icon_art.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">艺术</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_economic.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">经济</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_technology.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">科技</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_story.png" style="width: 75rpx; height: 75rpx;"></image>
		<view class="name">小说</view>
			</view>
			</view>
			<view class="tr1"></view>
			<view class="tit">全部分类</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/icon_fiction.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">文学</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_art.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">艺术</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_child.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">少儿</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_story.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">小说</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_economic.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">经验</view>
			</view>
			</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/icon_fiction.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">法律</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_art.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">军事</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_technology.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">科技</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_history.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">历史</view>
			</view>
			<view>
			<image class="image" src="../../static/images/userinfo_record.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">金融</view>
			</view>
			</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/firstpage_blue.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">政治</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_find_book.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">哲学</view>
			</view>
			<view>
			<image class="image" src="../../static/images/朋友圈.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">地理</view>
			</view>
			<view>
			<image class="image" src="../../static/images/userinfo_extend.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">园艺</view>
			</view>
			<view>
			<image class="image" src="../../static/images/userinfo_comment.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">语言</view>
			</view>
			</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/icon_fiction.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">医学</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_art.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">交通</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_child.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">环境</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_story.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">天文</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_economic.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">航空</view>
			</view>
			</view>
			<view class="tr1"></view>
			<view class="td">
				<view>
			<image class="image" src="../../static/images/icon_fiction.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">航天</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_art.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">林业</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_child.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">数学</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_story.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">物理</view>
			</view>
			<view>
			<image class="image" src="../../static/images/icon_economic.png" style="width: 75rpx; height: 75rpx;"></image>
			<view class="name">化学</view>
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
.tab1 {
		display: flex;
		margin-top: 79rpx;
	}
	.tit1 {
		margin-top: 9rpx;
		color: #555555 ;
		/* margin-left: 215rpx; */
		font-size: 38rpx;
	}
	
	.back {
		margin-top: 8rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 10rpx;
		margin-left: 450rpx;
	}
	.tr{
		width: 100%;
		height: 5rpx;
		background-color:#F1F1F1;
	}
	.tr1{
		width: 100%;
		height: 3rpx;
		background-color:#F1F1F1;
	}
	.tit{
		font-size: 20rpx;
		margin: 20rpx 20rpx;
		color:#007AFF;
		height: 30rpx;
	}
	.td{
		display: flex;
		height: 150rpx;
	}
	.image{
		margin: 20rpx 40rpx;
	}
	.name{
		margin: -20rpx 50rpx;
		color: #333333;
		font-size: 26rpx;
	}
</style>
