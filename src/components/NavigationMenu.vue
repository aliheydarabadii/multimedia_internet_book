<template>
  <nav class="nav-menu">
    <ul>
      <li><router-link to="/media-streaming">Media Streaming</router-link></li>
      <li><router-link to="/voice-codecs">Voice Codecs</router-link></li>
      <li><router-link to="/audio">Audio</router-link></li>
      <li><router-link to="/video">Video</router-link></li>
      <li><router-link to="/containers">Containers</router-link></li>
      <li><router-link to="/sdp">Sdp</router-link></li>
      <li><router-link to="/rtp">RTP</router-link></li>
      <li><router-link to="/rtsp">RTSP</router-link></li>
      <li><router-link to="/http-streaming">HTTP Streaming</router-link></li>
      <li><router-link to="/transport-protocols">Transport Protocols</router-link></li>
      <li><router-link to="/iptv">IPTV</router-link></li>
      <li><router-link to="/unicast-multicast">Unicast & Multicast</router-link></li>
      <li><router-link to="/video-servers">Video Servers</router-link></li>
      <li><router-link to="/peer-to-peer-streaming">Peer-to-peer Video Streaming</router-link></li>
      <li><router-link to="/sip">SIP</router-link></li>
      <li><router-link to="/voice-over-ip">Voice Over IP</router-link></li>
      <li><router-link to="/json-data">json</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu'
}
</script>

<style scoped>
.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #f4f6fa;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  z-index: 1000;
  border-radius: 0;
  box-shadow: none;
  border-bottom: 1px solid #e0e4ea;
}
.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}
.nav-menu a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
}
.nav-menu a.router-link-exact-active {
  color: #42b983;
}
.nav-menu a:hover {
  color: #1a2533;
}
</style>
