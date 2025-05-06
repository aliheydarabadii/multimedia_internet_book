<template>
  <section class="transport-protocols">
    <h2>TCP, UDP, and SCTP in Media Streaming</h2>
    <p>Transport protocols are fundamental to media streaming, as they determine how data is transmitted from source to destination. The three main protocols used are Transmission Control Protocol (TCP), User Datagram Protocol (UDP), and Stream Control Transmission Protocol (SCTP). Each has unique features, advantages, and trade-offs for different streaming scenarios like live streaming, video on demand, and interactive streaming.</p>

    <h3>TCP (Transmission Control Protocol)</h3>
    <p>TCP is a reliable, connection-oriented protocol widely used in media streaming. It ensures data integrity through acknowledgements, retransmissions, congestion control, and flow control. TCP is well-suited for applications where reliability is critical, but its retransmission mechanisms can introduce latency, making it less ideal for real-time streaming. Modern variants such as SRT (Secure Reliable Transport) and CUBIC address some latency issues and are used for live broadcasting and high-bandwidth streaming.</p>
    <ul>
      <li><b>SRT (Secure Reliable Transport):</b> Built on UDP, SRT provides low-latency, secure, and reliable streaming. It uses Forward Error Correction (FEC), Adaptive Congestion Control (ACC), and supports encryption. SRT is ideal for live broadcasting and video conferencing.</li>
      <li><b>CUBIC:</b> A congestion control algorithm for TCP, CUBIC ramps up bandwidth quickly and recovers fast from packet loss, making it suitable for high-bandwidth, low-latency streaming.</li>
    </ul>

    <h3>UDP (User Datagram Protocol)</h3>
    <p>UDP is a connectionless, lightweight protocol that does not guarantee delivery, order, or error correction. Its low overhead and minimal latency make it suitable for real-time applications like live video, audio streaming, and online gaming, where speed is more important than reliability. Protocols such as RTP (Real-time Transport Protocol) often run on top of UDP for media transport.</p>

    <h3>SCTP (Stream Control Transmission Protocol)</h3>
    <p>SCTP is a newer transport protocol that combines features of both TCP and UDP, offering reliable, message-oriented communication with support for multi-streaming and multi-homing. SCTP is less commonly used in media streaming but can be beneficial for applications requiring robust, multiplexed connections. Its built-in congestion and flow control mechanisms help prevent packet loss and network congestion. SCTP can retransmit lost packets and use multiple network paths for improved reliability and fault-tolerance, but may introduce higher latency and complexity.</p>

    <h3>Choosing the Right Protocol</h3>
    <p>The choice of protocol affects the quality and reliability of media streaming. TCP is best for scenarios where reliability is crucial, while UDP is preferred for real-time, latency-sensitive applications. SCTP offers flexibility for advanced use cases. Variants like SRT and CUBIC further optimize streaming performance for modern networks.</p>

    <h3>Summary of Use Cases</h3>
    <ul>
      <li><b>TCP:</b> Ideal for video on demand (VoD) and scenarios where reliability and error correction are essential. Ensures ordered delivery and minimal packet loss, providing a high-quality viewing experience.</li>
      <li><b>UDP:</b> Best for live streaming and real-time applications where low latency is critical. Its low overhead allows rapid delivery but may result in dropped or out-of-order packets, requiring the application to handle errors.</li>
      <li><b>SCTP:</b> Suitable for interactive streaming and advanced scenarios needing multiple streams and higher fault-tolerance. Its support for multi-streaming, multi-homing, and congestion control can improve quality of service for interactive or complex media applications.</li>
    </ul>
    <p>In summary, TCP, UDP, and SCTP each offer unique strengths for media streaming. The optimal choice depends on the specific requirements for latency, reliability, and interactivity in your application.</p>

  </section>
</template>

<script>
export default {
  name: 'TransportProtocols',
};
</script>

<style scoped>
.transport-protocols {
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

