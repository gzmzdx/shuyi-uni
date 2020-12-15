<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		methods:{
			//同步请求
			myRequest: function(params){
				return new Promise((resolve, reject)=>{
					var that = this,
						url = that.globalData.URL + params.url;
					if (!params.type) {
						params.type = 'GET';
					}
					if (params.type == 'GET') {
						var headerType = 'application/json'
					} else {
						var headerType = 'application/x-www-form-urlencoded'
					}
					if (params.setUpUrl == false) {
						url = params.url;
					}
					console.log("+++url:" + url);
					uni.request({
						url: url,
						data: params.data,
						method: params.type,
						header: {
							'content-type': headerType,
							Authorization: that.token
						},
						success: function(res) {
							//返回成功信息
							resolve(res.data)
						},
						fail: function(err) {
							// 页面中弹框显示失败
							uni.showToast({
								icon: 'none',
								title: '请求接口失败'
							})
							// 返回错误消息
							reject(err)
						}
					});
				}
				)
			},
			//异步请求
			request: function(params) {
				var that = this,
					url = that.globalData.URL + params.url;
				if (!params.type) {
					params.type = 'GET';
				}
			
				if (params.type == 'GET') {
					var headerType = 'application/json'
				} else {
					var headerType = 'application/x-www-form-urlencoded'
				}
				if (params.setUpUrl == false) {
					url = params.url;
				}
				console.log("+++url:" + url);
				uni.request({
					url: url,
					data: params.data,
					method: params.type,
					header: {
						'content-type': headerType,
						Authorization: that.token
					},
					success: function(res) {
						//返回成功信息
						console.log("请求成功！！")
						params.sCallback && params.sCallback(res.data);
					},
					fail: function(err) {
						console.log("发起请求失败！！")
					}
				});
			}
		},
		
		globalData: {
			userInfo: {},
			URL: "http://localhost:8000/api/",
			currentTab: 0,
			Link: "http://localhost:8000/",
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";

	.c-link {
		color: rgb(41, 121, 255);
		font-size: 14px;
		border-bottom: none;
		padding-bottom: 0px;
	}
</style>
