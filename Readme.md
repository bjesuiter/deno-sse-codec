# SSE Codec

A module which provides encoding & decoding functionality for SSE Events (Server Sent Events), as well as providing some types.

Deployed to [https://deno.land/x/sse_codec](https://deno.land/x/sse_codec)

Cross-Copiled by deno's dnt module and posted to npm as [@codemonument/sse-codec](https://www.npmjs.com/package/@codemonument/sse-codec)

## Imports in Deno

```
// uses 'latest' version 
import { encodeSSEEvent } from "https://deno.land/x/sse_codec"

// uses a specific version
import { encodeSSEEvent } from "https://deno.land/x/sse_codec@0.2.1";
```

## Imports in Node 

```
// install first via npm i -S @codemonument/sse-codec
import { encodeSSEEvent } from "@codemonument/sse-codec" 
```

## Usage (same in Deno & Node)

See the test files for most elaborate usage descriptions. 
He'res the most important usage information. 

### Usage encodeSSEEvent 

```
const sseString = encodeSSEEvent({
        name: "custom-event",
        data: "Some simple string data",
        id: "UID5346324874238475",
        retry: 5000,
      });

```

### Usage SSEStream class

```
  const sseStream = new SSEStream();

  sseStream.emit({ eventName: "event1" });
  sseStream.emit({ eventName: "event2" });

  // Example usage of the sseStream 
  // normally you would not read it yourself 
  // but pass the readable stream to something which uses it for something
  const reader = sseStream.readableStream.getReader();
  const chunk1 = await reader.read();
  const chunk2 = await reader.read();

  console.log(chunk1);
  console.log(chunk2);
  
  // close the sseStream after using it
  sseStream.end();
```