# 使用 Typescript + Vue3.0 从零到一测试到上线 高仿知乎专栏

## 课程亮点

* Vue3 + Typescript 全网首发，2020年最火技术双剑合璧，Vue3 配合 Typescript ，使用新版Vuex 和 Vue-Router 全家桶完成前后端分离复杂项目

* 组件库为脉络 实现一系列由易到难的通用组件开发，可谓学会一个基本的组件库的开发。

* 提供真实后端API 告别 mock 数据，并提供swagger 在线调试查询。

### 安装依赖
```
npm install
```

### 运行本地开发环境

**特别注意，我的源代码后端是本地后端，你直接运行会报错，如果在本地运行，要使用慕课网的防盗 API, 可以在 main.ts 拦截器中一劳永逸的添加**

```javascript
// 替换 baseURL
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
// 下面的 icode 值是从慕课网获取的 token 值，可以在课程右侧的项目接口校验码找到
axios.interceptors.request.use(config => {
  ... 其他代码
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '******' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '******')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '******' }
  }
  return config
})
```

```
npm run serve
```

## 课程与服务

* **项目演示站点：[http://zhihu.vikingship.xyz/](http://zhihu.vikingship.xyz/)**
* 在线后端API 查询和使用站点：[http://api.vikingship.xyz/](http://api.vikingship.xyz/)
* 项目在线文档：[http://docs.vikingship.xyz/](http://docs.vikingship.xyz/)
* 完成的组件库展示：[http://showcase.vikingship.xyz/](http://showcase.vikingship.xyz/)
* 流程图和原型图
* 购买后直接可以接入使用的真实后端API
* **如果您想学习本课程，请支持正版，谢谢！ [https://coding.imooc.com/class/449.html](https://coding.imooc.com/class/449.html)**

## 双分支代码结构

* master 默认分支完全按照课程的小结的代码，里面并没有完成留个同学们的作业或者是一些功能
* develop 开发分支拥有完整的功能，也是线上部署的版本，完成所有任务和样式调整，供学生们参考。
