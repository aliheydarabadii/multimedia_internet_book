<template>
  <section class="media-streaming">
    <h1>Media Streaming</h1>
    <p>
      Media streaming is the process of delivering audio and video content over the internet in real-time, allowing users to access media without downloading the entire file first. This enables on-demand access to movies, TV shows, music, and live events on various devices (smartphones, computers, smart TVs, etc.). The rise of high-speed internet has made streaming a major way people consume media.
    </p>
    <h2>Types of Media Streaming</h2>
    <ul>
      <li><strong>Live streaming:</strong> Real-time transmission of audio/video (e.g., concerts, sports, news).</li>
      <li><strong>On-demand streaming:</strong> Users watch/listen to pre-recorded content anytime (e.g., Netflix).</li>
      <li><strong>Progressive download:</strong> Users can start watching/listening before the file is fully downloaded, but must download the whole file to finish.</li>
      <li><strong>Adaptive streaming:</strong> The stream quality adjusts based on internet speed and device for a smooth experience.</li>
      <li><strong>Download-to-own:</strong> Users download and permanently own the media.</li>
      <li><strong>Peer-to-peer streaming:</strong> Media is distributed among users instead of a central server, reducing costs but raising security/privacy issues.</li>
    </ul>
    <h3>Use Case Example</h3>
    <ul>
      <li><strong>Real-time data feeds:</strong> Streaming can provide instant updates for things like stock prices or weather, allowing websites to show the latest information without users refreshing the page.</li>
    </ul>
    <h2>Additional Use Cases for Streaming</h2>
    <ul>
      <li><strong>Video streaming:</strong> Lets users watch videos without downloading the whole file. Videos are sent in small chunks, enabling immediate playback while the rest streams in real-time.</li>
      <li><strong>Live events:</strong> Used for broadcasting live events (concerts, sports, rallies). Platforms like Twitch, YouTube Live, and Facebook Live allow interactive live content and chats.</li>
      <li><strong>Gaming:</strong> Streaming is used in cloud gaming, letting users play games over the internet without downloading game files, making gaming more convenient and efficient.</li>
    </ul>

    <h2>2.2 Streaming Protocols</h2>
    <p>Media streaming uses various protocols to transmit audio/video data over the internet. Common protocols include:</p>
    <ul>
      <li><strong>HTTP Live Streaming (HLS):</strong> Developed by Apple, breaks video into segments for adaptive streaming over HTTP.</li>
      <li><strong>Dynamic Adaptive Streaming over HTTP (DASH):</strong> Similar to HLS, but open standard and widely supported.</li>
      <li><strong>Real-Time Messaging Protocol (RTMP):</strong> Adobe’s protocol for live streaming, uses a dedicated connection for high-quality streams.</li>
      <li><strong>Real-Time Streaming Protocol (RTSP):</strong> Used for entertainment/communications systems, allows controlled, on-demand delivery of real-time data.</li>
      <li><strong>WebRTC:</strong> Open-source, enables real-time communication between browsers/mobile apps, supports live and peer-to-peer streaming.</li>
    </ul>
    <p>Each protocol has its own strengths and is suited for different use cases (live/on-demand, low latency, high quality, etc.).</p>

    <h2>2.3 Quality of Service (QoS) and Quality of Experience (QoE)</h2>
    <ul>
      <li><strong>Quality of Service (QoS):</strong> Technical aspects of streaming, like bit rate, resolution, frame rate, and audio quality. Refers to measurable characteristics of the stream.</li>
      <li><strong>Quality of Experience (QoE):</strong> The viewer’s or listener’s subjective perception, including overall quality, ease of use, and buffering issues.</li>
    </ul>
    <p>To ensure a good user experience, both QoS and QoE must be maintained. Some techniques include:</p>
    <ul>
      <li><strong>Adaptive bit rate streaming:</strong> Adjusts stream quality in real-time based on internet speed and device.</li>
      <li><strong>Content Delivery Networks (CDNs):</strong> Distribute streams through multiple servers to minimize travel distance and improve quality.</li>
      <li><strong>Mean Opinion Score (MOS):</strong> Used to evaluate QoE through subjective testing.</li>
    </ul>

    <h3>2.3.1 Semantic Transparency and Time Transparency</h3>
    <ul>
      <li><strong>Time transparency:</strong> Playback timing must match the source. Audio and video must be synchronized (e.g., lips moving must match speech).</li>
      <li><strong>Semantic transparency:</strong> The information received must match what was sent, without errors.</li>
      <li>In IP networks, delays can cause timing issues; buffering is used to compensate and ensure time transparency.</li>
    </ul>

    <h3>2.3.2 The Playout Buffer</h3>
    <ul>
      <li>Packets are sent at regular intervals from the source, but network delays cause them to arrive at the receiver with variable timing.</li>
      <li><strong>Playout buffer:</strong> Temporary storage on the client device that collects incoming packets and feeds them to the media player at regular intervals, smoothing out network variability.</li>
      <li>When the first packet arrives, the buffer stores all packets for a short period (buffering phase). After this, playback starts at a steady rate.</li>
      <li>If a packet arrives late (after its scheduled playout time), it will either:
        <ol>
          <li>Cause a buffer underflow (buffer is empty, playback is interrupted and must re-buffer)</li>
          <li>Be discarded (too late to play)</li>
        </ol>
      </li>
      <li><strong>Buffer depth (D):</strong> Increasing buffer depth reduces underflows but increases playback delay. Too small a buffer causes stuttering; too large a buffer causes lag.</li>
      <li>There is a tradeoff between delay and loss, and the optimal buffer size depends on the application (e.g., telephony vs. movies).</li>
      <li>Modern media players use adaptive algorithms to adjust buffer size in real-time based on network conditions, minimizing buffering and providing a stable stream.</li>
    </ul>

    <h2>2.4 Adaptive Bit Rate Streaming</h2>
    <ul>
      <li>Adaptive bit rate streaming adjusts the quality of audio/video in real-time based on the viewer’s internet connection and device.</li>
      <li>The stream is broken into small segments, each encoded at multiple bit rates and resolutions. The player selects the best segment for current conditions.</li>
      <li>This ensures smooth playback even with changing network conditions, as quality can be adjusted on the fly.</li>
      <li>Supported by most major protocols (e.g., HLS, DASH).</li>
      <li><strong>Benefits:</strong>
        <ul>
          <li>Minimizes buffering and provides a stable stream.</li>
          <li>Optimizes bandwidth use across the network.</li>
          <li>Reduces data usage for users with limited data plans.</li>
        </ul>
      </li>
    </ul>

    <h2>2.5 Content Delivery Networks (CDNs)</h2>
    <ul>
      <li>A CDN is a network of servers placed in various locations to deliver content quickly and efficiently.</li>
      <li>CDNs cache content close to users, reducing latency and improving streaming speed and reliability.</li>
      <li>They distribute server load, which is crucial for large-scale events or services with many users.</li>
      <li>CDNs can provide added security and encryption for sensitive streams.</li>
      <li><strong>Examples of CDNs:</strong> Akamai, AWS, Cloudflare, Fastly, Limelight, StackPath, Level 3.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MediaStreaming'
}
</script>

<style scoped>
.media-streaming {
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
