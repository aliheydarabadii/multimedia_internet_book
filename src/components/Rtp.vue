<template>
  <section class="rtp" style="max-width: 900px; margin: 2rem auto; padding: 2rem; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h1 style="font-size: 2rem; margin-bottom: 1rem;">The Real Time Protocol (RTP)</h1>
    <h2 style="margin-top:1.5rem;">8.1 Introduction to the Real Time Protocol (RTP)</h2>
    <p>
      The Real Time Protocol (RTP) is a widely used network protocol for delivering audio and video over the internet, standardized by the IETF (RFC 3550). RTP is often used with protocols like RTCP (for quality monitoring) and SDP (for session negotiation) to provide a complete solution for real-time media streaming. RTP handles the delivery of media data, while RTCP manages quality of service, and SDP negotiates session parameters.
    </p>
    <p>
      RTP is essential for applications such as VoIP, video conferencing, and online streaming, where low latency and high quality are required. It enables real-time transmission of audio and video, even over unreliable networks, by supporting features like packet sequencing and timing.
    </p>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: Typical protocol layering for RTP]</div>
    </div>

    <h2 style="margin-top:2rem;">8.2 RTP Packet Structure and Header</h2>
    <p>
      RTP packets have a simple structure: a variable-length header (aligned on 32-bit words) followed by a variable-length payload (the actual media data). The header identifies the packet and provides information about the data.
    </p>
    <ul>
      <li><b>Version (V):</b> Indicates the RTP version (currently 2).</li>
      <li><b>Padding (P):</b> Shows if padding is added to the end for alignment.</li>
      <li><b>Extension (X):</b> Indicates if an extension header is present for extra information.</li>
      <li><b>CSRC count (CC):</b> Number of contributing sources in the packet.</li>
      <li><b>Marker (M):</b> Marks significant events in the media stream.</li>
      <li><b>Payload type (PT):</b> Type of data in the payload (codec).</li>
      <li><b>Sequence number:</b> 16-bit field incremented for each packet, helps detect loss and maintain order.</li>
      <li><b>Timestamp:</b> 32-bit field indicating the sampling instant of the first octet in the payload; used for synchronization and ordering.</li>
      <li><b>SSRC:</b> 32-bit Synchronization Source identifier (unique per source).</li>
    </ul>
    <p>
      Optional fields include an extension header (for extra info like error correction) and CSRC identifiers (for contributing sources).
    </p>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTP header structure]</div>
    </div>
    <h3 style="margin-top:1.5rem;">Timestamp and Synchronization</h3>
    <p>
      The <b>timestamp</b> field is incremented at a constant rate and reset to zero when a session begins. It allows the receiver to:
      <ul>
        <li>Reconstruct the proper sequence of RTP packets.</li>
        <li>Synchronize media data with the local clock.</li>
        <li>Estimate round-trip time (RTT) and jitter for quality measurement.</li>
      </ul>
    </p>
    <h3 style="margin-top:1.5rem;">SSRC and CSRC Fields</h3>
    <p>
      <b>SSRC</b> (Synchronization Source) uniquely identifies the source of the RTP packet. <b>CSRC</b> (Contributing Source) fields identify sources that contributed to the payload (e.g., in a conference call). CSRCs are useful for properly mixing audio/video from multiple participants.
    </p>
    <div style="background:#f4f8ff; border-left:4px solid #0074D9; padding:1rem; margin-top:1rem;">
      <b>Example use case:</b> In a conference with participants A, B, and C, if A speaks, the primary audio source is A (SSRC), but the stream may also include audio from B and C as CSRCs if they speak simultaneously. This allows the receiver to mix audio from all sources for a natural experience.
    </div>

    <h2 style="margin-top:2.5rem;">8.3 Synchronization with RTP</h2>
    <h3 style="margin-top:1.2rem;">8.3.1 Synchronization of Sources in the Same Connection</h3>
    <p>When multiple media sources are carried in the same RTP connection (i.e., the same packet), synchronization is typically achieved using the <b>timestamp</b> field in the packet header. By comparing timestamps of successive packets, the receiver can determine timing relationships and synchronize sources. The <b>sequence number</b> field helps detect missing or out-of-order packets, which also affects synchronization.</p>
    <h3 style="margin-top:1.2rem;">8.3.2 Synchronization of Sources on Different Connections</h3>
    <p>When multiple media sources are carried on different RTP connections (separate packets), synchronization is typically achieved using the <b>SSRC</b> (synchronization source) field in the packet header. Comparing SSRC values from different connections allows the receiver to relate and synchronize sources. The <b>timestamp</b> and <b>sequence number</b> fields can also be used to synchronize sources in this case.</p>

    <h2 style="margin-top:2.5rem;">8.4 RTP over UDP and TCP</h2>
    <p>RTP can use both UDP and TCP for transport. UDP is generally preferred for real-time media due to its low latency and simplicity, while TCP may be used when reliable delivery or firewall traversal is more important.</p>
    <h3 style="margin-top:1.2rem;">8.4.1 UDP (User Datagram Protocol)</h3>
    <ul>
      <li><b>Pros:</b>
        <ul>
          <li>Low latency: No connection overhead, making it fast for real-time media.</li>
          <li>Simplicity: Easy to implement and manage.</li>
        </ul>
      </li>
      <li><b>Cons:</b>
        <ul>
          <li>No reliability: Packets may be lost or delivered out of order.</li>
          <li>Limited congestion control: No built-in mechanisms for congestion, making it prone to overload and packet loss.</li>
        </ul>
      </li>
    </ul>
    <h3 style="margin-top:1.2rem;">8.4.2 TCP (Transmission Control Protocol)</h3>
    <ul>
      <li><b>Pros:</b>
        <ul>
          <li>Reliability: Ensures in-order, reliable delivery using retransmission and flow control.</li>
          <li>Congestion control: Built-in mechanisms help prevent overload and packet loss.</li>
        </ul>
      </li>
      <li><b>Cons:</b>
        <ul>
          <li>Latency: Connection setup and retransmission can introduce delays, which is undesirable for real-time media.</li>
          <li>Complexity: More complex than UDP, making it harder to implement and manage.</li>
        </ul>
      </li>
    </ul>

    <h2 style="margin-top:2.5rem;">8.5 Implementation of RTP in Software Applications</h2>
    <p>RTP can be implemented directly in application software for generating or consuming real-time media, giving full control over timing and delivery. Alternatively, RTP may be used via a library or framework that handles transmission and provides a standard interface (API).</p>
    <p>RTP is typically used for low-latency delivery of real-time media over IP networks, either as part of an application or via a separate library.</p>
    <p><b>Examples of C libraries supporting RTP:</b></p>
    <ul>
      <li><b>Live555:</b> Open-source, widely used for streaming audio/video and sending/receiving RTP packets.</li>
      <li><b>GStreamer:</b> Open-source multimedia framework supporting many formats and RTP.</li>
      <li><b>libre:</b> Lightweight, open-source C library for real-time communication, including RTP, with support for multiple platforms.</li>
    </ul>

    <h2 style="margin-top:2.5rem;">8.6 RTP in Media Streaming</h2>
    <p>RTP is a protocol for transmitting real-time data (audio, video) over IP networks, designed for low-latency delivery. RTP is widely used in:</p>
    <ul>
      <li><b>VoIP (Voice over IP):</b> Transmits audio streams for phone calls and video conferencing, enabling near-instantaneous communication.</li>
      <li><b>Video streaming:</b> Used for online video conferencing, live streaming, and video on demand, ensuring smooth playback in real-time.</li>
      <li><b>Audio and video broadcasting:</b> Used in radio and television to transmit media over networks in real-time.</li>
      <li><b>Live streaming:</b> Powers platforms like YouTube Live, Facebook Live, and Twitch for real-time audio/video delivery.</li>
      <li><b>Video on demand:</b> Used by services like Netflix, Hulu, and Amazon Prime for real-time streaming of on-demand content.</li>
    </ul>
    <p>Overall, RTP is essential for applications that require real-time, low-latency delivery of audio and video streams.</p>

    <h2 style="margin-top:2.5rem;">8.7 Real Time Control Protocol (RTCP)</h2>
    <p><b>RTCP</b> (Real-Time Control Protocol) is used alongside RTP to monitor and control the quality of real-time transmissions. RTCP provides feedback about the quality and performance of RTP streams, such as sender/receiver reports, and operates independently on a separate port.</p>
    <p>RTCP is crucial for ensuring quality and reliability in real-time media, and is widely used in VoIP, video conferencing, and live streaming.</p>

    <h3 style="margin-top:1.2rem;">8.7.1 RTCP Packet Format</h3>
    <p>RTCP packets have a fixed header and one or more message blocks with control information. The header includes:</p>
    <ul>
      <li><b>Version:</b> RTCP version used</li>
      <li><b>Padding flag:</b> Indicates if extra bytes are added</li>
      <li><b>Report count (RC):</b> Number of report blocks</li>
      <li><b>Packet type:</b> Type of RTCP message (see below)</li>
    </ul>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTCP packet header]</div>
    </div>
    <p>The RC field indicates the number of report blocks, which contain information about the quality of the RTP stream (fraction lost, jitter, round-trip time, etc). The packet type field indicates the RTCP message type:</p>
    <ul>
      <li><b>Sender reports:</b> Info about the sender's RTP transmission (timestamp, packets/bytes sent)</li>
      <li><b>Receiver reports:</b> Info about reception (packets lost, jitter, round-trip time)</li>
      <li><b>Source descriptions:</b> Info about RTP sources (CNAME, name, email)</li>
      <li><b>Bye messages:</b> Indicate a source is leaving the session (with optional reason)</li>
    </ul>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTCP receiver report]</div>
    </div>

    <h3 style="margin-top:1.2rem;">8.7.2 RTCP and RTP Interaction</h3>
    <p>RTCP is used with RTP to provide feedback on the quality of RTP transmission and to exchange control information between devices in a session. RTCP transmits information such as:</p>
    <ul>
      <li>Packet loss rate</li>
      <li>Jitter (variation in packet arrival time)</li>
      <li>Round-trip delay</li>
      <li>Number of participants in the session</li>
    </ul>
    <p>RTCP also helps synchronize multiple media sources by transmitting timestamps and sequence numbers for each RTP packet, allowing receivers to reconstruct the original stream. RTCP report packets are sent at regular intervals to all session participants, containing quality and timing information.</p>
    <p><b>RTCP Sender Report Structure:</b></p>
    <ul>
      <li><b>Header fields:</b>
        <ul>
          <li>V: Version number (2 bits)</li>
          <li>P: Padding flag (1 bit)</li>
          <li>SC: Sender report count (5 bits, number of report blocks)</li>
          <li>PT: Packet type (8 bits, 200 = sender report)</li>
          <li>Length: Packet length in 32-bit words minus one</li>
        </ul>
      </li>
      <li><b>Report block fields:</b>
        <ul>
          <li>SSRC of sender: Synchronization source identifier</li>
          <li>NTP timestamp: Wallclock time (NTP format) when report sent</li>
          <li>RTP timestamp: RTP timestamp corresponding to NTP timestamp</li>
          <li>Sender's packet count: Total RTP packets sent</li>
          <li>Sender's octet count: Total payload bytes sent</li>
        </ul>
      </li>
    </ul>
    <div style="margin: 1.5rem 0; text-align:center;">
      <div style="display:inline-block; width:80%; min-height:80px; background:#f5f7fa; border:1px dashed #bbb; border-radius:8px; color:#888; line-height:80px; font-size:1rem;">[Diagram: RTCP sender report]</div>
    </div>
    <p>In summary, RTP and RTCP work together to transmit real-time data and provide feedback, ensuring quality and synchronization of multiple media sources.</p>

    <h3 style="margin-top:1.2rem;">8.7.3 RTCP and Congestion Control</h3>
    <p>RTCP feedback includes information about packet loss rate, jitter, round-trip delay, and the number of participants. This feedback helps the sender monitor network conditions and detect congestion. When congestion is detected (e.g., increased loss or jitter), the sender can reduce the transmission rate to avoid further congestion.</p>
    <p>To reduce network load, the sender may also change the codec or select a lower bit rate. However, lowering the bit rate can reduce media quality, so it is important to balance network utilization and media quality based on RTCP feedback.</p>
    <p>The sender application uses RTCP feedback to decide whether to change the codec or transmission rate. If a codec change is needed, the sender updates the RTP packet's payload type field to indicate the new codec. This allows the receiver to identify and decode the new codec without external signaling.</p>
    <p><b>Note:</b> RTP and RTCP do not signal all codec parameters (such as bit rate). If the receiver needs these details, an additional signaling protocol may be required.</p>

  </section>
</template>

<script>
export default {
  name: 'Rtp'
}
</script>
<style scoped>
.rtp {
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

