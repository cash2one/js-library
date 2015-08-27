## js-library
js-library 是一个js common库，为了前期与js-common共存，所以取名js-library。

## 使用说明

* 执行npm install 下载安装js-library依赖的nodejs 模块。
* 执行npm start 启用web服务，用于自己联调。
* 执行npm test 运行单元测试。前提是pc上需安装chrome浏览器。所有单元测试用例都存放在test/e2e目录下。
* 执行npm run protractor 运行端到端测试。所有端到端测试用例都存放在test/e2e目录下。（目前还没有用到）

## 规范说明

* 所有function或util中已实现的功能请直接使用，不重复造轮子。
* 所有的依懒（dep目录）都使用bower进行管理（更新、卸载、更新）。
* 项目下有jshint 配置文件.jshintrc，所有提交的代码都必须jshint检测通过后才能提交。
* 依赖项目禁止改动。
* 项目下有.gitignore文件，禁止把项目无关的文件（如.DS_Store）提代到仓库中。
* ngDirective、ngFilter、ngService先在widget或util中实现，再用angularJs语法封装。这样避免非angularJs项目也能使用js-library的服务。
* 所有提供src下的代码都需要有单元测试、并且测试用例通过（如图1所示），且覆盖率90%及以上（如图2所示）。
* dep里面有ng-bootStrap源码，建议在项目中选择性的引用组件。
* 所有提交的代码，严格使用gerrit走评审流程，并且于少2人评审。

## 目录介绍
* dep 第三方依赖，如jquery、angularjs。
* biz 公共业务处理。如room、cas。
* ngDirective 公共angularJs指令 如regionSelector、subjectSelector。
* ngService 公共angularJs服务。如urlUtil、storage。
* ngFilter 公共的angularJs filter，比如货币filter。（内置的filter负数展示有问题）
* function 公共的function。比使生成一个唯一的guid函数。目前function的文件copy了凤巢和cobble中的function。
* uitl 公共的uitl。比如时间处理工具、flag控制。
* widget 公共的小组件。比如regionSelector、subjectSelector。

![Alt text](http://c.picphotos.baidu.com/album/s%3D1000%3Bq%3D90/sign=b8bf147d64d0f703e2b291dc38ca6a4c/18d8bc3eb13533fab027d144aed3fd1f40345bc2.jpg)
（图1）

![Alt text](http://g.picphotos.baidu.com/album/s%3D1000%3Bq%3D90/sign=81341803232dd42a5b0905ab330b60c4/a5c27d1ed21b0ef44dcbd534dbc451da81cb3ebc.jpg)
（图2）

