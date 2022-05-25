# Changelog 



## 0.2.2 - 2022-05-25

- Refine descriptions across Github, Readme, deno.land/x and npmjs.com
- Update repository links in build_npm.ts package-json output

## 0.2.1 - 2022-05-24 

- Add missing sse-stream export in mod.ts


## 0.2.0 - 2022-05-24 

- Rename SSEEvent.name to SSEEvent.eventName to be unabiguous in all situations 
- Add class SSEStream which allows for opening a readableStream and emitting SSEEvents to it

## 0.1.0 - 2022-05-24 

- Initial Version 
- Contains encodeSSEEvent() function 