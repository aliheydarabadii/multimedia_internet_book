<template>
  <section>
    <h1>JSON (JavaScript Object Notation): A Lightweight Data Interchange Format</h1>
    <p><b>JSON</b> is a lightweight, text-based data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is language-independent and widely used for transmitting structured data between a server and a web application, especially in web development.</p>

    <h2>Key Features of JSON</h2>
    <ul>
      <li>Represents structured data as <b>objects</b> (key-value pairs) and <b>arrays</b> (ordered lists of values).</li>
      <li>Supports several data types: <b>strings</b>, <b>numbers</b>, <b>booleans</b>, <b>null</b>, <b>objects</b>, and <b>arrays</b>.</li>
      <li>Simple, flexible, and allows for hierarchical (nested) data representation.</li>
      <li>Commonly used for data exchange between client and server in web applications.</li>
    </ul>

    <h2>JSON Object Structure</h2>
    <p>A JSON object is a collection of key-value pairs enclosed in curly braces <code>{ }</code>. Keys are strings, and values can be any valid JSON data type. Objects can also be nested. Example:</p>
    <pre>
{
  "name": "John Smith",
  "age": 35,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "phoneNumbers": [
    { "type": "home", "number": "555-555-1234" },
    { "type": "work", "number": "555-555-5678" }
  ]
}
    </pre>
    <p>This example shows a JSON object with strings, numbers, a nested object (address), and an array (phoneNumbers).</p>

    <h2>JSON Array Structure</h2>
    <p>A JSON array is an ordered list of values enclosed in square brackets <code>[ ]</code>. Values can be any JSON data type, including objects and arrays. Example:</p>
    <pre>
[ "apple", "banana", "orange" ]
    </pre>
    <p>Arrays can also contain objects:</p>
    <pre>
[
  { "name": "John Smith", "age": 35, "email": "john@example.com" },
  { "name": "Jane Doe", "age": 28, "email": "jane@example.com" },
  { "name": "Bob Johnson", "age": 42, "email": "bob@example.com" }
]
    </pre>

    <h2>JSON Data Types</h2>
    <ul>
      <li><b>String:</b> <code>"Hello, world!"</code></li>
      <li><b>Number:</b> <code>42</code>, <code>3.14</code></li>
      <li><b>Boolean:</b> <code>true</code>, <code>false</code></li>
      <li><b>Null:</b> <code>null</code></li>
      <li><b>Object:</b> <code>{ "name": "John" }</code></li>
      <li><b>Array:</b> <code>[1, 2, 3]</code></li>
    </ul>

    <h2>JSON Serialization and Deserialization</h2>
    <p><b>Serialization</b> is converting a data structure or object into a JSON string. <b>Deserialization</b> is converting a JSON string back into a data structure or object. Most programming languages provide libraries for this. Example in Python:</p>
    <pre>
import json

data = {
  "name": "John Smith",
  "age": 35,
  "email": "john@example.com"
}

json_string = json.dumps(data)
print(json_string)
    </pre>
    <p>Deserialization example:</p>
    <pre>
import json

json_string = '{"name": "John Smith", "age": 35, "email": "john@example.com"}'
data = json.loads(json_string)
print(data)
    </pre>
    <p>These methods allow easy exchange of data between web applications and servers.</p>

    <h2>Summary</h2>
    <ul>
      <li>JSON is a simple, flexible, and widely used data format for exchanging structured data.</li>
      <li>It supports objects, arrays, and several primitive data types.</li>
      <li>Serialization and deserialization make it easy to use JSON in web applications.</li>
    </ul>

    <h2>Coding Special Characters in JSON Strings</h2>
    <p>Certain characters in JSON have special meanings and must be encoded to be represented in a string. For example, double quotes (<code>"</code>) and backslashes (<code>\</code>) must be escaped with a backslash. Some characters, like emojis or other Unicode symbols, require special encoding.</p>
    <ul>
      <li><b>Escaping special characters:</b> Use <code>\"</code> for quotes and <code>\\</code> for backslashes.</li>
      <li><b>Unicode escape sequences:</b> Represent any Unicode character using <code>\u</code> followed by four hexadecimal digits. Example (emoji):</li>
    </ul>
    <pre>{
  "message": "Hello, \ud83d\ude00!"
}
    </pre>
    <p>Here, <code>\ud83d\ude00</code> encodes the grinning face emoji (😀).</p>
    <ul>
      <li><b>Base64 encoding:</b> For binary data or special characters (like some emojis), you can use Base64 encoding to safely represent the data as ASCII text. Example:</li>
    </ul>
    <pre>{
  "message": "Hello, {\"base64\":\"8J+Yjg==\"}!"
}
    </pre>
    <p>Here, <code>8J+Yjg==</code> is the Base64-encoded string for the "smiling face with heart-eyes" emoji (😍). The encoded string can be decoded to recover the original character.</p>
  </section>
</template>

<script>
export default {
  name: 'JSON'
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
  font-size: 2rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
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
h1, h2 {
  color: #1a2533;
}
p, ul {
  color: #222;
  line-height: 1.7;
  margin-bottom: 1rem;
}
pre {
  background: #f6f8fa;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  overflow-x: auto;
  color: black;
}
code {
  background: #f2f2f2;
  padding: 0.1em 0.3em;
  border-radius: 4px;
  font-size: 0.95em;
}
</style>
