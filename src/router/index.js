import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/Home'
import Music from 'views/Music'
import Friend from 'views/Friend'
import Shop from 'views/Shop'
import Musician from 'views/Musician'
import Download from 'views/Download'

import TopList from 'views/TopList'
import PlayList from 'views/PlayList'
import DJRadio from 'views/DJRadio'
import Artist from 'views/Artist'
import Album from 'views/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //linkActiveClass: 'active',
  //linkExactActiveClass: 'active',
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
  }]
})