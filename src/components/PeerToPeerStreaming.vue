<template>
  <section class="p2p-streaming">
    <h1>Peer-to-Peer Video Streaming</h1>
    <p>Peer-to-peer (P2P) video streaming is a technology that enables users to share video content directly with each other, rather than relying on a centralized server. In P2P streaming, each viewer's device acts as both a viewer and a server, distributing video streams among peers.</p>

    <h2>Overview and History</h2>
    <p>P2P video streaming has been implemented by services like BitTorrent Live and Coolstreaming, allowing millions of users to share video content. While some platforms have faced legal and technical challenges, interest in P2P streaming is growing again, especially among IPTV providers and large-scale streaming services.</p>

    <h2>P2P vs. Traditional Streaming</h2>
    <ul>
      <li>Traditional streaming uses a central server to deliver content to viewers.</li>
      <li>P2P streaming distributes content among viewers, reducing the load on central servers and improving scalability.</li>
      <li>Some major platforms (e.g., Netflix, YouTube, Amazon Prime Video) are exploring P2P technology to enhance delivery efficiency.</li>
    </ul>

    <h2>P2P Network Fundamentals</h2>
    <p>P2P networks are distributed architectures where each node (peer) acts as both client and server, sharing and accessing resources directly without a central authority. Key characteristics include:</p>
    <ul>
      <li><b>Decentralization:</b> No central authority; peers connect and share resources directly.</li>
      <li><b>Self-organization:</b> Peers can join or leave dynamically.</li>
      <li><b>Scalability:</b> Can handle many peers and resources, scaling as needed.</li>
      <li><b>Resource sharing:</b> Peers share files, data, and processing power directly.</li>
      <li><b>Autonomy:</b> Peers control their own resources and decisions.</li>
    </ul>

    <h2>Peers in P2P Networks</h2>
    <p>Each peer acts as both a provider and consumer of resources, helping maintain network integrity and distribute load. There is no single point of failure, but also no central authority to control content distribution.</p>

    <h2>Overlay and Underlay Topologies</h2>
    <p>P2P networks can be organized by their topology:</p>
    <ul>
      <li><b>Overlay topology:</b> A virtual network built on top of the physical network, where peers are only aware of each other in the overlay.</li>
      <li><b>Underlay topology:</b> The physical infrastructure and protocols connecting the nodes. Ensures reliable data transfer between peers.</li>
    </ul>
    <p>Both topologies are important: overlay provides logical organization and routing, while underlay provides the physical connections needed for communication.</p>

    <h2>Types of Overlay Topologies</h2>
    <p>P2P networks use overlay topologies to organize connections between peers. Common types include:</p>
    <ul>
      <li><b>Tree Topology:</b> A hierarchical structure where each peer has a single parent and possibly multiple children. Efficient for search and routing, but can create bottlenecks and single points of failure if a parent goes offline.</li>
      <li><b>Forest Topology:</b> Similar to tree topology, but with multiple independent trees. Offers greater fault tolerance and can improve routing by distributing load among trees.</li>
      <li><b>Mesh Topology:</b> Each peer connects to multiple others, creating a fully connected network. Maximizes fault tolerance and routing efficiency, but increases network traffic and complexity.</li>
    </ul>
    <p>The choice of topology affects scalability, fault tolerance, and performance. More connections can improve robustness but also increase network load. In hierarchical topologies, uplink capacity may be heavily used by parent nodes, which can be a limitation if uplink bandwidth is less than downlink (as is common in home networks).</p>

    <h2>Joining and Leaving of Peers</h2>
    <p>Peers can join or leave a P2P network at any time. Joining typically involves connecting to a known entry point (bootstrap node), which provides information on other peers. Leaving triggers updates to routing tables, and if a parent peer leaves, its child peers are reassigned.</p>

    <h2>Optimizing Joins</h2>
    <p>Efficient peer selection is important for network performance. Algorithms may use proximity (geographic or network distance), random walks, or k-closest-neighbors to connect new peers to optimal nodes, reducing latency and network traffic.</p>

    <h2>Quality of Service (QoS) in P2P Networks</h2>
    <ul>
      <li>QoS ensures reliable service, bandwidth, and low latency.</li>
      <li>Reputation systems assign scores based on node performance, encouraging high-quality service.</li>
      <li>Incentives and penalties can be used to motivate nodes to contribute bandwidth and meet standards.</li>
    </ul>

    <h2>P2P Video Streaming Features</h2>
    <ul>
      <li>Distributes video content directly among users, reducing server load and improving bandwidth efficiency.</li>
      <li>Allows users to download only the parts of a video they haven’t seen, while sharing already-viewed parts with others.</li>
      <li>Improves content resilience—if one user goes offline, others can continue providing the stream.</li>
      <li>Supports personalized streams (e.g., different languages or quality levels for each user).</li>
    </ul>

    <h2>Peer-to-Peer Video Streaming Applications</h2>
    <ul>
      <li><b>Live streaming:</b> Real-time events (concerts, sports, news) without a central server, improving scalability and reducing costs.</li>
      <li><b>Video on Demand (VOD):</b> Users watch content at their own pace, improving scalability and reducing distribution costs.</li>
      <li><b>Interactive streaming:</b> Enables real-time interaction (e.g., gaming, virtual reality) without a central server, enhancing scalability and interactivity.</li>
      <li><b>Hybrid streaming:</b> Combines P2P with CDN or centralized infrastructure for adaptive, efficient streaming experiences.</li>
    </ul>

    <h2>P2P Video Streaming Systems with Mesh Overlay Topology</h2>
    <p>In mesh overlay P2P streaming, peers are directly connected and can exchange video segments with each other. Key methods include:</p>
    <ul>
      <li><b>Tit-for-Tat (TFT):</b> Peers share segments with neighbors who reciprocate, encouraging fair exchange.</li>
      <li><b>Choking:</b> Limits the number of connections a peer maintains, prioritizing fast or contributing peers and disconnecting slow or idle ones.</li>
      <li><b>IN/OUT Signaling:</b> Peers signal to neighbors which segments they have or need, using "interested" and "not interested" messages.</li>
      <li><b>Buffer Maps & Mcaches:</b> Each peer keeps a buffer map of received segments and exchanges this info with neighbors, building a table (mcache) of which segments each neighbor owns. This helps peers efficiently request missing segments.</li>
    </ul>

    <h2>WebRTC for P2P Video Streaming</h2>
    <p>WebRTC enables real-time, peer-to-peer audio and video streaming directly between browsers, reducing server load and improving performance. It is open-source and widely supported for building P2P streaming apps.</p>
    <ul>
      <li><b>Benefits:</b> Direct browser-to-browser connections, lower latency, no plugins required, scalable P2P video delivery.</li>
      <li><b>Example apps/services:</b>
        <ul>
          <li>Jitsi Meet: Open-source P2P video conferencing using WebRTC.</li>
          <li>AppRTC: Demo by Google for simple P2P video chat.</li>
          <li>P2P Media Loader: JavaScript library for P2P video streaming.</li>
          <li>WebTorrent: P2P file and video streaming in the browser.</li>
          <li>ShareFest: Browser-based P2P file sharing.</li>
        </ul>
      </li>
    </ul>

    <h2>P2P Video Streaming Use Cases</h2>
    <p>P2P video streaming is often combined with content delivery networks (CDNs) and other technologies to improve scalability, efficiency, and video quality. Major streaming platforms use hybrid approaches:</p>
    <ul>
      <li><b>Netflix Open Connect:</b> Combines a small number of high-performance CDN servers with P2P mesh overlay. Viewers can share video segments directly, reducing server load and improving resilience. The mesh topology allows efficient content distribution and can handle node failures without disrupting the network.</li>
      <li><b>YouTube:</b> Uses WebRTC to enable viewers to share video content directly with each other in real time, reducing central server load and improving streaming quality.</li>
      <li><b>Amazon Prime Video:</b> Uses Adaptive Bit Rate Streaming (ABR) to adjust video quality based on connection/device, and also leverages P2P technology to distribute video segments among viewers, improving efficiency and scalability.</li>
    </ul>

    <h2>Summary</h2>
    <p>P2P video streaming distributes video content among users, reducing reliance on central servers and improving scalability. P2P networks are decentralized, self-organizing, and scalable, making them attractive for modern streaming solutions.</p>
  </section>
</template>

<script>
export default {
  name: 'PeerToPeerStreaming',
};
</script>

<style scoped>
.p2p-streaming {
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
ul {
  margin-bottom: 1rem;
}
</style>
