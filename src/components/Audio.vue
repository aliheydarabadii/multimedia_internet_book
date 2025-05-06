<template>
  <section class="audio-codecs">
    <h1>Audio Codecs: An Introduction</h1>
    <p>
      Audio codecs are algorithms that are used to encode and decode audio data for storage and transmission. They allow audio content, such as music, podcasts, and sound effects, to be compressed in a way that reduces the file size while still maintaining an acceptable level of quality. There are many different audio codecs available, each with its own set of features and trade-offs. In this chapter, we will explore the various factors to consider when comparing audio codecs, including lossiness, coding type, bit rate, compatibility, licensing, the audibility of artifacts, and the suitability for transmission or storage.
    </p>
    <p>
      By understanding these factors, we can make informed decisions about which codec is best suited for a given application.
    </p>

    <h2>4.1 Lossy vs Lossless Codecs</h2>
    <h3>Lossy audio codecs:</h3>
    <p>
      Lossy audio codecs are algorithms that are used to encode and decode audio data in a way that reduces the file size by discarding some of the data. This is done by identifying and removing redundant or unnecessary data from the audio signal. The result is a smaller file size, but the audio quality is not exactly the same as the original. Lossy codecs are generally more efficient and have smaller file sizes, but may introduce audible artifacts. Some examples: MP3, AAC, Vorbis.
    </p>
    <h3>Lossless audio codecs:</h3>
    <p>
      Lossless audio codecs are algorithms that encode and decode audio data in a way that preserves all of the original data, using a reversible process. The original audio can be exactly reproduced from the encoded data, so there is no quality loss. However, lossless codecs tend to have higher bit rates and larger file sizes than lossy codecs. Some examples: FLAC, ALAC, WAV.
    </p>

    <h2>4.2 Coding Types</h2>
    <p>Audio codecs can be divided into four categories as far as coding is concerned: low-delay, parametric, scalable, and transform coding.</p>
    <h3>Low-delay coding:</h3>
    <p>
      Minimizes the latency (delay) between input and output audio. Important for real-time applications like phone calls or videoconferencing. Examples: Opus, Speex, MPEG-1 Audio Layer II (MP2).
    </p>
    <h3>Parametric coding:</h3>
    <p>
      Uses a model of the audio signal to represent the data (amplitude, frequency, phase, etc.). More efficient, but less accurate approximation. Examples: ATRAC, CELT.
    </p>
    <h3>Scalable coding:</h3>
    <p>
      Allows the bit rate to be adjusted depending on desired quality or bandwidth. Uses multiple layers of encoding, each providing a different level of quality. Examples: SBC, LDAC.
    </p>
    <h3>Transform coding:</h3>
    <p>
      Divides the audio signal into segments and applies a mathematical transform to each segment. Efficient for storage/playback (e.g., MP3, AAC), but can introduce artifacts.
    </p>

    <h2>4.3 Bit Rate and Sampling Rate</h2>
    <p>
      The bit rate is the amount of data used to encode the audio (in kbps). Higher bit rates usually mean higher quality but larger files. The sampling rate is the number of times per second the audio is sampled (in kHz). Higher sampling rates capture more detail but also increase file size. The relationship between bit rate, sampling rate, and audio quality is complex, and depends on the codec. In general, higher bit rates and sampling rates yield better quality but less efficiency.
    </p>
    <p>
      When choosing an audio codec, consider the trade-offs between quality and efficiency. For critical applications (e.g., professional production), higher bit rate and sampling rate may be best. For streaming or real-time use, lower bit rates and sampling rates may be more appropriate.
    </p>

    <h2>4.4 Audibility of Artifacts</h2>
    <p>
      One of the main trade-offs of lossy codecs is the potential for artifacts—distortions or errors introduced during encoding. Some codecs introduce barely perceptible artifacts, while others may degrade quality significantly. The audibility of artifacts depends on the codec, bit rate, type of audio, listening environment, and listener sensitivity. For example, classical music or quiet environments may reveal artifacts more than pop music or noisy environments.
    </p>
    <p>
      Overall, consider the audibility of artifacts when choosing a codec. The best choice balances quality, efficiency, and the needs of the application.
    </p>

    <h2>4.5 Storage versus Transmission</h2>
    <ul>
      <li><b>For storage:</b>
        <ul>
          <li><b>Lossless codecs:</b> Preferred for long-term archival and professional audio production. No data loss; audio can be reproduced exactly as recorded. Examples: FLAC, ALAC, WAV.</li>
          <li><b>High quality:</b> Use high-quality codecs for storage to keep audio as close to the original as possible. Important for professional uses.</li>
        </ul>
      </li>
      <li><b>For transmission:</b>
        <ul>
          <li><b>Lossy codecs:</b> Efficiency and speed are prioritized over absolute quality. Lossy codecs reduce file size and are suitable for streaming and real-time communication. Examples: MP3, AAC, Opus.</li>
          <li><b>Low latency:</b> Important for real-time applications (calls, videoconferencing). Low-delay codecs minimize delay and reduce artifacts like echo.</li>
          <li><b>Compatibility:</b> Codec must be supported by intended devices/software to avoid playback issues.</li>
        </ul>
      </li>
    </ul>

    <h2>4.6 Compatibility and Licensing</h2>
    <ul>
      <li>Check if the codec is supported by all intended devices/software. Not all codecs are universally compatible.</li>
      <li>Some codecs are proprietary and only licensed for certain platforms (e.g., Apple Lossless/ALAC for Apple devices).</li>
      <li>Open source codecs (e.g., Vorbis) are more flexible but may not be supported everywhere.</li>
      <li><b>Examples:</b>
        <ul>
          <li><b>MP3:</b> Widely supported by most devices and software.</li>
          <li><b>Apple Lossless (ALAC):</b> Proprietary, supported by Apple devices/software only.</li>
          <li><b>Vorbis:</b> Open source, supported by many but not all proprietary platforms.</li>
        </ul>
      </li>
      <li>Consider using multiple codecs to ensure compatibility across all devices/software.</li>
    </ul>

    <h2>4.7 Packetization of Audio Media</h2>
    <ul>
      <li>Packetization divides audio data into small packets for network transmission or storage.</li>
      <li><b>RTP (Real-time Transport Protocol):</b> Common protocol for streaming audio. Wraps audio in RTP packets with headers (sequence number, timestamp, payload type).</li>
      <li>RTP packets are sent over unreliable protocols like UDP for efficient delivery.</li>
      <li><b>RTCP (Real-time Transport Control Protocol):</b> Used with RTP to monitor quality and provide statistics.</li>
      <li>Packetization details depend on the codec (e.g., Opus, AAC, MP3 can use RTP).</li>
      <li>Some codecs (like Opus) are designed to work well under varying network conditions, bit rates, and packet loss.</li>
      <li>Choose the codec and packetization method based on network conditions and use case.</li>
    </ul>

    <h2>4.8 Audio codecs in conferencing applications</h2>
    <ul>
      <li><b>Zoom:</b> Uses Opus codec for audio conferencing (open source, low latency, high quality).</li>
      <li><b>Webex:</b> Uses G.711, G.722, and Siren (Cisco proprietary, high quality).</li>
      <li><b>Teams:</b> Uses Skype for Business Audio Codec (SILK, proprietary, high quality).</li>
      <li>Codec support in conferencing apps may change over time and often includes multiple codecs to suit different needs.</li>
    </ul>

    <h3>4.8.1 Audio codecs supported by YouTube</h3>
    <ul>
      <li>MP3 (MPEG audio stream)</li>
      <li>M4A (MPEG-4 audio layer)</li>
      <li>WebM (audio streams in the WebM container format)</li>
      <li>Opus (audio streams in the Ogg container format)</li>
    </ul>

    <h3>4.8.2 Licensing</h3>
    <ul>
      <li>Licensing varies: some codecs are open source (free to use, modify, distribute), others are proprietary (require a license fee, restricted to certain platforms).</li>
      <li>Open source examples: Opus, Vorbis, FLAC.</li>
      <li>Proprietary examples: Apple Lossless (ALAC), Skype for Business Audio Codec (SILK).</li>
      <li>Consider licensing implications and costs, especially for commercial use.</li>
    </ul>

    <h2>4.9 A comparison of selected popular audio codecs</h2>
    <table style="width:100%; border-collapse: collapse; margin-bottom: 1.5rem;">
      <thead>
        <tr style="background:#f4f4f4;">
          <th>Codec</th>
          <th>Lossy/Lossless</th>
          <th>Coding Type</th>
          <th>Bit Rate</th>
          <th>Sampling Rate</th>
          <th>Artifacts</th>
          <th>Storage/Transmission</th>
          <th>Compatibility</th>
          <th>Licensing</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>MP3</td><td>Lossy</td><td>Hybrid</td><td>Variable</td><td>16-48 kHz</td><td>Low-High</td><td>Small</td><td>Wide</td><td>Proprietary</td></tr>
        <tr><td>AAC</td><td>Lossy</td><td>Hybrid</td><td>Variable</td><td>16-48 kHz</td><td>Low-High</td><td>Small</td><td>Wide</td><td>Proprietary</td></tr>
        <tr><td>Vorbis</td><td>Lossy</td><td>Hybrid</td><td>Variable</td><td>16-48 kHz</td><td>Low-High</td><td>Small</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>FLAC</td><td>Lossless</td><td>Hybrid</td><td>Variable</td><td>16-192 kHz</td><td>None</td><td>Small-Medium</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>ALAC</td><td>Lossless</td><td>Hybrid</td><td>Variable</td><td>16-48 kHz</td><td>None</td><td>Small-Medium</td><td>Apple devices</td><td>Proprietary</td></tr>
        <tr><td>WAV</td><td>Lossless</td><td>PCM</td><td>Variable</td><td>8-192 kHz</td><td>None</td><td>Large</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>Opus</td><td>Lossy</td><td>Hybrid</td><td>6-510 kbps</td><td>8-48 kHz</td><td>Low</td><td>Small</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>Speex</td><td>Lossy</td><td>PCM</td><td>2.15-44.2 kbps</td><td>8-32 kHz</td><td>Low</td><td>Small</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>MP2</td><td>Lossy</td><td>Hybrid</td><td>128-320 kbps</td><td>16-48 kHz</td><td>Low-High</td><td>Small</td><td>Wide</td><td>Proprietary</td></tr>
        <tr><td>ATRAC</td><td>Lossy</td><td>Hybrid</td><td>32-448 kbps</td><td>44.1 kHz</td><td>Low-High</td><td>Small</td><td>Sony devices</td><td>Proprietary</td></tr>
        <tr><td>CELT</td><td>Lossy</td><td>PCM</td><td>16-128 kbps</td><td>8-48 kHz</td><td>Low-High</td><td>Small</td><td>Wide</td><td>Open Source</td></tr>
        <tr><td>SBC</td><td>Lossy</td><td>PCM</td><td>Regenerate response</td><td>Low</td><td>Small</td><td>Wide</td><td>Open Source</td></tr>
      </tbody>
    </table>
    <ul>
      <li><b>MPEG-4 Codecs:</b>
        <ul>
          <li><b>Part 1 (AAC-LC):</b> Widely used for streaming, radio, CD-quality audio. High efficiency, good quality.</li>
          <li><b>Part 2 (MP2):</b> Used in digital radio/TV, less common now but still supported.</li>
          <li><b>Part 3 (MP3):</b> Widely used for music files, efficient compression/quality.</li>
          <li><b>Part 4 (AAC-LD):</b> Low-delay version for real-time apps.</li>
          <li><b>Part 7 (AAC-LTP):</b> Long-term prediction, specialized use.</li>
        </ul>
      </li>
    </ul>

    <h2>4.10 Practical Example of Streaming an Audio Content</h2>
    <p>This section provides a step-by-step guide for streaming an audio file from one Linux computer to another over a network using RTP and common tools.</p>
    <h3>Prerequisites</h3>
    <ul>
      <li>Two Linux computers on the same network:
        <ul>
          <li><b>Computer A (Sender):</b> 192.168.1.14 (streams the content)</li>
          <li><b>Computer B (Receiver):</b> 192.168.1.19 (receives the stream)</li>
        </ul>
      </li>
      <li>An audio file in WebM format (e.g., <code>ACDC_thunderstruck.webm</code>)</li>
      <li>Tools: <code>scp</code>, <code>ffmpeg</code>, <code>ffplay</code></li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>
        <b>On Computer A (Sender):</b> Generate an SDP file describing the audio stream:
        <pre><code>ffmpeg -i ACDC_thunderstruck.webm -vn -acodec libopus -f rtp -sdp_file audio.sdp rtp://192.168.1.19:10001</code></pre>
      </li>
      <li>
        <b>Transfer the SDP file to Computer B:</b>
        <pre><code>scp audio.sdp username@192.168.1.19:/home/username/streaming</code></pre>
      </li>
      <li>
        <b>On Computer B (Receiver):</b> Start receiving and playing the stream:
        <pre><code>ffplay -protocol_whitelist "file,rtp,udp" -i audio.sdp</code></pre>
      </li>
      <li>
        <b>On Computer A:</b> Start streaming the audio file:
        <pre><code>ffmpeg -i ACDC_thunderstruck.webm -vn -acodec libopus -f rtp rtp://192.168.1.19:10001</code></pre>
      </li>
    </ol>
    <p><b>Result:</b> Audio from Computer A is streamed and played in real time on Computer B.</p>
    <p><b>Note:</b> The SDP file describes the audio stream parameters for the receiver. Example SDP file:</p>
    <pre><code>v=0
o=- 0 0 IN IP4 127.0.0.1
s=No Name
c=IN IP4 192.168.1.19
t=0 0
a=tool:libavformat 58.76.100
m=audio 10001 RTP/AVP 97
b=AS:96
a=rtpmap:97 opus/48000/2
a=fmtp:97 sprop-stereo=1</code></pre>
  </section>
</template>

<script>
export default {
  name: 'Audio'
}
</script>

<style scoped>
.audio-codecs {
  max-width: 750px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #222;
}
h1, h2, h3 {
  color: #1a2533;
}
p {
  color: #222;
  line-height: 1.7;
  margin-bottom: 1rem;
}
</style>
