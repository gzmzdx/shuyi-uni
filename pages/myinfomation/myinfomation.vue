<template>
	<view class="all">
		<form @submit="formSubmit" >
		<view class="top" >
			<view class="topone">头像</view>
			<view><image class="image" :src="head_img" style="width:120rpx;height: 120rpx;border-radius: 100%;":loading="loading" :disabled="disabled" @click="upImg()" ></image></view>
			<view v-show="false">
				<input name = "avatar" :value="info.avatar" />
			</view>
			<!-- <view class="topthree"><image class="imag" src="../../static/images/更多.png" style="width: 30rpx;height: 35rpx;"></image></view> -->
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">昵称 :</view>
			<view class="midone_r"><input name="nickname" :value="info.nickname" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid" v-show="isShow">
			<view class="midone">手机 :</view>
			<view class="midone_r"><input name="phoneNum" :value="info.phone" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid" >
			<view class="midone">隐藏手机号 :</view>
			<view class="midone_TP">
				<switch checked @change="switchChange" />
			</view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">邮箱 :</view>
			<view class="midone_r"><input name = "email" :value="info.email" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">常用地址 :</view>
			<view class="midone_r" v-text="info.detail_address"></view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">职业 :</view>
			<view class="midone_r"><input name = "occupation" :value="info.occupation" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">职称 :</view>
			<view class="midone_r"><input name="professional" :value="info.professional" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">学历 :</view>
			<view class="midone_r"><input name="education" :value="education" /></view>
		</view>
		<view class="br3"></view>
		<!-- <view class="mid_two">
			<view class="midtwo">常用地址 :</view>
			<view class="midtwo_r">
				<textarea placeholder="贵州省贵阳市花溪区XXXXX镇XXXXXX村xxxx组xxxxxxxxx栋xxxxxx层xxxxx" maxlength="100" style="height: 300rpx;width: auto;"></textarea>
			</view>
		</view> -->
		<view class="x">
			<button form-type="submit" class="bc">保存</button>
		</view>
		</form>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				percent:0,
				loading:false,
				disabled:false,
				isShow:true,//是否隐藏电话号码
				openId:1 ,//暂时是1
				info:{},//读者信息
				token:'token',
				head_img:'',//头像
				info:{
					openId:1
				}
				
			};
		},
		onLoad() {
			this.getReaderInfo();
		},
	 methods : {
		 //获取读者信息
		 getReaderInfo(){
		 	var that = this;
		 	uni.request({
		 		 // url:getApp().globalData.URL +'api/reader/app?id='+that.openId,
		 		 url:getApp().globalData.URL +'api/reader/app',
		 		 data:{
		 			 id:that.openId,
		 			 token:that.token,
		 		 },
		 		 header: {
		 		     'content-type': 'application/json;charset=UTF-8' // 默认值
		 		   },
		 		 method:'GET',
		 		 success:res =>{
		 			that.info=res.data;
					that.head_img = res.data.avatar
		 			}
		 	})
		 },
		 //是否隐藏电话号码
		 switchChange: function (e) {
			 this.isShow = e.target.value;
		 },
		 formSubmit:function(e){
			var that = this
			//let tmp = JSON.stringify(e.detail.value)
			let tmp = JSON.stringify(e.detail.value)
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var formdata = e.detail.value
			// 数据校验
			// console.log(formdata.birth);
			//正则表达式
			let reg_tel = /(^$)|(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/
			let reg_email = /(^$)|^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/ 
			//结果标记
			let sign_tel = RegExp(reg_tel).test(formdata.phoneNum);	
			let sign_email = RegExp(reg_email).test(formdata.email);
			// console.log(sign+"，数据类型："+typeof(sign));
			if(!sign_tel){
				this.showModal("请检查电话号码格式");
			}else if(!sign_email){
				this.showModal('请检查电子邮箱格式')
			}else{
				uni.request({
					//url: getApp().globalData.URL +'api/reader/app?headImg='+that.head_img+'&tmp',
					url:getApp().globalData.URL +'api/reader/app?openId='+that.openId,
					//url: getApp().globalData.URL +'api/reader/app',
					data: tmp,
					method: "PUT",
					success:(res)=> {
						console.log("回调函数信息：",res)
						this.showModal("更改信息成功了！")
					},
					fail:(res)=>{
						this.showModal("更改信息失败了！")
					}
				})
			}
			
		},
		 //上传图片
		 upImg(){
		 	var that = this;
		 	uni.chooseImage({
		 	    success: (chooseImageRes) => {
		 	        const tempFilePaths = chooseImageRes.tempFilePaths;
		 	        uni.uploadFile({
		 	            url: getApp().globalData.URL +'api/imgUpload/upload', //仅为示例，非真实的接口地址
		 	            filePath: tempFilePaths[0],
		 	            name: 'multipartFile',
		 	            formData: {
		 	                'user': 'test'
		 	            },
		 	            success: (uploadFileRes) => {
		 					var datas=JSON.parse(uploadFileRes.data);
		 					if(datas.errno==0){
								uni.showToast({
									title: '更改头像成功！',
									icon: 'none'
								});
		 						that.head_img = getApp().globalData.URL+"upload/图片/" + datas.data[0];
		 					}else{
		 						uni.showToast({
		 							title: '图片上传失败了！',
		 							icon: 'none'
		 						});
		 						}
		 						console.log("看看赋值是否成功",that.head_img)
		 					}
		 	        });
		 	    }
		 	});
		 },
		 //提示框
		 showModal(val){
			 uni.showToast({
			 	title: val,
			 	icon: 'none'
			 });
		 },
			 
	 //  upload : function(){
	 //   _self = this;
	 //   uni.chooseImage({
	 //    count: 1,
	 //    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	 //    sourceType: ['album'], //从相册选择
	 //    success: function (res) {
	 //     const tempFilePaths = res.tempFilePaths;
	 //     const uploadTask = uni.uploadFile({
	 //      url : "https://jxsbbx.gzmu.edu.cn/schoolcloud/",
	 //      filePath: tempFilePaths[0],
	 //      name: 'file',
		//   // fileType: 'image',
	 //      formData: {
	 //       'user': 'test'
	 //      },
	 //      success: function (uploadFileRes) {
	 //       console.log(uploadFileRes.data);
	 //      }
	 //     });
	 
	 //     uploadTask.onProgressUpdate(function (res) {
	 //      _self.percent = res.progress;
	 //      console.log('上传进度' + res.progress);
	 //      console.log('已经上传的数据长度' + res.totalBytesSent);
	 //      console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
	 //     });
	 //    },
	 //    error : function(e){
	 //     console.log(e);
	 //    }
	 //   });
	 //  }
	 },
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
