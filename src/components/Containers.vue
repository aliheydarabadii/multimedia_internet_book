<template>
  <section class="containers">
    <h1>Containers</h1>
    <p>Containers are file formats for storing audio, video, and other data, along with metadata such as timestamps and chapter information. They are used to package encoded media content for playback and are compatible with a wide range of players and devices.</p>
    <p>Unlike codecs (which encode/decode audio/video), containers organize and store the encoded data and metadata in a standardized way. Common contents inside a container include:</p>
    <ul>
      <li><b>Audio:</b> One or more audio streams, each encoded with a codec.</li>
      <li><b>Video:</b> One or more video streams, each encoded with a codec.</li>
      <li><b>Metadata:</b> Information about streams (codecs, bit rates), chapter markers, subtitles, etc.</li>
    </ul>

    <h2>6.1 The WebVTT Component</h2>
    <p>WebVTT (Web Video Text Tracks) is a file format for adding text tracks (captions, subtitles) to web videos. It is designed for use with the HTML5 <code>&lt;track&gt;</code> element and is maintained by the W3C. WebVTT files contain a header and cue blocks, each with a timestamp and text. They can also include metadata blocks for additional info (language, direction, styling).</p>
    <p>WebVTT can be embedded in containers like MP4, MKV, WebM and used by HTML5 and other video players to display timed text.</p>
    <pre><code>WEBVTT

1
00:00:10.000 --> 00:00:15.000
This is the first caption.

2
00:00:20.000 --> 00:00:25.000
This is the second caption.
</code></pre>

    <h2>6.2 Popular Containers</h2>
    <ul>
      <li><b>MP4:</b> Widely used for audio/video, supports H.264/AAC, licensed, compatible with most devices/players.</li>
      <li><b>MKV (Matroska):</b> Open source, supports many codecs and lots of metadata, broad compatibility.</li>
      <li><b>AVI:</b> Older, supported by many players, less efficient, supports DivX/Xvid.</li>
      <li><b>MOV:</b> Used mainly on Apple devices, supports H.264/AAC, wide compatibility.</li>
      <li><b>WebM:</b> Open, Google-developed, supports VP8/VP9 (video), Vorbis/Opus (audio), designed for streaming.</li>
      <li><b>CMAF:</b> For multimedia streaming, supports DASH/HLS, allows single set of files for both, open/low-latency.</li>
    </ul>
    <p><b>Comparison Table:</b></p>
    <table border="1" style="border-collapse:collapse;">
      <tr><th>Container</th><th>Supported Audio Codecs</th><th>Supported Video Codecs</th><th>Licensing</th></tr>
      <tr><td>MP4</td><td>AAC, MP3</td><td>H.264, H.265</td><td>Licensed</td></tr>
      <tr><td>MKV</td><td>Vorbis, Opus, MP3</td><td>H.264, H.265, VP9</td><td>Open</td></tr>
      <tr><td>AVI</td><td>MP3, AC3</td><td>DivX, Xvid</td><td>Open</td></tr>
      <tr><td>MOV</td><td>AAC, MP3</td><td>H.264, H.265</td><td>Open</td></tr>
      <tr><td>WebM</td><td>Vorbis, Opus</td><td>VP8, VP9</td><td>Open</td></tr>
    </table>

    <h2>6.3 The WebM Containers</h2>
    <p>In the WebM container format, a <b>block</b> is the basic unit of compressed video or audio data. Blocks are small (a few KB), containing information like frame type, quantization, and encoded data. The size of blocks depends on the codec and can be configured.</p>
    <p>A <b>cluster</b> is a collection of one or more blocks, grouped for efficient storage or transmission. Clusters can include multiple blocks of audio/video, along with timestamps and flags. Default cluster size is around 2MB, but it can be configured. Clustering reduces overhead, leading to smaller file sizes, faster read/write, and lower bandwidth usage.</p>
    <p><b>Summary:</b> Blocks are the smallest unit; clusters group blocks for efficiency. Using clusters instead of just blocks reduces overhead and improves performance.</p>

    <h3>6.3.1 The libwebm library</h3>
    <p>The <a href="https://www.webmproject.org/" target="_blank">libwebm</a> library provides tools for working with WebM files. To install it:</p>
    <pre><code>git clone https://github.com/webmproject/libwebm
cmake path_to_libwebm_library
make
</code></pre>
    <p>To analyze a WebM file, use <code>webm_info</code>. Example:</p>
    <pre><code>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all</code></pre>
    <p>This outputs timing and size for all blocks and containers. To extract timing and block sizes, use this gawk script:</p>
    <pre><code># parse_webm_info_blocks.awk
BEGIN{ FS = "SUBSEP" }
{
  x = $0;
  gsub(/:/, " ", x);
  delete fields
  n = split(x, fields, " ");
  if ( fields[1] == "Block" ){
    if ( fields[6] != "secs" ){
      printf "ERROR: 01\n";
      exit 1;
    }
    else{
      secs = fields[7];
      if ( fields[10] != "size_payload" ){
        printf "ERROR: 02\n";
        exit 1;
      }
      size = fields[11];
      printf "%lf %d\n", secs, size;
    }
  }
}
END{}
</code></pre>
    <p>To generate a time series of block sizes:</p>
    <pre><code>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all | gawk -f parse_webm_info_blocks.awk</code></pre>
    <p>To plot the time series with <code>graph</code> from plotutils:</p>
    <pre><code>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all | gawk -f parse_webm_info_blocks.awk | graph -T X -C -m 3 -L 'Time' -Y 'Value'</code></pre>
    <p><b>Other libwebm tools:</b></p>
    <ul>
      <li><b>mkvmuxer_sample:</b> Mix audio and video into a container.</li>
      <li><b>mkvparser_sample:</b> Extract metadata from a WebM file.</li>
      <li><b>VTTdemux:</b> Extract subtitles from a WebVTT file.</li>
      <li><b>Webm2ts:</b> TS packetizer for WebM files.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Containers'
}
</script>


<style scoped>
.containers {
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
