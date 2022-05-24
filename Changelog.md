# Changelog 



## 0.2.1 - 2022-05-24 

- add missing sse-stream export in mod.ts


## 0.2.0 - 2022-05-24 

- rename SSEEvent.name to SSEEvent.eventName to be unabiguous in all situations 
- add class SSEStream which allows for opening a readableStream and emitting SSEEvents to it

## 0.1.0 - 2022-05-24 

- Initial Version 
- Contains encodeSSEEvent() function 