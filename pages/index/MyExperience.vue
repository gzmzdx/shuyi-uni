<template>
	<view>
		<view class="top">
			<view><image class="imag" src="../../static/images/头像2.jpg" style="width:90rpx;height: 90rpx;border-radius: 100%;"></image>
			</view>
			<navigator url="./MyExper">
			<view class="header-input">
				<input @input="goToSearch" placeholder="这一刻我想说..." placeholderStyle="color:#BBBBBB" type="text"></input>
				<view>
					<image class="image" src="../../static/images/fabiao.png"></image>
				</view>
			</view>
			</navigator>
		</view>
		<view class="mid">
			<view class="midone">
				<navigator url="./MyExper">
				<image class="ima_one" src="../../static/images/woyaofabu.png"style="width: 80rpx;height: 80rpx;"></image>
				<view class="imawz">去发表</view>
				</navigator>
			</view>
			<view class="midone">
				<navigator url="yifabiao">
				<image class="ima_one" src="../../static/images/yifabu.png"style="width: 80rpx;height: 80rpx;"></image>
				<view class="imawz">已发表</view>
				</navigator>
			</view>
			<view class="midone">
				<image class="ima_one" src="../../static/images/caogao.png"style="width: 80rpx;height: 80rpx;"></image>
				<view class="imawz">草稿箱</view>
			</view>
			<view class="midone">
				<navigator url="SerchExper">
				<image class="ima_one" src="../../static/images/sousuo.png"style="width: 80rpx;height: 80rpx;"></image>
				<view class="imawz">搜心得</view>
				</navigator>
			</view>
		</view>
		<view class="under">
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image class="imagetwo" src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="bn">
							<text class="name">爱丽丝</text>
						</view>
						<view class="tw">
							<view class="time">2020-08-09 14:10</view>
						</view>
						<view class="delate"@click="cl">
							<image class="imgethree" src="../../static/images/schu.png"style="width: 28rpx;height: 30rpx;"></image>
						</view>
					</view>
					<view class="zy">
						<text>《预见未来》今天又是美好的一天！好好解决实际缴纳那你说的均为额欸威尔和挑挑剔剔哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
					</view>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png"style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image class="imagetwo" src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="bn">
							<text class="name">爱丽丝</text>
						</view>
						<view class="tw">
							<view class="time">2020-08-09 14:10</view>
						</view>
						<view class="delate"@click="cl">
							<image class="imgethree" src="../../static/images/schu.png"style="width: 28rpx;height: 30rpx;"></image>
						</view>
					</view>
					<view class="zy">
						<text>《预见未来》今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
					</view>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png"style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image class="imagetwo" src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="bn">
							<text class="name">爱丽丝</text>
						</view>
						<view class="tw">
							<view class="time">2020-08-09 14:10</view>
						</view>
						<view class="delate"@click="cl">
							<image class="imgethree" src="../../static/images/schu.png"style="width: 28rpx;height: 30rpx;"></image>
						</view>
					</view>
					<view class="zy">
						<text>《预见未来》今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
					</view>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png"style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
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
			cl(){
				uni.showModal({
					title:'提示',
					content:'是否删除该心得',
					success:function (res) {
						if(res.confirm){
							console.log('确认');
						}
						else if (res.cancel){
							console.log('取消');
						}
					}
				});
			}
		}
	}
</script>


<style>
	.imag{
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	.header-input {
	    margin-left: 140rpx;
	    margin-top: -90rpx;
	    width: 580rpx;
	    height: 72rpx;
	    border-radius: 36rpx;
	    background-color: rgba(255,0,2,0.05);
	    /* border: 1rpx solid  #007AFF; */
	    display: flex;
	    flex-direction: row;
	}
	
	.header-input input {
	    margin-left: 31rpx;
	    width: 564rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    /* border-right: 1rpx solid #dfdfdf; */
	    font-size: 28rpx;
		/* background-color: #007AFF; */
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 20rpx;
	    margin-top: 11rpx;
	    width: 44rpx;
	    height: 44rpx;
	}
	.mid{
		width: 100%;
		height: 170rpx;
		display: flex;
		margin-top: 20rpx;
		text-align: center;
		box-shadow:   #F1F1F1 0rpx 8rpx 0rpx 8rpx;
		/* border-radius: 20rpx; */
	}
	.ima_one{
		margin-top: 15rpx;
		margin-left: 85rpx;
	}
	.imawz{
		font-size: 26rpx;
		margin-left: 82rpx;
		color: #999999;
	}
	.under {
		line-height: 150rpx;
		/* 设置行高*/
	}
	
	.show {
		height: auto;
		margin-top: 40rpx;
		color: #F1F1F1;
	}
	
	.showone{
		/* background-image: url(../../image/after.jpg); */
		color: #999999;
		background-color:  #FFFFFF;
		height: auto;
		background-size: 100%;
		border-radius: 10rpx;
		margin-top: 10rpx;
		border-bottom: none;
		line-height: 100rpx;
	}
	
	.person {
		line-height: 20rpx;
		display: flex;
	}
	
	.tou {
		/* height: 50%; */
		/* display: block; */
	}
	
	.imagetwo {
		margin-top: 0rpx;
		margin-left: 20rpx;
	}
	
	.name {
		font-size: 30rpx;
		margin: 20rpx;
		top: 90rpx;
		color: #00BFFF;
		/* background-color: #007AFF; */
	}
	
	.bn {
		height: 100%;
		margin-top: 20rpx;
		/* background-color: #007AFF; */
	
	}
	.tw {
		margin-top: -130rpx;
		margin-left: 500p;
	}
	
	.time {
		font-size: 20rpx;
		margin-top: 190rpx;
		margin-left: -110rpx;
	}
	.delate{
		margin-left: 400rpx;
		margin-top: 20rpx;
		/* background-color: #00BFFF; */
		width: 28rpx;
		height: 30rpx;
	}
	.zy {
		margin-top: 10rpx;
		line-height: 40rpx;
		margin-left: 25rpx;
		margin-right: 20rpx;
		font-size: 28rpx;
		font-weight: 300rpx;
		color: #808080;
	}
	
	.showtwo{
		display: flex;
		border: 2rpx solid  #F1F1F1;
		background-color: #FFFFFF;
		border-top: none;
		height: 80rpx;
		align-items: center;
		box-shadow:   #F1F1F1 0rpx 8rpx 0rpx 8rpx;
	
	}
	
	.wave {
		z-index: 3;
		right: 0;
		bottom: 0;
		opacity: 0.725;
		height: 40rpx;
		width: 40rpx;
		padding-top: 10rpx;
		margin-top: 50rpx;
		/* animation: wave 10s linear infinite;  */
	}
	
	.dz {
		margin-left: 450rpx;
		display: flex;
		/* background-color: #007AFF; */
	}
	
	.pl {
		margin-left: 80rpx;
		display: flex;
		/* background-color: #007AFF; */
	}
	#t {
		font-size: 25rpx;
		color: #BBBBBB;
		margin-left: 5rpx;
		margin-top: 10rpx;
		/* background-color: #4CD964; */
	}
	
	
</style>
