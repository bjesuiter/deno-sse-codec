import { SSEEvent } from "./types/sse-event.ts";
import { IllegalArgumentError } from "./types/illegal-argument-error.ts";

/**
 * Encodes a SSEEvent into a string which could be sent over the wire like this.
 * @param event
 */
export function encodeSSEEvent(
  { eventName, data, id, retry }: SSEEvent,
): string {
  if (!data && !eventName && !id) {
    throw new IllegalArgumentError(`Input SSEEvent does not contain any data! 
    You need minimum one of SSEEvent.name, SSEEvent.data or SSEEvent.id`);
  }

  let sseString = "";

  if (eventName) {
    sseString += `event: ${eventName} \n`;
  }

  if (data) {
    sseString += `data: ${data} \n`;
  }

  if (id) {
    sseString += `id: ${id} \n`;
  }

  if (retry) {
    sseString += `retry: ${retry} \n`;
  }

  // add an empty line after the completed event
  sseString += `\n`;

  return sseString;
}
