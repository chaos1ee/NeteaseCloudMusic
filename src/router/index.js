import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/Home'
import Music from '@/Music'
import Friend from '@/Friend'
import Shop from '@/Shop'
import Musician from '@/Musician'
import Download from '@/Download'

import TopList from '@/TopList'
import PlayList from '@/PlayList'
import DJRadio from '@/DJRadio'
import Artist from '@/Artist'
import Album from '@/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/musician',
      name: 'Musician',
      component: Musician
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Home
    },
    {
      path: '/discover/toplist',
      name: 'TopList',
      component: TopList
    },
    {
      path: '/discover/playlist',
      name: 'PlayList',
      component: PlayList
    },
    {
      path: '/discover/djradio',
      name: 'DJRadio',
      component: DJRadio
    },
    {
      path: '/discover/artist',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/discover/album',
      name: 'Album',
      component: Album
    }
  ]
})
