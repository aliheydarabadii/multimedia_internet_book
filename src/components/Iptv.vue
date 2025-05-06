<template>
  <section class="iptv">
    <h1>IPTV (Internet Protocol Television)</h1>
    <p><b>IPTV</b> is a digital television service delivered through the internet using the same protocols as regular internet data. Unlike traditional TV (cable or satellite), IPTV enables providers to offer a wide range of customizable features, such as interactive television, video on demand, and personal video recording.</p>

    <h2>Main Features</h2>
    <ul>
      <li><b>Customizable:</b> IPTV can be tailored to individual user needs, offering live TV, movies, and interactive features.</li>
      <li><b>High Reliability & Quality:</b> Delivered over dedicated, optimized networks, IPTV provides minimal latency and buffering, ensuring a high-quality viewing experience.</li>
      <li><b>Wide Range of Services:</b> Supports interactive TV, VoD, and personal recording, not possible with traditional TV.</li>
    </ul>

    <h2>Network Architecture</h2>
    <p>IPTV can use two types of networks:</p>
    <ul>
      <li><b>Public Networks:</b> Use the open internet infrastructure. Cost-effective, but may suffer from congestion, lower security, and inconsistent quality of service (QoS).</li>
      <li><b>Private Networks:</b> Dedicated infrastructure owned by the IPTV provider (fiber, cable, etc.). More reliable, secure, and allows for better control over QoS, but is more expensive to build and maintain.</li>
    </ul>
    <p>Providers typically prefer private networks for better control, reliability, and user experience, though public networks are sometimes used for cost reasons.</p>

    <h2>Quality of Service (QoS)</h2>
    <p>QoS ensures video streams are delivered with minimal latency and buffering. High QoS is essential for customer satisfaction and retention. Key factors affecting QoS include:</p>
    <ul>
      <li><b>Network Congestion:</b> Too much traffic can cause delays.</li>
      <li><b>Bandwidth Availability:</b> Limited bandwidth reduces stream quality.</li>
      <li><b>Packet Loss:</b> Lost data packets degrade video quality.</li>
    </ul>
    <p>Providers improve QoS by using private networks, traffic management, error correction, and bandwidth-saving techniques like compression and adaptive bitrate streaming.</p>

    <h2>Summary</h2>
    <p>IPTV delivers customizable, reliable, and high-quality television services over the internet. Private networks are preferred for optimal QoS, but public networks offer cost advantages. Ensuring high QoS is key to user satisfaction, achieved through network management and advanced streaming technologies.</p>
  </section>
</template>

<script>
export default {
  name: 'Iptv',
};
</script>

<style scoped>
.iptv {
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
</style>
