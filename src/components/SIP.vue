<template>
  <section class="sip">
    <h1>SIP (Session Initiation Protocol)</h1>
    <p>Session Initiation Protocol (SIP) is a signaling protocol used for initiating, maintaining, modifying and terminating real-time sessions that involve video, voice, messaging, and other communications between two or more endpoints on IP networks. SIP is used to establish, modify and terminate two-party or multiparty sessions. It is a text-based protocol, similar to HTTP and SMTP, and is the foundation of most modern IP-based communication systems, including Voice over IP (VoIP) and WebRTC applications.</p>

    <p>SIP is used to set up and control multimedia communication sessions, such as voice and video calls, between any two endpoints on an IP network. SIP is designed to be independent of the underlying transport protocol and can be used with Transmission Control Protocol (TCP), User Datagram Protocol (UDP), and Stream Control Transmission Protocol (SCTP).</p>

    <p>SIP is a client-server protocol, with clients known as User Agents (UA) and servers as SIP servers. The UA sends SIP requests to the server, which then sends back SIP responses. The UA can be either a SIP phone or a software application, and the SIP server can be a SIP proxy, a redirect server, or a registrar.</p>

    <p>SIP is an application-layer control protocol that can establish, modify, and terminate multimedia sessions (conferences) between one or more participants. These sessions include Internet telephone calls, multimedia distribution, and multimedia conferences. SIP sessions include transport descriptions that allow participants to agree on a set of compatible media types. SIP makes no assumptions about the transport layer and can be used with any reliable transport protocol. SIP is designed to be extensible and to support the integration of new media types.</p>

    <p>SIP is a key protocol in the implementation of Voice over IP (VoIP) systems. VoIP is a method of transmitting voice and multimedia content over the internet, rather than through traditional telephone networks. SIP is used to establish and control the call sessions in VoIP systems, allowing users to make and receive phone calls using their internet connection.</p>

    <h2>Types of SIP Servers</h2>
    <p>In SIP, there are three main types of servers: proxy, redirect, and registrar. Each serves a specific purpose in the SIP signaling process.</p>
    <ul>
      <li><b>Proxy Server:</b> Acts as an intermediary for requests from clients seeking resources from other servers. Receives SIP requests, forwards them to the appropriate location, and returns SIP responses. Can authenticate and authorize SIP clients.</li>
      <li><b>Redirect Server:</b> Receives SIP requests and responds with the address of the next hop for the client to contact, without forwarding the request itself. Helps clients find the next hop.</li>
      <li><b>Registrar Server:</b> Maintains location information for SIP clients. Handles REGISTER requests to add, modify, or remove client binding information. Used by proxy and redirect servers to route requests.</li>
    </ul>

    <h2>User Agent Client (UAC)</h2>
    <p>A User Agent Client (UAC) is a SIP client that initiates SIP requests. It sends SIP requests to a SIP server and receives SIP responses. UACs can be hardware devices (SIP phones) or software (softphones, VoIP clients).</p>
    <ul>
      <li>Main function: Initiates SIP requests (INVITE, BYE, REGISTER) to set up, modify, or terminate sessions.</li>
      <li>Registers its location with a registrar server so incoming calls can be routed.</li>
      <li>Located in the User Agent (UA), which can act as both client and server depending on context.</li>
    </ul>

    <h2>Format of SIP Messages</h2>
    <p>SIP messages have a start-line, headers, and an optional message body. The start-line specifies the request or response type and version. Example: <code>INVITE sip:bob@biloxi.com SIP/2.0</code></p>
    <ul>
      <li><b>From:</b> SIP address of the sender, with a tag parameter for identification.</li>
      <li><b>To:</b> SIP address of the recipient, with a tag parameter for identification.</li>
      <li><b>Call-ID:</b> Globally unique call identifier, used to correlate requests and responses.</li>
      <li><b>CSeq:</b> Sequence number and method name, incremented for each request.</li>
      <li><b>Contact:</b> SIP address for further requests in the dialog.</li>
    </ul>
    <p>These headers are present in both requests and responses and help establish and maintain a call dialog.</p>

    <h2>The Call Dialog</h2>
    <p>The triplet of headers (From, To, Call-ID) forms the call dialog and is used to identify and correlate SIP transactions. When a SIP request is sent, it contains these headers to establish and maintain a dialog between endpoints. Responses also contain these headers to match and correlate transactions.</p>
    <pre>
