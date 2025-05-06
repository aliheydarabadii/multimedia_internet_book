<template>
  <section class="sdp" style="max-width: 900px; margin: 2rem auto; padding: 2rem; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h1 style="font-size: 2rem; margin-bottom: 1rem;">Session Description Protocol (SDP)</h1>
    <p>Session Description Protocol (SDP) is a standardized signaling protocol used to describe multimedia sessions for session negotiation. SDP is used to negotiate parameters such as media type, codecs, IP addresses, and port numbers for media transmission.</p>
    <p>SDP was developed by the IETF and is defined in standards such as:</p>
    <ul>
      <li><b><a href="https://datatracker.ietf.org/doc/html/rfc4566" target="_blank">RFC 4566</a>:</b> Defines the syntax/structure of SDP and how messages are formatted and transmitted.</li>
      <li><b><a href="https://datatracker.ietf.org/doc/html/rfc5888" target="_blank">RFC 5888</a>:</b> Extension for using IPv6 addresses in SDP messages.</li>
    </ul>
    <p>SDP is often used with SIP and other protocols to negotiate media session parameters. SDP messages are exchanged to agree on codecs, IPs, ports, etc.</p>

    <h2 style="margin-top:2rem;">SDP Syntax and Structure</h2>
    <p>SDP is text-based, using simple lines with field names and values to describe sessions. Key fields include:</p>
    <ul style="columns:2; -webkit-columns:2; -moz-columns:2;">
      <li><b>v:</b> Version of SDP.</li>
      <li><b>o:</b> Originator (username, session ID/version, network/address type, unicast address).</li>
      <li><b>s:</b> Session name.</li>
      <li><b>i:</b> Brief session description.</li>
      <li><b>u:</b> URI for the session.</li>
      <li><b>e:</b> Email address.</li>
      <li><b>p:</b> Phone number.</li>
      <li><b>c:</b> Connection info (IP address/port).</li>
      <li><b>b:</b> Bandwidth to use.</li>
      <li><b>t:</b> Start/end times.</li>
      <li><b>r:</b> Repeat times.</li>
      <li><b>z:</b> Time zone adjustments.</li>
    </ul>

    <h2 style="margin-top:2rem;">Example: SDP Message for Audio Session</h2>
    <pre style="background:#f8f8fa; border-radius:8px; padding:1rem; overflow-x:auto;"><code>v=0
