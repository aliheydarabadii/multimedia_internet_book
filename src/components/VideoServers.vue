<template>
  <section class="video-servers">
    <h1>Video Servers in IPTV</h1>
    <p>Video servers are essential in IPTV for storing, encoding, transcoding, and delivering video streams to viewers. They ensure scalability, reliability, and efficient management of media content in the IPTV ecosystem.</p>

    <h2>Types of Video Servers</h2>
    <ul>
      <li><b>Dedicated Video Servers:</b> Physical servers owned and managed by the IPTV provider, typically located on-premises. They offer full control and customization but require more maintenance and investment.</li>
      <li><b>Cloud-Based Video Servers:</b> Operated by third-party providers in remote data centers, accessed via the internet. They offer scalability and flexibility, allowing providers to add or remove servers as needed, and are often more cost-effective.</li>
      <li><b>Hybrid Approach:</b> Some providers use a mix of dedicated and cloud servers to balance control, scalability, and cost-effectiveness.</li>
    </ul>

    <h2>Hardware and Software Components</h2>
    <ul>
      <li><b>Processors:</b> Handle video encoding, transcoding, and streaming tasks.</li>
      <li><b>Memory (RAM):</b> Temporarily stores data during processing.</li>
      <li><b>Storage:</b> Holds media content for streaming; can include internal/external drives, storage arrays, or cloud storage. RAID is often used for data integrity.</li>
      <li><b>Operating System:</b> Manages hardware resources and supports video server software.</li>
      <li><b>Encoding/Transcoding Software:</b> Converts media into formats suitable for streaming (e.g., FFmpeg, VLC, GStreamer, proprietary solutions).</li>
      <li><b>Streaming Software:</b> Delivers video streams to viewers (e.g., Wowza, Adobe Media Server).</li>
    </ul>

    <h2>Transcoding with FFmpeg</h2>
    <p>FFmpeg is a popular open-source command-line tool for encoding, decoding, and transcoding video and audio. It allows conversion between formats and supports batch processing. Example command:</p>
    <pre><code>ffmpeg -i input.mp4 -c:v libx264 -c:a aac -crf 23 -preset slow -f mp4 output.mp4</code></pre>
    <ul>
      <li><b>-i</b>: Input file</li>
      <li><b>-c:v</b> and <b>-c:a</b>: Video and audio codecs</li>
      <li><b>-crf</b>: Quality (lower = better quality, higher = smaller size)</li>
      <li><b>-preset</b>: Encoding speed/quality balance (ultrafast, fast, medium, slow, etc.)</li>
      <li><b>-f</b>: Output format</li>
    </ul>
    <p>FFmpeg's flexibility and efficiency make it widely used for transcoding in IPTV video servers.</p>

    <h2>Other Applications of FFmpeg in Media Engineering</h2>
    <p>FFmpeg is not just a transcoder; it is a powerful tool for media manipulation. For example, you can use FFmpeg in a bash script to combine an audio file (such as music) and an image into a video file, automating the process from the command line. Such scripts can perform error checking, clean-up, and batch processing for complex media workflows.</p>
    <pre><code>./create_video.sh -i music.mp3 -i picture.jpg -t 70 -o full_content.webm</code></pre>
    <p>This command creates a video where the picture is displayed while the music plays, for a specified duration. The script handles input validation, conversion, and joining of media files, showcasing FFmpeg's versatility in media engineering tasks.</p>

    <h2>Media Storage in Video Server Systems</h2>
    <p>Media storage is a key part of video server systems, responsible for managing large volumes of video and audio data. Common storage technologies include storage arrays, RAID, and cloud storage:</p>
    <ul>
      <li><b>Storage Arrays:</b> Large-scale systems using multiple hard drives or SSDs, designed for high performance and capacity. They can be configured with various RAID levels for data protection.</li>
      <li><b>RAID (Redundant Array of Independent Disks):</b> Technology that combines multiple disks for redundancy and performance. Common RAID levels in video servers include:<ul>
        <li><b>RAID 0 (Striping):</b> Splits data for speed and capacity, but no data protection.</li>
        <li><b>RAID 1 (Mirroring):</b> Copies data for protection; if one disk fails, data remains accessible.</li>
        <li><b>RAID 5:</b> Uses striping and parity for a balance of capacity, performance, and protection. Can survive one disk failure.</li>
        <li><b>RAID 6:</b> Like RAID 5 but with extra parity, allowing two disks to fail.</li>
      </ul></li>
      <li><b>Cloud Storage:</b> Services like Amazon S3 and Google Cloud offer scalable, cost-effective storage accessible over the internet, reducing the need for on-premises hardware.</li>
    </ul>
    <p>Media Asset Management (MAM) systems are also used to organize, search, and manage stored media efficiently.</p>

    <h2>Video Encoding and Transcoding</h2>
    <p>Encoding and transcoding are essential for converting media into formats suitable for streaming:</p>
    <ul>
      <li><b>Video Encoding:</b> Converts raw video/audio into compressed formats (e.g., H.264, H.265), reducing file size for streaming. These are often "lossy" codecs, discarding some data to achieve smaller files.</li>
      <li><b>Transcoding:</b> Converts media from one format to another for compatibility with different devices and platforms. Allows for adaptive streaming at various quality levels (ABR).</li>
      <li><b>Compression Techniques:</b> Spatial and temporal compression further reduce file size by removing redundant image data within or between frames.</li>
    </ul>
    <p>These processes ensure efficient delivery and playback of video streams across diverse networks and devices.</p>

    <h2>Video Server Scalability and Reliability</h2>
    <p>Scalability and reliability are critical for video server systems:</p>
    <ul>
      <li><b>Scalability:</b> The ability to handle more viewers and video streams as demand grows. Achieved through distributed architectures, adding new servers, and using Content Delivery Networks (CDNs) to distribute streams across multiple locations and reduce server load.</li>
      <li><b>Reliability:</b> Ensures uninterrupted delivery of streams. Achieved by using redundant components (power supplies, network connections), RAID storage for data protection, and load balancers to distribute traffic across multiple servers.</li>
      <li><b>Backups & Disaster Recovery:</b> Regular data backups and a recovery plan are essential for restoring service in case of hardware failure or disaster.</li>
    </ul>
    <p>Together, these strategies ensure that video servers deliver high-quality streams without interruption, even as demand increases or if failures occur.</p>

    <h2>Summary</h2>
    <p>Video servers are the backbone of IPTV delivery, combining robust hardware and advanced software to store, process, and stream media content efficiently to users.</p>
  </section>
</template>

<script>
export default {
  name: 'VideoServers',
};
</script>

<style scoped>
.video-servers {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #222;
}
h1, h2 {
  color: #1a2533;
}
pre {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}
</style>
