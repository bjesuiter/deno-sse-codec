# Deno SSE Codec

A deno module packaging encoding & decoding functionality for SSE Events, as well as providing some types.

## Usage in Deno

See the test files for most elaborate usage descriptions. Here's the TL;DR  
(adjust the import path to the complete URL from deno.land/x): 

```
import { encodeSSEEvent } from "./encode-sse-event.ts";
const sseString = encodeSSEEvent({
        name: "custom-event",
        data: "Some simple string data",
        id: "UID5346324874238475",
        retry: 5000,
      });

```