o=alice 2890844526 2890844526 IN IP4 host.example.com
s=Session
c=IN IP4 host.example.com
t=0 0
m=audio 49172 RTP/AVP 0
a=rtpmap:0 PCMU/8000
</code></pre>
    <p><b>o (origin) field:</b> <code>o=&lt;username&gt; &lt;sess-id&gt; &lt;sess-version&gt; &lt;nettype&gt; &lt;addrtype&gt; &lt;unicast-address&gt;</code></p>
    <ul>
      <li><b>username:</b> Name of originator.</li>
      <li><b>sess-id:</b> Unique session identifier.</li>
      <li><b>sess-version:</b> Version number for the session.</li>
      <li><b>nettype:</b> Network type (usually "IN" for Internet).</li>
      <li><b>addrtype:</b> Address type ("IP4" or "IP6").</li>
      <li><b>unicast-address:</b> IP address of the host.</li>
    </ul>
    <p><b>m (media) field:</b> <code>m=&lt;media&gt; &lt;port&gt; &lt;proto&gt; &lt;fmt&gt;</code></p>
    <ul>
      <li><b>&lt;media&gt;:</b> Media type (audio, video, text).</li>
      <li><b>&lt;port&gt;:</b> Port number for media.</li>
      <li><b>&lt;proto&gt;:</b> Transport protocol (RTP, UDP, etc).</li>
      <li><b>&lt;fmt&gt;:</b> Payload type(s) for media (codec codes).</li>
    </ul>

    <h2 style="margin-top:2rem;">Codec Mapping Table (fmt values)</h2>
    <div style="overflow-x:auto;">
      <table border="1" style="border-collapse:collapse; min-width:400px;">
        <tr style="background:#f0f0f0;"><th>fmt</th><th>Codec (Name/Description)</th></tr>
        <tr><td>0</td><td>PCMU (G.711 μ-law)</td></tr>
        <tr><td>3</td><td>GSM</td></tr>
        <tr><td>4</td><td>G723</td></tr>
        <tr><td>5</td><td>DVI4 (11.025 kHz)</td></tr>
        <tr><td>6</td><td>DVI4 (8 kHz)</td></tr>
        <tr><td>7</td><td>LPC</td></tr>
        <tr><td>8</td><td>PCMA (G.711 A-law)</td></tr>
        <tr><td>9</td><td>G722</td></tr>
        <tr><td>12</td><td>QCELP</td></tr>
        <tr><td>13</td><td>CN (Comfort Noise)</td></tr>
        <tr><td>14</td><td>MPA (MPEG Audio)</td></tr>
        <tr><td>15</td><td>G728</td></tr>
        <tr><td>18</td><td>G729</td></tr>
        <tr><td>31</td><td>H261 (Video)</td></tr>
        <tr><td>32</td><td>MPV (MPEG-1 Video)</td></tr>
      </table>
    </div>
    <p>Values up to 95 are statically assigned. Dynamic payload types (96-127) are not standardized and must be defined in SDP with an <code>a=rtpmap</code> attribute.</p>
    <p>The <b>a</b> (attribute) field follows "m" and provides extra info, e.g., sampling rate: <code>a=rtpmap:0 PCMU/8000</code>.</p>

    <h2 style="margin-top:2rem;">7.1 Negotiation with SDP</h2>
    <p>Assume that two parties want to negotiate an audio/video session, using SDP to describe their media. The negotiation is carried out through an offer and a response.</p>
    <h3 style="margin-top:1rem;">Offer/Answer Example</h3>
    <p><b>Offer:</b> (includes two audio codecs and two video codecs)</p>
    <pre style="background:#f8f8fa; border-radius:8px; padding:1rem; overflow-x:auto;"><code>v=0
o=- 649548746548765 7 IN IP4 192.0.2.1
s=Session
c=IN IP4 192.0.2.1
t=0 0
m=audio 49170 RTP/AVP 0 8
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
m=video 51372 RTP/AVP 31 99
a=rtpmap:31 H261/90000
a=rtpmap:99 MPV/90000
</code></pre>
    <p><b>Response:</b></p>
    <pre style="background:#f8f8fa; border-radius:8px; padding:1rem; overflow-x:auto;"><code>v=0
o=- 649548746548765 7 IN IP4 192.0.2.1
s=Session
c=IN IP4 192.0.2.1
t=0 0
m=audio 49170 RTP/AVP 8
a=rtpmap:8 PCMA/8000
m=video 51372 RTP/AVP 99
a=rtpmap:99 MPV/90000
</code></pre>
    <h3 style="margin-top:1rem;">HTTP Request/Response Scenario</h3>
    <p>In another scenario, a client sends an HTTP request to get information on how to access audio/video content (e.g., the movie "Mission to Mars"):</p>
    <pre style="background:#f8f8fa; border-radius:8px; padding:1rem; overflow-x:auto;"><code>GET /mission-to-mars/audio-video.sdp HTTP/1.1
Host: example.com
</code></pre>
    <p>The server responds with an SDP message, providing URLs for the media components and other information:</p>
    <pre style="background:#f8f8fa; border-radius:8px; padding:1rem; overflow-x:auto;"><code>HTTP/1.1 200 OK
Content-Type: application/sdp

v=0
o=- 649548746548765 7 IN IP4 192.0.2.1
s=Mission to Mars
c=IN IP4 host.example.com
t=0 0
m=audio 49170 RTP/AVP 0
a=control:rtsp://example.com/mission-to-mars/audio
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 99
a=control:rtsp://example.com/mission-to-mars/video
a=rtpmap:99 MPV/90000
</code></pre>
    <p>Here, the "a=control" field specifies the RTSP URL to retrieve the media streams.</p>
  </section>
</template>

<script>
export default {
  name: 'Sdp'
}
</script>


<style scoped>
.sdp {
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