INVITE sip:user@example.com SIP/2.0
FROM: &lt;sip:caller@example.com&gt;;tag=87asd6asd8
TO: &lt;sip:user@example.com&gt;
CALL-ID: 129837198273019823
    </pre>
    <p><i>Example of SIP INVITE request, with the call dialog</i></p>
    <p>The call dialog is used throughout the duration of a call to identify and correlate SIP transactions. These headers are used in subsequent SIP requests and responses (BYE, ACK, etc.) to maintain the dialog and correlate transactions.</p>

    <h2>Registration Procedure</h2>
    <p>Registration is the process by which a SIP client registers its location with a SIP server, allowing the server to route incoming calls or messages to the correct location. The registration process typically involves:</p>
    <ol>
      <li>The SIP client sends a REGISTER request to the SIP server, including its SIP address, IP address, and port.</li>
      <li>The SIP server receives and validates the request, then updates its database with the client's location.</li>
      <li>The server sends a 200 OK response, including a Contact header with the client's address and port.</li>
      <li>The client receives the 200 OK and updates its registration info.</li>
    </ol>
    <pre>
REGISTER sip:example.com SIP/2.0
Via: SIP/2.0/UDP client.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:user@example.com&gt;;tag=5678
To: &lt;sip:user@example.com&gt;
Call-ID: 129837198273019823
CSeq: 1 REGISTER
Contact: &lt;sip:user@client.example.com:5060&gt;
Expires: 3600
    </pre>
    <p><i>Example of REGISTER request message</i></p>
    <ul>
      <li><b>REGISTER</b>: Method and server address</li>
      <li><b>Via</b>: Client address and branch parameter</li>
      <li><b>From</b>: User address and tag</li>
      <li><b>To</b>: User address</li>
      <li><b>Call-ID</b>: Unique identifier</li>
      <li><b>CSeq</b>: Sequence number and method</li>
      <li><b>Contact</b>: Address and port for client</li>
      <li><b>Expires</b>: Registration validity (seconds)</li>
    </ul>
    <pre>
SIP/2.0 200 OK
Via: SIP/2.0/UDP client.example.com:5060;branch=z9hG4bK1234;received=client.example.com
From: &lt;sip:user@example.com&gt;;tag=5678
To: &lt;sip:user@example.com&gt;;tag=0987
Call-ID: 129837198273019823
CSeq: 1 REGISTER
Contact: &lt;sip:user@client.example.com:5060&gt;
Expires: 1800
    </pre>
    <p><i>Response to the registration request</i></p>

    <h2>Basic Call Setup Without a Proxy Server</h2>
    <p>In a direct SIP call (no proxy), the typical sequence of exchanged messages is:</p>
    <ol>
      <li>Caller sends an <b>INVITE</b> request</li>
      <li>Callee sends a <b>100 Trying</b> response</li>
      <li>Callee sends a <b>183 Session Progress</b> (or 180 Ringing) response</li>
      <li>Callee sends a <b>200 OK</b> response</li>
      <li>Caller sends an <b>ACK</b> request</li>
    </ol>
    <pre>
INVITE sip:callee@example.com SIP/2.0
Via: SIP/2.0/UDP caller.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:caller@example.com&gt;;tag=5678
To: &lt;sip:callee@example.com&gt;
Call-ID: 129837198273019823
CSeq: 1 INVITE
Contact: &lt;sip:caller@caller.example.com:5060&gt;
Content-Type: application/sdp

v=0
o=caller 5678 5678 IN IP4 caller.example.com
s=Session SDP
c=IN IP4 caller.example.com
t=0 0
m=audio 5004 RTP/AVP 0
    </pre>
    <p><i>SIP INVITE request message</i></p>
    <pre>
SIP/2.0 100 Trying
Via: SIP/2.0/UDP caller.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:caller@example.com&gt;;tag=5678
To: &lt;sip:callee@example.com&gt;
Call-ID: 129837198273019823
CSeq: 1 INVITE
    </pre>
    <p><i>100 Trying response from the callee</i></p>
    <pre>
SIP/2.0 183 Session Progress
Via: SIP/2.0/UDP caller.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:caller@example.com&gt;;tag=5678
To: &lt;sip:callee@example.com&gt;
Call-ID: 129837198273019823
CSeq: 1 INVITE
    </pre>
    <p><i>183 Session Progress response message</i></p>
    <pre>
SIP/2.0 200 OK
Via: SIP/2.0/UDP caller.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:caller@example.com&gt;;tag=5678
To: &lt;sip:callee@example.com&gt;;tag=0987
Call-ID: 129837198273019823
CSeq: 1 INVITE
Contact: &lt;sip:callee@callee.example.com:5060&gt;
Content-Type: application/sdp

v=0
o=callee 5678 5678 IN IP4 callee.example.com
s=Session SDP
c=IN IP4 callee.example.com
t=0 0
m=audio 5006 RTP/AVP 0
a=rtpmap:0 PCMU/8000
a=ptime:20
    </pre>
    <p><i>200 OK response from the callee</i></p>
    <pre>
