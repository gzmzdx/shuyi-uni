<template>
	<view>
		<!-- 搜索框开始 -->
	<view class="top">
	<view class="header-input">
		<input v-model="mhcx" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
		<view @click="goToSearch()">
			<image class="image" src="../../static/images/search_icon.png">
			</image>
		</view>
	</view>
	</view>
	<!-- 搜索框结束 -->
	<view class="show">
			<!-- 第一个 -->
			<view v-if="info.length!=0">
				<view class="main" v-for="(i, index) in info" :key="index">
					<!-- <view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'"> -->
						<view class="content" @touchstart.prevent="touchstart(index)" @touchend.prevent="touchend">
							<view class="zhengti">
								<navigator :url="'../Bdetail/Bdetail?isbn='+i.ISBN">
									<image :src="i.picture_path" style="width: 140rpx;height: 180rpx;"></image>
								</navigator>
							</view>
							<view class="xq">
								<view class="midwz" v-text="i.book_name">致敬老师</view>
								<view class="s2" >
									<view>借入时间：</view>
									<view v-text="formatDate(i.borrow_time)">2017-09-10</view>
								</view>
								<!-- <view class="s7"> -->
								<view class="s3">
									<view>还书时间：</view>
									<view v-text="formatDate(i.needreturn_time)">2017-09-10</view>
								</view>
								<view class="s4">
									承运快递：
									<view class="s5" v-text="i.return_type">书易物流</view>
								</view>
								<view class="s8" >
									<button class="btn1" @click="toDetil(i.borrow_list_id)"><view class="wz" >查看详情</view></button>
								</view>
							</view>
						</view>
						<!-- <view class="remove" @click="delData(i.borrow_list_id)">删除</view> -->
					<!-- </view> -->
				</view>
			</view>	
		    <view v-if="info.length==0">
		    	您还没有记录，<span style="color: #00AAFF;">快去借书吧!</span>
		    </view>
			<!-- 刷新 -->
		<view class="bt" @click="goToSearch()"><button style="background-color: #6C40F3;" >刷新</button></view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//列表数据，可根据自己的业务获取
				csListArrl:[{
					name:'小A',
					age:'1',
					right: 0
				}],
				//左滑默认宽度
				delBtnWidth: 80,
				mhcx:'', /*搜索框内容*/
				page:0,
				size:20,
				info:[],//借还记录数据
				openId:'1',//暂时是1
				flag:'true',//判断是否到底部
				borrow_list_id:'',
				ids:[],//删除的borrow_list_id
				
			}
		},
		onLoad() {
			this.goToSearch();
		},
		//当划到最底部的时候触发事件
		onReachBottom:function(){				
				console.log("我是最底部了");
				if(this.flag=='true'){
					this.getMoreNews();
				}else{
					this.showModal("到底啦~")
				}			
				},
		methods: {
			//获取数据
			goToSearch(){
				uni.request({
					 url:getApp().globalData.URL+'borrowList/borrowAndRetrue',
					 data:{
						 openId:this.openId,
						 mhcx:this.mhcx,
						 page:this.page,
						 size:this.size,
					 },
					 method:'GET',
					 header: {
					     'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					success:res =>{
						console.log("后台传来的数据：",res.data)
						this.info = res.data;
						},
					fail: (res) => {
						this.showModal("网络错误！")
					}
				})
			},
			//分页加载
			getMoreNews:function(){						//数据到底,触发这个函数
				this.page = this.page + 1;
				uni.showNavigationBarLoading();		//一读取数据,就进行刷新
				var that = this;
				uni.request({
					url:getApp().globalData.URL+'borrowList/borrowAndRetrue',
					data:{
						 openId:that.openId,
						 mhcx:that.mhcx,
						 page:that.page,
						 size:that.size,
					},
					method:'GET',
					header: {
						 'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					success:res =>{
						console.log("分页后台传来的",res.data);
						if(res.data.length==0){
							//到底了
							that.flag = 'false';
							that.page = that.page - 1;
							return false;
						}
						that.info=that.info.concat(Array.from(res.data)); //拼接数组
						// uni.stopPullDownRefresh();	//数据加载完成,刷新结束
						// uni.hideNavigationBarLoading();	//数据读取完毕,刷新停止	
					},
					fail: (res) => {
						this.showModal("网络错误！")
					}
				})
			},
			//日期转换方法
			formatDate(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0'+ m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '/' + MM + '/' + d+' '+h+':'+m+':'+s ;
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
			　　　　　　　　　　　that.ids[0] = that.info[index].borrow_list_id
			　　　　　　　　　　　uni.request({
								url:getApp().globalData.URL+'borrowList',
								data:that.ids,
								method:'DELETE',
								header: {
									'content-type': 'application/json;charset=UTF-8' // 默认值
								  },
								success:res =>{
									that.showModal("已删除该条记录！")
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
			//去详情页
			toDetil(id){
				this.borrow_list_id = id
				uni.navigateTo({
					url:'borrow_and_returnXQ?id='+this.borrow_list_id
				})
			}
		}
	}
</script>

<style>
/* 搜索框 */
.top{
		height: 90rpx;
		border-bottom: 1rpx solid #EBEBEB;
	}
	.header-input {
	    margin-left: 28rpx;
	    margin-top: 20rpx;
	    width: 694rpx;
	    height: 66rpx;
	    border-radius: 36rpx;
	    background-color: rgba(255,255,255,255);
	    // border: 1rpx solid #E3E3E3;
	    display: flex;
	    flex-direction: row;
		box-shadow: #007AFF 1rpx 1rpx 5rpx 1rpx;
	} 
	.header-input input {
	    margin-left: 31rpx;
	    width: 564rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    font-size: 28rpx;
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 20rpx;
	    margin-top: 11rpx;
	    width: 55rpx;
	    height: 55rpx;
	}
.show {
	margin-bottom: auto; 
	width: auto;
	height: auto;
}
.bt {
	background-color: #5251F5;
	position:fixed;
	bottom: 0;
	width:100%;
	border-radius: 0rpx;
}
.bt button{
	color: #FFFFFF;
}

.zt1 {
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 30rpx;
}
.zt {
	border-bottom: 1rpx solid #EBEBEB;
	/* margin-top: -5rpx; */
	height: 60rpx;
	color: #bbbbbb;
}
.zhengti {
	margin-left: 30rpx;
	width: 125rpx;
	height: 170rpx;
}
.xq{
	margin-left: 40rpx;
	height: 180rpx;
	width: 500rpx;
}
.midwz {
	font-size: 28rpx;
}
.s1 {
	font-size: 20rpx;
	height: 35rpx;
	/* margin-top: -120rpx; */
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display: flex;
}
.s2 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 20rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display : flex ; 
	flex-flow : row;
}
.s3 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
	display : flex ;
	flex-flow : row;
}
.s4 {
	font-size: 24rpx;
	height: 35rpx;
	margin-top: 10rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #f0ad4e;
}
.s5 {
	font-size: 24rpx;
	height: 35rpx;
	margin-top: -32rpx;
	align-items: center;
	margin-left: 110rpx;
	color: #f0ad4e;
}
.s6 {
	color: #dd524d;
}

/* .s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
	background-color: #000000;
} */

.s8 {
	margin-top: 20rpx;
	margin-left: 380rpx;
}

.btn1 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-top: -60rpx;
	background-color: #4CD964;
	border-radius: 15rpx;
}

