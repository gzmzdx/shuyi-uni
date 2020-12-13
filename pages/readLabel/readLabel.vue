<template>
	<view>
		<!-- 头部 -->
		<view class="topall">
			<view class="top">
			<view class="topt">
				<text>我的标签</text>
			</view>
			<view class="topSt">
				<text>贴上标签，让书易更了解你。</text>
			</view>	
			</view>
			<!-- 添加 -->
			<navigator url="readLabelNew">
			<view class="TJ">
				<text>添加</text>
			</view>
			</navigator>
		</view>
		<!-- 中间标签内容 -->
		<view class="mid">
			<view class="midone" v-for="(i,index) in info" :kye=index>
				<view class="midone_nameS" :style="{'color':color[index]}" @touchstart.prevent="touchstart(index)" @touchend.prevent="touchend">
					<text v-text="i.content">xxx文学</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openId:"1",//暂时
				info:[],//接收的数据
				color:[
					"#00ff00",
					"#aaaaff",
					"#ff557f",
					"#00ffff",
					"#00ff00",
					"#55aaff",
					"#ff00ff",
					"#aaff00",
					"#00ff00",
					"#55ffff",
					"#ffaa7f",
					"#aaffff"
				],
				ids:[],//删除的id
			}
		},
		onLoad() {
			this.getInfo()
		},
		methods: {
			//获取数据
			getInfo(){
				uni.request({
					url:getApp().globalData.URL+'api/tagReader/queryTag',
					data:{
						 openId:this.openId,
					},
					method:'GET',
					header: {
						 'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					success:res =>{
						console.log("分页后台传来的",res.data)
						this.info = res.data
						},
					fail: (res) => {
						// showModal(){
						// 	 uni.showToast({
						// 		title: "网络错误！",
						// 		icon: 'none'
						// 	 })
						// },
					}
				})
			},
			//删除方法
			touchstart(index) {
			　　let that = this;
			　　clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
			　　　　this.Loop = setTimeout(function() {
			　　　　　　uni.showModal({
			　　　　　　　　title: '删除',
			　　　　　　　　content: '请问要删除本条记录吗？',
			　　　　　　　　success:async function(res) {
			　　　　　　　　　　if (res.confirm) {
			　　　　　　　　　　　that.ids[0] = that.info[index].id
			　　　　　　　　　　　uni.request({
								url:getApp().globalData.URL+'api/tagReader',
								data:that.ids,
								method:'DELETE',
								header: {
									'content-type': 'application/json;charset=UTF-8' // 默认值
								  },
								success:res =>{
									that.showModal("已删除该条记录！")
									that.getInfo()
								},
								fail: (res) => {
									that.showModal("网络错误！")
								}
							})
			　　　　　　　　} else if (res.cancel) {
			　　　　　　　　　　console.log('用户点击取消')
			　　　　　　　　}
			　　　　　　}
			　　　　});
			　　}.bind(this), 1000);
			},
			//清空定时器，防止重复注册定时器
			touchend() {  
			　　clearInterval(this.Loop);
			},
			//提示框
			showModal(val){
				 uni.showToast({
					title: val,
					icon: 'none'
				 });
			},
		}
	}
</script>

<style>
.topall{
	height: 130rpx;
	border-bottom: 1rpx solid #F4F5F6;
	display: flex;
}
.top{
	/* display: flex; */
}
.topt{
	margin-left: 30rpx;
	margin-top: 30rpx;
	}
.topSt{
	margin-left: 30rpx;
	margin-top: 10rpx;
	color: #666666;
	font-size: 20rpx;
}
.TJ{
	font-size: 32rpx;
	margin-left: 330rpx;
	margin-top: 30rpx;
}
.midone{
	height: 80rpx;
	border-bottom: 1rpx solid #EDEDED;
	
}
.midone_nameO{
	color: #F0AD4E;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_nameT{
	color: #4CD964;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_nameS{
	margin-top: 30rpx;
	margin-left: 30rpx;
}
</style>
