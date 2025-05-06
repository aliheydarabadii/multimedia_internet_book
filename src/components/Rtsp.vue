<template>
  <section class="rtsp">
    <h1>9 The Real Time Streaming Protocol (RTSP)</h1>
    <p><b>RTSP</b> is a protocol for controlling the delivery of real-time multimedia data, such as audio and video streams. It is used to establish and manage streaming sessions between endpoints, and to control the streaming of media data within a session. RTSP is designed to be extensible, supporting a wide range of media types and delivery mechanisms.</p>
    <p>RTSP is a client-server protocol: the client initiates a session by sending a request to the server, which responds with a message. RTSP uses a small set of request and response messages to establish/manage sessions and control streaming of media data.</p>
    <ul>
      <li>Often used with RTP and RTCP to transmit actual media data.</li>
      <li>RTSP manages the streaming session; RTP/RTCP handle media transmission and synchronization.</li>
      <li>Compared to HTTP (for static content) and SIP (for session management), RTSP provides detailed control over streaming media data.</li>
    </ul>

    <h2>9.1 RTSP Messages</h2>
    <p>RTSP messages consist of a start line, header fields, and an optional message body. The start line indicates the message type (e.g. REQUEST or RESPONSE), method (e.g. SETUP, PLAY, PAUSE), and URI. Header fields provide additional parameters (e.g. sequence number, transport details, user agent).</p>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: Example RTSP SETUP request message]</div>
    </div>
    <ul>
      <li><b>SETUP:</b> Establishes an RTSP session and specifies streaming parameters (e.g. transport protocol, destination ports).</li>
      <li><b>PLAY:</b> Starts streaming media data within a session.</li>
      <li><b>PAUSE:</b> Temporarily pauses streaming; session remains established.</li>
    </ul>

    <h2>9.2 RTSP Session Establishment and Management</h2>
    <p>Sessions are managed using request/response messages. The <b>SETUP</b> message establishes a session, specifying the media URI, transport protocol, and ports. The server replies with the actual destination addresses and ports, and a session identifier. The <b>TEARDOWN</b> message terminates the session and releases resources.</p>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: Example RTSP SETUP and TEARDOWN messages]</div>
    </div>
    <ul>
      <li><b>SETUP:</b> Client sends SETUP with media URI and transport details; server responds with destination info and session ID.</li>
      <li><b>TEARDOWN:</b> Client sends TEARDOWN with session ID; server responds and releases session resources.</li>
    </ul>
    <p>Once a session is terminated, no further RTSP messages or media data are exchanged for that session.</p>

    <h2>9.3 Example of RTSP interaction between client and server</h2>
    <p>This example shows how a client requests the streaming of a movie using RTSP and related protocols:</p>
    <ol>
      <li><b>SDP Request:</b> The client sends an HTTP GET request for an SDP file (e.g., <code>GET /mission_to_mars.sdp HTTP/1.1</code>). The server responds with the SDP content describing audio and video streams, their payload types (e.g., Opus, VP9), and RTSP control URIs for each stream.</li>
      <div style="margin: 1.5rem 0; text-align:center;"><div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: HTTP GET request for SDP and response]</div></div>
      <li><b>SETUP for Audio:</b> The client sends an RTSP SETUP request to the audio control URI, specifying client ports for RTP and RTCP. The server responds with server ports and a session ID.</li>
      <div style="margin: 1.5rem 0; text-align:center;"><div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTSP SETUP request/response for audio]</div></div>
      <li><b>SETUP for Video:</b> The client sends a SETUP request for the video control URI, specifying different client ports. The server responds with server ports and a different session ID.</li>
      <div style="margin: 1.5rem 0; text-align:center;"><div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTSP SETUP request/response for video]</div></div>
      <li><b>PLAY Requests:</b> The client sends PLAY requests for each media component (audio/video), including the session ID and desired playback range. The server responds with <code>RTP-Info</code> headers containing media URLs, sequence numbers, and RTP timestamps to help synchronize playback.</li>
      <div style="margin: 1.5rem 0; text-align:center;"><div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTSP PLAY request/response for audio and video]</div></div>
    </ol>
    <p>Each media session (audio/video) is managed independently, with its own session ID and transport ports. <b>RTP-Info</b> headers in the PLAY response help the client synchronize media playback with the RTP streams.</p>

    <h2>9.4 Applications and services using RTSP</h2>
    <p>RTSP is widely used for real-time streaming in a variety of applications and services, including:</p>
    <ul>
      <li><b>Video Conferencing:</b> RTSP is used as the signaling protocol in platforms like Zoom, Skype, and Webex to establish/control media sessions and synchronize audio/video streams for real-time communication.</li>
      <li><b>Online Video Platforms:</b> Services like YouTube and Vimeo use RTSP to deliver live streams, enabling users to broadcast events and stream to global audiences in real time.</li>
      <li><b>IPTV:</b> Internet Protocol Television providers use RTSP to deliver live TV streams to set-top boxes and smart TVs over the internet.</li>
      <li><b>Surveillance Systems:</b> IP cameras and DVR/NVR systems use RTSP to stream live video feeds for remote monitoring and management.</li>
      <li><b>Other Uses:</b> RTSP can also be found in streaming media players, gaming, and virtual reality applications.</li>
    </ul>
    <p><b>Note:</b> While RTSP is a popular protocol for real-time streaming, alternatives like HTTP streaming are also common. Each protocol has its own pros and cons, so the best choice depends on your application's specific requirements.</p>
  </section>
</template>

<script>
export default {
  name: 'Rtsp'
}
</script>


<style scoped>
.rtsp {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #222; /* Ensure default text is dark */
}
h1, h2, h3 {
  color: #1a2533;
}
ul {
  margin-bottom: 1.5rem;
}
li {
  margin-bottom: 0.5rem;
  color: #222; /* Ensure list items are dark */
  line-height: 1.7;
}
p {
  color: #222;
}
</style>
