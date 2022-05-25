# Deno SSE Codec

A deno module packaging encoding & decoding functionality for SSE Events, as well as providing some types.

## Usages in Deno

See the test files for most elaborate usage descriptions. Here's the TL;DR  
(adjust the import path to the complete URL from deno.land/x): 

### Usage encodeSSEEvent 

```
import { encodeSSEEvent } from "./encode-sse-event.ts";
const sseString = encodeSSEEvent({
        name: "custom-event",
        data: "Some simple string data",
        id: "UID5346324874238475",
        retry: 5000,
      });

```

### Usage SSEStream class

```
  import { SSEStream } from "./sse-stream.ts";

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