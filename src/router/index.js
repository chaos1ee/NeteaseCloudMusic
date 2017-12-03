import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/Home'
import Music from 'views/Music'
import Friend from 'views/Friend'
import Shop from 'views/Shop'
import Musician from 'views/Musician'
import Download from 'views/Download'
import Toplist from 'views/Toplist'
import Playlist from 'views/Playlist'
import DJRadio from 'views/DJRadio'
import Artist from 'views/Artist'
import NewAlbum from 'views/NewAlbum'
import PlaylistDetail from 'views/PlaylistDetail'
import AlbumDetail from "views/AlbumDetail"
import Song from "views/Song"
import NotFound from 'views/NotFound'


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
    name: 'Toplist',
    component: Toplist
  },
  {
    path: '/discover/playlist',
    name: 'Playlist',
    component: Playlist
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
    path: '/discover/album/:index',
    name: 'Album',
    component: NewAlbum
  },
  {
    path: '/playlist/:id',
    name: "PlaylistDetail",
    component: PlaylistDetail
  },
  {
    path: '/album/:id',
    name: "AlbumDetail",
    component: AlbumDetail
  },
  {
    path: '/song/:id',
    name: "Song",
    component: Song
  },
  {
    path: '*',
    component: NotFound
  }]
})