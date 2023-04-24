This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 运行项目

首先运行 json-server 来获取侧边栏的mock数据 :

```bash
yarn mock
```
接着启动项目:
```bash
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 得到主页，侧边栏数据在 [http://localhost:3004/data](http://localhost:3004/data) 得到

layout在 `src/components`文件夹中，分为Header和侧边栏

`src/pages`中有四个组件和：`HotelRecommendation`, `HotelReputation`, `HotelReservation`, `MarketAdvert` 

其中，还有[/pages/index.js](src/pages/index.js)是入口文件，四大组件都在这里引入


