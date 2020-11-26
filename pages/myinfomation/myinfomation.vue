<template>
	<view class="all">
		<view class="top">
			<view class="topone">头像</view>
			<view><image class="image" src="../../static/images/头像2.jpg" style="width:120rpx;height: 120rpx;border-radius: 100%;":loading="loading" :disabled="disabled" @click="upload" ></image></view>
			<!-- <view class="topthree"><image class="imag" src="../../static/images/更多.png" style="width: 30rpx;height: 35rpx;"></image></view> -->
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">昵称 :</view>
			<view class="midone_r"><input placeholder="林思鱼" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">手机 :</view>
			<view class="midone_r"><input placeholder="18927276565" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">隐藏手机号 :</view>
			<view class="midone_TP"><image src="../../static/images/gb.png" style="width: 65rpx;height: 65rpx;"></image></view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">邮箱 :</view>
			<view class="midone_r"><input placeholder="65523355@qq.com" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">常用地址 :</view>
			<view class="midone_r"><input placeholder="上海市松江区亭林镇大叶公路500号" /></view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">职业 :</view>
			<view class="midone_r"><input placeholder="教师" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">职称 :</view>
			<view class="midone_r"><input placeholder="无" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">学历 :</view>
			<view class="midone_r"><input placeholder="本科" /></view>
		</view>
		<view class="br3"></view>
		<!-- <view class="mid_two">
			<view class="midtwo">常用地址 :</view>
			<view class="midtwo_r">
				<textarea placeholder="贵州省贵阳市花溪区XXXXX镇XXXXXX村xxxx组xxxxxxxxx栋xxxxxx层xxxxx" maxlength="100" style="height: 300rpx;width: auto;"></textarea>
			</view>
		</view> -->
		<view class="x">
		<button class="bc">保存</button>
		</view>
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
.all{
	background-color: #FFFFFF;
}
.top {
	height: 110rpx;
	/* background-color: #BBBBBB; */
	border-bottom: 1rpx solid #F1F1F1;
}
.topone {
	/* background-color: #007AFF; */
	width: 20%;
	margin-left: 30rpx;
	margin-top: 55rpx;
	/* border-bottom: 1rpx solid #bbbbbb; */
}
.topthree {
	margin-top: -90rpx;
	margin-left: 705rpx;
	/* background-color:  #FF0000; */
}
.image {
	margin-left: 580rpx;
	margin-top: -67rpx;
}
.imag {
	/* margin-left: 700rpx; */
	/* margin-top: -600rpx; */
}
.mid {
	/* background-color: #F0AD4E; */
	height: 60rpx;
	/* border-bottom: 1rpx solid #F1F1F1; */
}
.midone {
	/* background-color: #2C405A; */
	width: 40%;
	font-size: 30rpx;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_r {
	/* background-color:  #4CD964; */
	margin-top: -40rpx;
	text-align: right;
	margin-right: 50rpx;
	color: #D2D2D2;
}
.midone_r input{
	font-size: 30rpx;
}
.midone_TP{
	margin-top: -50rpx;
	text-align: right;
	margin-right: 50rpx;
}
.mid_two {
	/* background-color: #F0AD4E; */
	height: 280rpx;
	/* border-bottom: 1rpx solid #bbbbbb; */
}
.midtwo {
	/* background-color: #2C405A; */
	width: 40%;
	margin-top: 40rpx;
	margin-left: 30rpx;
}
.midtwo_r {
	/* background-color:  #4CD964; */
	margin-top: 30rpx;
	text-align: left;
	margin-left: 30rpx;
}
.bc{
		color: #FFFFFF;
		font-size: 28rpx;
		margin-top: 100rpx;
		width: 500rpx;
		background-color: #00BFFF;
	}
.br1 {
		width: 100%;
		height: 3rpx;
		background-color: #F4F5F6;
		margin-left: 30rpx;
	}	
.br2 {
		width: 100%;
		height: 30rpx;
		background-color: #F5F5F5;
	}
.br3 {
		width: 100%;
		height: 30rpx;
		background-color: #F5F5F5;
	}
</style>
