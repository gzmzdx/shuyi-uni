<template>
	<view>
	<view class="top">
	<view class="header-input">
		<input @input="goToSearch" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
		<view>
			<image class="image" src="../../static/images/search_icon.png">
			</image>
		</view>
	</view>
	</view>
	<view class="show">
			<!-- <view class="zt"><view class="zt1">广州图书馆</view></view> -->
			<view class="main">
				<view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'">
			<view class="content">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">致敬老师</view>
					<view class="s2">借入时间：2017-08-10</view>
					<view class="s7">
						<view class="s3">还书时间：2017-09-10</view>
						<view class="s4">
							承运快递：
							<view class="s5">书易物流</view>
						</view>
						<view class="s8">
							<navigator url="./borrow_and_returnXQ">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<view class="remove" @click="delData(item)">删除</view>
			</view>
		</view>	
			
			<!--下一个开始-->
			<view class="main">
					<view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'">
				<view class="content">
					<view class="zhengti">
						<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
					</view>
					<view class="xq">
						<view class="midwz">致敬老师</view>
						<view class="s2">借入时间：2017-08-10</view>
						<view class="s7">
							<view class="s3">还书时间：2017-09-10</view>
							<view class="s4">
								承运快递：
								<view class="s5">书易物流</view>
							</view>
							<view class="s8">
								<navigator url="./borrow_and_returnXQ">
									<button class="btn1"><view class="wz">查看详情</view></button>
								</navigator>
							</view>
						</view>
					</view>
				</view>
				<view class="remove" @click="delData(item)">删除</view>
				</view>
			</view>
				
			<!-- 下一个 -->
			<view class="main">
					<view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'">
				<view class="content">
					<view class="zhengti">
						<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
					</view>
					<view class="xq">
						<view class="midwz">致敬老师</view>
						<view class="s2">借入时间：2017-08-10</view>
						<view class="s7">
							<view class="s3">还书时间：2017-09-10</view>
							<view class="s4">
								承运快递：
								<view class="s5">书易物流</view>
							</view>
							<view class="s8">
								<navigator url="./borrow_and_returnXQ">
									<button class="btn1"><view class="wz">查看详情</view></button>
								</navigator>
							</view>
						</view>
					</view>
				</view>
				<view class="remove" @click="delData(item)">删除</view>
				</view>
			</view>
				
			<!-- 下一个 -->
				<view class="main">
						<view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'">
					<view class="content">
						<view class="zhengti">
							<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
						</view>
						<view class="xq">
							<view class="midwz">致敬老师</view>
							<view class="s2">借入时间：2017-08-10</view>
							<view class="s7">
								<view class="s3">还书时间：2017-09-10</view>
								<view class="s4">
									承运快递：
									<view class="s5">书易物流</view>
								</view>
								<view class="s8">
									<navigator url="./borrow_and_returnXQ">
										<button class="btn1"><view class="wz">查看详情</view></button>
									</navigator>
								</view>
							</view>
						</view>
					</view>
					<view class="remove" @click="delData(item)">删除</view>
					</view>
				</view>
			<!-- 下一个 -->
				<view class="main">
						<view v-for="(item, index) in csListArrl" :key="index" :data-index="index"  class="order-item"   @touchstart="drawStart" @touchmove="drawMove"  @touchend="drawEnd"  :style="'right:'+item.right+'px'">
					<view class="content">
						<view class="zhengti">
							<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
						</view>
						<view class="xq">
							<view class="midwz">致敬老师</view>
							<view class="s2">借入时间：2017-08-10</view>
							<view class="s7">
								<view class="s3">还书时间：2017-09-10</view>
								<view class="s4">
									承运快递：
									<view class="s5">书易物流</view>
								</view>
								<view class="s8">
									<navigator url="./borrow_and_returnXQ">
										<button class="btn1"><view class="wz">查看详情</view></button>
									</navigator>
								</view>
							</view>
						</view>
					</view>
					<view class="remove" @click="delData(item)">删除</view>
					</view>
				</view>
			<!-- 刷新 -->
		<view class="bt"><button style="background-color: #6C40F3;">刷新</button></view>
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
						delBtnWidth: 80
			}
		},
		methods: {
			//开始触摸滑动
			drawStart(e) {
				console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				console.log("滑动");
				for (var index in this.csListArrl) {
					this.$set(this.csListArrl[index],'right',0);
				}
				var touch = e.touches[0];
				var item = this.csListArrl[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
				        if (disX > this.delBtnWidth) {
					    disX = this.delBtnWidth;
				        }
				        this.$set(this.csListArrl[e.currentTarget.dataset.index],'right',disX);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index],'right',0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				console.log("滑动结束");
				var item = this.csListArrl[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl[e.currentTarget.dataset.index],'right',this.delBtnWidth);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index],'right',0);
				}
			},
			//删除方法
			delData(item){
				console.log("删除")
				uni.showModal({
				    title: '提示',
				    content: "确认删除该记录？",
				    success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				    }
				});
			},
		}
	}
</script>

<style>
/* 搜索框 */
.top{
		/* background-color: #007AFF; */
		height: 90rpx;
		border-bottom: 1rpx solid #EBEBEB;
		/* box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx; */
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
.show {
	margin-bottom: auto; 
	width: auto;
	height: auto;
}
.bt {
	/* margin-top: 1045rpx; */
}

.zt1 {
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 30rpx;
	/* line-height: center; */
	/* margin-top: 25rpx; */
}
.zt {
	border-bottom: 1rpx solid #EBEBEB;
	/* margin-top: -5rpx; */
	height: 60rpx;
	color: #bbbbbb;
}
.midone {
	display: flex;
	/* width: 100%; */
	height: 210rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	/* align-items: center; */
	/* background-color: #00BFFF; */
	border-bottom: 1rpx solid #EBEBEB;
}
.zhengti {
	margin-left: 30rpx;
	width: 125rpx;
	height: 170rpx;
	/* background-color: #0066CC; */
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
}
.s3 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
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

.s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
}

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
.bt button{
	color: #FFFFFF;
}
/* 滑动删除 */
	.main{
		border: 1rpx solid #C0C0C0;
	   /* width: 90%; */
	    height: auto;
	    /* margin: 10px auto; */
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
	    margin: 0 auto;
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
