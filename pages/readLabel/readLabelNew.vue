<template>
	<view class="all">
		<!-- 头部 -->
		<view class="topall">
			<view class="top">
				<view class="topt"><text>添加标签</text></view>
				<view class="topSt">
					<text>贴上标签，让书易更懂你。</text>
					<span >已选择：{{tagIds.length}}/6标签</span><!-- {{tagIds.length}} :class="{spanActive:tagIds.length>0}"-->
				</view>
			</view>
			<!-- 添加 -->
			<view class="wc"><text @click="addTag()">完成</text></view>
		</view>
		<view class="mid">
			<view v-for="(i,index) in tags" :kye=index class="tag1" :class="{active: arr[index]}">
				 <u-tag :text="i.content" @click="tagClick(index,i.tagId)" :border-color="color[index]"  :bgColor="bg[index]" :color="color[index]"/>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
			data() {
				return {
					bg:[], //标签背景颜色 "#ffffff",
					tags: [],//标签几号
					arr: [], //判断是否可以选择
					tagIds: [], //tagId
					lock: true, // 锁
					openId:"1",
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
					]
				}
			},
			
			onLoad() {
				uni.request({
					url:getApp().globalData.URL+'tag',
					method:'GET',
					header: {
						 'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					success:res =>{
						console.log("分页后台传来的",res.data.content)
						this.tags = res.data.content
						for (let i = 0; i < this.tags.length; i++) {
						      this.arr.push(false);
							  this.bg.push("#ffffff")
						    }
						},
					fail: (res) => {
						 uni.showToast({
							title: "网络错误！",
							icon: 'none'
						 })
						
					}
				})
			},
			methods: {
				//点击标签
				tagClick(index, tagId) {
				  this.lock = true;
				  for (let i = 0; i < this.tagIds.length; i++) {
				    if (this.tagIds[i] == tagId) {
				      this.tagIds.splice(i, 1);
				      this.lock = false;
				    }
				  }
				  for (let i = 0; i < this.arr.length; i++) {
				    if (this.tagIds.length >= 6) {
						console.log("最多只能选择6个标签")
						uni.showToast({
							title: "最多只能选择6个标签！",
							icon: 'none'
						})
				        return false;
				    }
				    if (i == index) {
						if(this.arr[index]){
							this.arr.splice(index, 1, false)
							this.bg[index] = "#ffffff"  //切换背景颜色
						}else{
							this.arr.splice(index, 1, true)
							this.bg[index] = "#dedede"
						}
				    }
				  }
				  if (this.tagIds.length < 6 && this.lock) {
				    this.tagIds.push(tagId);
				  }
				  console.log("最后的提交值：",this.tagIds)
				},
				//添加标签
				addTag(){
					uni.request({
						url:getApp().globalData.URL+'tagReader?openId='+this.openId,
						data:this.tagIds,
						method:'POST',
						header: {
							 'content-type': 'application/json;charset=UTF-8' // 默认值
						   },
						success:res =>{
							console.log("添加标签成功！",res.data)
							uni.showToast({
								title: "添加成功！",
								icon: 'none'
							})
							},
						fail: (res) => {
							 uni.showToast({
								title: "网络错误！",
								icon: 'none'
							 })
						}
					})
			}
		},
	}	
</script>
<style lang="scss" scoped>

.tag {
	border: solid 0.2px;
	border-radius: 5px;
}
.all {
	width: 100vw;
	height: 100vh;
	background-color: #fafafa;
}
/* 头部 */
.topall {
	height: 130rpx;
	border-bottom: 1rpx solid #f4f5f6;
	display: flex;
}
.top {
	/* display: flex; */
}
.topt {
	margin-top: 20rpx;
	margin-left: 30rpx;
	font-size: 46rpx;
}
.topSt {
	margin-left: 30rpx;
	margin-top: 10rpx;
	color: #666666;
	font-size: 25rpx;
}
.wc {
	font-size: 32rpx;
	margin-left: 144rpx;
	margin-top: 30rpx;
}
/* 中间内容 */
.mid {
	margin: 20rpx 10rpx;
	display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content: flex-start
}
.mid view{
	padding: 7rpx;
}
.biankuan {
}
.bq {
	/* height: 500rpx; */
	/* border: #E3E3E3 1rpx solid; */
	/* text-align: center; */
	/* align-items: center; */
	/* border-radius: 10rpx;
	margin: 30rpx 10rpx;
	font-size: 32rpx;
	color: #00BFFF;
	background-color: #FFFFFF; */
}
</style>
