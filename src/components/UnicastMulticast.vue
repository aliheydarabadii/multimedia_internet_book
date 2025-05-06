<template>
  <section>
  <div class="unicast-multicast">
    <h1>Unicast and Multicast in IPTV</h1>
    <p>Unicast and multicast are two different methods for delivering video streams in IPTV, each with distinct advantages and use cases.</p>

    <h2>Unicast</h2>
    <p>Unicast is a one-to-one delivery method where each user receives a separate copy of the video stream. It is typically used for video on demand (VoD) and interactive services, allowing users to pause, rewind, or fast-forward. The main advantage of unicast is its high interactivity and ability to deliver personalized content, but it is less efficient for large audiences as it requires more bandwidth.</p>

    <h2>Multicast</h2>
    <p>Multicast is a one-to-many delivery method where a single copy of the video stream is sent to multiple users simultaneously. This is ideal for live television, where many users watch the same stream at the same time. Multicast is bandwidth-efficient and allows IPTV providers to deliver many channels with minimal network resources, but it lacks interactivity and requires specialized network hardware and configuration.</p>

    <h2>Implementing Multicast in IPTV Networks</h2>
    <ul>
      <li><b>Protocol Independent Multicast (PIM):</b> A multicast routing protocol that works with any unicast routing protocol. PIM dynamically discovers multicast group members and forwards traffic only to routers with active members. It supports two modes:
        <ul>
          <li><b>PIM-Dense Mode (PIM-DM):</b> Used in networks with many multicast receivers.</li>
          <li><b>PIM-Sparse Mode (PIM-SM):</b> Used in networks with fewer receivers; more efficient for IPTV as it forwards traffic only where needed, using a rendezvous point (RP) to build the multicast tree.</li>
        </ul>
      </li>
      <li><b>Source-Specific Multicast (SSM):</b> Delivers multicast traffic from a specific source to specific receivers, useful for IPTV when different users want different streams.</li>
      <li><b>IGMP Snooping:</b> A switch technique that listens to IGMP messages to track which hosts belong to which multicast groups, forwarding multicast packets only to relevant ports. This reduces unnecessary traffic and improves network efficiency.</li>
    </ul>
    <p>Efficient multicast implementation is crucial for IPTV scalability and performance, especially for live streaming to large audiences.</p>
  </div>
  <div class="iptv-extras">
    <h1>IPTV: Caching, OTT Delivery, and Authentication</h1>

    <h2>Caching in IPTV</h2>
    <p>Caching is used in IPTV to reduce network load and improve Quality of Service (QoS). By storing copies of IPTV content locally (at the edge of the network or via CDNs), caching enables faster access, less network congestion, and lower latency for viewers. Types of caching include:</p>
    <ul>
      <li><b>Edge caching:</b> Stores content close to viewers, reducing network traffic and improving QoS.</li>
      <li><b>Content Delivery Networks (CDNs):</b> Use distributed servers to deliver content from the closest location to the user, improving load times and scalability.</li>
      <li><b>Peering caching:</b> Allows providers to share cached content with each other, further reducing network load.</li>
    </ul>
    <p>Overall, caching enhances the performance and scalability of IPTV services, especially during high-demand events.</p>

    <h2>Over The Top (OTT) Video Delivery</h2>
    <p>OTT video delivery refers to streaming video content over the internet, bypassing traditional cable or satellite systems. Unlike classic IPTV, which is closed and subscription-based, OTT is open and accessible to anyone with an internet connection. Popular OTT operators include:</p>
    <ul>
      <li>Netflix</li>
      <li>Amazon Prime Video</li>
      <li>Sky Go</li>
      <li>Hulu</li>
      <li>Disney+</li>
      <li>YouTube TV</li>
      <li>Sling TV</li>
      <li>HBO Max</li>
      <li>Peacock</li>
    </ul>
    <p>OTT services offer flexibility, a wide range of content, and can reach a broad audience. However, their quality depends on the user's internet connection, which can lead to buffering or quality issues.</p>

    <h2>Authentication of Users</h2>
    <p>User authentication is important for security in IPTV and OTT services. Some providers use set-top boxes for authentication and encryption, offering higher security but requiring extra equipment. Others, like Netflix, allow direct access from user devices, which is more convenient but may be less secure due to the lack of hardware-based protection.</p>
    <p>Each approach balances security and convenience, depending on the service model and user needs.</p>
  </div>
  <div class="set-top-box">
    <h1>The Set-Top Box and Its Security</h1>
    <h2>Set-Top Box Features</h2>
    <ul>
      <li><b>PVR/DVR:</b> Allows users to pause, rewind, and record live TV, as well as schedule and store recordings for later viewing.</li>
      <li><b>On-Demand and Interactive Content:</b> Enables access to movies, TV shows, games, and social media directly from the set-top box.</li>
      <li><b>Streaming Integration:</b> Some set-top boxes support streaming services like Netflix and Hulu without needing extra devices.</li>
    </ul>
    <h2>Security of Set-Top Boxes</h2>
    <ul>
      <li><b>Encryption:</b> Communications between internal components are encrypted to prevent unauthorized access.</li>
      <li><b>Mutual Authentication:</b> Integrated circuits use digital signatures to ensure only authorized components communicate.</li>
      <li><b>Secure Boot & Storage:</b> Only authorized software can run, and sensitive data like encryption keys are securely stored.</li>
      <li><b>Secure Element (SE):</b> A tamper-resistant chip manages cryptographic keys and ensures their protection.</li>
      <li><b>Software Security:</b> Firewalls and intrusion detection systems block hacking attempts and alert administrators to breaches.</li>
    </ul>
    <p>These features help protect set-top boxes from hacking, cloning, and unauthorized access, ensuring secure delivery of IPTV and streaming services.</p>
  </div>
</section>
</template>

<script>
export default {
  name: 'UnicastMulticast',
};
</script>

<style scoped>
.unicast-multicast {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #222;
}

.iptv-extras {
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
.set-top-box {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #222;
}

</style>
