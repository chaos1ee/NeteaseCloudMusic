# NeteaseCloudMusic 网易云音乐


这是一个仿网易云音乐的PC端SPA项目，使用的框架与库主要包括vue、vuex、vue-router、element-ui、lodash、aixos。~~本项目现已部署到服务器，可以访问地址[http://lihaocloudmusic.co](http://lihaocloudmusic.co)预览。~~

![shot](/shot.png)

项目中的数据来源于[Binaryify](https://github.com/Binaryify)提供的接口，所以本项目不能单独运行，需先运行API服务。可以clone仓库[vltur](https://github.com/maybeeee/vultr)，在本地运行预览。

[API仓库地址](https://github.com/Binaryify/NeteaseCloudMusicApi)


注：由于项目中使用了http-proxy-middleware将请求代理到`localhost:3000`，所以如果报代理请求失败的错误，可以查看API服务运行端口与代理转发的端口是否一致。htpp-proxy-middleware的相关配置信息保存在config目录下的index文件中。


## 项目运行以及构建

安装依赖

```bash
npm install
```

开发环境

```bash
npm run dev
```

生产环境

```bash
npm run build

```

项目使用H5提供的Audio API播放音乐，对不支持Audio的浏览器无法播放音乐。
与登陆有关的功能暂不支持。

## 功能介绍

1. 添加歌单到播放器列表（点击首页专辑封面的播放按钮:arrow_forward:，其他页面暂时不支持该功能）。
2. 歌曲、歌词切换播放，音量调节。
3. 歌单评论列表获取，分页展示。 

## 项目进度

1. 项目包含的页面

- [x] 发现音乐（推荐）- Home.vue
- [ ] 我的音乐 - Musician.vue
- [ ] 朋友 - Friend.vue
- [ ] 商城 - Shop.vue
- [ ] 音乐人 - Musician.vue
- [ ] 下载客户端 - Download.vue
- [ ] 排行榜 - Toplist.vue
- [X] 歌单 - Playlist.vue
- [ ] 主播电台 - DJRadio.vue
- [ ] 歌手 - Artist.vue
- [ ] 新碟上架 -Album.vue
- [x] 歌单详情 - PlaylistDetail.vue
- [x] 404页面 - NotFound.vue

项目中的所有页面文件放置在src目录中的views文件夹下。

2. 项目主要的组件

- [x] 播放器组件 - palyer.vue - 使用HTML5 Audio接口播放音乐。
- [x] 导航栏组件 - header.vue - 借助vue-router在页面间导航。
- [x] 歌单封面组件 - cover.vue - 添加歌单到播放器列表。
- [x] 评论组件 - comment.vue - 拉取评论，分页显示。
- [x] 榜单组件 - bill.vue - 获取榜单，播放歌曲
- [ ] 登录组件 - login.vue - 处理的登录逻辑（由于接口问题，暂待开发）。

项目中的所有组件文件放置在src目录中的components文件夹下。

3. 项目主要的交互及功能

- [x] 添加歌单到播放器，并缓存歌单到localstorage。
- [x] 播放以及暂停，上一曲、下一曲。
- [x] 播放过程中同步更新进度条，以及拖拽进度条控制播放进度。
- [ ] 切换播放模式（随机模式、单曲循环、列表循环）。
- [x] 获取歌词在播放面板中显示，播放过程中歌词同步滚动。
- [ ] 发表评论（需要登录）。
- [ ] 获取个人信息（需要登录）。
- [ ] 播放MV。


## 项目展示

![demo](/demo.gif)
