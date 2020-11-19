<template>
		<view class="under">
			<view class="show">
				<view class="showone">
					<view class="li">
						<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
						<view class="name">爱书的猫</view>
						<view class="vip">LV.11</view>
						<view class="time">2017-05-05 15:32</view>
					</view>
					<view class="zy">
						<text>
							阿廖沙三岁时，失去了父亲，母亲瓦尔瓦拉把他寄养62616964757a686964616fe78988e69d8331333366303766在外祖父卡什林家。外祖父家住在尼日尼——诺弗哥罗德城。外祖父年轻时，是一个纤夫，后来开染坊，成了小业主。阿廖沙来到外祖父家时，外祖父家业已经开始衰落，由于家业不景气，外祖父变得也愈加专横暴躁。阿廖沙的两个舅舅米哈伊尔和雅科夫为了分家和侵吞阿廖沙母亲的嫁妆而不断地争吵、斗殴。
							后来，外祖父迁居到卡那特街，招了两个房客。一个是进步的知识分子，绰号叫“好事情”，他是阿廖沙所遇到的第一个优秀人物，他给阿廖沙留下了难以磨灭的印象。另一个是抢劫教堂后伪装成车夫的彼得，他的残忍和奴隶习气引起了阿廖沙的反感。
							阿廖沙在家中感受不到温暖，在学校也受歧视和刁难。因此，在阿廖沙的心灵中，“爱”的情感渐渐被对一切的恨所代替。由于和后父不合，阿廖沙又回到外祖父家中，这时外祖父已经全面破产!他们的生活也越来越困苦。为了糊口阿廖沙放学后同邻居的孩子们合伙拣破烂卖。同时，也感受到了友谊和同情。但这也招致学校的非难。他以优异的成绩读完了三年级，就永远地离开了学校课堂。
							这时候阿廖沙母亲逝世，他埋葬了母亲以后，不久便到“人间”去谋生。
						</text>
					</view>
					<view class="tab">
						<view class="imgs">
							<image class="img" src="../../static/images/书1.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书3.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书2.jpg" style="width: 220rpx; height: 240rpx;"></image>
						</view>
					</view>
				</view>
				
				<!-- 点赞评论 tab切换-->
				<view class="showtwo">
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
		</view>
	</view>
</template>

<script>
	import Logistic from '../readCirclepage/readExperPL.vue'
	import Orders from '../readCirclepage/readExperDZ.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'评论',
					'点赞',
				]
			};
		},

		onLoad: function() {},
		components: {
			// Fail,
			Orders,
			// Trade,
			Logistic,
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")        
		},
		methods: {
			handleScroll(index) {
				this.currentId = index;
				console.log(this.currentId)
			},
		},
	}

</script>

<style lang="scss" scoped>
.under {
	// line-height: 150rpx;
	/* 设置行高*/
	height: 2000rpx;
}

.show {
	/* margin-top: 40rpx; */
}

.showone {
	// line-height: 150rpx;
	color: #999999;
	height: auto;
	margin-top: 30rpx;
	/* background-color: #18C7F2; */
	border-bottom: 15rpx solid #f1f1f1;
}

.person {
	line-height: 20rpx;
	display: flex;
}
.imagetwo {
	margin-top: 0rpx;
	margin-left: 20rpx;
}

.zzname {
	font-size: 30rpx;
	margin: 20rpx;
	top: 90rpx;
	color: #00bfff;
}

.bn {
	height: 100%;
	margin-top: 20rpx;
}
.tw {
	margin-top: -130rpx;
	margin-left: 500p;
}

.zztime {
	font-size: 20rpx;
	margin-top: 190rpx;
	margin-left: -110rpx;
}
.delate {
	margin-left: 400rpx;
	margin-top: 20rpx;
	background-color: #00bfff;
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
	color: #555555;
}
.tab {
	margin: 10rpx 10rpx;
}
.imgs {
	display: flex;
	width: 95%;
	margin-left: 20rpx;
	margin-top: 10rpx;
}
.img {
	size: 100%;
	margin: 10rpx 12rpx;
}
// tab切换
.scroll-container {
    // box-sizing: border-box;
    padding-left: 30upx;
    white-space: nowrap;
    height: 90upx;
    background: #fff;
	border-top: 15upx solid #EEEEEE;
    border-bottom: 15upx solid #EEEEEE;
    .scroll-item {
      text-align: center;
      display: inline-block;
      padding: 0 145upx;
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

// 头部
.toux {
	border-radius: 50%;
	margin: 20rpx 20rpx;
}

.li {
	display: flex;
}
.name {
	color: #00aaff;
	margin-top: 35rpx;
	font-size: 30rpx;
	// background-color: #007AFF;
}
.vip {
	color: #f0ad4e;
	font-size: 25rpx;
	border-radius: 10rpx;
	border: 1rpx solid #f0ad4e;
	height: 35rpx;
	margin-top: 38rpx;
	background-color: #ffffff;
	text-align: center;
	width: 80rpx;
	margin-left: 10rpx;
}
.time {
	color: #8f8f94;
	font-size: 25rpx;
	margin-left: 200rpx;
	margin-top: 37rpx;
}
</style>