ACK sip:callee@callee.example.com SIP/2.0
Via: SIP/2.0/UDP caller.example.com:5060;branch=z9hG4bK1234
From: &lt;sip:caller@example.com&gt;;tag=5678
To: &lt;sip:callee@example.com&gt;;tag=0987
Call-ID: 129837198273019823
CSeq: 1 ACK
    </pre>
    <p><i>ACK message from the caller</i></p>
    <p>This call flow establishes a basic SIP call. The INVITE starts the call, provisional responses (100, 183) provide feedback, 200 OK confirms call setup, and ACK completes the handshake. SDP bodies in INVITE and 200 OK describe media parameters for the session.</p>

    <h2>Basic Call Setup With a Proxy Server</h2>
    <p>In most SIP deployments, a proxy server is present between the caller and callee. The call flow involves additional message hops and headers:</p>
    <ol>
      <li>Caller sends an <b>INVITE</b> request to the proxy</li>
      <li>Proxy forwards the INVITE to the callee</li>
      <li>Callee sends a <b>100 Trying</b> response to the proxy</li>
      <li>Proxy forwards the 100 Trying to the caller</li>
      <li>Callee sends a <b>180 Ringing</b> or <b>183 Session Progress</b> (not shown)</li>
      <li>Callee sends a <b>200 OK</b> response to the proxy</li>
      <li>Proxy forwards the 200 OK to the caller</li>
      <li>Caller sends an <b>ACK</b> via the proxy</li>
    </ol>
    <pre>
INVITE sip:callee@example.com SIP/2.0
Via: SIP/2.0/UDP callerip:callerport;branch=z9hG4bK12345678
Max-Forwards: 69
From: "Caller Name" &lt;sip:caller@example.com&gt;;tag=abcdef12345
To: "Callee Name" &lt;sip:callee@example.com&gt;
Contact: &lt;sip:caller@callerip:callerport&gt;
Call-ID: 1234567890@callerip
CSeq: 1 INVITE
Content-Type: application/sdp
Content-Length: ...

[SDP Body]
    </pre>
    <p><i>SIP INVITE message from caller to proxy</i></p>
    <pre>
INVITE sip:callee@example.com SIP/2.0
Via: SIP/2.0/UDP callerip:callerport;branch=z9hG4bK12345678
Via: SIP/2.0/UDP proxyip:proxyport;branch=z9hG4bK78901234;rport
Record-Route: &lt;sip:proxy.example.com;lr&gt;
Max-Forwards: 69
From: "Caller Name" &lt;sip:caller@example.com&gt;;tag=abcdef12345
To: "Callee Name" &lt;sip:callee@example.com&gt;
Contact: &lt;sip:caller@callerip:callerport&gt;
Call-ID: 1234567890@callerip
CSeq: 1 INVITE
Content-Type: application/sdp
Content-Length: ...

[SDP Body]
    </pre>
    <p><i>SIP INVITE request forwarded from proxy to callee</i></p>
    <pre>
SIP/2.0 100 Trying
Via: SIP/2.0/UDP callerip:callerport;branch=z9hG4bK12345678;received=calleeip
Record-Route: &lt;sip:proxy.example.com;lr&gt;
From: "Caller Name" &lt;sip:caller@example.com&gt;;tag=abcdef12345
To: "Callee Name" &lt;sip:callee@example.com&gt;;tag=567890123
Call-ID: 1234567890@callerip
CSeq: 1 INVITE
Content-Length: 0
    </pre>
    <p><i>100 Trying response from callee to proxy</i></p>
    <pre>
SIP/2.0 100 Trying
Via: SIP/2.0/UDP callerip:callerport;branch=z9hG4bK12345678
Record-Route: &lt;sip:proxy.example.com;lr&gt;
From: "Caller Name" &lt;sip:caller@example.com&gt;;tag=abcdef12345
To: "Callee Name" &lt;sip:callee@example.com&gt;;tag=567890123
Call-ID: 1234567890@callerip
CSeq: 1 INVITE
Content-Length: 0
    </pre>
    <p><i>100 Trying provisional response from proxy to caller</i></p>
    <pre>
SIP/2.0 200 OK
Via: SIP/2.0/UDP callerip:callerport;branch=z9hG4bK12345678;received=calleeip
Record-Route: &lt;sip:proxy.example.com;lr&gt;
From: "Caller Name" &lt;sip:caller@example.com&gt;;tag=abcdef12345
To: "Callee Name" &lt;sip:callee@example.com&gt;;tag=567890123
Call-ID: 1234567890@callerip
CSeq: 1 INVITE
Content-Type: application/sdp
Content-Length: [length of SDP body]

v=0
o=Callee 53655765 2353687637 IN IP4 calleeip
s=Session SDP
c=IN IP4 calleeip
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
    </pre>
    <p><i>200 OK response from callee to proxy (then forwarded to caller)</i></p>
    <p><b>Notes:</b> The <b>Via</b> header tracks the path of the SIP message (each proxy adds its own), and the <b>Record-Route</b> header tells the route for future requests in the dialog. The SDP body describes the proposed media session.</p>
  </section>
</template>

<style scoped>
.sip {
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
ul { margin-bottom: 1rem; }
</style>
