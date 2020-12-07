<template>
	<view>
		<view class="show">
			<view class="book-name">
				<view class="name">书名</view>
				<view class="name-input1">
					<textarea class="name-input" placeholder="请输入书名" />
				</view>
			</view>
			<view class="book-author">
				<view class="author">作者</view>
				<view class="author-input1">
					<textarea class="author-input" placeholder="请输入作者名" />
				</view>
			</view>
			<view class="book-publisher">
				<view class="publisher">出版社</view>
				<view class="publisher-input1">
					<textarea class="publisher-input" placeholder="请输入出版社" />
				</view>
			</view>
			<view class="book-summary">
				<view class="summary">简介</view>
				<view class="summary-input1">
					<textarea class="summary-input" placeholder="请输入简介" />
				</view>
			</view>
			<view class="book-cover">
				<view class="cover">封面</view>
				<view class="coversImag">
					<image class="imageCover" src="../../static/images/add_more2.png"></image>
				</view>
			</view>
		</view>
		<view>
			<button class="submit-btn">确定提交</button>
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
			
		}
	}
</script>

<style>
	.show{
		background-color:#F5F5F5 ;
		height: 700rpx;
		width: 100%;
	}
	.name{
		margin-top: 40rpx;
		margin-left: 30rpx;
	}
	.book-name{
		font-size: 30rpx;
		color: #333333;
		display: flex;
	}
	.name-input1{
		margin-top: 35rpx;
		border: 1rpx solid #EBEBEB;
		border-radius: 15rpx;
		margin-left: 50rpx;
		width:578rpx;
		height: 60rpx;
		background-color: #FFFFFF;
	}
	.name-input{
		
		align-items: center;
		font-size: 22rpx;
		margin-left: 20rpx;
		color: #D7D7D7;
		margin-top: 15rpx;
		placeholder-style{
			
		}
	}


	.author{
		margin-top: 40rpx;
		margin-left: 30rpx;
	}
	.book-author{
		font-size: 30rpx;
		color: #333333;
		display: flex;
	}
	.author-input1{
		margin-top: 35rpx;
		border: 1rpx solid #EBEBEB;
		border-radius: 15rpx;
		margin-left: 50rpx;
		width:578rpx;
		height: 60rpx;
		background-color: #FFFFFF;
	}
	.author-input{
		
		align-items: center;
		font-size: 22rpx;
		margin-left: 20rpx;
		color: #D7D7D7;
		margin-top: 15rpx;
		placeholder-style{
			
		}
	}
	
	.publisher{
		margin-top: 40rpx;
		margin-left: 30rpx;
	}
	.book-publisher{
		font-size: 30rpx;
		color: #333333;
		display: flex;
	}
	.publisher-input1{
		margin-top: 35rpx;
		border: 1rpx solid #EBEBEB;
		border-radius: 15rpx;
		margin-left: 22rpx;
		width:578rpx;
		height: 60rpx;
		background-color: #FFFFFF;
	}
	.publisher-input{
		
		align-items: center;
		font-size: 22rpx;
		margin-left: 20rpx;
		color: #D7D7D7;
		margin-top: 15rpx;
		placeholder-style{
			
		}
	}


	.summary{
		margin-top: 40rpx;
		margin-left: 30rpx;
	}
	.book-summary{
		font-size: 30rpx;
		color: #333333;
		display: flex;
	}
	.summary-input1{
		margin-top: 35rpx;
		border: 1rpx solid #EBEBEB;
		border-radius: 15rpx;
		margin-left: 50rpx;
		width:578rpx;
		height: 200rpx;
		background-color: #FFFFFF;
	}
	.summary-input{
		
		align-items: center;
		font-size: 22rpx;
		margin-left: 20rpx;
		color: #D7D7D7;
		margin-top: 15rpx;
	}
	.cover{
		margin-top: 80rpx;
		margin-left: 30rpx;
	}
	.book-cover{
		font-size: 30rpx;
		color: #333333;
		display: flex;
	}
	.imageCover{
		margin-top: 35rpx;
		border-radius: 15rpx;
		margin-left: 50rpx;
		width:130rpx;
		height: 130rpx;
		border: 4rpx #DFDFDF dashed;
		/* background-color: #FFFFFF; */
	}
	.submit-btn{
		margin-top: 360rpx;
		color: #FFFFFF;
		background-color: #5E49F5;
		height: 90rpx;
		border-radius: 0;
	}
</style>
