<template>
	<view>
	<view class="top">
	<view class="header-input">
		<input v-model="mhcx" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
		<view>
			<image class="image" src="../../static/images/search_icon.png" @click="goToSearch()">
			</image>
		</view>
	</view>
	</view>
		<view class="show">
			<view class="container">
				<scroll-view 
				class="scroll-container" 
				scroll-x 
				scroll-with-animation 
				v-if="brands.length > 1" 
				:scroll-into-view="'s' + currentIndex">
					<view :class="['scroll-item', { active: index == currentId }]" 
					:id="'s' + index" 
					v-for="(item, index) in brands"
					:key="index" 
					@tap="handleScroll(index)">
					{{ item }}
						<view class="bottom-border" v-if="index == currentId">
							<!-- 底部蓝色短border -->
						</view>
					</view>
				</scroll-view>
			</view>
			
			<!--评论-->
			<view v-if="currentId===1">
				<Orders></Orders>
			</view>
			<!-- 点赞 -->
			<view v-else>
				<Logistic></Logistic>
			</view>	
		</view>
		
		<scroll-view scroll-y="true" style="height: 560px;" @scrolltolower="scrolltolower">
		<view class="mid">
			<view v-if="info.length!=0">
				<view v-for="(i, index) in info" :key="index">
				<view class="zt"><view class="zt1" v-text="i.name">广东图书馆</view></view>
				<view class="midone">
					<view class="zhengti">
						<image :src="i.picture_path" style="width: 125rpx; height: 170rpx;"></image>
						<view class="midwz" v-text="i.book_name">致敬老师</view>
					</view>
					<view>
						<view class="s1">
							预约时间：{{formatDate(i.reserve_time)}}
						</view>
						<view class="s2" >持书人：{{i.nickname}}</view>
						<view class="s7">
							<view class="s3">支付：{{i.is_pay}}</view>
							<view class="s4">
								当前状态：
								<view class="s5" v-text="i.status">等待持书人还书</view>
							</view>
							<view class="s8">
								<button class="btn5" @click="delList(i.reserve_list_id)"><view class="wz">删除记录</view></button>
							</view>
						</view>
					</view>
				</view>
				</view>
			</view>
		</view>
		</scroll-view>
	<!-- <view v-if="info.length==0">
		您还没有记录，<span style="color: #00AAFF;">快去借书吧!</span>
	</view> -->
	
	
	</view>
</template>

