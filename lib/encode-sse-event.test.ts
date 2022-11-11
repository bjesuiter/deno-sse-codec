import {
  assertSnapshot,
  assertThrows,
  describe,
  it,
} from "@deps/std_testing.ts";
import { encodeSSEEvent } from "./encode-sse-event.ts";

describe(`encode-sse-event`, () => {
  it(`should throw on empty SSEEvent argument`, () => {
    assertThrows(() => encodeSSEEvent({}));
  });
  it(`should throw on a 'retry'-property-only SSEEvent argument`, () => {
    assertThrows(() => encodeSSEEvent({ retry: 5000 }));
  });

  it(`should encode single properties`, async (t) => {
    await assertSnapshot(t, encodeSSEEvent({ id: "UID5346324874238475" }));
    await assertSnapshot(t, encodeSSEEvent({ eventName: "custom-event" }));
    await assertSnapshot(
      t,
      encodeSSEEvent({ data: "Some simple string data" }),
    );
    await assertSnapshot(
      t,
      encodeSSEEvent({ eventName: "custom-event", retry: 5000 }),
    );
  });

  it(`should encode a complete SSEEvent`, async (t) => {
    await assertSnapshot(
      t,
      encodeSSEEvent({
        eventName: "custom-event",
        data: "Some simple string data",
        id: "UID5346324874238475",
        retry: 5000,
      }),
    );
  });
});
