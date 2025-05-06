<template>
  <section class="video-codecs">
    <h1>Video Codecs</h1>
    <h2>5.1 Introduction</h2>
    <p>Video codecs are software or hardware used to encode and decode video data for storage, transmission, and playback. They are essential for modern video technology, enabling efficient compression and transmission across networks and devices.</p>
    <p>There are two main types of video codecs:
      <ul>
        <li><b>Lossy codecs:</b> Compress video by discarding less visible or audible information, resulting in smaller file sizes but some quality loss.</li>
        <li><b>Lossless codecs:</b> Compress video without discarding any information, preserving higher quality but producing larger files.</li>
      </ul>
    </p>
    <p>Video codecs are used for streaming, storage, and playback on various devices. The field is evolving to meet growing consumer and business demands.</p>

    <h2>5.2 Resolution</h2>
    <p>Video resolution refers to the dimensions of a video (in pixels), determining the level of detail and clarity. Higher resolutions provide clearer images.</p>
    <ul>
      <li><b>480p (SD):</b> 640x480 pixels, standard definition, often used for DVD quality.</li>
      <li><b>720p (HD):</b> 1280x720 pixels, high definition, common for streaming and HDTVs.</li>
      <li><b>1080p (FHD):</b> 1920x1080 pixels, full HD, widely used for high-quality playback.</li>
      <li><b>4K (UHD):</b> 3840x2160 pixels, ultra high definition, popular for modern TVs and streaming.</li>
      <li><b>8K (SHD):</b> 7680x4320 pixels, super high definition, used for extremely high-quality playback, still new and rare.</li>
    </ul>
    <p>Other resolutions exist, and the choice depends on application needs and device/network capabilities.</p>
    <h3>Factors influencing resolution choice:</h3>
    <ul>
      <li><b>Display size:</b> Larger displays need higher resolutions for detail; smaller displays may not.</li>
      <li><b>Viewer distance:</b> Closer viewers need higher resolution for the same detail level.</li>
      <li><b>Network bandwidth:</b> Higher resolutions require more bandwidth; lower resolution may be needed if bandwidth is limited.</li>
      <li><b>Storage space:</b> Higher resolutions need more storage; lower resolution may be chosen if space is limited.</li>
    </ul>
    <h2>5.3 Color Spaces</h2>
    <p>A color space defines a range of colors that can be displayed or encoded in digital video. Different color spaces have unique characteristics and affect the quality and efficiency of video encoding/decoding. Choosing the right color space is important for the intended use and visual quality.</p>
    <ul>
      <li><b>YCbCr:</b> Luminance-chrominance model. Y = brightness, Cb/Cr = color. Common config 4:2:2 (8 bits for Y, 4 bits for Cb, 4 bits for Cr; 16 bits/pixel).</li>
      <li><b>RGB:</b> Red, Green, Blue are primary colors. Each pixel: 3 × 8 bits = 24 bits/pixel.</li>
      <li><b>YUV:</b> Similar to YCbCr, with Y = luminance, U/V = chrominance. Common config 4:2:2 (16 bits/pixel).</li>
      <li><b>HSL:</b> Hue, Saturation, Lightness. Each pixel: 3 × 8 bits = 24 bits/pixel.</li>
      <li><b>HSV:</b> Hue, Saturation, Value. Each pixel: 3 × 8 bits = 24 bits/pixel.</li>
    </ul>
    <p>Color space transformation can be represented as a matrix operation (e.g., RGB ↔ YUV).</p>
    <h3>5.3.1 Subsampling the YCbCr Color Space</h3>
    <p>Subsampling reduces the data rate by representing chrominance (color) information at lower resolution than luminance (brightness), leveraging the human eye's greater sensitivity to brightness.</p>
    <ul>
      <li><b>4:4:4:</b> No subsampling; highest quality, largest data rate.</li>
      <li><b>4:2:2:</b> Cb/Cr subsampled by 2 horizontally; lower data rate, good quality.</li>
      <li><b>4:2:0:</b> Cb/Cr subsampled by 2 both horizontally and vertically; lower data rate, some quality loss.</li>
      <li><b>4:1:1:</b> Cb/Cr subsampled by 4 horizontally; lowest data rate, significant quality loss.</li>
    </ul>
    <p>Subsampling is used to reduce bit rate and storage/bandwidth needs while maintaining acceptable visual quality.</p>
    <h3>Bit Rate Calculation for Uncompressed Video</h3>
    <p>The bit rate of uncompressed video is calculated as:</p>
    <pre><code>bit rate = resolution × frame rate × color depth</code></pre>
    <p>Example (1080p, 30fps, 24 bits/pixel):</p>
    <pre><code>bit rate = 1920 × 1080 × 30 × 24 = 2,073,600,000 bits/sec ≈ 2 Gbit/s</code></pre>

    <h2>5.4 Video Codecs</h2>
    <p>Video codecs are used to compress and transmit video efficiently. Early codecs used analog signals (e.g., VHS, Betamax), while digital codecs emerged in the 1980s and 1990s, enabling higher quality and more efficient transmission (e.g., H.261 for videoconferencing).</p>
    <p>With the rise of the internet and streaming, advanced codecs such as H.263, H.264, and VP6 were developed for better performance over low bandwidth. Modern codecs (H.265, H.266, VP9) support high-definition and 4K video with improved compression.</p>
    <ul>
      <li><b>H.263:</b> Better compression than earlier codecs; supported by ffmpeg.</li>
      <li><b>H.264 (AVC):</b> High compression, flexible, supports prediction frames and adaptive network conditions; widely supported.</li>
      <li><b>H.265 (HEVC):</b> Higher compression, supports higher resolutions, motion compensation, and better error resilience.</li>
      <li><b>H.266 (VVC):</b> 50% better compression than H.265, more complex, not yet fully supported by all tools.</li>
    </ul>

    <h3>5.4.1 Features of Video Codecs</h3>
    <ul>
      <li><b>Lossy/lossless:</b> Lossy codecs use quantization and compression (with some quality loss); lossless codecs do not lose quality.</li>
      <li><b>Hardware/software-based:</b> Hardware codecs are faster but less flexible; software codecs are more flexible but may be slower.</li>
      <li><b>Supported resolutions:</b> From SD to HD, 4K, and beyond.</li>
      <li><b>Supported color spaces:</b> RGB, YUV, and others.</li>
      <li><b>Type of compression:</b> Some codecs use spatial, temporal, or other compression techniques.</li>
      <li><b>Compatibility:</b> Important to check software/hardware compatibility.</li>
      <li><b>Licensing:</b> Some codecs are open source, others require licensing.</li>
      <li><b>Coding process:</b>
        <ul>
          <li>Preprocessing (color space conversion, resizing)</li>
          <li>Transformation (e.g., Discrete Cosine Transform)</li>
          <li>Quantization (reducing precision, rounding)</li>
          <li>Entropy coding (e.g., Huffman or arithmetic coding)</li>
          <li>Decoding (reverse process)</li>
        </ul>
      </li>
      <li><b>Block size:</b> Size of pixel blocks affects efficiency and quality (smaller blocks = more precise, larger blocks = more efficient).</li>
      <li><b>Artifacts:</b>
        <ul>
          <li>Block artifacts: visible squares due to block-based coding</li>
          <li>Blurring: loss of detail from low-pass filters</li>
          <li>Aliasing: jagged edges from low resolution</li>
          <li>Banding: visible gradients due to limited colors</li>
          <li>Mosquito noise: fine grain/noise from low bit rates</li>
        </ul>
      </li>
    </ul>
    <p>Artifacts depend on codec type and parameters. Some codecs minimize artifacts better than others.</p>

    <h3>5.4.2 Compression in the MPEG Video Codec</h3>
    <p>The MPEG (Moving Picture Experts Group) codec family is widely used for digital video compression and includes MPEG-1, MPEG-2, and MPEG-4.</p>
    <ul>
      <li><b>MPEG-1:</b> Early 1990s; 352x240 @ 30fps; used for Video CD and low-bandwidth video.</li>
      <li><b>MPEG-2:</b> Mid-1990s; supports up to 1080i; used for DVD, TV, and satellite video.</li>
      <li><b>MPEG-4:</b> Late 1990s; supports a wide range of resolutions and frame rates; used for streaming and diverse applications.</li>
    </ul>
    <p>MPEG codecs use the <b>GOP (Group of Pictures)</b> technique to compress video by eliminating redundancy between frames. GOP divides video into groups of frames (I, P, B):</p>
    <ul>
      <li><b>I-frames</b> (intra-coded): Self-contained, used to reset prediction; largest size.</li>
      <li><b>P-frames</b> (predicted): Encodes differences from previous I/P frame; smaller than I-frames.</li>
      <li><b>B-frames</b> (bi-predictive): Encodes differences from previous and next I/P frames; smallest size.</li>
    </ul>
    <p>Common GOP structures:</p>
    <ul>
      <li><b>IBBPBBPBB:</b> I-frame, then B/P-frames; common for many apps.</li>
      <li><b>IPBBPBBPBBI:</b> I-frame, B/P-frames, ends with I-frame; used for highest quality.</li>
      <li><b>IBBPBBPBBPBBI:</b> I-frame, B/P-frames, ends with I-frame and B-frame; improves quality.</li>
      <li><b>IBPBPBPB:</b> I-frame, P-frames; simple, used in low-bandwidth apps.</li>
      <li><b>IBBPBBPBBBI:</b> I-frame, B/P-frames, ends with I-frame; improves quality.</li>
    </ul>
    <p>GOP structure choice balances quality and file size.</p>

    <h3>5.4.3 Popular Video Codecs</h3>
    <ul>
      <li><b>H.264 (AVC):</b> Widely used, high efficiency, block-based, proprietary, supports SD to 8K, RGB/YUV.</li>
      <li><b>HEVC (H.265):</b> Improved efficiency, block-based, proprietary, SD to 8K, RGB/YUV.</li>
      <li><b>VP9:</b> Open source, high efficiency, block-based, SD to 8K, RGB/YUV, no licensing fees.</li>
      <li><b>AV1:</b> Open source, improved efficiency, block-based, SD to 8K, RGB/YUV, not as widely supported yet.</li>
      <li><b>MPEG-1/2/4:</b> MPEG-1 (low res), MPEG-2 (SD to 1080i), MPEG-4 (SD to 8K); block-based, proprietary, RGB/YUV.</li>
    </ul>
    <p><b>Comparison Table:</b></p>
    <table border="1" style="border-collapse:collapse;">
      <tr><th>Codec</th><th>Lossy/Lossless</th><th>Hardware/Software</th><th>Resolutions</th><th>Color Spaces</th><th>Licensing</th><th>Type</th><th>Bit Rate</th></tr>
      <tr><td>H.264</td><td>Lossy</td><td>Hardware/Software</td><td>SD-8K</td><td>RGB, YUV</td><td>Proprietary</td><td>Block-Based</td><td>High</td></tr>
      <tr><td>HEVC</td><td>Lossy</td><td>Hardware/Software</td><td>SD-8K</td><td>RGB, YUV</td><td>Proprietary</td><td>Block-Based</td><td>High</td></tr>
      <tr><td>VP9</td><td>Lossy</td><td>Software</td><td>SD-8K</td><td>RGB, YUV</td><td>Open Source</td><td>Block-Based</td><td>High</td></tr>
      <tr><td>AV1</td><td>Lossy</td><td>Software</td><td>SD-8K</td><td>RGB, YUV</td><td>Open Source</td><td>Block-Based</td><td>High</td></tr>
      <tr><td>MPEG-1</td><td>Lossy</td><td>Hardware/Software</td><td>352x240</td><td>RGB, YUV</td><td>Proprietary</td><td>Block-Based</td><td>Low</td></tr>
      <tr><td>MPEG-2</td><td>Lossy</td><td>Hardware/Software</td><td>SD-1080i</td><td>RGB, YUV</td><td>Proprietary</td><td>Block-Based</td><td>Medium</td></tr>
      <tr><td>MPEG-4</td><td>Lossy</td><td>Hardware/Software</td><td>SD-8K</td><td>RGB, YUV</td><td>Proprietary</td><td>Block-Based</td><td>High</td></tr>
    </table>

    <h2>5.5 Packetization of Video Media</h2>
    <p>Packetization divides video data into small packets for network transmission or storage. The most common method is the Transport Stream (TS) format (MPEG-2 standard), which can multiplex multiple video, audio, and data streams in a single file or stream.</p>
    <ul>
      <li>TS format breaks streams into packets for independent transmission and storage.</li>
      <li>Allows easy multiplexing of multiple streams (e.g., audio and video together).</li>
      <li>TS packets typically sent over reliable protocols (TCP/SCTP), but can also use UDP.</li>
      <li>Each TS packet includes a header with packet ID, counters, and payload info.</li>
      <li>PES (Packetized Elementary Stream) packets encapsulate video data for reassembly.</li>
      <li>Other containers (MP4, AVI) can also packetize video and may be better for some use cases (compression, error resilience, etc.).</li>
      <li>TS packets include synchronization info, useful with RTP (Real Time Protocol).</li>
    </ul>
    <p>Summary: TS format is flexible for multiplexing and streaming; other containers may be better for specific needs.</p>

    <h2>5.6 Video Codecs in Popular Applications</h2>
    <p><b>YouTube</b> supports these codecs:</p>
    <ul>
      <li><b>H.264:</b> Used for most videos; high efficiency and wide support.</li>
      <li><b>HEVC:</b> Used for some 4K/8K videos; higher efficiency than H.264.</li>
      <li><b>VP9:</b> Used for some 4K/8K videos; open source, high efficiency.</li>
      <li><b>AV1:</b> Used for some 4K/8K videos; open source, very efficient, not yet as widely supported.</li>
    </ul>
    <p>To list available codecs for a YouTube video, extract the tag from the URL (e.g., <code>v=low6Coqrw9Y</code>) and use a script like:</p>
    <pre><code>from pytube import YouTube
