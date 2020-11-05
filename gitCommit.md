# 团队规范 git cz 🚀



## Message 格式

一般来说，Commit Message 应包含三部分内容：Header、Body、Footer

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

Header

Header部分应只包含一行，包括三个字段：type、scope和subject

- type type用于说明Commit的类型，包含一下7种类型

![img](gitCommit.assets/111wf07ff6404be7dfe60ec1b2cb44e9b708)

```
    feat：新功能（feature）    
    fix：修补bug    
    docs：文档（documentation）    
    style： 格式（不影响代码运行的变动）    
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）    
    test：增加测试    chore：构建过程或辅助工具的变动
```

- scope

```
    scope用于说明本次Commit所影响的范围，比如controller、user或者README，视项目的不同而不同
```

- subjectsubject是本次Commit目的的简短描述，一般不要超过50个字符

```
	以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    第一个字母小写
    结尾不加句号（.）
```

Body

Body是对本地提交的一个详细描述，下面是一个示例

```
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

Footer

Footer只用于两种情况

- ***不兼容改动\***

如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

- ***关闭Issue\***

如果当前Commit是针对某个Issue的提交，那么久可以在Footer中关闭这个Issue：Closes #234





## Commitizen: 替代你的  git commit

我们的目标还是要通过工具生成和约束, 那么现在就开始吧.

commitizen/cz-cli, 我们需要借助它提供的 git cz 命令替代我们的 git commit 命令, 帮助我们生成符合规范的 commit message.

除此之外, 我们还需要为 commitizen 指定一个 Adapter 比如: cz-conventional-changelog (一个符合 Angular团队规范的 preset). 使得 commitizen 按照我们指定的规范帮助我们生成 commit message.





## 全局安装



```shell
npm install -g commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
source ~/.czrc
```

主要, 全局模式下, 需要 ~/.czrc 配置文件, 为 commitizen 指定 Adapter.



## 项目级安装

```shell
npm install -D commitizen cz-conventional-changelog
```

package.json中配置:

```json
"script": {
    ...,
    "commit": "git-cz",
},
 "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
```

如果全局安装过 commitizen, 那么在对应的项目中执行 git cz or npm run commit 都可以.

效果如下:

![img](gitCommit.assets/16369a14ec8704fc)



## 相关阅读

[优雅的提交你的 Git Commit Message](https://juejin.im/post/5afc5242f265da0b7f44bee4)
