<template>
  <section class="voice-codecs">
    <h1>Voice Codecs</h1>
    <h2>3.1 Overview of Voice Codecs</h2>
    <p>
      Voice codecs (speech codecs) use algorithms to encode and decode audio signals for communication or storage. They are used in telephony, VoIP, and conferencing. Some codecs compress audio to reduce data for transmission/storage, while others do not.
    </p>
    <p>
      Codecs convert analog audio into digital signals for transmission/storage, then back to analog for playback. Types include waveform codecs, vocoders, and hybrid codecs, each with different encoding/decoding approaches. Codec performance depends on sample rate, bit depth, compression, ratio, delay, and bandwidth. Choosing the best codec involves considering these trade-offs and the application's requirements.
    </p>
    <h2>3.2 Sampling and the Nyquist Theorem</h2>
    <p>
      Sampling converts a continuous analog signal into discrete digital samples. The sample rate must be high enough to capture the highest frequency in the signal. The minimum required frequency is the Nyquist rate:
    </p>
    <p style="text-align:center;"><strong>f_s &gt;= 2 * f_max</strong></p>
    <p>
      For example, if the highest frequency is 4 kHz, the minimum sampling frequency is 8 kHz. Sampling below this rate causes aliasing—where digital samples do not accurately represent the original analog signal and may contain unwanted frequencies.
    </p>
    <p>
      To avoid aliasing, the sample rate must be at least twice the highest frequency present. An anti-aliasing filter can be used to remove frequencies above the Nyquist frequency before sampling.
    </p>
    <figure>
      <img src="https://commons.wikimedia.org/wiki/File:Nyquist_Aliasing.svg" alt="Aliasing as a function of the sampling rate" style="max-width: 100%; height: auto;" />
      <figcaption>Aliasing as a function of the sampling rate. Source: Wikimedia Commons, Author: Peterpall</figcaption>
    </figure>
    <p>
      Sampling and the Nyquist theorem are key for voice codecs, determining the resolution and accuracy of digital audio. PCM codecs digitize using a set sample rate and bit depth. ADPCM codecs use prediction and quantization to reduce data while preserving audio quality.
    </p>
    <p>
      Next, you will explore different types of voice codecs and how they use sampling and other techniques to encode and decode audio.
    </p>

    <h2>3.3 Types of Voice Codecs</h2>
    <p>There are three main types of voice codecs, each with a different approach to encoding and decoding audio:</p>
    <ul>
      <li><strong>Waveform codecs:</strong> Encode the actual waveform of the audio signal by sampling at regular intervals. <br />Examples: PCM, ADPCM, LPCM.</li>
      <li><strong>Vocoder codecs:</strong> Analyze and encode the spectral characteristics of the signal, synthesizing a new signal with similar characteristics. Used in speech recognition, synthesis, and narrowband transmission.</li>
      <li><strong>Hybrid codecs:</strong> Combine elements of waveform and vocoder codecs for a balance of quality and efficiency. Use prediction, quantization, and spectral analysis. Common in VoIP and conferencing.</li>
    </ul>

    <h3>3.3.1 Waveform Codecs</h3>
    <ul>
      <li>Encode/decode audio by sampling the analog waveform at regular intervals as digital values.</li>
      <li>
        <strong>PCM (Pulse-Code Modulation):</strong> Basic type; samples at regular intervals, fixed number of bits per sample. Quality depends on sample rate and bit depth. <br />Examples: G.711, G.722.
      </li>
      <li>
        <strong>ADPCM (Adaptive Differential PCM):</strong> Uses prediction and encodes only the difference between predicted and actual value, reducing data size. <br />Examples: G.726, G.727.
      </li>
      <li>
        <strong>LPCM (Linear PCM):</strong> Uses linear prediction for encoding/decoding; provides high quality but requires more resources. <br />Example: G.722.1.
      </li>
    </ul>

    <h3>3.3.2 Vocoders</h3>
    <ul>
      <li>Encode/decode by analyzing spectral characteristics and synthesizing a new signal with similar features.</li>
      <li>The spectral envelope is encoded and transmitted; the actual waveform is discarded.</li>
      <li>Used in bandwidth-limited applications (telephony, satellite), and in music production for creative effects (e.g., Kraftwerk).</li>
      <li>Can create a wide range of vocal effects or subtle modifications.</li>
    </ul>

    <h3>3.3.3 Hybrid Codecs</h3>
    <ul>
      <li>Combine strengths of waveform and vocoder codecs for quality and efficiency.</li>
      <li>
        <strong>Main categories:</strong>
        <ul>
          <li>Codecs combining waveform and vocoding techniques (e.g., OPUS: SILK for speech, CELT for music).</li>
          <li>(A)CELP codecs: Use code-excited linear prediction, analyzing spectral characteristics and synthesizing new signals using codevectors and excitation signals.</li>
        </ul>
      </li>
      <li>
        <strong>CELP:</strong> Uses a set of codevectors for the spectral envelope; synthesis waveform modulates the envelope.
      </li>
      <li>
        <strong>ACELP:</strong> Adaptive CELP with an adaptive codebook for better quality/compression. Offers high quality, low latency, and is widely used in telephony and bandwidth-limited applications.
      </li>
    </ul>

    <h3>ACELP Codecs: Encoding Process</h3>
    <ol>
      <li><strong>Pre-processing</strong>
        <ul>
          <li><strong>Signal Conditioning:</strong> Remove DC offset and apply pre-emphasis filtering (boosts high frequencies, cutoff: 80–100 Hz).</li>
          <li><strong>Framing:</strong> Segment speech into short frames (20–30 ms) for analysis.</li>
        </ul>
      </li>
      <li><strong>Analysis Filter Bank (LPC Analysis)</strong>
        <ul>
          <li><strong>LPC Coefficient Estimation:</strong> Analyze each frame to compute Linear Prediction Coefficients (LPC) modeling the vocal tract (order: 10–16).</li>
          <li><strong>Conversion to LSPs (Line Spectral Pairs):</strong> Convert LPC coefficients to LSPs for better quantization/interpolation.<br>
            <code>A(z) = 1 - Σ (aₖ z⁻ᵏ),  k=1 to p</code><br>
            <code>P(z) = A(z) + z⁻<sup>(p+1)</sup>A(z⁻¹)</code><br>
            <code>Q(z) = A(z) - z⁻<sup>(p+1)</sup>A(z⁻¹)</code><br>
            Roots are associated with the spectral envelope, representing the speech spectrum’s shape (formants).
          </li>
        </ul>
      </li>
      <li><strong>Perceptual Weighting</strong>
        <ul>
          <li>Design a filter (using LPC coefficients) that emphasizes perceptually significant spectral components and masks distortion.</li>
        </ul>
      </li>
      <li><strong>Long-Term (Pitch) Analysis and Adaptive Codebook Search</strong>
        <ul>
          <li><strong>Pitch Estimation:</strong> Determine the pitch period (fundamental frequency) of voiced speech.</li>
          <li><strong>Adaptive Codebook Search:</strong> Find the best match for the periodic component using past excitation signals.</li>
        </ul>
      </li>
      <li><strong>Innovation (Fixed) Codebook Search</strong>
        <ul>
          <li>Find the best set of pulses to approximate the non-periodic (residual) part of the speech.</li>
        </ul>
      </li>
      <li><strong>Bitstream Formatting and Output</strong>
        <ul>
          <li>Assemble quantized parameters (LPC/LSP, pitch, codebook indices, gains) into an efficient bitstream.</li>
          <li>Optionally include synchronization info for accurate decoding.</li>
        </ul>
      </li>
    </ol>
    <p><strong>Decoding:</strong> The ACELP decoder reconstructs the signal using the received parameters.</p>

    <h3>3.3.4 Popular Codecs</h3>
    <p>A comparison of popular voice codecs based on key characteristics:</p>
    <div style="overflow-x:auto;">
      <table class="codec-table">
        <thead>
          <tr>
            <th>Codec</th><th>Type</th><th>Sample Rate</th><th>Bit Depth</th><th>Compression Ratio</th><th>Delay</th><th>Quality (MOS)</th><th>Bandwidth</th><th>Frame Time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>G.711</td><td>PCM</td><td>8kHz</td><td>16 bits</td><td>1:1</td><td>low</td><td>high</td><td>64 kbps</td><td>20 ms</td></tr>
          <tr><td>G.722</td><td>LPCM</td><td>16kHz</td><td>16 bits</td><td>1.5:1</td><td>low</td><td>high</td><td>48–56 kbps</td><td>10 ms</td></tr>
          <tr><td>G.726</td><td>ADPCM</td><td>8kHz</td><td>16 bits</td><td>2:1 – 6:1</td><td>low</td><td>high</td><td>16–40 kbps</td><td>20 ms</td></tr>
          <tr><td>G.729</td><td>CELP</td><td>8kHz</td><td>16 bits</td><td>10:1</td><td>low</td><td>high</td><td>8 kbps</td><td>10 ms</td></tr>
          <tr><td>G.723</td><td>ACELP</td><td>8kHz</td><td>16 bits</td><td>4:1 or 6.3:1</td><td>low</td><td>high</td><td>6.3–5.3 kbps</td><td>30 ms</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><strong>Codec:</strong> Name of the codec.</li>
      <li><strong>Type:</strong> PCM, ADPCM, LPCM, vocoder, or hybrid.</li>
      <li><strong>Sample Rate:</strong> kHz, determines max frequency.</li>
      <li><strong>Bit Depth:</strong> Bits per sample; affects quality.</li>
      <li><strong>Compression Ratio:</strong> Original size : encoded size.</li>
      <li><strong>Delay:</strong> Codec-induced delay (ms); lower is better for real-time.</li>
      <li><strong>Quality (MOS):</strong> Mean Opinion Score from listening tests (1–5 scale).</li>
      <li><strong>Bandwidth:</strong> kbps required.</li>
      <li><strong>Frame Time:</strong> Duration of each audio frame (ms).</li>
    </ul>

    <h2>3.4 Voice Codec Performance and Quality</h2>
    <h3>3.4.1 Factors Affecting Performance</h3>
    <ul>
      <li><strong>Bandwidth:</strong> Data needed for transmission.</li>
      <li><strong>Compression Ratio:</strong> Data reduction; higher ratios may lower quality.</li>
      <li><strong>Latency:</strong> Delay between sending and receiving; lower is better for real-time.</li>
      <li><strong>Error Resilience:</strong> Codec’s ability to maintain quality with data loss/errors.</li>
    </ul>

    <h3>3.4.2 Definition of MOS</h3>
    <ul>
      <li><strong>MOS (Mean Opinion Score):</strong> Perceived quality on a 1 (bad) to 5 (excellent) scale, based on subjective listening tests.</li>
    </ul>

    <h3>3.4.3 Measuring Codec Quality</h3>
    <ul>
      <li><strong>Subjective Testing:</strong> Human listeners rate quality.</li>
      <li><strong>Objective Testing:</strong> Automated tools measure characteristics.</li>
      <li><strong>Simulation:</strong> Models different conditions to predict performance.</li>
    </ul>

    <h3>3.4.4 The e-model</h3>
    <p>The e-model predicts MOS using:</p>
    <pre>R = R0 - Is - Id - Ie,eff + A</pre>
    <ul>
      <li><strong>R0:</strong> Basic signal-to-noise ratio</li>
      <li><strong>Is:</strong> Standard impairments (constant)</li>
      <li><strong>Id:</strong> Delay impairments</li>
      <li><strong>Ie,eff:</strong> Codec/packet loss impairments</li>
      <li><strong>A:</strong> Advantage factor (context-dependent)</li>
    </ul>
    <p>The value of R predicts MOS using a lookup table or formula.</p>

    <h2>3.5 Voice Codecs in Modern Applications</h2>

    <h3>3.5.1 The Packetization Process</h3>
    <ul>
      <li>Packetization converts the codec’s bit stream into packets for network transmission.</li>
      <li>Each packet contains a header (metadata) and a payload (voice data).</li>
      <li>Headers add overhead; larger payloads reduce overhead but increase packetization delay.</li>
      <li>Tradeoff: Larger packets are more efficient but introduce more delay.</li>
      <li>Packetization allows dynamic routing, error correction, and retransmission of lost/corrupted packets.</li>
    </ul>

    <h3>3.5.2 VoIP</h3>
    <ul>
      <li>VoIP (Voice over Internet Protocol) transmits voice over the internet for real-time calls, conferencing, etc.</li>
      <li>Uses packetization and internet protocols (UDP/TCP) to send voice packets.</li>
      <li>VoIP systems use various codecs to balance quality and bandwidth, depending on application needs.</li>
    </ul>

    <h3>3.5.3 HDVoice</h3>
    <ul>
      <li>HDVoice = high-definition voice technology for improved call quality.</li>
      <li>Uses advanced codecs and wideband audio (wider frequency range, more detail).</li>
      <li>Common in VoIP and some mobile networks; also known as “wideband audio.”</li>
      <li>Both ends must support HDVoice for benefits.</li>
      <li>Example codecs:
        <ul>
          <li><strong>G.722:</strong> Wideband (50–7000 Hz), used in VoIP and mobile.</li>
          <li><strong>Opus:</strong> Open source, wide range, IETF, interactive speech/music.</li>
          <li><strong>SILK:</strong> Skype, low-latency, wideband (50–20000 Hz).</li>
        </ul>
      </li>
    </ul>

    <h3>3.5.4 Packet Loss Concealment</h3>
    <ul>
      <li>Packet loss (from congestion/errors) degrades voice quality in VoIP.</li>
      <li>Concealment techniques fill gaps from lost packets:
        <ul>
          <li><strong>Forward Error Correction (FEC):</strong> Adds redundant data for recovery. Effective at low/moderate loss, but increases bandwidth.</li>
          <li><strong>Interpolation:</strong> Estimates missing data from adjacent packets (linear, quadratic, cubic). Can introduce artifacts if loss is high.</li>
          <li><strong>Repetition:</strong> Retransmits previous packet to fill gaps. Simple but increases delay/traffic; best for low loss rates.</li>
        </ul>
      </li>
    </ul>

    <h3>3.5.5 Comfort Noise Generation (CNG)</h3>
    <ul>
      <li><strong>Purpose:</strong> CNG is used in VoIP to provide a more natural audio experience during periods of silence by generating artificial background noise that mimics real-life ambient noise.</li>
      <li><strong>Why:</strong> Complete silence during a call can be disorienting and make users think the call dropped. CNG fills silent gaps with low-level noise.</li>
      <li><strong>How:</strong> CNG uses mathematical models to generate artificial noise similar to real ambient noise, which is mixed with audio and transmitted.</li>
      <li><strong>Implementation:</strong> Typically done in real-time by specialized hardware or software, especially in wideband systems (which make silence more noticeable).</li>
    </ul>

    <h3>3.5.6 Voice Activity Detection (VAD)</h3>
    <ul>
      <li><strong>Purpose:</strong> VAD detects periods of silence or non-speech in VoIP calls and stops transmitting audio data during those periods, reducing bandwidth usage and improving call quality.</li>
      <li><strong>How:</strong> VAD analyzes audio in real-time to identify speech vs. non-speech. When no speech is detected, transmission is paused.</li>
      <li><strong>Benefits:</strong> Reduces network congestion and is especially useful when bandwidth is limited or multiple high-bandwidth apps are running.</li>
      <li><strong>Implementation:</strong> Can be combined with CNG for seamless user experience. Implemented via hardware or software in real-time.</li>
      <li><strong>Challenges:</strong> Poorly tuned VAD may cause “choppy” or “clipped” audio by misdetecting speech/non-speech. Careful tuning and testing are required.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VoiceCodecs'
}
</script>

<style scoped>
.voice-codecs {
  max-width: 750px;
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
p, li {
  color: #222;
  line-height: 1.7;
}
figure {
  margin: 1.5rem 0;
  text-align: center;
}
figcaption {
  font-size: 0.95rem;
  color: #666;
  margin-top: 0.5rem;
}
.codec-table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;
}
.codec-table th, .codec-table td {
  border: 1px solid #d3d3d3;
  padding: 0.5rem 0.75rem;
  text-align: center;
}
.codec-table th {
  background: #f4f6fa;
}
.codec-table tr:nth-child(even) {
  background: #fafbfc;
}
</style>
