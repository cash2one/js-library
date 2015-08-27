## js-library
js-library 是一个js common库，为了前期与js-common共存，所以取名js-library。

## 规范说明

* 所有提交的代码，严格使用gerrit走评审流程，并且于少2人评审。
* 所有的依懒（dep目录）都使用bower进行管理（更新、卸载、更新）。
* 项目下有jshint 配置文件.jshintrc，所有提交的代码都必须jshint检测通过后才能提交。
* 依赖项目禁止修改
* 项目下有.gitignore文件，禁止把项目无关的文件（如.DS_Store）提代到仓库中。
* ngDirective、ngFilter、ngService先在widget或util中实现，再用angularJs语法封装。这样避免非angularJs项目也能使用js-library的服务。
* 所有提供的uitl、function、widget有需要写单元测试、并且测试用例通过。

## 目录介绍
* dep 第三方依赖，如jquery、angularjs。
* biz 公共业务处理。如room、cas。
* ngDirective 公共angularJs指令 如regionSelector、subjectSelector。
* ngService 公共angularJs服务。如urlUtil、storage。
* ngFilter 公共的angularJs filter，比如货币filter。（内置的filter负数展示有问题）
* function 公共的function。比使生成一个唯一的guid函数。目前function的文件copy了凤巢和cobble中的function。
* uitl 公共的uitl。比如时间处理工具、flag控制。
* widget 公共的小组件。比如regionSelector、subjectSelector。