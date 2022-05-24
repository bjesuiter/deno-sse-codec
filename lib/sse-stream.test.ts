import { SSEStream } from "./sse-stream.ts";
import {
  assertExists,
  assertSnapshot,
  describe,
  it,
} from "../dependencies/_testing.std.ts";

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
    const reader = sseStream.readableStream.getReader();

    sseStream.emit({ name: "event1" });
    sseStream.emit({ name: "event2" });

    const chunk1 = await reader.read();
    const chunk2 = await reader.read();

    console.log(chunk1);
    console.log(chunk2);

    assertSnapshot(t, [chunk1, chunk2]);
    sseStream.end();
  });
});