.wz {
	font-size: 20rpx;
	margin-top: 5rpx;
	margin-left: 2rpx;
	text-align: center;
	position: absolute;
}

/* 滑动删除 */
	.main{
		border: 1rpx solid #F3F3F3;
	   /* width: 90%; */
	    height: auto;
	    /* margin: 20px auto; */
	    overflow: hidden;
	}
	.order-item {
	    width: 100%;
	    display: flex;
	    position: relative;
	    margin: 0px auto;
	    align-items:right ;
	    flex-direction: row;
		/* background-color: #71D5A1; */
	}
	.content{
		/* background-color: #0066CC; */
	    /* width: 100%; */
	    height: 100px;
	    /* margin: 20 auto; */
	    /* border: 1px solid #C0C0C0; */
	    /* line-height: 100px; */
	    /* text-align: center; */
		
		display: flex;
		/* width: 100%; */
		height: 210rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		/* align-items: center; */
		/* background-color: #00BFFF; */
		/* border-bottom: 1rpx solid #EBEBEB; */
	}
	
	.remove {
	    margin-left:-5%;
	    width: 80px;
	    height: 100%;
	    background-color: red;
	    color: #FFFFFF;
	    position: absolute;
	    top: 0;
	    right: -80px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    font-size: 16px;
	}
	.edit{
	    width: 80px;
	    height: 100%;
	    background-color: green;
	    color: white;
	    position: absolute;
	    top: 0;
	    right: -160px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    font-size: 16px;
	}

</style>
