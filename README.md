# 关于依赖



## npm
shell依赖
+ art-template
+ chalk
+ cz-conventional-changelog
+ execa
+ inquirer
+ commitizen




## 编译

**IDE:**   **HBuilder X**

**HBuilder X编译插件：**

+ less编译
+ scss/sass编译
+ uni-app编译


**安装依赖**
```shell
# 使用npm
npm install
# 或者
npm i
# 使用yarn
yarn
```


## UI组件库

+ [uviewui](https://www.uviewui.com/)



# 关于目录结构



|—— api	（api相关文件目录）<br/>
|           |—— mock<br/>
|           |           |—— index.js  (所有页面的mock汇总)<br/>
|			|—— index.js	(api接口)<br/>
|			|—— request.js (封装的请求方法)<br/>
|           |—— requestConfig (请求配置<br/>
|—— cliShell  （封装的命令行工具）<br/>
|			|—— comTem	（组件模板）<br/>
|			|—— pageTem	（页面模板）<br/>
|			|—— createComponents.js	（模板创建工具主题）<br/>
|—— components	（自定义组件存放的目录）<br/>
|			|—— ...<br/>
|—— node_modules	（npm依赖项存放的目录）<br/>
|			|—— ...<br/>
|—— pages	（各个页面存放的目录）<br/>
|			|—— ...<br/>
|—— static	（开放的全局静态目录，与assets 相似，存放显示相关的）<br/>
|			|—— icon	（图标、svg、字体等）<br/>
|			|			|—— ...<br/>
|			|—— images	（图片）<br/>
|			|			|—— ...<br/>
|			|—— style	（样式）<br/>
|			|			|—— ...<br/>
|			|—— test	（测试用的所有静态文件存放目录）<br/>
|			|			|—— ...<br/>
|—— uview-ui	（uview-ui库）<br/>
|			|—— ...<br/>
|—— .gitignore	（git提交忽略文件的规则）<br/>
|—— App.vue	（全局根组件）<br/>
|—— main.js	（入口）<br/>
|—— manifest.json	（针对多端的不同配置）<br/>
|—— package.json	（npm包管理文件）<br/>
|—— pages.json	（页面配置文件）<br/>
|—— uni.scss	（全局css文件）<br/>









# 关于开发流程



## 组件开发流程



使用 `npm run cct` 命令创建公共组件



**组件前缀选择**

> components 目录中的 c- 前缀的组件可以在使用时免去引入操作，禁止创建 u- 前缀的组件，因为 u- 组件再不引用的情况下会被定位到 uview-ui/components目录下。
>
> 如果原先的 u- 组件无法满足你的要求，你可以将其复制到 components 目录，更名为 c- 组件，然后进行源码修改。或者创建一个新的 c- 组件





**维护README.md**

每一个自定义组件都应该维护一个`README.md`文件

`README.md` 文件中一个至少包含以下几项内容，其他可自行增加



+ 标题（组件全名）
+ 对改组件的基本介绍文字（用来干嘛）
+ 一个使用/测试案例
+ 需要传递的参数
+ 提供的事件回调
+ 使用的注意事项
+ 已知bug



**对可出现错误的 props 做处理**

对可能出现的默认值做默认值处理或者在使用时做判断处理










## 页面开发流程

使用 `npm run cct` 命令创建页面<br/>

*h5页面请添加h5-前缀，例如h5的my页面，页面名为h5-my*

在 `pages.json` 文件中对应位置添加当前页面的配置， 在 `test`页面添加向当前页面转跳的按钮<br/>




具体的页面配置请参考 `c-page` 组件的文档<br/>





# 关于代码提交

规范说明参考 gitCommit.md



## 拉取最新代码

拉取最新代码 `git pull`命令或者直接点webstorm的拉取按钮<br/>

IDE： 工具>外部命令>git插件>拉取(Pull)

成功就是拉取成功了



如果是失败，那么很有可能是代码冲突（别人和你编辑了同一个文件，系统不知道采用谁的）

> 解决冲突：找到带×图标的文件进行编辑，然后打开右键git小乌龟工具>解决冲突





## add&commit

使用 `npm run addAll` 命令将所有文件添加至git变更中,当然你也可以使用git  add命令来指定要add的文件<br/>
使用 `npm run commit` 命令提交当前变更<br/>

 选择     提交类型<br/>
 输入     当前提交影响的主模块（页面/组件）<br/>
 输入     本次提交的简介（描述主要更新了什么 <90字）<br/>
 输入     本次提交的详情（可以不写）<br/>
 后面全部按  Enter 默认即可<br/>

<hr/>

使用 `npm run gitFlow` 命令提交当前变更<br/>





## push

就是把本地代码更新到远程仓库（github）

shell： 使用 `git push` 命令将提交推送到远程仓库<br/>

 IDE： 工具>外部命令>git插件>推送(Push)


