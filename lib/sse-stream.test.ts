import { SSEStream } from "./sse-stream.ts";
import {
  assertExists,
  assertSnapshot,
  describe,
  it,
} from "@deps/std_testing.ts";

describe(`sse-stream`, () => {
  it(`can be constructed`, () => {
    const sseStream = new SSEStream();
    assertExists(sseStream);
  });

  it(`can be ended`, () => {
    const sseStream = new SSEStream();
    sseStream.end();
  });

  it(`can receive events from readableStream property`, async (t) => {
    const sseStream = new SSEStream();

    sseStream.emit({ eventName: "event1" });
    sseStream.emit({ eventName: "event2" });

    const reader = sseStream.getReader();
    const chunk1 = await reader.read();
    const chunk2 = await reader.read();

    console.log(chunk1);
    console.log(chunk2);

    sseStream.end();

    assertSnapshot(t, [chunk1, chunk2]);
  });
});
