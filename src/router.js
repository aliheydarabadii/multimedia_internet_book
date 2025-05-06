import { createRouter, createWebHistory } from 'vue-router'
import MediaStreaming from './components/MediaStreaming.vue'
import App from './App.vue'
import Rtp from './components/Rtp.vue';
import SIP from './components/SIP.vue';
import VoiceOverIP from './components/VoiceOverIP.vue';
import jsonData from './components/JSON.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/media-streaming',
    name: 'MediaStreaming',
    component: MediaStreaming
  },
  {
    path: '/voice-codecs',
    name: 'VoiceCodecs',
    component: () => import('./components/VoiceCodecs.vue')
  },
  {
    path: '/audio',
    name: 'Audio',
    component: () => import('./components/Audio.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('./components/Video.vue')
  },
  {
    path: '/containers',
    name: 'Containers',
    component: () => import('./components/Containers.vue')
  },
  {
    path: '/sdp',
    name: 'Sdp',
    component: () => import('./components/Sdp.vue')
  },
  {
    path: '/rtp',
    name: 'Rtp',
    component: () => import('./components/Rtp.vue')
  },
  {
    path: '/rtsp',
    name: 'Rtsp',
    component: () => import('./components/Rtsp.vue')
  },
  {
    path: '/http-streaming',
    name: 'HttpStreaming',
    component: () => import('./components/HttpStreaming.vue')
  },
  {
    path: '/transport-protocols',
    name: 'TransportProtocols',
    component: () => import('./components/TransportProtocols.vue')
  },
  {
    path: '/iptv',
    name: 'Iptv',
    component: () => import('./components/Iptv.vue')
  },
  {
    path: '/unicast-multicast',
    name: 'UnicastMulticast',
    component: () => import('./components/UnicastMulticast.vue')
  },
  {
    path: '/video-servers',
    name: 'VideoServers',
    component: () => import('./components/VideoServers.vue')
  },
  {
    path: '/peer-to-peer-streaming',
    name: 'PeerToPeerStreaming',
    component: () => import('./components/PeerToPeerStreaming.vue')
  },
  {
    path: '/sip',
    name: 'SIP',
    component: SIP
  },
  {
    path: '/voice-over-ip',
    name: 'VoiceOverIP',
    component: VoiceOverIP
  },
  {
    path: '/json-data',
    name: 'JsonData',
    component: jsonData
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