import sys
if len(sys.argv) != 2:
    print("usage: python3 get_youtube_stream_formats.py tag")
    sys.exit(1)
tag = sys.argv[1]
url = "https://www.youtube.com/watch?" + tag
yt = YouTube(url)
streams = yt.streams.filter(only_video=True)
for stream in streams:
    print(stream)
</code></pre>
    <p>Popular conferencing apps and their supported codecs:</p>
    <table border="1" style="border-collapse:collapse;">
      <tr><th>Application</th><th>Supported Video Codecs</th></tr>
      <tr><td>Teams</td><td>H.264, VP8, VP9</td></tr>
      <tr><td>Zoom</td><td>H.264, H.265</td></tr>
      <tr><td>Webex</td><td>H.261, H.263, H.264</td></tr>
    </table>

    <h2>5.7 Transcoding</h2>
    <p>Transcoding is the process of converting a video from one format (codec) to another to adapt it for specific needs. It is commonly used to change the bit rate, resolution, or codec of a video to make it more suitable for a particular application or device.</p>
    <ul>
      <li>Reduces bit rate for easier network transmission (especially for high-res, high-bitrate videos).</li>
      <li>Adapts video to lower resolutions for devices with smaller displays or limited bandwidth.</li>
      <li>Ensures smooth playback over slow/congested networks by lowering bit rate or resolution.</li>
      <li>Can be done with software or hardware tools; choice depends on application needs and available resources.</li>
    </ul>

    <h2>5.8 Trends in the Industry of Video Codecs </h2>
    <ul>
      <li><b>Open Source Codecs:</b> Growing adoption of open source codecs (e.g., VP9, AV1) for cost savings and flexibility; no licensing fees.</li>
      <li><b>Machine Learning:</b> Increasing use of ML to improve codec efficiency by learning from large video datasets, enabling better prediction and lower bit rates.</li>
      <li><b>Support for High Resolutions:</b> Codecs must handle a wide range of resolutions/frame rates for new display technologies, including VR and AR.</li>
      <li><b>Streaming Demand:</b> Rising demand for high-quality, low-bitrate streaming drives continuous codec innovation.</li>
    </ul>
    <p>Codec development is shaped by the need to support diverse devices, high resolutions, and efficient streaming for entertainment, education, and communication.</p>


  </section>



  

</template>


<script>
export default {
  name: 'Video'
}
</script>

<style scoped>
.video-codecs {
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
p, ul {
  color: #222;
  line-height: 1.7;
  margin-bottom: 1rem;
}
</style>
