import { SSEEvent } from "./types/sse-event.ts";
import { IllegalArgumentError } from "./types/illegal-argument-error.ts";
import { encodeSSEEvent } from "./encode-sse-event.ts";

/**
 * A class to encapsulate an SSEStream which can be used to read from it as readable stream or write to it.
 */
export class SSEStream extends ReadableStream<SSEEvent> {
  private controller?: ReadableStreamDefaultController;

  constructor() {
    super({
      start: (controller) => {
        this.controller = controller;
      },
      pull: () => {},
      cancel: () => {},
    });
  }

  /** Enqeues sseEvents on demand! */
  public emit(event: SSEEvent) {
    if (!this.controller) {
      throw new IllegalArgumentError(
        `No readable stream controller available yet. Please wait a bit longer, it should appear automatically`,
      );
    }

    const sseString = encodeSSEEvent(event);
    this.controller.enqueue(sseString);
  }

  public emitMany(events: SSEEvent[]) {
    if (!this.controller) {
      throw new IllegalArgumentError(
        `No readable stream controller available yet. Please wait a bit longer, it should appear automatically`,
      );
    }

    for (const event of events) {
      const sseString = encodeSSEEvent(event);
      this.controller.enqueue(sseString);
    }
  }

  /**
   * Closes the underlying controller of this SSEStream
   */
  public end() {
    this.controller?.close();
  }
}
