<template>
  <section>
    <h1>Voice Over IP (VoIP)</h1>
    <p>Voice over Internet Protocol (VoIP) is a technology that enables the transmission of voice communications over the internet. It has revolutionized the way we communicate by allowing us to make phone calls using the internet, rather than traditional telephone lines. VoIP technology has been around for decades, but it has seen significant growth and evolution over the years. This section provides a brief overview of the history of VoIP and its evolution.</p>
    <p>The concept of VoIP was first proposed in the 1970s, but it wasn't until the late 1990s that the technology became viable for commercial use. In the early days of VoIP, the quality of the calls was poor and the technology was not widely adopted. However, as internet speeds increased and computer processing power improved, the quality of VoIP calls began to improve.</p>
    <p>In the early 2000s, VoIP began to gain mainstream acceptance as a viable alternative to traditional phone systems. This was due in part to the widespread availability of high-speed internet and the introduction of new technologies such as Session Initiation Protocol (SIP) and Voice over IP (VoIP) gateways.</p>
    <p>Over the next few years, VoIP continued to evolve and improve. New features such as voicemail, call forwarding, and conferencing were added, and the technology became more reliable and user-friendly. With the advent of smartphones and mobile internet, VoIP also became available on mobile devices, making it even more accessible and convenient for users.</p>
    <p>As of today, VoIP technology is widely adopted by businesses of all sizes and is considered a cost-effective alternative to traditional phone systems. The future of VoIP looks promising with the development of new technologies such as WebRTC, VoLTE, and VoWiFi which will further improve the quality and reliability of VoIP calls.</p>

    <h2>VoIP Architecture</h2>
    <p>A Voice over Internet Protocol (VoIP) system is composed of several different components that work together to enable voice communication over the internet. These components include gateways, PBXs, SIP proxies, and media servers.</p>
    <ul>
      <li><b>SIP Proxies:</b> A Session Initiation Protocol (SIP) proxy is a server that acts as a relay between SIP clients. It is responsible for routing SIP messages between clients and managing the setup and tear-down of SIP sessions. SIP proxies also provide features such as authentication, authorization, and call routing.</li>
      <li><b>Media Servers:</b> A media server is a device that manages the transmission of multimedia content, such as audio and video, over a network. In a VoIP system, media servers are responsible for handling the encoding and decoding of voice data. They also provide features such as echo cancellation and noise reduction to improve the quality of the call.</li>
      <li><b>PBXs:</b> A Private Branch Exchange (PBX) is a telephone system used by businesses to manage and route incoming and outgoing calls. A PBX can be either a traditional analog system or a VoIP-based system. A VoIP-based PBX uses IP protocols to transmit voice and data between phones and the internet. It also has features such as voicemail, call forwarding, and conferencing.</li>
      <li><b>Media Gateways:</b> A gateway is a device that connects an external network, for example a traditional telephone network to a VoIP network. It converts the formats of the media between the interconnected networks. Media Gateways can be either standalone devices or integrated into other VoIP equipment such as PBXs or SIP proxies.</li>
      <li><b>Interworking functions (IWF):</b> if a VoIP system needs to interconnect with an external network, for example the Public Switched Telephone Network (PSTN), media gateways alone are not sufficient. In addition to media gateways, signaling gateways or interworking functions (IWF) are required to translate the signaling protocols between the VoIP and external networks. Signaling gateways or IWFs play a crucial role in connecting the VoIP system to external networks, as they are responsible for interworking the signaling protocols between the different networks. They perform functions such as protocol conversion, address translation, and call routing. They also provide features such as call setup, teardown, and call control, and act as the interface between the PSTN and VoIP networks.</li>
    </ul>

    <h3>Media servers vs Media gateways</h3>
    <p>There is a difference in the roles and functions of media servers and media gateways. Both devices are responsible for handling the media streams in a VoIP network, but they perform different functions and are typically used in different parts of the network.</p>
    <p><b>Media servers</b> are typically used in the core of the network to handle the encoding and decoding of voice data and providing additional features such as conferencing and voice recording. They can also handle media transcoding, but their primary role is to handle the media streams in a more advanced way, such as providing additional features such as echo cancellation, noise reduction, and DTMF relay.</p>
    <p><b>Media gateways</b> are typically used at the boundary of the network to connect different types of networks and to convert the media streams between different codecs. They are responsible for transcoding the media stream between different codecs, if required, and they also provide features such as echo cancellation and noise reduction to improve the quality of the call.</p>

    <h2>VoIP Services</h2>
    <p>VoIP services refer to the various features and functionalities that a VoIP system can provide to its users. Some of the most common VoIP services include:</p>
    <ul>
      <li><b>Call routing:</b> The ability to route calls to the appropriate destination based on the dialed number or the caller's information. This can be done using a PBX or a SIP proxy, which can use a variety of routing methods such as least cost routing or time of day routing.</li>
      <li><b>Voicemail:</b> The ability to leave a voice message for a user if they are unavailable to answer a call. This service can be integrated with the call routing functionality to automatically route calls to voicemail when a user is unavailable.</li>
      <li><b>Conferencing:</b> The ability to hold multi-party audio or video calls. This service can be provided by a media server or a SIP proxy, which can handle the mixing of the different media streams and provide additional features such as mute/unmute and recording.</li>
      <li><b>Call forwarding:</b> The ability to forward calls to another number or voicemail. This service can be provided by a PBX or a SIP proxy.</li>
      <li><b>Caller ID:</b> The ability to display the caller's information on the callee's device, such as name or number. This service can be provided by a PBX or a SIP proxy.</li>
      <li><b>Call blocking:</b> The ability to block certain numbers or calls based on the caller's information. This service can be provided by a PBX or a SIP proxy.</li>
      <li><b>Call recording:</b> The ability to record audio or video calls for later review. This service can be provided by a media server or a SIP proxy.</li>
    </ul>
    <p>In addition to these common services, VoIP systems can also provide a wide variety of other features and functionalities, such as automatic call distribution, interactive voice response, and more.</p>

    <h2>VoIP Standards</h2>
    <p>SIP (Session Initiation Protocol) and H.323 are the most widely used protocols in VoIP systems. Both protocols are used to establish, modify, and terminate multimedia sessions such as voice and video calls. However, there are some key differences between the two protocols.</p>
    <p>SIP is a text-based protocol that is designed to be simple and flexible. It is often used in IP PBX systems and in SIP-based softphones. SIP is also used in many cloud-based VoIP services. One of the main advantages of SIP is its ease of use and flexibility. It is relatively simple to implement and can be used with a wide variety of devices and networks.</p>
    <p>H.323, on the other hand, is a binary protocol that is more complex than SIP. It is often used in large enterprise VoIP systems and in video conferencing systems. H.323 is also used in some PSTN gateways. One of the main advantages of H.323 is its ability to handle large numbers of simultaneous calls and its support for advanced features such as bandwidth management and call admission control.</p>
    <p>Other signaling protocols that are used in VoIP systems include SCCP (Skinny Call Control Protocol) and Jingle. SCCP is a proprietary protocol that is used in Cisco IP phones and Cisco Call Manager. Jingle is an extension to the XMPP (Extensible Messaging and Presence Protocol) that is used in Google Talk and other XMPP-based VoIP systems.</p>
    <p>SIP and H.323 are the most widely used protocols in VoIP systems. Other signaling protocols such as SCCP and Jingle are also used in some VoIP systems but are not as widely adopted.</p>

    <h2>VoIP Deployment</h2>
    <p>VoIP (Voice over Internet Protocol) is a technology that allows voice communication to be transmitted over the internet. There are several ways in which VoIP systems can be deployed, including on-premises, hosted and cloud-based.</p>
    <ul>
      <li><b>On-premises:</b> refers to a VoIP system that is located and managed on the customer's own premises. This type of deployment gives the customer complete control over their system and the ability to customize it to their specific needs. However, it also requires the customer to manage and maintain the system themselves, which can be time-consuming and costly.</li>
      <li><b>Hosted:</b> deployment refers to a VoIP system that is hosted and managed by a third-party provider. The provider is responsible for maintaining and updating the system, which can be beneficial for businesses that do not have the resources or expertise to manage an on-premises system. However, hosted deployment typically requires a monthly or annual fee, and the customer may have less control over their system.</li>
      <li><b>Cloud-based:</b> deployment is a newer and increasingly popular option, which refers to a VoIP system that is hosted and managed entirely in the cloud. This type of deployment eliminates the need for on-site hardware and allows for easy scalability. It also allows for easy access to the system from any location with internet access. Cloud-based deployment may require a subscription-based pricing and may depend on the amount of usage.</li>
    </ul>
    <p>Overall, the choice of VoIP deployment will depend on the specific needs and resources of the business. On-premises deployment offers the most control, but also requires the most management. Hosted and cloud-based deployment are more convenient, but may be more expensive and offer less control.</p>
    <h2>Current VoIP Technologies</h2>
    <p>Voice over Internet Protocol (VoIP) technologies have revolutionized the way we communicate by allowing us to make phone calls over the internet. There are several current VoIP technologies that are worth discussing, including WebRTC, VoLTE, and VoWiFi.</p>
    <ul>
      <li><b>WebRTC (Web Real-Time Communication):</b> An open-source project that enables real-time communication between browsers and mobile apps without the need for additional software or plug-ins. WebRTC is used for voice and video calls, file sharing, and live streaming, and is particularly useful for real-time business communications.</li>
      <li><b>VoLTE (Voice over LTE):</b> Allows voice calls to be made over 4G LTE networks, providing high-definition (HD) voice quality and faster call setup times than traditional circuit-switched voice calls. Useful for carriers and for integrating with other IP-based services.</li>
      <li><b>VoWiFi (Voice over WiFi):</b> Allows voice calls to be made over WiFi networks, providing better call quality and reliability in areas with poor cellular coverage. Useful for travelers to avoid international roaming charges.</li>
    </ul>

    <h2>Interworking of Signaling</h2>
    <p>When signaling activities to set up, maintain, and tear down sessions must cross multiple different networks, <b>interworking of signaling</b> plays a key role. Interworking of signaling refers to the system modules and protocols that must be used to provide a seamless flow of signaling between different networks.</p>
    <p><b>Diagram:</b> A SIP network is interconnected to two external networks (signaling and bearer). The signaling network represents control plane activities, while the bearer network represents user plane activities (media transfer). Media Gateways convert media formats, and Signaling Gateways translate signaling protocols. Media Gateway Controllers (Call Agents) coordinate these activities.</p>
    <pre>
  [External signaling network]   [SIP Network]   [External signaling network]
            |                        |                     |
         [SG]---[CA]----[MG]----[MG]---[CA]---[SG]
            |                        |                     |
  [External bearer network]   [SIP Network]   [External bearer network]
    </pre>

    <h2>Protocols in Interworking</h2>
    <p>Media Gateway Controllers communicate with Media Gateways using the Media Gateway Controller Protocol (MGCP) or MEGACO. Communications between controllers can use SIP. Signaling Gateways translate signaling messages into the protocols required by external networks. Media Gateways exchange media flows using RTP/UDP/IP, and perform transcoding as needed.</p>
    <p><b>Diagram:</b> Protocols in interworking architecture.</p>
    <pre>
