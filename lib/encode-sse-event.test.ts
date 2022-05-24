import { assertThrows, describe, it } from "../dependencies/_testing.std.ts";
import { encodeSSEEvent } from "./encode-sse-event.ts";

describe(`encode-sse-event`, () => {
  it(`should throw on empty SSEEvent argument`, () => {
    assertThrows(() => encodeSSEEvent({}));
  });
});
