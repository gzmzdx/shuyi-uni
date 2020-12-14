<template>
	<view class="all">
		<view class="find">
			<view class="">
				<image src="../../static/images/好友.png" style=" margin-left: 100rpx;  width: 50rpx;height: 50rpx;"></image>
			</view>
			<view class="">
				<input placeholder="搜索好友" @input="goToSearch" v-model="name"  style="width: 400rpx; height:  50rpx; font-size: 25rpx; border: solid 2rpx #EEEEEE;border-radius: 5rpx;"/>
			</view>
			<view class="">
				<button type="warn" style="width: 110rpx; height: 50rpx; font-size: 15rpx; margin-right: 100rpx; " >搜索</button>
			</view>
		</view>
		<view v-if="findFriendsList.length <= 0">
			<view v-if="myFriendsList !==undefined && myFriendsList.length > 0">
				<view class="show" v-for="(item,index) in myFriendsList" :key="index">
					<view class="img">
						<view v-if="item.friend.avatar != null">
							<image :src="item.friend.avatar" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx; border: solid 1rpx #0066CC;"></image>
						</view>
						<view v-else>
							<image :src="getImg()" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;border: solid 1rpx #0066CC;"></image>
						</view>
					</view>
					<view class="name">{{item.friend.nickname}}</view>
				</view>	
			</view>
			<view v-else>
				<view style="width: 100%;height: 100rpx;font-size: 40rpx;color: red;text-align: center;margin-top: 60rpx;">
					<view>
						暂无好友，快去添加吧！！！
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view v-if="findFriendsList !==undefined && findFriendsList.length > 0">
				<view class="show" v-for="(item,index) in findFriendsList" :key="index">
					<view class="img">
						<view v-if="item.avatar != null">
							<image :src="item.avatar" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx; border: solid 1rpx #0066CC;"></image>
						</view>
						<view v-else>
							<image :src="getImg()" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;border: solid 1rpx #0066CC;"></image>
						</view>
					</view>
					<view class="name">{{item.nickname}}</view>
				</view>	
			</view>
			<view v-else>
				<view style="width: 100%;height: 100rpx;font-size: 40rpx;color: red;text-align: center;margin-top: 60rpx;">
					<view>
						查询不到此人信息！！！
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp();
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				myFriendsList : [],
				name:'',
				findFriendsList : []
			}
		},
		onLoad(){			
			this.getMyFriends(); //获取我的朋友列表	
			
				},
		methods: {
			//获取我的朋友列表
			async getMyFriends() {
				var that = this;
				var params = {
					url: "friends/myFriends",
					type: 'GET',
					data: {}
				}
				const res = await app.myRequest(params);
				that.myFriendsList = res;
				console.log(res);
				console.log(that.myFriendsList[1].friend.nickname);
			},
			//默认头像
			getImg(){
				return getApp().globalData.Link+'upload/图片/j2.jpg';
			},
			//根据昵称进行模糊查询
			async goToSearch() {
				var that = this;
				var params = {
					url: "friends/queryByName",
					type: 'GET',
					data: {
						size : 10,
						page : 0,
						name : this.name
						
					}
				}
				const res = await app.myRequest(params);
				that.findFriendsList = res;
				console.log(res);
				
			},
		}
	}
</script>

<style>
	.show{
		background-color: #F5F5F5;
		width: 100%;
		height: 100%;
		display: flex;
		margin-top: 5rpx;
		margin-bottom: 5rpx;
	}
	.img{
		margin-left: 30rpx;
		margin-top: 20rpx;
		height: 100rpx;
	}
	.name{
		font-size: 25rpx;
		margin-top: 50rpx;
		margin-left: 40rpx;
	}
	.all{
		
	}
	.find{
		display: flex;
		margin-top: 20rpx;
	}
</style>
