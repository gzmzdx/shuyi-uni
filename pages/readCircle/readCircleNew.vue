<template>
	<view class="all">
			<form>
				<!-- 头部三个 -->
				<view class="top">
				<view class="topone">
					<view class="title">书圈名</view>
					<view class="shuru">
						<input placeholder="请输入书圈名" name="input"></input>
					</view>
				</view>
				<!-- <view class="topone">
					<view class="title">公告</view>
					<view class="shuru">
						<input placeholder="请输入公告内容" name="input"></input>
					</view>
				</view> -->
				<!-- 公告 -->
				<view class="toptwo">
					<view class="jjtitle">公告</view>
					<view class="jjNR">
						<textarea class="jjk" placeholder="请输入公告内容" maxlength="200"></textarea>
					</view>
				</view>
				<!-- 简介 -->
				<view class="toptwo">
					<view class="jjtitle">简介</view>
					<view class="jjNR">
						<textarea class="jjk" placeholder="请输入简介内容" maxlength="200"></textarea>
					</view>
				</view>
				<!-- 书圈头像-->
				<view class="topthree">
					<view class="tptitle">头像</view>
					<view class="img">
						<image class="wa" src="../../static/images/tj.jpg" :loading="loading" :disabled="disabled" @click="upload"></image>
					</view>
				</view>
				<button class="tj" form-type="submit">提交</button>
			</view>
			</form>
	</view>
</template>

<script>
	var _self;
	export default {
	 data:{
	  percent:0,
	  loading:false,
	  disabled:false
	 },
	 methods : {
	  upload : function(){
	   _self = this;
	   uni.chooseImage({
	    count: 1,
	    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	    sourceType: ['album'], //从相册选择
	    success: function (res) {
	     const tempFilePaths = res.tempFilePaths;
	     const uploadTask = uni.uploadFile({
	      url : "https://jxsbbx.gzmu.edu.cn/schoolcloud/",
	      filePath: tempFilePaths[0],
	      name: 'file',
		  // fileType: 'image',
	      formData: {
	       'user': 'test'
	      },
	      success: function (uploadFileRes) {
	       console.log(uploadFileRes.data);
	      }
	     });
	 
	     uploadTask.onProgressUpdate(function (res) {
	      _self.percent = res.progress;
	      console.log('上传进度' + res.progress);
	      console.log('已经上传的数据长度' + res.totalBytesSent);
	      console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
	     });
	    },
	    error : function(e){
	     console.log(e);
	    }
	   });
	  }
	 },
	    onLoad:function(){
	  
	    }
	}
</script>

<style>
	/* 所有 */
.all{
	width: 100%;
	height: 800rpx;
	background-color: #F1F1F1;
}
.top{
	/* margin-top: 20rpx; */
}
/* 书圈名 */
.topone{
	/* margin-top: 20rpx; */
	/* background-color: #00BFFF; */
	display: flex;
}
.title{
	margin-top: 50rpx;
	margin-left: 30rpx;
	width: 18%;
	/* background-color: #0000FF; */
}
.shuru{
	margin-left: 5rpx;
	margin-top: 50rpx;
	width: 550rpx;
	height: 60rpx;
	border-radius: 10rpx;
	background-color: #FFFFFF;
	border:1rpx solid #C0C0C0;
}
.shuru input{
	margin: 10rpx 15rpx;
	font-size: 26rpx;
}
/* 简介 */
.toptwo{
	display: flex;
}
.jjtitle{
	margin-top: 60rpx;
	margin-left: 30rpx;
	width: 18%;
}
.jjNR{
	margin-left: 5rpx;
	margin-top: 50rpx;
	border-radius: 10rpx;
	background-color: #FFFFFF;
	border:1rpx solid #C0C0C0;
}
.jjk{
	margin: 10rpx 15rpx;
	font-size: 26rpx;
	width: 520rpx;
	height: 160rpx;
}
/* 头像*/
.topthree{
	display: flex;
}
.tptitle{
	margin-top: 60rpx;
	margin-left: 30rpx;
	width: 18%;
}
.wa{
	width: 135rpx;
	height: 135rpx;
	margin: 50rpx 5rpx ;
	border: 3rpx dashed #C0C0C0;
	}
.tj{
	/* margin-bottom: 0rpx; */
	/* marker-end: 0rpx; */
	color: #FFFFFF;
	background-color: #5251F5;
	position:fixed;
	bottom: 0;
	width:100%;
	border-radius: 0rpx;
}
</style>
