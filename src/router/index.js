import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'

/** 顶级路由 **/
import Discover from '@/Discover'
import Music from '@/Music'
import Friend from '@/Friend'
import Shop from '@/Shop'
import Musician from '@/Musician'
import Download from '@/Download'

/** 次级路由 **/
import Recommend from '@/Recommend'
import Rank from '@/Rank'
import List from '@/List'
import Radio from '@/Radio'
import Singer from '@/Singer'
import Album from '@/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'Home',
    redirect: '/discover/recommend',
    component: Home,
    children: [{
        path: 'discover',
        name: 'Discover',
        redirect: '/discover/recommend',
        component: Discover,
        children: [{
            path: 'recommend',
            name: 'Recommend',
            component: Recommend
          },
          {
            path: 'rank',
            name: 'Rank',
            component: Rank
          },
          {
            path: 'list',
            name: 'List',
            component: List
          },
          {
            path: 'radio',
            name: 'Radio',
            component: Radio
          },
          {
            path: 'singer',
            name: 'Singer',
            component: Singer
          },
          {
            path: 'album',
            name: 'Album',
            component: Album
          }
        ]
      },
      {
        path: 'music',
        name: 'Music',
        component: Music
      },
      {
        path: 'friend',
        name: 'Friend',
        component: Friend
      },
      {
        path: 'shop',
        name: 'Shop',
        component: Shop
      },
      {
        path: 'musician',
        name: 'Musician',
        component: Musician
      },
      {
        path: 'download',
        name: 'Download',
        component: Download
      },
      // 添加歌单页面路由
    ]
  }]
})