<script>
	// import Logistic from '../my_reserve_Spage/reserve_SpageL.vue'
	// import Orders from '../my_reserve_Spage/reserve_SpageR.vue'
	// import Logistic from '../components/logistic.vue'
	// import Orders from '../components/orders.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'预约成功',
					'预约失败',
				],
				mhcx:'', /*搜索框内容*/
				page:0,
				size:20,
				info:[],//
				openId:'1',//暂时是1
				flag:'true',//判断是否到底部
				condition:0,//切换
				ids:[],
			};
		},
		onLoad() {
			this.goToSearch()
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")        
		},
		methods: {
			/* </scroll-view>的触底函数*/
			scrolltolower:function(){
					console.log("我是最底部了");
					uni.showToast({
						title: '到底啦~',
						icon: 'none'
					});
					// if(this.flag=='true'){
					// 	this.associationList(this.type);
					// }else{
					// 	this.page=-1;
					// 	uni.showToast({
					// 		title: '到底啦~',
					// 		icon: 'none'
					// 	});
					// }				
				},
			//获取数据
			goToSearch(){
				uni.request({
					 url:getApp().globalData.URL+'reserveList/queryReserveList	',
					 data:{
						 openId:this.openId,
						 mhcx:this.mhcx,
						 condition:this.condition,
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
					url:getApp().globalData.URL+'reserveList/queryReserveList',
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
			delList(id){
				this.ids[0]=id
				var that=this
				uni.showModal({
				    title: '删除',
				    content: '确定要删除这条记录吗',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							uni.request({
								url:getApp().globalData.URL+'reserveList',
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
				            console.log('用户点击取消');
				        }
				    }
				});
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
			//提示框
			showModal(val){
				 uni.showToast({
					title: val,
					icon: 'none'
				 });
			},
			//切换栏，请求变换数据
			handleScroll(index) {
				this.currentId = index;
				this.condition = index
				this.info=[]
				console.log(this.condition)
				this.goToSearch()
			},
		}
		
	}

</script>

<style lang="scss" scoped>
	.top{
		// background-color: #007AFF;
		height: 90rpx;
		box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx;
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
	    /* border-right: 1rpx solid #dfdfdf; */
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
	// tab切换
	.scroll-container {
	    // box-sizing: border-box;
	    padding-left: 20upx;
	    white-space: nowrap;
	    height: 90upx;
	    background: #fff;
		border-top: 0upx solid #EEEEEE;
	    border-bottom: 10upx solid #EEEEEE;
	    .scroll-item {
	      text-align: center;
	      display: inline-block;
	      padding: 0 125upx;
	      line-height: 70upx;
	      font-size: 32upx;
	      font-weight: 400;
	      color: #1e1e1e;
	
	      &.active {
	        display: inline-block;
	        font-weight: bold;
	        color: #00BFFF;
	        font-size: 32upx;
	      }
	    }
	
	    .bottom-border {
	      margin: 0 auto;
	      width: 55upx;
	      height: 5upx;
		  background: #00BFFF;
	      border-radius: 5upx;
		  border: 1upx;
	    }
	  }
    .mid {
    	/* margin-top:30rpx; */
    	width: 100%;
    	height: auto;
    	/* background-color: #007AFF; */
    	/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
    }
    .zt {
    	/* height: 40rpx; */
    	border-bottom: solid 1rpx;
    	/* border-top:solid 1rpx; */
    	margin-top: -5rpx;
    	height: 60rpx;
    	color: #bbbbbb;
    }
    .zt1 {
    	color: #f0ad4e;
    	font-size: 28rpx;
    	margin-left: 30rpx;
    	line-height: center;
    	margin-top: 25rpx;
    }
    .midone {
    	width: 100%;
    	height: 200rpx;
    	font-size: 30rpx;
    	margin-top: 35rpx;
    	align-items: center;
    	border-bottom: 1rpx solid #e3e3e3;
    }
    .zhengti {
    	display: flex;
    	width: 100%;
    	margin-left: 30rpx;
    }
    .imag {
    	margin-left: 30rpx;
    }
    .midwz {
    	font-size: 28rpx;
    	height: 35rpx;
    	margin-top: -5rpx;
    	align-items: center;
    	margin-left: 30rpx;
    	width: auto;
    	/* background-color:  #333333; */
    }
    .s1 {
    	font-size: 20rpx;
    	height: 35rpx;
    	margin-top: -130rpx;
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
    	color: #f0ad4e;
    }
    .s5 {
    	font-size: 20rpx;
    	height: 35rpx;
    	margin-top: -26rpx;
    	align-items: center;
    	margin-left: 100rpx;
    	color: #555555;
    }
    .s6 {
    	color: #dd524d;
    }
    
    .s7 {
    	height: 35rpx;
    	align-items: center;
    	width: auto;
    	/* display: flex; */
    }
    
    .s8 {
    	text-align: center;
    }
    .btn1 {
    	color: #f8f8f8;
    	width: 137rpx;
    	height: 55rpx;
    	margin-right: 20rpx;
    	margin-top: -60rpx;
    	background-color: #00bfff;
    	border-radius: 15rpx;
    }
    .btn3 {
    	color: #f8f8f8;
    	width: 137rpx;
    	height: 55rpx;
    	margin-right: 20rpx;
    	margin-top: -60rpx;
    	background-color: #4cd964;
    	border-radius: 15rpx;
    }
    .wz {
    	font-size: 16rpx;
    	margin-top: 8rpx;
    	/* width: 137rpx; */
    	margin-left: 5rpx;
    	text-align: center;
    	position: absolute;
    }
    .btn5 {
    	color: #f8f8f8;
    	width: 137rpx;
    	height: 55rpx;
    	margin-right: 20rpx;
    	margin-top: -60rpx;
    	background-color: #dd524d;
    	border-radius: 15rpx;
    	text-align: center;
    }
    .wz1 {
    	font-size: 16rpx;
    	margin-top: 8rpx;
    	/* width: 137rpx; */
    	margin-left: 20rpx;
    	text-align: center;
    	position: absolute;
    }
</style>