[SG1]--SIP INVITE-->[MGC1]--MGCP CRCX-->[MG1]--SIP INVITE-->[MGC2]--MGCP CRCX-->[MG2]--SIP INVITE-->[SG2]
    </pre>

    <h3>Media Gateways</h3>
    <p>Media Gateways adapt media formats to the networks and devices they traverse. Endpoints can terminate RTP/UDP/IP media flows, PSTN flows, or analog signals. The Media Gateway transcodes input media formats into output formats suitable for the SIP network.</p>
    <pre>
[External bearer network]--[MG endpoint]--transcoded connection--[MG endpoint]--[RTP/UDP/IP media stream]
    </pre>

    <h3>The Media Gateway Control Protocol</h3>
    <p>The Media Gateway Control Protocol (MGCP) is used by Media Gateway Controllers (MGCs) to manage connections in Media Gateways. Main commands include:</p>
    <ul>
      <li><b>CRCX (Create Connection):</b> Create a connection in the MG.</li>
      <li><b>DLCX (Delete Connection):</b> Delete a connection in the MG.</li>
      <li><b>MDCX (Modify Connection):</b> Modify the parameters of a connection in the MG.</li>
    </ul>
    <p><b>Example call setup flow:</b></p>
    <pre>
1. SG1 sends SIP INVITE to MGC1
2. MGC1 sends MGCP CRCX to MG1
3. MG1 responds with MGCP 200 OK (endpoint info)
4. MGC1 forwards SIP INVITE to MGC2 (with endpoint info)
5. MGC2 sends MGCP CRCX to MG2
6. MG2 responds with MGCP 200 OK (endpoint info)
7. MGC2 forwards SIP INVITE to SG2
8. SG2 responds with SIP 200 OK
9. MGC2 forwards SIP 200 OK to MGC1
10. MGC1 sends MGCP MDCX to MG1 (modify connection)
11. MG1 responds with MGCP 200 OK
12. MGC1 forwards SIP 200 OK to SG1
    </pre>

    <h2>Quality of Service Measures in VoIP</h2>
    <p>Quality of Service (QoS) refers to measures used to ensure high-quality audio in VoIP systems. Some key QoS measures include:</p>
    <ul>
      <li><b>Jitter buffer:</b> Temporarily stores incoming packets and releases them at a consistent rate, reducing the effects of jitter.</li>
      <li><b>Echo cancellation:</b> Removes unwanted audio feedback caused by the speaker's audio being picked up by the microphone.</li>
      <li><b>Noise reduction:</b> Removes unwanted background noise from the audio signal.</li>
      <li><b>Packet loss concealment:</b> Fills in gaps caused by lost packets to reduce the impact on audio quality.</li>
      <li><b>Bandwidth management:</b> Ensures enough bandwidth is available for the call and prioritizes VoIP traffic.</li>
      <li><b>QoS marking:</b> Marks VoIP packets for higher priority by the network, ensuring timely delivery.</li>
      <li><b>Adaptive bit rate:</b> Adjusts the audio stream's bit rate in real-time based on available bandwidth.</li>
      <li><b>Voice activity detection:</b> Only transmits audio when someone is speaking, conserving bandwidth.</li>
    </ul>
    <p>By implementing these QoS measures, a VoIP system can ensure high-quality audio even in challenging network conditions.</p>
  </section>
</template>

<script>
export default {
  name: 'VoiceOverIP'
}
</script>

<style scoped>
section {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);

}
h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
}
h3 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}
li {
  margin-bottom: 0.5rem;
}
p {
  margin-bottom: 1rem;
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
