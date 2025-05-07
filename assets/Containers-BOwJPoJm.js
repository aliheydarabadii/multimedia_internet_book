import{_ as a,c as t,a as d,o as i}from"./index-D4jiRF2v.js";const o={name:"Containers"},s={class:"containers"};function n(r,e,l,c,p,v){return i(),t("section",s,e[0]||(e[0]=[d(`<h1 data-v-718257e6>Containers</h1><p data-v-718257e6>Containers are file formats for storing audio, video, and other data, along with metadata such as timestamps and chapter information. They are used to package encoded media content for playback and are compatible with a wide range of players and devices.</p><p data-v-718257e6>Unlike codecs (which encode/decode audio/video), containers organize and store the encoded data and metadata in a standardized way. Common contents inside a container include:</p><ul data-v-718257e6><li data-v-718257e6><b data-v-718257e6>Audio:</b> One or more audio streams, each encoded with a codec.</li><li data-v-718257e6><b data-v-718257e6>Video:</b> One or more video streams, each encoded with a codec.</li><li data-v-718257e6><b data-v-718257e6>Metadata:</b> Information about streams (codecs, bit rates), chapter markers, subtitles, etc.</li></ul><h2 data-v-718257e6>6.1 The WebVTT Component</h2><p data-v-718257e6>WebVTT (Web Video Text Tracks) is a file format for adding text tracks (captions, subtitles) to web videos. It is designed for use with the HTML5 <code data-v-718257e6>&lt;track&gt;</code> element and is maintained by the W3C. WebVTT files contain a header and cue blocks, each with a timestamp and text. They can also include metadata blocks for additional info (language, direction, styling).</p><p data-v-718257e6>WebVTT can be embedded in containers like MP4, MKV, WebM and used by HTML5 and other video players to display timed text.</p><pre data-v-718257e6><code data-v-718257e6>WEBVTT

1
00:00:10.000 --&gt; 00:00:15.000
This is the first caption.

2
00:00:20.000 --&gt; 00:00:25.000
This is the second caption.
</code></pre><h2 data-v-718257e6>6.2 Popular Containers</h2><ul data-v-718257e6><li data-v-718257e6><b data-v-718257e6>MP4:</b> Widely used for audio/video, supports H.264/AAC, licensed, compatible with most devices/players.</li><li data-v-718257e6><b data-v-718257e6>MKV (Matroska):</b> Open source, supports many codecs and lots of metadata, broad compatibility.</li><li data-v-718257e6><b data-v-718257e6>AVI:</b> Older, supported by many players, less efficient, supports DivX/Xvid.</li><li data-v-718257e6><b data-v-718257e6>MOV:</b> Used mainly on Apple devices, supports H.264/AAC, wide compatibility.</li><li data-v-718257e6><b data-v-718257e6>WebM:</b> Open, Google-developed, supports VP8/VP9 (video), Vorbis/Opus (audio), designed for streaming.</li><li data-v-718257e6><b data-v-718257e6>CMAF:</b> For multimedia streaming, supports DASH/HLS, allows single set of files for both, open/low-latency.</li></ul><p data-v-718257e6><b data-v-718257e6>Comparison Table:</b></p><table border="1" style="border-collapse:collapse;" data-v-718257e6><tr data-v-718257e6><th data-v-718257e6>Container</th><th data-v-718257e6>Supported Audio Codecs</th><th data-v-718257e6>Supported Video Codecs</th><th data-v-718257e6>Licensing</th></tr><tr data-v-718257e6><td data-v-718257e6>MP4</td><td data-v-718257e6>AAC, MP3</td><td data-v-718257e6>H.264, H.265</td><td data-v-718257e6>Licensed</td></tr><tr data-v-718257e6><td data-v-718257e6>MKV</td><td data-v-718257e6>Vorbis, Opus, MP3</td><td data-v-718257e6>H.264, H.265, VP9</td><td data-v-718257e6>Open</td></tr><tr data-v-718257e6><td data-v-718257e6>AVI</td><td data-v-718257e6>MP3, AC3</td><td data-v-718257e6>DivX, Xvid</td><td data-v-718257e6>Open</td></tr><tr data-v-718257e6><td data-v-718257e6>MOV</td><td data-v-718257e6>AAC, MP3</td><td data-v-718257e6>H.264, H.265</td><td data-v-718257e6>Open</td></tr><tr data-v-718257e6><td data-v-718257e6>WebM</td><td data-v-718257e6>Vorbis, Opus</td><td data-v-718257e6>VP8, VP9</td><td data-v-718257e6>Open</td></tr></table><h2 data-v-718257e6>6.3 The WebM Containers</h2><p data-v-718257e6>In the WebM container format, a <b data-v-718257e6>block</b> is the basic unit of compressed video or audio data. Blocks are small (a few KB), containing information like frame type, quantization, and encoded data. The size of blocks depends on the codec and can be configured.</p><p data-v-718257e6>A <b data-v-718257e6>cluster</b> is a collection of one or more blocks, grouped for efficient storage or transmission. Clusters can include multiple blocks of audio/video, along with timestamps and flags. Default cluster size is around 2MB, but it can be configured. Clustering reduces overhead, leading to smaller file sizes, faster read/write, and lower bandwidth usage.</p><p data-v-718257e6><b data-v-718257e6>Summary:</b> Blocks are the smallest unit; clusters group blocks for efficiency. Using clusters instead of just blocks reduces overhead and improves performance.</p><h3 data-v-718257e6>6.3.1 The libwebm library</h3><p data-v-718257e6>The <a href="https://www.webmproject.org/" target="_blank" data-v-718257e6>libwebm</a> library provides tools for working with WebM files. To install it:</p><pre data-v-718257e6><code data-v-718257e6>git clone https://github.com/webmproject/libwebm
cmake path_to_libwebm_library
make
</code></pre><p data-v-718257e6>To analyze a WebM file, use <code data-v-718257e6>webm_info</code>. Example:</p><pre data-v-718257e6><code data-v-718257e6>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all</code></pre><p data-v-718257e6>This outputs timing and size for all blocks and containers. To extract timing and block sizes, use this gawk script:</p><pre data-v-718257e6><code data-v-718257e6># parse_webm_info_blocks.awk
BEGIN{ FS = &quot;SUBSEP&quot; }
{
  x = $0;
  gsub(/:/, &quot; &quot;, x);
  delete fields
  n = split(x, fields, &quot; &quot;);
  if ( fields[1] == &quot;Block&quot; ){
    if ( fields[6] != &quot;secs&quot; ){
      printf &quot;ERROR: 01\\n&quot;;
      exit 1;
    }
    else{
      secs = fields[7];
      if ( fields[10] != &quot;size_payload&quot; ){
        printf &quot;ERROR: 02\\n&quot;;
        exit 1;
      }
      size = fields[11];
      printf &quot;%lf %d\\n&quot;, secs, size;
    }
  }
}
END{}
</code></pre><p data-v-718257e6>To generate a time series of block sizes:</p><pre data-v-718257e6><code data-v-718257e6>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all | gawk -f parse_webm_info_blocks.awk</code></pre><p data-v-718257e6>To plot the time series with <code data-v-718257e6>graph</code> from plotutils:</p><pre data-v-718257e6><code data-v-718257e6>./webm_info -i ~/Music/src/ACDC_Thunderstruck_Official_Video_video_1440p.webm -all | gawk -f parse_webm_info_blocks.awk | graph -T X -C -m 3 -L &#39;Time&#39; -Y &#39;Value&#39;</code></pre><p data-v-718257e6><b data-v-718257e6>Other libwebm tools:</b></p><ul data-v-718257e6><li data-v-718257e6><b data-v-718257e6>mkvmuxer_sample:</b> Mix audio and video into a container.</li><li data-v-718257e6><b data-v-718257e6>mkvparser_sample:</b> Extract metadata from a WebM file.</li><li data-v-718257e6><b data-v-718257e6>VTTdemux:</b> Extract subtitles from a WebVTT file.</li><li data-v-718257e6><b data-v-718257e6>Webm2ts:</b> TS packetizer for WebM files.</li></ul>`,29)]))}const u=a(o,[["render",n],["__scopeId","data-v-718257e6"]]);export{u as default};
