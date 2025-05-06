import{_ as d,c as t,a as e,o}from"./index-w3F1axKx.js";const s={name:"Sdp"},r={class:"sdp",style:{"max-width":"900px",margin:"2rem auto",padding:"2rem",background:"#fff","border-radius":"12px","box-shadow":"0 2px 8px rgba(0,0,0,0.06)"}};function i(c,a,n,f,v,l){return o(),t("section",r,a[0]||(a[0]=[e(`<h1 style="font-size:2rem;margin-bottom:1rem;" data-v-c1daf168>Session Description Protocol (SDP)</h1><p data-v-c1daf168>Session Description Protocol (SDP) is a standardized signaling protocol used to describe multimedia sessions for session negotiation. SDP is used to negotiate parameters such as media type, codecs, IP addresses, and port numbers for media transmission.</p><p data-v-c1daf168>SDP was developed by the IETF and is defined in standards such as:</p><ul data-v-c1daf168><li data-v-c1daf168><b data-v-c1daf168><a href="https://datatracker.ietf.org/doc/html/rfc4566" target="_blank" data-v-c1daf168>RFC 4566</a>:</b> Defines the syntax/structure of SDP and how messages are formatted and transmitted.</li><li data-v-c1daf168><b data-v-c1daf168><a href="https://datatracker.ietf.org/doc/html/rfc5888" target="_blank" data-v-c1daf168>RFC 5888</a>:</b> Extension for using IPv6 addresses in SDP messages.</li></ul><p data-v-c1daf168>SDP is often used with SIP and other protocols to negotiate media session parameters. SDP messages are exchanged to agree on codecs, IPs, ports, etc.</p><h2 style="margin-top:2rem;" data-v-c1daf168>SDP Syntax and Structure</h2><p data-v-c1daf168>SDP is text-based, using simple lines with field names and values to describe sessions. Key fields include:</p><ul style="columns:2;-webkit-columns:2;-moz-columns:2;" data-v-c1daf168><li data-v-c1daf168><b data-v-c1daf168>v:</b> Version of SDP.</li><li data-v-c1daf168><b data-v-c1daf168>o:</b> Originator (username, session ID/version, network/address type, unicast address).</li><li data-v-c1daf168><b data-v-c1daf168>s:</b> Session name.</li><li data-v-c1daf168><b data-v-c1daf168>i:</b> Brief session description.</li><li data-v-c1daf168><b data-v-c1daf168>u:</b> URI for the session.</li><li data-v-c1daf168><b data-v-c1daf168>e:</b> Email address.</li><li data-v-c1daf168><b data-v-c1daf168>p:</b> Phone number.</li><li data-v-c1daf168><b data-v-c1daf168>c:</b> Connection info (IP address/port).</li><li data-v-c1daf168><b data-v-c1daf168>b:</b> Bandwidth to use.</li><li data-v-c1daf168><b data-v-c1daf168>t:</b> Start/end times.</li><li data-v-c1daf168><b data-v-c1daf168>r:</b> Repeat times.</li><li data-v-c1daf168><b data-v-c1daf168>z:</b> Time zone adjustments.</li></ul><h2 style="margin-top:2rem;" data-v-c1daf168>Example: SDP Message for Audio Session</h2><pre style="background:#f8f8fa;border-radius:8px;padding:1rem;overflow-x:auto;" data-v-c1daf168><code data-v-c1daf168>v=0
o=alice 2890844526 2890844526 IN IP4 host.example.com
s=Session
c=IN IP4 host.example.com
t=0 0
m=audio 49172 RTP/AVP 0
a=rtpmap:0 PCMU/8000
</code></pre><p data-v-c1daf168><b data-v-c1daf168>o (origin) field:</b> <code data-v-c1daf168>o=&lt;username&gt; &lt;sess-id&gt; &lt;sess-version&gt; &lt;nettype&gt; &lt;addrtype&gt; &lt;unicast-address&gt;</code></p><ul data-v-c1daf168><li data-v-c1daf168><b data-v-c1daf168>username:</b> Name of originator.</li><li data-v-c1daf168><b data-v-c1daf168>sess-id:</b> Unique session identifier.</li><li data-v-c1daf168><b data-v-c1daf168>sess-version:</b> Version number for the session.</li><li data-v-c1daf168><b data-v-c1daf168>nettype:</b> Network type (usually &quot;IN&quot; for Internet).</li><li data-v-c1daf168><b data-v-c1daf168>addrtype:</b> Address type (&quot;IP4&quot; or &quot;IP6&quot;).</li><li data-v-c1daf168><b data-v-c1daf168>unicast-address:</b> IP address of the host.</li></ul><p data-v-c1daf168><b data-v-c1daf168>m (media) field:</b> <code data-v-c1daf168>m=&lt;media&gt; &lt;port&gt; &lt;proto&gt; &lt;fmt&gt;</code></p><ul data-v-c1daf168><li data-v-c1daf168><b data-v-c1daf168>&lt;media&gt;:</b> Media type (audio, video, text).</li><li data-v-c1daf168><b data-v-c1daf168>&lt;port&gt;:</b> Port number for media.</li><li data-v-c1daf168><b data-v-c1daf168>&lt;proto&gt;:</b> Transport protocol (RTP, UDP, etc).</li><li data-v-c1daf168><b data-v-c1daf168>&lt;fmt&gt;:</b> Payload type(s) for media (codec codes).</li></ul><h2 style="margin-top:2rem;" data-v-c1daf168>Codec Mapping Table (fmt values)</h2><div style="overflow-x:auto;" data-v-c1daf168><table border="1" style="border-collapse:collapse;min-width:400px;" data-v-c1daf168><tr style="background:#f0f0f0;" data-v-c1daf168><th data-v-c1daf168>fmt</th><th data-v-c1daf168>Codec (Name/Description)</th></tr><tr data-v-c1daf168><td data-v-c1daf168>0</td><td data-v-c1daf168>PCMU (G.711 μ-law)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>3</td><td data-v-c1daf168>GSM</td></tr><tr data-v-c1daf168><td data-v-c1daf168>4</td><td data-v-c1daf168>G723</td></tr><tr data-v-c1daf168><td data-v-c1daf168>5</td><td data-v-c1daf168>DVI4 (11.025 kHz)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>6</td><td data-v-c1daf168>DVI4 (8 kHz)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>7</td><td data-v-c1daf168>LPC</td></tr><tr data-v-c1daf168><td data-v-c1daf168>8</td><td data-v-c1daf168>PCMA (G.711 A-law)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>9</td><td data-v-c1daf168>G722</td></tr><tr data-v-c1daf168><td data-v-c1daf168>12</td><td data-v-c1daf168>QCELP</td></tr><tr data-v-c1daf168><td data-v-c1daf168>13</td><td data-v-c1daf168>CN (Comfort Noise)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>14</td><td data-v-c1daf168>MPA (MPEG Audio)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>15</td><td data-v-c1daf168>G728</td></tr><tr data-v-c1daf168><td data-v-c1daf168>18</td><td data-v-c1daf168>G729</td></tr><tr data-v-c1daf168><td data-v-c1daf168>31</td><td data-v-c1daf168>H261 (Video)</td></tr><tr data-v-c1daf168><td data-v-c1daf168>32</td><td data-v-c1daf168>MPV (MPEG-1 Video)</td></tr></table></div><p data-v-c1daf168>Values up to 95 are statically assigned. Dynamic payload types (96-127) are not standardized and must be defined in SDP with an <code data-v-c1daf168>a=rtpmap</code> attribute.</p><p data-v-c1daf168>The <b data-v-c1daf168>a</b> (attribute) field follows &quot;m&quot; and provides extra info, e.g., sampling rate: <code data-v-c1daf168>a=rtpmap:0 PCMU/8000</code>.</p><h2 style="margin-top:2rem;" data-v-c1daf168>7.1 Negotiation with SDP</h2><p data-v-c1daf168>Assume that two parties want to negotiate an audio/video session, using SDP to describe their media. The negotiation is carried out through an offer and a response.</p><h3 style="margin-top:1rem;" data-v-c1daf168>Offer/Answer Example</h3><p data-v-c1daf168><b data-v-c1daf168>Offer:</b> (includes two audio codecs and two video codecs)</p><pre style="background:#f8f8fa;border-radius:8px;padding:1rem;overflow-x:auto;" data-v-c1daf168><code data-v-c1daf168>v=0
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
</code></pre><p data-v-c1daf168><b data-v-c1daf168>Response:</b></p><pre style="background:#f8f8fa;border-radius:8px;padding:1rem;overflow-x:auto;" data-v-c1daf168><code data-v-c1daf168>v=0
o=- 649548746548765 7 IN IP4 192.0.2.1
s=Session
c=IN IP4 192.0.2.1
t=0 0
m=audio 49170 RTP/AVP 8
a=rtpmap:8 PCMA/8000
m=video 51372 RTP/AVP 99
a=rtpmap:99 MPV/90000
</code></pre><h3 style="margin-top:1rem;" data-v-c1daf168>HTTP Request/Response Scenario</h3><p data-v-c1daf168>In another scenario, a client sends an HTTP request to get information on how to access audio/video content (e.g., the movie &quot;Mission to Mars&quot;):</p><pre style="background:#f8f8fa;border-radius:8px;padding:1rem;overflow-x:auto;" data-v-c1daf168><code data-v-c1daf168>GET /mission-to-mars/audio-video.sdp HTTP/1.1
Host: example.com
</code></pre><p data-v-c1daf168>The server responds with an SDP message, providing URLs for the media components and other information:</p><pre style="background:#f8f8fa;border-radius:8px;padding:1rem;overflow-x:auto;" data-v-c1daf168><code data-v-c1daf168>HTTP/1.1 200 OK
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
</code></pre><p data-v-c1daf168>Here, the &quot;a=control&quot; field specifies the RTSP URL to retrieve the media streams.</p>`,31)]))}const m=d(s,[["render",i],["__scopeId","data-v-c1daf168"]]);export{m as default};
