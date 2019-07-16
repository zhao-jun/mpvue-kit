# mpvue-kit
mpvue 脚手架

## 快速开始

## 脚手架优化
### mpvue-entry
使用 [mpvue-entry](https://github.com/F-loat/mpvue-entry) 进行集中式页面配置，修改 `webpack` 入口配置，自动生成入口

`src/app.json` 具体配置
```js
{
  "pages": [
    {
      "path": "pages/index",
      "config": {
        "navigationBarTitleText": "首页"
      }
    }
  ]
}
```
